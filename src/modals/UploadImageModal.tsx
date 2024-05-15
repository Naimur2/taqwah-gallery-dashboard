import { TError } from '@/common/types';
import DropzoneUploader from '@/components/DropZoneUploader';
import { PostV1FileUploadErrorResponse } from '@/store/api';
import { useUploadFileMutation } from '@/store/apis/file';
import { Button, Modal, Text } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';

type TModalProps = {
  open: boolean;
  onClose: () => void;
  setImage: (file: string) => void;
};

export default function UploadImageModal({ open, onClose, setImage }: TModalProps) {
  const [file, setFile] = useState<File | null>(null);

  const [uploadFiles, uploadFilesRes] = useUploadFileMutation();

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('files', file as File);
      const image = await uploadFiles(formData).unwrap();
      const imageUrl = image.data.data?.[0]?.url;
      if (imageUrl) {
        setImage?.(imageUrl);
        setFile(null);
        onClose();
      }
    } catch (error: any) {
      console.log('error', error)
      const err = error as TError;
      notifications.show({
        title: 'Error',
        message: err?.data?.error?.message || 'Something went wrong',
        color: 'red',
      });
    }
  };

  return (
    <Modal
      title="Upload Image"
      size="xl"
      centered
      onClose={onClose}
      opened={open}
      classNames={{ header: 'bg-gray-100', title: 'font-bold text-lg', body: 'px-4 py-6' }}
    >
      <DropzoneUploader
        onDrop={(files) => {
          setFile(files[0]);
        }}
        maxFiles={1}
        multiple={false}
        disabled={uploadFilesRes.isLoading}
      />
      {file && (
        <div className="grid gap-4 mt-4">
          <Text size="xl" className="font-semibold">
            Preview
          </Text>
          <img
            src={URL.createObjectURL(file)}
            alt="preview"
            className="w-full object-cover h-64 aspect-video object-center"
          />
          <Button
            className="bg-gray-800 text-white"
            onClick={handleUpload}
            loading={uploadFilesRes.isLoading}
          >
            Upload
          </Button>
        </div>
      )}
    </Modal>
  );
}
