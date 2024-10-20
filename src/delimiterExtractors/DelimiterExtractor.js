import { CUSTOM_DELIMITER_PATTERN, DEFAULT_DELIMITERS } from '../constants.js';
import IDelimiterExtractor from '../interfaces/IDelimiterExtractor.js';

class DelimiterExtractor extends IDelimiterExtractor {
  #customDelimiter;

  constructor() {
    super();
    this.#customDelimiter = null;
  }

  extractDelimiter(inputValue) {
    const customDelimiterMatch = inputValue.match(CUSTOM_DELIMITER_PATTERN);

    if (customDelimiterMatch) {
      this.#customDelimiter = customDelimiterMatch[1];
      return inputValue.slice(customDelimiterMatch[0].length);
    } else {
      return inputValue;
    }
  }

  getDelimiters() {
    if (this.#customDelimiter) {
      return [...DEFAULT_DELIMITERS, this.#customDelimiter];
    }
    return DEFAULT_DELIMITERS;
  }
}

export default DelimiterExtractor;
