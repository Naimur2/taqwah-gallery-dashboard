import { notifications } from '@mantine/notifications';

async function getFileFromUrl(
  url: string,
  name: string,
  defaultType = 'image/jpeg'
): Promise<File | undefined> {
  try {
    const response = await fetch(url, {
      method: 'GET',
    });
    const data = await response.blob();
    return new File([data], name, { type: defaultType });
  } catch (error) {
    notifications.show({
      title: 'Error',
      message: 'Failed to fetch file from url',
      color: 'red',
    });
    return undefined;
  }
}

export default getFileFromUrl;
