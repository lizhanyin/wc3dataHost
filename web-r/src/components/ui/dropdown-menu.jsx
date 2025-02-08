import PropTypes from 'prop-types';
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuArrow = DropdownMenuPrimitive.Arrow

const DropdownMenuSubTrigger = ({ref, className, inset, children, ...props}) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default gap-2 relative select-none items-center rounded-xs leading-none text-sm outline-hidden h-[25px] pl-[25px] pr-[5px]",
      "focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      "data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-9 data-[highlighted]:data-[state=open]:bg-blue-9 data-[state=open]:bg-blue-4 data-[disabled]:text-gray-8 data-[highlighted]:data-[state=open]:text-blue-1 data-[highlighted]:text-blue-1 data-[state=open]:text-blue-11",
      inset && "pl-8",
      className
    )}
    {...props}>
    {children}
    <div className="ml-auto pl-5 text-gray-11 group-data-[disabled]:text-gray-8 group-data-[highlighted]:text-whitea-12">
      <ChevronRightIcon />
    </div>
  </DropdownMenuPrimitive.SubTrigger>
)
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = ({ref, className, ...props}) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      className={cn(
        "min-w-[14rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        "bg-whitea-12 p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]",
        className
      )}
      {...props} />
  </DropdownMenuPrimitive.Portal>
)
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = ({ref, className, sideOffset = 4, ...props}) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "min-w-[14rem] overflow-hidden rounded-md border bg-popover p-[5px] text-popover-foreground shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        "bg-whitea-1",
        className
      )}
      {...props} />
  </DropdownMenuPrimitive.Portal>
)
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = ({ref, className, inset, ...props}) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-xs h-[25px] pl-[25px] pr-[5px] text-sm leading-none outline-hidden transition-colors",
      "focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      "data-[highlighted]:bg-blue-9 data-[disabled]:text-gray-8 data-[highlighted]:text-blue-1",
      inset && "pl-8",
      className
    )}
    {...props} />
)
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = ({ref, className, children, checked, ...props}) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-xs h-[25px] pl-[25px] pr-[5px] text-sm outline-hidden leading-none transition-colors",
      "focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "data-[highlighted]:bg-blue-9 data-[disabled]:text-gray-8 data-[highlighted]:text-blue-1",
      className
    )}
    checked={checked}
    {...props}>
    <DropdownMenuPrimitive.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
      <CheckIcon />
    </DropdownMenuPrimitive.ItemIndicator>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
)
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = ({ref, className, children, ...props}) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-xs h-[25px] pl-[25px] pr-[5px] text-sm leading-none outline-hidden transition-colors",
      "focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "data-[highlighted]:bg-blue-9 data-[disabled]:text-gray-8 data-[highlighted]:text-blue-1",
      className
    )}
    {...props}>
    <DropdownMenuPrimitive.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
      <DotFilledIcon />
    </DropdownMenuPrimitive.ItemIndicator>
    {children}
  </DropdownMenuPrimitive.RadioItem>
)
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = ({ref, className, inset, ...props}) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn("pl-[25px] text-xs leading-[25px] text-gray-11", inset && "pl-8", className)}
    {...props} />
)
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = ({ref, className, ...props}) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("m-[5px] h-px bg-blue-6", className)}
    {...props} />
)
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({className, ...props}) => {
  return (
    (<span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props} />)
  );
}
DropdownMenuShortcut.displayName = "DropdownMenuIcon"

const DropdownMenuIcon = ({className, children, ...props}) => {
  return (
    <div 
      className={cn("ml-auto pl-5 text-gray-11 group-data-[disabled]:text-gray-8 group-data-[highlighted]:text-whitea-1", className)} 
      {...props} >
        {children}
    </div>
  );
}
DropdownMenuIcon.displayName = "DropdownMenuIcon"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuArrow,
  DropdownMenuIcon
}

DropdownMenuSubTrigger.propTypes = {
  className: PropTypes.string,
  inset: PropTypes.bool,
  children: PropTypes.node,
  ref: PropTypes.any,
};

DropdownMenuSubContent.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.any,
};

DropdownMenuContent.propTypes = {
  className: PropTypes.string,
  sideOffset: PropTypes.number,
  ref: PropTypes.any,
};

DropdownMenuItem.propTypes = {
  className: PropTypes.string,
  inset: PropTypes.bool,
  ref: PropTypes.any,
};

DropdownMenuCheckboxItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  checked: PropTypes.bool,
  ref: PropTypes.any,
};

DropdownMenuRadioItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  ref: PropTypes.any,
};

DropdownMenuLabel.propTypes = {
  className: PropTypes.string,
  inset: PropTypes.bool,
  ref: PropTypes.any,
};

DropdownMenuSeparator.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.any,
};

DropdownMenuShortcut.propTypes = {
  className: PropTypes.string,
};

DropdownMenuIcon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  ref: PropTypes.any,
};
