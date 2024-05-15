async function getFileFromUrl(
  url: string,
  name: string,
  defaultType = 'image/jpeg'
): Promise<File> {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'no-cors': 'true',
      },
    });
    const data = await response.blob();
    return new File([data], name, { type: defaultType });
  } catch (error) {
    throw new Error('Failed to fetch file from url');
  }
}

export default getFileFromUrl;
