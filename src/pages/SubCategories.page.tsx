/* eslint-disable import/order */
import Loader from '@/components/Loader';
import SubCategoryActions, { TSubCategoriesColumn } from '@/components/SubCategoriesActions';
import TableComponent, { TTable } from '@/components/Table';
import AddSubCategory from '@/form/AddSubCategory';
import { useGetSubCategoriesQuery } from '@/store/apis/subCategoris';
import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import dayjs from 'dayjs';

const columns: TTable<Required<Partial<TSubCategoriesColumn>>>[] = [
  {
    label: 'Name',
    accessor: 'name',
  },
  {
    label: 'Created At',
    component: (row) => dayjs(row.createdAt).format('DD MMM YYYY'),
  },
  {
    label: 'Action',
    component: (row) => <SubCategoryActions {...row} />,
  },
];

export default function SubCategoriesPage() {
  const { data, isLoading } = useGetSubCategoriesQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <>
      <section>
        <div className="container mx-auto p-4  grid gap-8 ">
          <div className="flex flex-wrap justify-between items-center">
            <Text className="font-bold text-base md:text-lg xl:text-2xl">
              Manage Sub Categories
            </Text>
            <Button
              className="bg-gray-800 text-white"
              onClick={() => {
                modals.open({
                  title: 'Edit Category',
                  children: <AddSubCategory />,
                });
              }}
            >
              Add New Sub Category
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
