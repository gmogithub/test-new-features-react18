import { FC, Suspense, useDeferredValue } from 'react';
import { fetchPosts } from "../repository";

interface ExempleUseDeferredValueProps {

}

export const ExampleUseDeferredValue: FC<ExempleUseDeferredValueProps> = (props) => {

    const value = useDeferredValue(async () => await fetchPosts());
  return <Suspense>
    <div>{value as any}</div>
  </Suspense>;
}

ExampleUseDeferredValue.displayName = "ExempleUseDeferredValue";