import React from "react";
import { dehydrate, hydrate, QueryClient } from "react-query";

export default function Hydration() {
  const queryClient = new QueryClient();
  const queryClients: () => JSX.Element = () => <></>;
  const hydraquery = hydrate(
    queryClient,
    {},
    {
      defaultOptions: {},
    }
  );
  const dehydrateQuery = dehydrate(queryClient, {
    dehydrateQueries: true,
    shouldDehydrateQuery: (q) => {
      console.log(q);
      return !!q;
    },
  });
  console.log(dehydrateQuery.queries);
  return <div></div>;
}
