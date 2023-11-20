// useFetchData.js
import { useGetFilteredDataQuery } from '../api/filterApi';

function useFetchData(filter, paramsUrl, currentPage) {
  const { data = [], isLoading } = useGetFilteredDataQuery([
    filter.category,
    paramsUrl,
    currentPage,
  ]);

  return { results: data.results || [], isLoading };
}

export default useFetchData;
