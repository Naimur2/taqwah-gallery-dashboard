import { useState } from 'react';
import uploadBase64 from '@/utils/uploadBase64';
import { IUploadBase64 } from './types';

export default function useUploadBase64() {
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState('');

  const uploadBase64Handler = async (file: File | string): Promise<IUploadBase64> => {
    try {
      setIsloading(true);
      const json = await uploadBase64(file);
      setIsloading(false);
      return json;
    } catch (err: any) {
      setIsloading(false);
      setError(err?.message ?? 'Something went wrong');
      throw new Error(err);
    }
  };

  return {
    isloading,
    error,
    uploadBase64: uploadBase64Handler,
  };
}
