import { useEffect, useState } from "react";
import { useGlobal } from "@/hooks/use-global";

export const title = () => {
  const g = useGlobal();
  const [titles, setTitles] = useState([]);

  const [title, setTitle] = useState("WC3 Data");
  const [, setCombiner] = useState((prev, current) => `${prev} - ${current}`);

  const combiner = (prev, current) => `${prev} - ${current}`;

  useEffect(() => {
    if (g){
      setTitles([...titles, title]);
      updateTitle(title);
    }
    
    return () => {
      let index = titles.indexOf(title);
      if (index >= 0) {
        setTitles(titles.splice(index, 1));
        if (index >= titles.length) {
          updateTitle();
        }
      }
    }
  }, [title]);

  const updateTitle = (title) => {
    let finalTitle = title;
    titles.forEach(e => combiner(finalTitle, e));
    document.title = combiner(finalTitle, title);
  }

  return {
    setTitle,
    setTitleCombiner: setCombiner
  }
}
