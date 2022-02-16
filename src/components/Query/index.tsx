import { axiosClient } from "../../network";
import { QueryCache, QueryClient, useQueries, useQuery } from "react-query";
const getCar = () =>
  axiosClient
    .get("/cars")
    .then((res) => res.data)
    .catch((err) => console.log(err));
const getRewards = () =>
  axiosClient
    .get("/rewards")
    .then((res) => res.data)
    .catch((err) => console.log(err));
const arrFetchs = [getCar, getRewards];
export default function Query() {
  const rewardsQuery = useQuery(["rewards"], getRewards, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
  const dehydratedState = window._
  const queryClient = new QueryClient();
  //   const carsQuery = useQuery(["cars"], getCar, {
  //     refetchOnMount: false,
  //     refetchOnWindowFocus: false,
  //     retry: false,
  //   });
  const {
    data,
    dataUpdatedAt,
    isLoading,
    isPlaceholderData,
    isFetching,
    status,
    remove,
  } = useQuery(["cars-query"], getCar, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
    placeholderData: [],
    _defaulted: true,
  });
  console.log(isLoading, isFetching, status);

  const userQueries = useQueries(
    arrFetchs.map((user, i) => {
      return {
        queryKey: ["user" + i, user],
        queryFn: () => user(),
      };
    })
  );
  return (
    <div>
      <button onClick={remove}>Remove</button>
      <hr />
      {JSON.stringify(rewardsQuery.data, null, 3)}
      <hr />
      {JSON.stringify(data, null, 3)}
      <hr />
      {userQueries.map((item) => {
        return (
          <div key={Math.random()}>
            {JSON.stringify(item.data, null, 3)}
            <hr />
          </div>
        );
      })}
      <hr />
      {JSON.stringify(
        queryClient.getQueriesData({
          queryKey: "rewards",
          predicate: (a) => {
            console.log("Rewards", a);
            return true;
          },
        })
      )}
    </div>
  );
}
