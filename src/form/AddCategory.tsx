import { useAddCategoriesMutation, useUpdateCategoriesMutation } from '@/store/apis/categoris';
import { Button, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { useEffect } from 'react';
import { z } from 'zod';

const validationSchema = z.object({
  name: z.string().min(1, { message: 'Name must be at least 3 characters' }),
});

type TAddCategoryForm = {
  type?: 'add' | 'edit';
  values?: {
    name: string;
  };
  id?: string;
};

export default function AddCategory({ type, values, id }: Readonly<TAddCategoryForm>) {
  const [addCategory, addCategoryRes] = useAddCategoriesMutation();
  const [updateCategory, updateCategoryRes] = useUpdateCategoriesMutation();

  const form = useForm({
    initialValues: {
      name: '',
    },
    validate: zodResolver(validationSchema),
    validateInputOnBlur: true,
    validateInputOnChange: true,
  });

  useEffect(() => {
    if (type === 'edit') {
      form.setValues({
        name: values?.name ?? '',
      });
    }
  }, [type, values]);

  return (
    <form
      className="grid gap-4"
      onSubmit={form.onSubmit(async (val) => {
        try {
          if (type === 'edit') {
            const res = await updateCategory({ id: id ?? '', name: val.name }).unwrap();
            notifications.show({
              title: 'Success',
              message: res.data.message,
              color: 'green',
            });
          } else {
            const res = await addCategory(val).unwrap();
            notifications.show({
              title: 'Success',
              message: res.data.message,
              color: 'green',
            });
          }

          modals.closeAll();
        } catch (error) {
          const err = error as {
            data: { error: { message: string } };
          };
          notifications.show({
            title: 'Error',
            message: err?.data?.error.message ?? 'Something went wrong',
            color: 'red',
          });
        }
      })}
    >
      <TextInput
        label="Category Name"
        placeholder="Enter Category Name"
        data-autofocus
        {...form.getInputProps('name')}
      />
      <Button
        fullWidth
        type="submit"
        mt="md"
        disabled={addCategoryRes.isLoading || updateCategoryRes.isLoading}
        loading={addCategoryRes.isLoading || updateCategoryRes.isLoading}
        className="bg-black text-white hover:bg-gray-800"
      >
        Submit
      </Button>
    </form>
  );
}
