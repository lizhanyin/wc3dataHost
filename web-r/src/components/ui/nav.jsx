import PropTypes from 'prop-types';
import { Link as RLink } from 'react-router-dom';
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils"

const Root = ({ ref, className, children, ...props }) => (
  <NavigationMenu.Root 
    ref={ref}
    className={cn(
      "relative z-10 flex w-4/5 justify-center",
      className,
    )}
    {...props}
  >
    {children}
  </NavigationMenu.Root>
);
Root.displayName = NavigationMenu.Root.displayName

const List = ({ ref, className, children, ...props }) => (
  <NavigationMenu.List 
    ref={ref}
    className={cn(
      "center m-0 flex list-none rounded-md bg-white p-1", // shadow-[0_2px_10px] shadow-blackA4
      className,
    )}
    {...props}
  >
    {children}
  </NavigationMenu.List>
);
List.displayName = NavigationMenu.List.displayName

const Item = ({ ref, className, children, ...props }) => (
  <NavigationMenu.Item 
    ref={ref}
    className={cn(
      "",
      className,
    )}
    {...props}
  >
    {children}
  </NavigationMenu.Item>
);
Item.displayName = NavigationMenu.Item.displayName

const Trigger = ({ ref, className, children, ...props }) => (
  <NavigationMenu.Trigger 
    ref={ref}
    className={cn(
      "group flex select-none items-center justify-between gap-0.5 rounded mx-1 px-3 py-2 text-[15px] font-medium leading-none text-violet11 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7",
      className,
    )}
    {...props}
  >
    {children}
  </NavigationMenu.Trigger>
);
Trigger.displayName = NavigationMenu.Trigger.displayName

const Content = ({ ref, className, children, ...props }) => (
  <NavigationMenu.Content 
    ref={ref}
    className={cn(
      "absolute left-0 top-0 w-full sm:w-auto",
      className,
    )}
    {...props}
  >
    {children}
  </NavigationMenu.Content>
);
Content.displayName = NavigationMenu.Content.displayName

const Link = ({ ref, className, children, ...props }) => (
  <RLink 
    ref={ref}
    className={cn(
      "flex items-center space-x-2",
      className,
    )}
    {...props}
  >
    <span className="inline-block">{children}</span>
  </RLink>
);
Link.displayName = NavigationMenu.Link.displayName

const Indicator = ({ ref, className, ...props }) => (
  <NavigationMenu.Indicator 
    ref={ref}
    className={cn(
      "top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn",
      className,
    )}
    {...props}
  >
    <div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-white" />
  </NavigationMenu.Indicator>
);
Indicator.displayName = NavigationMenu.Indicator.displayName

const Viewport = ({ ref, className, ...props }) => (
  <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">    
    <NavigationMenu.Viewport 
      ref={ref}
      className={cn(
        "relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      {...props}
    />
  </div>
);
Viewport.displayName = NavigationMenu.Viewport.displayName

const DropMenu = ({ ref, className, children, ...props }) => (
  <li>
    <RLink
      ref={ref}
      className={cn(
        "block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7",
        className,
      )}
      {...props}
    >
      {children}
    </RLink>
  </li>
);
DropMenu.displayName = "DropMenu"

const DropMenuTitle = ({ ref, className, children, ...props }) => (
  <div 
    ref={ref}
    className={cn(
      "mb-[5px] font-medium leading-[1.2] text-violet12",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);
DropMenuTitle.displayName = "DropMenuTitle"

const DropMenuDesc = ({ ref, className, children, ...props }) => (
  <p 
    ref={ref}
    className={cn(
      "leading-[1.4] text-mauve11",
      className,
    )}
    {...props}
  >
    {children}
  </p>
);
DropMenuDesc.displayName = "DropMenuDesc"

export { 
  Root, 
  Content, 
  Trigger, 
  Link, 
  Item, 
  List, 
  Indicator, 
  Viewport, 
  DropMenu, 
  DropMenuTitle, 
  DropMenuDesc 
};