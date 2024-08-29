/* eslint-disable import/order */
import DropzoneUploader from '@/components/DropZoneUploader';
import Loader from '@/components/Loader';
import { PostV1CategoriesAddErrorResponse, PostV1ProjectsAddErrorResponse } from '@/store/api';
import { useGetCategoriesQuery } from '@/store/apis/categoris';
import { useUploadFileMutation } from '@/store/apis/file';
import {
  useAddProjectMutation,
  useGetTagsQuery,
  useLazyGetSingleProjectsQuery,
  useUpdateProjectMutation,
} from '@/store/apis/projects';
import { useGetSubCategoriesQuery } from '@/store/apis/subCategoris';
import getFileFromUrl from '@/utils/getFileFromUrl';
import { Button, Select, TagsInput, Text, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { z } from 'zod';

const validators = z.object({
  // title: z
  //   .string({
  //     description: 'Title is required',
  //   })
  //   .optional(),
  tags: z.string(),
  image: z.instanceof(File).optional(),
  link: z.string().url(),
  category: z.string(),
  subCategory: z.string(),
  figmaName: z.string().optional(),
  hasReviewed: z.enum(['yes', 'no']).optional(),
  figmaLink: z.string().optional(),
});

type TFormValues = z.infer<typeof validators>;

export default function CreateProjectPage() {
  const [searchParams] = useSearchParams();

  const { data: categoriesData, isLoading: categoryLoading } = useGetCategoriesQuery();
  const { data: subCategoriesData, isLoading: subCategoryLoading } = useGetSubCategoriesQuery();
  const { data: tagsData, isLoading: tagsLoading } = useGetTagsQuery();

  const [addProject, { isLoading: addProjectLoading }] = useAddProjectMutation();
  const [updateProject, { isLoading: updateProjectLoading }] = useUpdateProjectMutation();
  const [uploadFiles, uploadFilesRes] = useUploadFileMutation();

  const [getProjectById, { isLoading: getProjectByIdLoading }] = useLazyGetSingleProjectsQuery();

  const navigate = useNavigate();

  const editable = searchParams.get('editable') === 'true';
  const id = searchParams.get('id') ?? '';

  const categories = useMemo(
    () =>
      categoriesData?.data?.data?.map((cat) => ({
        value: cat?._id ?? '',
        label: cat?.name ?? '',
      })),
    [categoriesData?.data?.data]
  );

  const subCategories = useMemo(
    () =>
      subCategoriesData?.data?.data?.map((cat) => ({
        value: cat?._id ?? '',
        label: cat?.name ?? '',
      })),
    [subCategoriesData?.data?.data]
  );

  const formHandler = useForm<TFormValues>({
    initialValues: {
      category: '',
      subCategory: '',
      tags: '',
      image: undefined,
      link: '',
      figmaName: '',
      hasReviewed: undefined,
      figmaLink: '',
    },
    validate: zodResolver(validators),
    validateInputOnBlur: true,
    validateInputOnChange: true,
  });

  const handleAddItem = async (values: TFormValues) => {
    try {
      const formData = new FormData();
      formData.append('files', values.image as File);
      const img = await uploadFiles(formData).unwrap();
      await addProject({
        category: values.category,
        subCategory: values.subCategory,
        tags: values.tags,
        image: img?.data?.data?.[0]?.url,
        link: values.link,
        figmaName: values.figmaName,
        hasReviewed: values.hasReviewed,
        figmaLink: values.figmaLink,
      }).unwrap();
      notifications.show({
        title: 'Success',
        message: 'Project added successfully',
        color: 'green',
      });
      navigate('/');
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
      formData.append('files', values.image as File);
      const img = await uploadFiles(formData).unwrap();

      await updateProject({
        // title: values.title,
        category: values.category,
        subCategory: values.subCategory,
        tags: values.tags,
        image: img?.data?.data?.[0]?.url,
        link: values.link,
        figmaName: values.figmaName,
        hasReviewed: values.hasReviewed,
        figmaLink: values.figmaLink,
        id,
      }).unwrap();
      notifications.show({
        title: 'Success',
        message: 'Project updated successfully',
        color: 'green',
      });
      navigate('/');
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
    addProjectLoading ||
    updateProjectLoading ||
    getProjectByIdLoading ||
    uploadFilesRes.isLoading ||
    categoryLoading ||
    subCategoryLoading ||
    tagsLoading;

  useEffect(() => {
    async function setInitialValues() {
      try {
        const res = await getProjectById(id).unwrap();
        const image = res.data.data.image
          ? await getFileFromUrl(res.data.data.image, res?.data?.data?.title ?? 'image')
          : undefined;
        formHandler.setValues({
          category: res.data.data.category._id,
          subCategory: res.data.data.subCategory._id,
          tags: res.data.data.tags,
          image,
          link: res.data.data.link,
          figmaName: res.data.data.figmaName,
          hasReviewed: res.data.data.hasReviewed,
          figmaLink: res.data.data.figmaLink,
        });
      } catch (error) {
        notifications.show({
          title: 'Error',
          message: 'Project not found with given id',
          color: 'red',
        });
        navigate('/');
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

        {/* <TextInput
          label="Title"
          placeholder="Enter Title"
          error={formHandler.errors.title && 'Title is required'}
          {...formHandler.getInputProps('title')}
        /> */}

        <div className="grid lg:grid-cols-2 gap-4">
          <TextInput
            label="Title"
            placeholder="Enter Title"
            error={formHandler.errors.figmaName && 'Title is required'}
            {...formHandler.getInputProps('figmaName')}
          />

          <TextInput
            label="Figma Link"
            placeholder="Enter Figma Link"
            error={formHandler.errors.figmaLink && 'Figma Link is required'}
            {...formHandler.getInputProps('figmaLink')}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          <Select
            label="Industry"
            placeholder="Select Industry"
            data={categories ?? []}
            value={formHandler.values.category}
            error={formHandler.errors.category && 'Industry is required'}
            {...formHandler.getInputProps('category')}
          />
          <Select
            label="Project Type"
            placeholder="Select Project Type"
            data={subCategories ?? []}
            value={formHandler.values.subCategory}
            error={formHandler.errors.subCategory && 'Project Type is required'}
            {...formHandler.getInputProps('subCategory')}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          <TextInput
            label="Tag"
            placeholder="Enter a tag"
            error={formHandler.errors.tags && 'Tags is required'}
            {...formHandler.getInputProps('tags')}
          />

          <Select
            label="Review"
            placeholder="Select Has Reviewed"
            data={[
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
            ]}
            value={formHandler.values.hasReviewed}
            error={formHandler.errors.hasReviewed && 'Has Reviewed is required'}
            {...formHandler.getInputProps('hasReviewed')}
          />
        </div>

        <Text size="sm" className="font-semibold">
          Image
        </Text>

        <DropzoneUploader
          onDrop={(files) => {
            formHandler.setFieldValue('image', files?.[0]);
          }}
          maxFiles={1}
          multiple={false}
        />

        {
          // @ts-ignore
          formHandler.values.image && (
            <img
              src={URL.createObjectURL(formHandler.values.image)}
              alt="thumbnail"
              className="w-full object-cover h-80 aspect-video object-center"
            />
          )
        }

        <TextInput
          label="Project view link"
          placeholder="Enter Link"
          error={formHandler.errors.link && 'Link is required'}
          {...formHandler.getInputProps('link')}
        />

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
