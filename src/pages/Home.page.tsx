/* eslint-disable import/order */
import Loader from '@/components/Loader';
import ProjectActions, { TProjectColumn } from '@/components/ProjectActions';
import TableComponent, { TTable } from '@/components/Table';
import { useGetProjectsQuery } from '@/store/apis/projects';
import { Button, Text } from '@mantine/core';
import dayjs from 'dayjs';
import { RiLink } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const columns: TTable<Required<Partial<TProjectColumn>>>[] = [
  {
    label: 'Image',
    component: (row) => <img src={row.image} alt={row.title} className="size-10 object-cover" />,
  },
  {
    label: 'Title',
    accessor: 'title',
  },
  {
    label: 'Category',
    accessor: 'category.name',
  },
  {
    label: 'Sub Category',
    accessor: 'subCategory.name',
  },
  {
    label: 'Tags',
    component: (row) => row?.tags?.join(', '),
  },
  {
    label: 'Link',
    component: (row) => (
      <a href={row.link} target="_blank" rel="noreferrer">
        <RiLink />
      </a>
    ),
  },
  {
    label: 'Created At',
    component: (row) => dayjs(row.createdAt).format('DD MMM YYYY'),
  },
  {
    label: 'Action',
    component: (row) => <ProjectActions {...row} />,
  },
];

export default function CategoriesPage() {
  const { data, isLoading } = useGetProjectsQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const navigation = useNavigate();

  return (
    <>
      <section>
        <div className="container mx-auto p-4  grid gap-8 ">
          <div className="flex flex-wrap justify-between items-center">
            <Text className="font-bold text-base md:text-lg xl:text-2xl">Manage Categories</Text>
            <Button
              className="bg-gray-800 text-white"
              onClick={() => {
                navigation('/create');
              }}
            >
              Add New Project
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
