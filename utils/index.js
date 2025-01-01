export const getCounts = (data, value) => {
  const convertToSnakeCase = (str) => {
    return str
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/[^a-z0-9_]/g, "");
  };

  const allData = {
    ...data?.client,
    ...data?.model,
    ...data?.reports,
    ...data?.revenue,
    ...data?.verification,
  };

  const convertedValue = convertToSnakeCase(value);
  return allData[convertedValue] || 0;
};

export function renderHighlightedText(text, prohibitedWords) {
  const regex = new RegExp(`\\b(${prohibitedWords?.join("|")})\\b`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    prohibitedWords?.includes(part?.toLowerCase()) ? (
      <span key={index} style={{ color: "#ff4848", fontWeight: "bold" }}>
        {part}
      </span>
    ) : (
      part
    )
  );
}

export function renderHighlightedEachText(text, prohibitedWords) {
  // Flatten the prohibitedWords into individual words
  if (!text) return "";
  const wordsToHighlight = prohibitedWords
    ?.flatMap((phrase) => phrase?.split(" "))
    .map((word) => word?.toLowerCase());

  const regex = new RegExp(`\\b(${wordsToHighlight?.join("|")})\\b`, "gi");
  const parts = text?.split(regex);

  return parts?.map((part, index) =>
    wordsToHighlight?.includes(part?.toLowerCase()) ? (
      <span key={index} style={{ color: "#ff4848", fontWeight: "bold" }}>
        {part}
      </span>
    ) : (
      part
    )
  );
}

export const truncateReview = (review, maxLength = 20) => {
  if (!review) return "";
  const trimmedReview = review.trim();
  if (trimmedReview.length > maxLength) {
    return `${trimmedReview.slice(0, maxLength)}...`;
  }
  return trimmedReview;
};
