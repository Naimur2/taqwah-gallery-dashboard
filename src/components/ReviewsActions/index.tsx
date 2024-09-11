/* eslint-disable import/order */
import {
  DeleteV1CategoriesDeleteIdErrorResponse,
  GetV1ReviewsGetSuccessfulResponse,
} from '@/store/api';
import { useDeleteReviewMutation } from '@/store/apis/reviews';
import { Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

export type TReviewsColumn = GetV1ReviewsGetSuccessfulResponse['data']['data'][0];

export default function ReviewsActions({ _id, type }: Readonly<TReviewsColumn>) {
  const [deleteAction, { isLoading }] = useDeleteReviewMutation();
  const navigate = useNavigate();

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
          navigate({
            pathname: '/manage-reviews',
            search: `?type=${type}&id=${_id}&editable=true`,
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
