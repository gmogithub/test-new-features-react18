import { useState, useEffect, Suspense } from 'react';
import { sleep } from "../utils";

function useQuery(url: string) {
  let status : "pending" | "success" = "pending";
  // const [data, setData] = useState<any>(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<any>(null);
  // const [promise, setPromise] = useState<any>(null);
  //
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(url);
  //       const json = await response.json();
  //       setData(json);
  //       setLoading(false);
  //     } catch (err) {
  //       setError(err);
  //       setLoading(false);
  //     }
  //   }
  //
  //   setLoading(true);
  //   setPromise(fetchData());
  // }, [url]);
  //
  // return { data, loading, error, promise };

  const promise = sleep(2000).then(() => {
    status = "success";
  });

  if(status === "pending") {
    throw  promise;
  }

  return true;
}

export function TestSuspenseExempleChatAi() {
  return (
    <Suspense fallback={<p>Chargement...</p>}>
      <MyInnerComponent />
    </Suspense>
  );
}

function MyInnerComponent() {
  const promise = useQuery('http://jsonplaceholder.typicode.com/posts/1');

  // if (error) {
  //   return <p>Une erreur s'est produite : </p>;
  // }

  return <div>ok</div>;
}