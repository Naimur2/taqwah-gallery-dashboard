/* eslint-disable import/order */
import Loader from '@/components/Loader';
import ReviewsActions, { TReviewsColumn } from '@/components/ReviewsActions';

import TableComponent, { TTable } from '@/components/Table';
import { useGetReviewsQuery } from '@/store/apis/reviews';
import { Button, Text } from '@mantine/core';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const columns: TTable<Required<Partial<TReviewsColumn>>>[] = [
  {
    label: 'Image',
    component: (row) => (
      <img src={row.clientPhoto} alt={row.clientName} className="w-10 h-10 rounded-md" />
    ),
  },
  {
    label: 'Client Name',
    accessor: 'clientName',
  },
  {
    label: 'Client Country',
    accessor: 'clientCountry',
  },
  {
    label: 'Created At',
    component: (row) => dayjs(row.createdAt).format('DD MMM YYYY'),
  },
  {
    label: 'Action',
    component: (row) => <ReviewsActions {...row} />,
  },
];

export default function ReviewsPage({ type }: Readonly<{ type: 'text' | 'video' }>) {
  const navigate = useNavigate();
  const { data, isLoading } = useGetReviewsQuery(
    {
      type: type === 'text' ? 'text' : 'video',
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  return (
    <>
      <section>
        <div className="container mx-auto p-4  grid gap-8 ">
          <div className="flex flex-wrap justify-between items-center">
            <Text className="font-bold text-base md:text-lg xl:text-2xl">
              {type === 'text' ? 'Manage Text Reviews' : 'Manage Video Reviews'}
            </Text>
            <Button
              className="bg-gray-800 text-white"
              onClick={() => {
                navigate(`/manage-reviews?type=${type}`);
              }}
            >
              Add New Review
            </Button>
          </div>

          {/* @ts-ignore */}
          <TableComponent columns={columns} data={data?.data?.data ?? []} />
        </div>
      </section>

      <Loader isLoading={isLoading} />
    </>
  );
}
