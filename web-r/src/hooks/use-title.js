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
      setTitles((prev) => {
        if (prev[0] === title) return prev;
        
        const titles = [...prev, title];
        updateTitle(titles);
        return titles;
      });
    }
    
    return () => {
      let index = titles.indexOf(title);
      if (index >= 0) {
        setTitles((prev) => {
          const titles = prev.splice(index, 1);
          if (index >= titles.length) {
            updateTitle();
          }
          return titles;
        });
      }
    }
  }, [title]);

  const updateTitle = (titles) => {
    // let finalTitle = titles[0];
    // for(let i = 1; i < titles.length; i++){
    //   finalTitle = combiner(finalTitle, titles[i]) ;
    // }
    // document.title = finalTitle;
  }

  return {
    setTitle,
    setTitleCombiner: setCombiner
  }
}
