import PropTypes from 'prop-types';
import * as TooltipComponent from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils"

const TooltipRoot = ({ref, children, className, ...props}) => {
  return (
    <TooltipComponent.Provider>
      <TooltipComponent.Root
        ref={ref}
        className={cn(
          className,
        )}
        {...props}>
        {children}
      </TooltipComponent.Root>
    </TooltipComponent.Provider>
  );
}
TooltipRoot.displayName = "TooltipRoot"

const TooltipTrigger = ({ref, children, className, ...props}) => {
  return (
    <TooltipComponent.Trigger asChild ref={ref}
      className={cn(
        className,
      )}
      {...props}>
      {children}
    </TooltipComponent.Trigger>
  );
}
TooltipTrigger.displayName = "TooltipTrigger"

const TooltipContent = ({ref, children, className, ...props}) => {
  return (
    <TooltipComponent.Portal>
      <TooltipComponent.Content
        className={cn(
          "select-none rounded bg-whitea-12 dark:bg-blacka-12 px-[15px] py-2.5 text-[15px] leading-none text-blue-11 border-1 shadow shadow-gray-7 ",
          "will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slide-in-from-bottom-400 data-[state=delayed-open]:data-[side=left]:animate-slide-in-from-left-400 data-[state=delayed-open]:data-[side=right]:animate-slide-in-from-right-400 data-[state=delayed-open]:data-[side=top]:animate-slide-in-from-top-400",
          className,
        )}
        sideOffset={5}
        {...props}
      >
        {children}
        <TooltipComponent.Arrow className="fill-blue-8 dark:fill-blue-8" />
      </TooltipComponent.Content>
    </TooltipComponent.Portal>
  );
}
TooltipContent.displayName = "TooltipContent"


export { TooltipRoot, TooltipTrigger, TooltipContent }

TooltipRoot.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  ref: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
};

TooltipTrigger.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  ref: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
};

TooltipContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  ref: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
};