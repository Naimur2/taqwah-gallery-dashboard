import queryString from 'query-string';

const parseIdQueries = (id: string | string[]) => {
  const ids = Array.isArray(id) ? id : [id];

  return queryString.stringify({
    id: ids,
  });
};

export default parseIdQueries;
