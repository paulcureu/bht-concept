export const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // Înlocuiește spațiile cu -
    .replace(/[^\w\-]+/g, '')       // Elimină toate caracterele non-word
    .replace(/\-\-+/g, '-');        // Înlocuiește multiple - cu unul singur
};
