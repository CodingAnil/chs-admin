export const proWordsValidate = (values) => {
  const errors = {};

  if (!values?.word || values?.word?.trim()?.length === 0) {
    errors.word = "Prohibited words are required";
  } else {
    const wordsArray = values?.word?.split(",")?.map((word) => word?.trim());
    const wordSet = new Set();
    let repeatedWord = null;

    for (const word of wordsArray) {
      if (wordSet.has(word)) {
        repeatedWord = word;
        break;
      }
      wordSet.add(word);
    }

    if (repeatedWord) {
      errors.word = `${repeatedWord} is repeated. Please do not use duplicate words.`;
    }
  }

  return errors;
};
