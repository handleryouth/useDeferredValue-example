import { useDeferredValue, useMemo, useEffect } from "react";

const HEAVY_LIST_SIZE = 15000;

export interface ListProps {
  text: string;
}

/*
    this component is designed to render a list of divs from input text
    the list is heavy, so it will take some time to render

    without useDeferredValue, the list will be rendered on every input change
    with useDeferredValue, the list will be rendered only when the input is stable

    if we look closely, the concept of useDeferredValue is similar to debounce

    useDeferredvalue is useful when we want to render a heavy component that is not critical to the user / low priority


*/

export default function List({ text }: ListProps) {
  const deferredInput = useDeferredValue(text);
  const list = useMemo(() => {
    const listCollection = [];
    for (let i = 0; i < HEAVY_LIST_SIZE; i++) {
      listCollection.push(<div key={i}>{deferredInput}</div>);
    }
    return listCollection;
  }, [deferredInput]);

  useEffect(() => {
    console.log(`input value: ${text}, deferredInput value: ${deferredInput}`);
  }, [text, deferredInput]);

  return list;
}
