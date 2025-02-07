import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Separator from "@radix-ui/react-separator";

import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";

export function MainMenu() {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="inline-flex size-[35px] items-center justify-center rounded-full bg-whitea-1 shadow-[0_2px_10px] shadow-blacka-4 outline-none hover:bg-blue-3 focus:shadow-[0_0_0_2px] focus:shadow-blacka-1"
          aria-label="Customise options"
        >
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] rounded-md bg-whitea-1 p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
          sideOffset={5}
        >
          <DropdownMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-9 data-[disabled]:text-gray-8 data-[highlighted]:text-blue-1">
            New{" "}
            <div className="ml-auto pl-5 text-gray-11 group-data-[disabled]:text-gray-8 group-data-[highlighted]:text-whitea-1">
              ⌘+N
            </div>
          </DropdownMenu.Item>
          {/* 
          <DropdownMenu.Item
            className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-9 data-[disabled]:text-gray-8 data-[highlighted]:text-blue-1"
            disabled
          >
            New Private Window{" "}
            <div className="ml-auto pl-5 text-gray-11 group-data-[disabled]:text-gray-8 group-data-[highlighted]:text-whitea-1">
              ⇧+⌘+N
            </div>
          </DropdownMenu.Item> 
          */}
          {/* 
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-9 data-[highlighted]:data-[state=open]:bg-blue-9 data-[state=open]:bg-violet4 data-[disabled]:text-gray-8 data-[highlighted]:data-[state=open]:text-blue-1 data-[highlighted]:text-blue-1 data-[state=open]:text-violet11">
              More Tools
              <div className="ml-auto pl-5 text-gray-11 group-data-[disabled]:text-gray-8 group-data-[highlighted]:text-whitea-1">
                <ChevronRightIcon />
              </div>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent
                className="min-w-[220px] rounded-md bg-whitea-1 p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
                sideOffset={2}
                alignOffset={-5}
              >
                <DropdownMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-9 data-[disabled]:text-gray-8 data-[highlighted]:text-blue-1">
                  Save Page As…{" "}
                  <div className="ml-auto pl-5 text-gray-11 group-data-[disabled]:text-gray-8 group-data-[highlighted]:text-whitea-1">
                    ⌘+S
                  </div>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-9 data-[disabled]:text-gray-8 data-[highlighted]:text-blue-1">
                  Create Shortcut…
                </DropdownMenu.Item>
                <DropdownMenu.Item className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-9 data-[disabled]:text-gray-8 data-[highlighted]:text-blue-1">
                  Name Window…
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="m-[5px] h-px bg-blue-6" />
                <DropdownMenu.Item className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-9 data-[disabled]:text-gray-8 data-[highlighted]:text-blue-1">
                  Developer Tools
                </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
          */}
          <DropdownMenu.Separator className="m-[5px] h-px bg-blue-6" />
          
          {/* 
          <DropdownMenu.CheckboxItem
            className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-9 data-[disabled]:text-gray-8 data-[highlighted]:text-blue-1"
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Bookmarks{" "}
            <div className="ml-auto pl-5 text-gray-11 group-data-[disabled]:text-gray-8 group-data-[highlighted]:text-whitea-1">
              ⌘+B
            </div>
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem
            className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-9 data-[disabled]:text-gray-8 data-[highlighted]:text-blue-1"
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Full URLs
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.Separator className="m-[5px] h-px bg-blue-6" />
          */}
          <DropdownMenu.Label className="pl-[25px] text-xs leading-[25px] text-gray-11">
            Theme
          </DropdownMenu.Label>
          <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenu.RadioItem
              className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-9 data-[disabled]:text-gray-8 data-[highlighted]:text-blue-1"
              value="pedro"
            >
              <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
              Pedro Duarte
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem
              className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-9 data-[disabled]:text-gray-8 data-[highlighted]:text-blue-1"
              value="colm"
            >
              <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
              Colm Tuite
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>

          <DropdownMenu.Arrow className="fill-blue-1" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  
    </>
  );
};
