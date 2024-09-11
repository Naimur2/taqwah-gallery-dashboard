/* eslint-disable import/order */
import Loader from '@/components/Loader';
import { PostV1CategoriesAddErrorResponse, PostV1ProjectsAddErrorResponse } from '@/store/api';
import { useUploadFileMutation } from '@/store/apis/file';
import {
  useAddReviewMutation,
  useLazyGetSingleReviewQuery,
  useUpdateReviewMutation,
} from '@/store/apis/reviews';
import getFileFromUrl from '@/utils/getFileFromUrl';
import { Button, FileInput, Text, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { z } from 'zod';

import ReactFlagsSelect from 'react-flags-select';

const validators = z.object({
  clientName: z.string(),
  videoUrl: z.string().optional(),
  clientPhoto: z.instanceof(File).optional(),
  clientCountry: z.string().optional(),
  clientReview: z.string().optional(),
  figmaUrl: z.string().optional(),
});

type TFormValues = z.infer<typeof validators>;

export default function ReviewManagementPage() {
  const [searchParams] = useSearchParams();

  const typeOfReview = searchParams.get('type') ?? 'text';

  const [addReviewReq, { isLoading: addReviewLoading }] = useAddReviewMutation();
  const [updateReview, { isLoading: reviewUpdateLoading }] = useUpdateReviewMutation();

  const [uploadFiles, uploadFilesRes] = useUploadFileMutation();

  const [getReviewById, { isLoading: getReviewByIdLoading }] = useLazyGetSingleReviewQuery();

  const navigate = useNavigate();

  const editable = searchParams.get('editable') === 'true';
  const id = searchParams.get('id') ?? '';

  const formHandler = useForm<TFormValues>({
    initialValues: {
      clientName: '',
      videoUrl: '',
      clientPhoto: undefined,
      clientCountry: 'US',
      clientReview: '',
      figmaUrl: '',
    },
    validate: zodResolver(validators),
    validateInputOnBlur: true,
    validateInputOnChange: true,
  });

  const handleAddItem = async (values: TFormValues) => {
    try {
      const formData = new FormData();
      formData.append('files', values.clientPhoto as File);
      const img = await uploadFiles(formData).unwrap();

      await addReviewReq({
        clientName: values.clientName,
        videoUrl: values.videoUrl,
        clientPhoto: img?.data?.data?.[0]?.url,
        clientCountry: values.clientCountry,
        clientReview: values.clientReview,
        figmaUrl: values.figmaUrl,
        type: typeOfReview === 'text' ? 'text' : 'video',
      }).unwrap();
      notifications.show({
        title: 'Success',
        message: 'Project added successfully',
        color: 'green',
      });
      navigate(typeOfReview === 'text' ? '/text-reviews' : '/video-reviews');
    } catch (err) {
      const error = err as {
        data: PostV1CategoriesAddErrorResponse;
      };
      notifications.show({
        title: 'Error',
        message: error?.data?.error?.message || 'Something went wrong',
        color: 'red',
      });
    }
  };

  const handleUpdateItem = async (values: TFormValues) => {
    try {
      const formData = new FormData();
      formData.append('files', values.clientPhoto as File);
      const img = await uploadFiles(formData).unwrap();

      await updateReview({
        clientName: values.clientName,
        videoUrl: values.videoUrl,
        clientPhoto: img?.data?.data?.[0]?.url,
        clientCountry: values.clientCountry,
        clientReview: values.clientReview,
        figmaUrl: values.figmaUrl,
        id,
      }).unwrap();
      notifications.show({
        title: 'Success',
        message: 'Project updated successfully',
        color: 'green',
      });
      navigate(typeOfReview === 'text' ? '/text-reviews' : '/video-reviews');
    } catch (err) {
      const error = err as {
        data?: PostV1ProjectsAddErrorResponse;
      };
      notifications.show({
        title: 'Error',
        message: error?.data?.error?.message || 'Something went wrong',
        color: 'red',
      });
    }
  };

  const isLoading =
    addReviewLoading || reviewUpdateLoading || getReviewByIdLoading || uploadFilesRes.isLoading;

  useEffect(() => {
    async function setInitialValues() {
      try {
        const res = await getReviewById(id).unwrap();
        const fileName = res?.data?.data?.clientPhoto?.split('/').pop();
        const image = res.data.data.clientPhoto
          ? await getFileFromUrl(res.data.data.clientPhoto, fileName ?? 'image')
          : undefined;
        formHandler.setValues({
          clientName: res.data.data.clientName,
          videoUrl: res.data.data.videoUrl,
          clientPhoto: image,
          clientCountry: res.data.data.clientCountry,
          clientReview: res.data.data.clientReview,
          figmaUrl: res.data.data.figmaUrl,
        });
      } catch (error) {
        notifications.show({
          title: 'Error',
          message: 'Project not found with given id',
          color: 'red',
        });
        navigate(typeOfReview === 'text' ? '/text-reviews' : '/video-reviews');
      }
    }

    if (editable) {
      setInitialValues();
    }
  }, [id, editable]);

  const handleSubmit = async (values: TFormValues) => {
    if (editable) {
      handleUpdateItem(values);
    } else {
      handleAddItem(values);
    }
  };

  const title = 'Project';

  return (
    <div className="">
      <form
        className="p-4 container mx-auto grid gap-5"
        onSubmit={formHandler.onSubmit(
          async (values) => {
            handleSubmit(values);
          },
          () => {
            notifications.show({
              title: 'Error',
              message: 'Please fill all the required fields',
              color: 'red',
            });
          }
        )}
      >
        <h1 className="text-base font-bold md:text-lg lg:text-xl xl:text-2xl">
          {editable ? `Edit ${title}` : `Add New ${title}`}
        </h1>

        <FileInput
          label="Client Photo"
          required
          onChange={(file) => {
            formHandler.setFieldValue('clientPhoto', file as File);
          }}
          accept="image/*"
          error={formHandler.errors.clientPhoto}
          description="Upload a client photo"
          value={formHandler.values.clientPhoto}
        />

        <TextInput
          label="Client Name"
          required
          placeholder="John Doe"
          value={formHandler.values.clientName}
          onChange={(event) => formHandler.setFieldValue('clientName', event.currentTarget.value)}
          error={formHandler.errors.clientName}
        />

        <div className="grid gap-2">
          <Text className="text-sm font-semibold">Client Country</Text>
          <ReactFlagsSelect
            searchable
            selected={formHandler.values.clientCountry ?? 'US'}
            onSelect={(countryCode) => {
              formHandler.setFieldValue('clientCountry', countryCode);
            }}
          />
        </div>

        {/* <TextInput
          label="Client Country"
          placeholder="United States"
          value={formHandler.values.clientCountry}
          onChange={(event) =>
            formHandler.setFieldValue('clientCountry', event.currentTarget.value)
          }
          error={formHandler.errors.clientCountry}
        /> */}

        {
          // eslint-disable-next-line no-nested-ternary
          typeOfReview === 'text' ? (
            <TextInput
              label="Client Review"
              placeholder="Client Review"
              value={formHandler.values.clientReview}
              onChange={(event) =>
                formHandler.setFieldValue('clientReview', event.currentTarget.value)
              }
              error={formHandler.errors.clientReview}
            />
          ) : null
        }

        {
          // eslint-disable-next-line no-nested-ternary
          typeOfReview === 'text' ? (
            <TextInput
              label="Figma Url"
              placeholder="https://www.figma.com/"
              value={formHandler.values.figmaUrl}
              onChange={(event) => formHandler.setFieldValue('figmaUrl', event.currentTarget.value)}
              error={formHandler.errors.figmaUrl}
            />
          ) : null
        }

        {
          // eslint-disable-next-line no-nested-ternary
          typeOfReview === 'video' ? (
            <TextInput
              label="Video Url"
              placeholder="https://www.youtube.com/"
              value={formHandler.values.videoUrl}
              onChange={(event) => formHandler.setFieldValue('videoUrl', event.currentTarget.value)}
              error={formHandler.errors.videoUrl}
            />
          ) : null
        }

        <Button
          className="bg-gray-800 text-white"
          type="submit"
          loading={isLoading}
          disabled={isLoading}
        >
          {editable ? 'Update Project' : 'Create Project'}
        </Button>
      </form>
      <Loader isLoading={isLoading} />
    </div>
  );
}
