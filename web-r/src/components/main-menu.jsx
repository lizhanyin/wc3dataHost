import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  // DropdownMenuItem,
  // DropdownMenuSub,
  // DropdownMenuSubTrigger,
  // DropdownMenuSubContent,
  // DropdownMenuSeparator,
  // DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuArrow,
  // DropdownMenuIcon
} from "@/components/ui/dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useTheme } from "@/hooks/use-theme"

export function MainMenu() {

  const { theme, setTheme } = useTheme()
  // const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  // const [urlsChecked, setUrlsChecked] = React.useState(false);

  return (
    <DropdownMenu className="z-99">
      <DropdownMenuTrigger asChild>
        <button
          className="inline-flex size-[20px] items-center justify-center rounded-full bg-whitea-12 dark:bg-blacka-12 shadow-[0_2px_10px] shadow-blacka-4 dark:shadow-whitea-4 outline-none hover:bg-blue-3 dark:hover:bg-bluedark-3 focus:shadow-[0_0_0_2px] focus:shadow-blacka-1 dark:focus:shadow-whitea-1"
          aria-label="Customise options"
        >
          <HamburgerMenuIcon />
        </button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="" sideOffset={5} >
      {/* 
        <DropdownMenuItem className="group">
          New{" "}
          <DropdownMenuIcon>
            ⌘+N
          </DropdownMenuIcon>
        </DropdownMenuItem>
        
        <DropdownMenuItem
          className="group"
          disabled
        >
          New Private Window{" "}
          <DropdownMenuIcon>
            ⇧+⌘+N
          </DropdownMenuIcon>
        </DropdownMenuItem> 

        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="group">
            More Tools
          </DropdownMenuSubTrigger>

          <DropdownMenuSubContent
            className=""
            sideOffset={2}
            alignOffset={-5}
          >
            <DropdownMenuItem className="group">
              Save Page As…{" "}
              <DropdownMenuIcon>
                ⌘+S
              </DropdownMenuIcon>
            </DropdownMenuItem>
            <DropdownMenuItem className="">
              Create Shortcut…
            </DropdownMenuItem>
            <DropdownMenuItem className="">
              Name Window…
            </DropdownMenuItem>
            <DropdownMenuSeparator className="" />
            <DropdownMenuItem className="">
              Developer Tools
            </DropdownMenuItem>
          </DropdownMenuSubContent>

        </DropdownMenuSub>
        
        <DropdownMenuSeparator className="" />

        <DropdownMenuCheckboxItem
          className="group"
          checked={bookmarksChecked}
          onCheckedChange={setBookmarksChecked}
        >
          Show Bookmarks{" "}
          <DropdownMenuIcon>
            ⌘+B
          </DropdownMenuIcon>
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          className=""
          checked={urlsChecked}
          onCheckedChange={setUrlsChecked}
        >
          Show Full URLs
        </DropdownMenuCheckboxItem>
        
        <DropdownMenuSeparator />
        */}
        <DropdownMenuLabel className="">
          Theme
        </DropdownMenuLabel>
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          <DropdownMenuRadioItem className="" value="light">
            Light
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="" value="dark">
            Dark
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="" value="system">
            System
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>

        <DropdownMenuArrow className="" />
      </DropdownMenuContent>
      
    </DropdownMenu>
  );
};
