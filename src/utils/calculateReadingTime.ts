const calculateReadingTime = (text: string): string => {
  // convert html to text
  const plainText = text.replace(/<[^>]+>/g, '');

  // calculate words per minute
  const wordsPerMinute = 200;

  // calculate reading time
  const textLength = plainText.split(' ').length;
  const readingTime = textLength / wordsPerMinute;

  return `${Math.ceil(readingTime)} min read`;
};

export default calculateReadingTime;
