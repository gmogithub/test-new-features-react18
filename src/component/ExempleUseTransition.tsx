import { FC, useEffect, useLayoutEffect, useReducer, useState, useTransition } from 'react';
import { sleepSync } from "../utils";

interface ExampleUseTransitionProps {

}

function reducer(state: any, { type, payload }: any) {
  switch (type) {
    case "count":
      return { ...state, count: state.count + 1 };
    case "visible":
      return { ...state, visible: !state.visible };
  }
  return state;
}

export const ExampleUseTransition: FC<ExampleUseTransitionProps> = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [isPending, startTransition] = useTransition();
  const [isPending2, startTransition2] = useTransition();
  const [state, dispatch] = useReducer(reducer, { count: 0, visible: false })


  return (
    <div>
      {isVisible ? (
        <div>Hello world! {count}</div>
      ) : (
        <div>Goodbye world! {count}</div>
      )}
      <button
        onClick={() => {
          startTransition(() => {

            setIsVisible((prevState) => {
              // sleepSync(1000);
              return !prevState;
            });

            setCount(c => {
              // sleepSync(1000);
              return c + 1;
            })


          });
        }}
        disabled={isPending}
      >
        Toggle
      </button>

      <h1>transition avec reducer</h1>
      {state.visible ? (
        <div>Hello world! {state.count}</div>
      ) : (
        <div>Goodbye world! {state.count}</div>
      )}
      <button
        onClick={() => {
          startTransition2(() => {


            dispatch({ type: "visible" })

            dispatch({type: "count"});


          });
        }}
        disabled={isPending2}
      >
        Toggle
      </button>
    </div>
  );
}

ExampleUseTransition.displayName = "ExampleUseTransition";