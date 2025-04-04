/* eslint-disable import/order */
import CategoryActions, { TCategoriesColumn } from '@/components/CategoriesActions';
import Loader from '@/components/Loader';
import TableComponent, { TTable } from '@/components/Table';
import AddCategory from '@/form/AddCategory';
import { useGetCategoriesQuery } from '@/store/apis/categoris';
import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import dayjs from 'dayjs';
import CategoriesTable from './components/CategoriesTable';

const columns: TTable<Required<Partial<TCategoriesColumn>>>[] = [
  {
    label: 'Name',
    accessor: 'name',
  },
  {
    label: 'Total Files',
    accessor: 'totalFiles',
  },
  /*   {
    label: 'Position',
    accessor: 'position',
  }, */
  {
    label: 'Created At',
    component: (row) => dayjs(row.createdAt).format('DD MMM YYYY'),
  },
  {
    label: 'Action',
    component: (row) => <CategoryActions {...row} />,
  },
];

export default function CategoriesPage() {
  const { data, isLoading } = useGetCategoriesQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <>
      <section>
        <div className="container mx-auto p-4  grid gap-8 ">
          <div className="flex flex-wrap justify-between items-center">
            <Text className="font-bold text-base md:text-lg xl:text-2xl">Manage Categories</Text>
            <Button
              className="bg-gray-800 text-white"
              onClick={() => {
                modals.open({
                  title: 'Add Category',
                  children: <AddCategory />,
                });
              }}
            >
              Add New Category
            </Button>
          </div>

          {/* @ts-ignore */}
          <CategoriesTable
            columns={columns}
            data={(data?.data?.data as any) ?? []}
            key={data?.data?.data?.length}
          />
        </div>
      </section>

      <Loader isLoading={isLoading} />
    </>
  );
}
