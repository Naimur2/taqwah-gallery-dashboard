/* eslint-disable import/order */
import {
  DeleteV1CategoriesDeleteIdErrorResponse,
  GetV1ProjectsGetIdSuccessfulResponse,
} from '@/store/api';
import { useDeleteProjectMutation } from '@/store/apis/projects';
import { Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import Loader from '../Loader';
import { useNavigate } from 'react-router-dom';

export type TProjectColumn = GetV1ProjectsGetIdSuccessfulResponse['data']['data'];

export default function ProjectActions({ _id }: TProjectColumn) {
  const [deleteAction, { isLoading }] = useDeleteProjectMutation();
  const navigation = useNavigate();

  const handleDelete = () => {
    modals.openConfirmModal({
      title: 'Please confirm your action',
      children: (
        <Text size="sm">
          Are you sure you want delete this sub category? <br />
        </Text>
      ),
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      onCancel: () => {},
      onConfirm: async () => {
        if (_id) {
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
          navigation(`/create?id=${_id}&editable=true`);
        }}
      >
        <IconPencil />
      </button>
      <button type="button" onClick={handleDelete} disabled={isLoading}>
        <IconTrash />
      </button>
      <Loader isLoading={isLoading} />
    </div>
  );
}
