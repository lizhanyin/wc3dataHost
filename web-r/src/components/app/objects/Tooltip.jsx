import React, { useState, useEffect } from 'react';
import * as Tooltip from "@radix-ui/react-tooltip";
import { useAppCache } from '@/hooks';
import tagString from "@/components/common/tag-string";

// 假定已经存在的辅助函数或组件
import { ObjectIcon } from './ObjectCtx';
// import { getObjectById } from './dataUtils'; // 假定这是一个实用函数，用于根据ID获取对象详情

const TooltipContent = ({ objectId }) => {
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
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          {children}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="select-none rounded bg-whitea-12 dark:bg-blacka-12 px-[15px] py-2.5 text-[15px] leading-none text-blue-11 border-1 shadow-gray-7 will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slide-in-from-bottom-400 data-[state=delayed-open]:data-[side=left]:animate-slide-in-from-left-400 data-[state=delayed-open]:data-[side=right]:animate-slide-in-from-right-400 data-[state=delayed-open]:data-[side=top]:animate-slide-in-from-top-400"
            sideOffset={5}
          >
            <TooltipContent objectId={objectId} />
            <Tooltip.Arrow className="fill-blue-11 dark:fill-blue-11" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TooltipComponent;