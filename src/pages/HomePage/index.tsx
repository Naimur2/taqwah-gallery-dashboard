/* eslint-disable import/order */
import Loader from '@/components/Loader';
import ProjectActions, { TProjectColumn } from '@/components/ProjectActions';
import TableComponent, { TTable } from '@/components/Table';
import { useGetProjectsQuery } from '@/store/apis/projects';
import { Button, Text } from '@mantine/core';
import { RiLink } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import ProjectsTable from './components/ProjectsTable';

const columns: TTable<Required<Partial<TProjectColumn>>>[] = [
  {
    label: 'S.No',
    accessor: 'position',
    emptyValue: 'Not Available',
  },
  {
    label: 'Image',
    component: (row) => <img src={row.image} alt={row.title} className="size-10 object-cover" />,
  },
  {
    label: 'Title',
    accessor: 'figmaName',
    emptyValue: 'Not Available',
  },
  {
    label: 'Project Type',
    accessor: 'subCategory.name',
    emptyValue: 'Not Available',
  },
  {
    label: 'Industry',
    accessor: 'category.name',
    emptyValue: 'Not Available',
  },
  {
    label: 'Tags',
    component: (row) => row?.tags,
    className: 'min-w-[20rem]',
  },
  {
    label: 'Project View Link',
    component: (row) => {
      if (row.link) {
        return (
          <a href={row.link} target="_blank" rel="noreferrer">
            <RiLink />
          </a>
        );
      }

      return 'Not Available';
    },
  },
  {
    label: 'Figma Link',
    component: (row) => {
      if (row.figmaLink) {
        return (
          <a href={row.figmaLink} target="_blank" rel="noreferrer">
            <RiLink />
          </a>
        );
      }

      return 'Not Available';
    },
  },
  // {
  //   label: 'Review',
  //   accessor: 'hasReviewed',
  //   emptyValue: 'Not Available',
  // },
  {
    label: 'Action',
    component: (row) => <ProjectActions {...row} />,
  },
];

export default function CategoriesPage() {
  const { data, isLoading } = useGetProjectsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const navigation = useNavigate();

  return (
    <>
      <section>
        <div className="container mx-auto p-4  grid gap-8 ">
          <div className="flex flex-wrap justify-between items-center">
            <Text className="font-bold text-base md:text-lg xl:text-2xl">Manage Projects</Text>
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
          <ProjectsTable columns={columns} data={data?.data?.data ?? []} />
        </div>
      </section>

      <Loader isLoading={isLoading} />
    </>
  );
}
