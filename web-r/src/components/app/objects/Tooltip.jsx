import React, { useState, useEffect } from 'react';
import { useAppCache } from '@/hooks';
import { TooltipRoot, TooltipTrigger, TooltipContent } from "@/components/ui";

const Content = ({ objectId }) => {
  const { image } = useAppCache();
  const [object, setObject] = useState(null);

  useEffect(() => {
    async function fetchObject() {
      const data = objectId; //await getObjectById(objectId);
      setObject(data);
    }
    if (objectId) {
      fetchObject();
    }
  }, [objectId]);

  if (!object) return <div>Loading...</div>;

  return (
    <div>
      {object.description || "No description available."}
      {object.icon && (
        <img
          src={image(object.icon)}
          alt={`${object.name} Icon`}
          className="object-icon"
        />
      )}
    </div>
  );
};

const TooltipComponent = ({ objectId, children }) => {
  return (
    <TooltipRoot>
      <TooltipTrigger>
        {children}
      </TooltipTrigger>
      <TooltipContent>
        <Content objectId={objectId} />
      </TooltipContent>
    </TooltipRoot>
  );
};

export default TooltipComponent;