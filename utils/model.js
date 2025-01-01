export const getCityCountry = (city, country) => {
  let val = "";
  if (city && country) {
    val = `${city}, ${country}`;
  } else if (city) {
    val = city;
  } else if (country) {
    val = country;
  }
  return val;
};

export const arrayToString = (arr) => {
  if (!Array.isArray(arr)) {
    return "";
  }
  return arr.join(", ");
};

export const getPersonalValue = (data, key) => {
  const convertToSnakeCase = (str) => {
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
  };
  if (key == "I'm Into") {
    key = "Am Into";
  }

  const updatedkey = convertToSnakeCase(key);
  let value = data?.[updatedkey] || "";
  if (key == "Cock Size") {
    value = data?.[updatedkey]
      ? `${data?.[updatedkey]} ${capitalizeFirstLetter(
          data?.[updatedkey + "Type"]
        )}`
      : "";
  }
  if (Array.isArray(value)) {
    value = arrayToString(data[updatedkey]);
  }
  return value;
};

export const getMediaLink = (key, userLinks) => {
  let link = userLinks?.[key?.toLowerCase()];
  return link || "";
};

export const getVerifyStatus = (
  docStatus,
  cockStatus,
  imgStatus,
  vidStatus,
  rewStatus
) => {
  // Map for statuses and their respective names
  const statusMap = [
    { name: "Profile Picture", status: !imgStatus },
    { name: "Profile Video", status: !vidStatus },
    { name: "Client Review", status: !rewStatus },
    { name: "Cock Size", status: cockStatus?.toLowerCase() !== "approved" },
    { name: "Government ID", status: docStatus?.toLowerCase() !== "approved" },
  ];

  const pendingItems = statusMap
    .filter((item) => item.status)
    .map((item) => item.name);

  if (pendingItems.length === 0) {
    return <span style={{ color: "green" }}>Verified</span>;
  }

  return (
    <>
      <span style={{ color: "red" }}>Pending </span>(
      <span style={{ color: "orange" }}>{pendingItems.join(", ")}</span>)
    </>
  );
};

export const getVerifyFor = (docStatus, cockStatus, profileStatus) => {
  const statusMap = {
    docStatus: { name: "Government ID", status: docStatus },
    cockStatus: { name: "Cock Size", status: cockStatus },
    profileStatus: { name: "Profile Activation", status: profileStatus },
  };

  const pendingItems = Object.values(statusMap)
    .filter((item) => item.status?.toLowerCase() !== "approved")
    .map((item) => item.name);

  if (pendingItems.length === 0) {
    return "Verified";
  }

  if (pendingItems.length === Object.keys(statusMap).length) {
    return `${Object.values(statusMap)
      .map((item) => item.name)
      .join(", ")}`;
  }

  return `${pendingItems.join(", ")}`;
};

export const getPendingVerifyFor = (imgStatus, vidStatus, rewStatus) => {
  const statusMap = [
    { name: "Profile Picture", status: imgStatus },
    { name: "Profile Video", status: vidStatus },
    { name: "Client Review", status: rewStatus },
  ];

  const pendingItems = statusMap
    .filter((item) => item.status)
    .map((item) => item.name);

  return `,${pendingItems.join(", ")}`;
};

export const capitalizeFirstLetter = (str) => {
  if (typeof str !== "string" || str.length === 0) {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getCity = (location) => {
  const firstCommaIndex = location.indexOf(",");

  if (firstCommaIndex !== -1) {
    const city = location.slice(0, firstCommaIndex).trim();
    const country = location.slice(firstCommaIndex + 1).trim();

    return { city, country };
  }
};
