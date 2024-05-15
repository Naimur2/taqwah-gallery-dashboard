/* eslint-disable import/order */
import AddCategory from '@/form/AddCategory';
import {
  DeleteV1CategoriesDeleteIdErrorResponse,
  GetV1CategoriesGetSuccessfulResponse,
} from '@/store/api';
import { useDeleteCategoriesMutation } from '@/store/apis/categoris';
import { Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { IconPencil, IconTrash } from '@tabler/icons-react';

export type TCategoriesColumn = GetV1CategoriesGetSuccessfulResponse['data']['data'][0];

export default function CategoryActions({ _id, name }: TCategoriesColumn) {
  const [deleteAction, { isLoading }] = useDeleteCategoriesMutation();

  const handleDelete = () => {
    modals.openConfirmModal({
      title: 'Please confirm your action',
      children: (
        <Text size="sm">
          Are you sure you want delete this category? <br />
        </Text>
      ),
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      onCancel: () => {},
      onConfirm: async () => {
        try {
          const res = await deleteAction(_id).unwrap();
          notifications.show({
            title: 'Success',
            message: res.data.message,
            color: 'green',
          });
        } catch (err) {
          const error = err as {
            data: DeleteV1CategoriesDeleteIdErrorResponse;
          };
          notifications.show({
            title: 'Error',
            message: error?.data?.error.message,
            color: 'red',
          });
        }
      },
      confirmProps: { className: 'bg-red-500 text-white hover:bg-red-400' },
    });
  };

  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        onClick={() => {
          modals.open({
            title: 'Edit Category',
            children: <AddCategory type="edit" values={{ name }} id={_id} />,
          });
        }}
      >
        <IconPencil />
      </button>
      <button type="button" onClick={handleDelete} disabled={isLoading}>
        <IconTrash />
      </button>
    </div>
  );
}
