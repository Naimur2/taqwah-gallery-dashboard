import { IUploadBase64 } from '@/hooks/types';

const uploadBase64 = async (file: File | string): Promise<IUploadBase64> => {
  try {
    const data = new FormData();
    data.append('image', file);

    const res = await fetch(import.meta.env.VITE_APP_IMGBB_API_URL!, {
      method: 'POST',
      body: data,
    });
    const json = await res.json();

    return json;
  } catch (err: any) {
    throw new Error(err);
  }
};

export default uploadBase64;
