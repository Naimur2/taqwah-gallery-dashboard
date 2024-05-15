export type TPagination = {
  page?: number;
  limit?: number;
};

export type TPaginationWithSearch = TPagination & {
  search?: string;
};
