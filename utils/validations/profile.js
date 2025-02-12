import moment from "moment";
import {
  cockSizeListCM,
  cockSizeListInches,
  ProfileAgeList,
  profileHeightListCM,
  profileHeightListFoot,
  weightListKG,
  weightListLBS,
} from "../constants";

export const isClientProfileValid = (data, type) => {
  const errors = { location: {} };
  if (data.heading) {
    if (data.heading.length > 50) {
      errors.heading = "Only 50 characters are allowed";
    } else if (/\d/.test(data.heading)) {
      errors.heading = "Digits are not allowed";
    }
  } else {
    errors.heading = "Header is required";
  }

  const maxBioLength = type === "Regular_Client" ? 300 : 500;
  if (data?.bio && data.bio.length > maxBioLength) {
    errors.bio = `Bio must be ${maxBioLength} characters max`;
  }

  if (!data.location?.city) {
    errors.location.city = "Location is required";
  }
  // let acceptedFiles = plan == "Regular_Client" ? 1 : 5;
  if (Object.keys(errors.location).length === 0) delete errors.location;

  return errors;
};

export const isDocumentValid = (data) => {
  const errors = {};
  if (!data?.govId) {
    errors.govId = "Gonverment ID is required!";
  } else if (data?.govId?.name === data?.selfie?.name) {
    errors.govId = "Both files cannot be the same!";
  }
  if (!data?.selfie) {
    errors.selfie =
      "Verification picture is required. Please follow instructions above.";
  } else if (data?.selfie?.name === data?.govId?.name) {
    errors.selfie = "Both files cannot be the same!";
  }
  return errors;
};

// Validation Function
export const isModelProfileValid = (data, type) => {
  let errors = { stats: {}, location: {} };

  // Header validation
  if (!data.heading) {
    errors.heading = "Header is required";
  } else if (data.heading.length > 50 || /\d/.test(data.heading)) {
    errors.heading = "Header must be 50 characters max with no digits";
  }

  // Bio validation
  const maxBioLength = type === "Gent" ? 300 : 500;
  if (!data.bio) {
    errors.bio = "Personal Bio is required";
  } else if (data.bio.length > maxBioLength) {
    errors.bio = `Bio must be ${maxBioLength} characters max`;
  }

  // Stats validation
  const { stats } = data;
  const requiredFields = [
    "foreskin",
    "sexualRole",
    "bodyType",
    "orientation",
    "eyeColor",
    "bodyHair",
    "smoking",
    "drinking",
    "tattoos",
    "condomsOnly",
    "hivStatus",
    "hairColor",
  ];

  requiredFields.forEach((field) => {
    if (!stats[field]) {
      errors.stats[field] = `${field.replace(/([A-Z])/g, " $1")} is required`;
    }
  });

  // Array fields
  const arrayFields = [
    "tribe",
    "piercings",
    "hobbies",
    "spokenLanguages",
    "amInto",
  ];
  arrayFields.forEach((field) => {
    if (!stats[field] || stats[field].length === 0) {
      errors.stats[field] = `At least one ${field} must be selected`;
    }
  });

  // Location validation
  if (!data.location?.city) {
    errors.location.city = "Location is required";
  }

  // Age validation
  if (!stats.age || stats.age < 18 || stats.age > 100) {
    errors.stats.age = "Age must be between 18 and 100";
  }

  // Height validation
  if (!stats.height) {
    errors.stats.height = "Height is required";
  } else if (
    stats.heightType === "in" &&
    (stats.height < 122 || stats.height > 244)
  ) {
    errors.stats.height = "Height must be between 122' and 244' in inches";
  } else if (
    stats.heightType === "ft" &&
    (stats.height < 4 || stats.height > 7)
  ) {
    errors.stats.height = "Height must be between 4' and 7' in feet";
  }

  // Weight validation
  if (!stats.weight) {
    errors.stats.weight = "Weight is required";
  } else if (
    stats.weightType === "lb" &&
    (stats.weight < 100 || stats.weight > 400)
  ) {
    errors.stats.weight = "Weight must be between 100-400 in lb";
  }

  // Cock size validation
  if (!stats.cockSize) {
    errors.stats.cockSize = "Cock size is required";
  } else if (
    stats.cockSizeType === "cm" &&
    (stats.cockSize < 7 || stats.cockSize > 38)
  ) {
    errors.stats.cockSize = 'Cock size must be between 7" and 38" in cm';
  }

  // Social link validation
  if (data.socialLink && Object.keys(data.socialLink).length > 0) {
    const platformPatterns = {
      instagram: /^https?:\/\/(www\.)?instagram\.com\//,
      youtube: /^https?:\/\/(www\.)?youtube\.com\//,
      facebook: /^https?:\/\/(www\.)?facebook\.com\//,
      twitter: /^https?:\/\/(www\.)?twitter\.com\//,
      tiktok: /^https?:\/\/(www\.)?tiktok\.com\//,
      bluesky: /^https?:\/\/(www\.)?bsky\.app\//,
    };

    Object.entries(data.socialLink).forEach(([platform, url]) => {
      if (
        platformPatterns[platform] &&
        !platformPatterns[platform].test(url) &&
        url
      ) {
        if (!errors.socialLink) errors.socialLink = {};
        errors.socialLink[platform] = `Invalid ${platform} URL`;
      }
    });
  }

  // Clear empty error objects
  if (Object.keys(errors.stats).length === 0) delete errors.stats;
  if (Object.keys(errors.location).length === 0) delete errors.location;

  return errors;
};

const handleConvert = (inputValue) => {};

export const isModelProfileOnchangeValid = (name, value, type) => {
  if (type === "ft" && name === "stats.height") {
    const isValid = profileHeightListFoot?.some((it) =>
      it?.value?.includes(value)
    );

    if (!isValid) {
      return "Please enter height in valid numbers.";
    }
  }
  if (type === "in" && name === "stats.height") {
    const isValid = profileHeightListCM?.some((it) =>
      it?.value?.includes(value)
    );

    if (!isValid) {
      return "Please enter height in valid numbers.";
    }
  }
  if (type === "lb" && name === "stats.weight") {
    const isValid = weightListLBS?.some((it) => it?.value?.includes(value));

    if (!isValid) {
      return "Please enter weight in valid numbers.";
    }
  }
  if (type === "kg" && name === "stats.weight") {
    const isValid = weightListKG?.some((it) => it?.value?.includes(value));

    if (!isValid) {
      return "Please enter weight in valid numbers.";
    }
  }
  if (type === "in" && name === "stats.cockSize") {
    const isValid = cockSizeListInches?.some((it) =>
      it?.value?.includes(value)
    );

    if (!isValid) {
      return "Please enter cock size in valid numbers.";
    }
  }
  if (type === "cm" && name === "stats.cockSize") {
    const isValid = cockSizeListCM?.some((it) => it?.value?.includes(value));

    if (!isValid) {
      return "Please enter cock size in valid numbers.";
    }
  }
  if (name === "stats.age") {
    const isValid = ProfileAgeList?.some((it) => it?.value?.includes(value));

    if (!isValid) {
      return "Please enter age in valid numbers.";
    }
  }
  return "";
};

export const isModelProfileOnSelectValid = (name, value, type) => {
  if (name == "age" && (value < 18 || value > 100)) {
    return "Age must be between 18 and 100";
  } else if (name == "height" && type == "in" && (value < 122 || value > 244)) {
    return "Height must be between 122' and 244' in inches";
  } else if (type == "ft" && name == "height" && (value < 4 || value > 7)) {
    return "Height must be between 4' and 7' in foot";
  } else if (type == "lb" && name == "weight" && (value < 100 || value > 400)) {
    return "Weight must be between 100-400 in lb";
  } else if (type == "kg" && name == "weight" && (value < 45 || value > 185)) {
    return "Weight must be between 45-185 in kg ";
  } else if (type == "cm" && name == "cockSize" && (value < 7 || value > 38)) {
    return 'Cock size must be between 7" and 38" in cm';
  } else if (type == "in" && name == "cockSize" && (value < 3 || value > 15)) {
    return 'Cock size must be between 3" and 15" in inches ';
  }

  return "";
};

export const isModelProfileChangeValid = (name, value, type) => {
  const maxBioLength = type === "Gent" ? 300 : 500;

  if (name == "heading" && value == "") {
    return "Header is required";
  } else if ((name == "heading" && value?.length > 50) || /\d/.test(value)) {
    return "Header must be 50 characters max with no digits";
  } else if (name == "bio" && value?.length > maxBioLength) {
    return `Bio must be ${maxBioLength} characters max`;
  }
  return "";
};

export const fileValidation = (files) => {
  if (!files || files.length === 0) {
    return "At least one photo or video is required!";
  }

  const allowedImageTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
  ];
  const allowedVideoTypes = [
    "video/mp4",
    "video/mpeg",
    "video/quicktime",
    "video/x-msvideo",
  ];

  const allowedTypes = ["image", "video"];

  for (let i = 0; i < files?.length; i++) {
    const file = files[i];
    const fileType = file?.type?.split("/")[0];
    console.log(fileType);
    if (!allowedTypes.includes(fileType)) {
      return `File "${file.name}" is not a valid photo or video format. `;
      // Allowed formats are JPEG, PNG, GIF, WebP for images and MP4, MPEG, QuickTime, AVI for videos.
    }

    // const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    // if (file.size > maxSize) {
    //   return {
    //     isValid: false,
    //     error: `File "${file.name}" exceeds the maximum size of 10MB.`
    //   };
    // }
  }

  return "";
};

export const validateSocialLinks = (socialObj) => {
  const urlPattern =
    /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]{2,}\.[a-z]{2,}(\.[a-z]{2,})?\/?.*$/;

  const platformPatterns = {
    instagram: /^https?:\/\/(www\.)?instagram\.com\//,
    youtube: /^https?:\/\/(www\.)?youtube\.com\//,
    facebook: /^https?:\/\/(www\.)?facebook\.com\//,
    twitter: /^https?:\/\/(www\.)?twitter\.com\//,
    tiktok: /^https?:\/\/(www\.)?tiktok\.com\//,
    bluesky: /^https?:\/\/(www\.)?bsky\.app\//,
  };

  const result = {};
  for (const [key, value] of Object.entries(socialObj)) {
    if (value === "") continue;

    if (platformPatterns[key] && !platformPatterns[key].test(value)) {
      result[key] = `Invalid ${key} URL`;
    }
  }

  return result;
};

export const validateChangeSocialLinks = (name, value) => {
  if (!value) {
    return "";
  }
  const platformPatterns = {
    instagram: /^https?:\/\/(www\.)?instagram\.com\//,
    youtube: /^https?:\/\/(www\.)?youtube\.com\//,
    facebook: /^https?:\/\/(www\.)?facebook\.com\//,
    twitter: /^https?:\/\/(www\.)?twitter\.com\//,
    tiktok: /^https?:\/\/(www\.)?tiktok\.com\//,
    bluesky: /^https?:\/\/(www\.)?bsky\.app\//,
  };

  if (platformPatterns[name] && !platformPatterns[name]?.test(value)) {
    return `Invalid ${name} URL`;
  }
};

export const verificationResonValidate = (values) => {
  const errors = {};
  if (!values.reason) {
    errors.reason = "Reason is required";
  } else if (values?.reason?.trim() == "") {
    errors.reason = "Reason is required";
  }
  return errors;
};

export const reviewValidate = (values) => {
  const errors = {};
  if (!values.rating) {
    errors.rating = "Reason is required";
  }
  if (values.rating < 5 && !values.comments) {
    errors.comments = "Reason is required if rating is less then 5";
  }
  if (values?.comments && values?.comments?.length >= 1000) {
    errors.comments = "You can use a maximum of 1000 characters only.";
  }
  return errors;
};

export const travelValidate = (values) => {
  const errors = {};

  if (!values?.location?.city) {
    errors.location = "Location is required";
  }

  if (!values.startDate) {
    errors.startDate = "Start date is required";
  }

  if (!values.endDate) {
    errors.endDate = "End date is required";
  } else if (
    values.startDate &&
    moment(values.endDate).isBefore(values.startDate)
  ) {
    errors.endDate = "End date must be after start date";
  }

  return errors;
};

// Validation function for discount input
export const discountValidate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  } else if (values.length < 3) {
    errors.name = "Name must be grater than 3";
  }

  if (!values.companyName) {
    errors.companyName = "Company name is required";
  } else if (values.companyName < 10) {
    errors.companyName = "Company name must be grater than 10";
  }

  if (!values.description) {
    errors.description = "Description is required";
  } else if (values.description < 10) {
    errors.description = "Description must be grater than 10";
  }

  if (!values.discount) {
    errors.discount = "Discount is required";
  } else if (values.discount > 100) {
    errors.discount = "Discount must be less than or equal to 100";
  }

  if (!values.price) {
    errors.price = "Price is required";
  }

  if (!values.quantity) {
    errors.quantity = "Quantity is required";
  }

  if (!values.stockQuantity) {
    errors.stockQuantity = "Stock Quantity is required";
  }

  // if (!values.image) {
  //   errors.image = "Product image is required";
  // }
  if (!values.type) {
    errors.type = "Product type is required";
  }

  return errors;
};

export const feedbackReplayValidate = (values) => {
  const errors = {};
  if (!values.adminResponce?.trim()) {
    errors.adminResponce = "Replay is required";
  }
  // if (values?.comments && values?.comments?.length >= 1000) {
  //   errors.comments = "You can use a maximum of 1000 characters only.";
  // }
  return errors;
};
