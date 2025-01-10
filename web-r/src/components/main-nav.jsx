import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { CaretDownIcon } from "@radix-ui/react-icons";

import * as Nav from "@/components/ui"
import { Icons } from "@/components/icons"
import { siteConfig } from "@/config/site"

export function MainNav({ items }) {
  console.log(items);
  return (
    <>
      <div className="flex gap-2 md:gap-2">
        <Nav.Link to="/" className="text-xl">
          <Icons.logo className="size-9" />
        </Nav.Link>
        <Nav.Link to="/" className="text-xl">
          {siteConfig.name}
        </Nav.Link>
  {/* 
        {items?.length ? (
          <nav className="flex gap-6 px-3">
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    to={item.href}
                    className={cn(
                      "flex items-center font-medium text-muted-foreground",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </nav>
        ) : null}
        */}
      </div>
      <Nav.Root className="flex gap-2 md:gap-2">
        <Nav.List className=""> {/* shadow-[0_2px_10px] shadow-blackA4 */}
          <Nav.Item>
            <Nav.Trigger className="">
              <Nav.Link to="/" className="">
                Home
              </Nav.Link>
            </Nav.Trigger>
          </Nav.Item>

          <Nav.Item>
            <Nav.Trigger className="" icon={true} iconClassName={""}>
              Objects{" "}
            </Nav.Trigger>
            <Nav.Content className="">
              <Nav.DropMenuList className="">
                <Nav.DropMenu to="/">
                  <Nav.DropMenuTitle>Introduction</Nav.DropMenuTitle>
                  <Nav.DropMenuDesc>Build high-quality, accessible design systems and web apps.</Nav.DropMenuDesc>
                </Nav.DropMenu>

                <Nav.DropMenu to="/">
                  <Nav.DropMenuTitle>Getting started</Nav.DropMenuTitle>
                  <Nav.DropMenuDesc>A quick tutorial to get you up and running with Radix Primitives.</Nav.DropMenuDesc>
                </Nav.DropMenu>
              </Nav.DropMenuList>
            </Nav.Content>
          </Nav.Item>

          <Nav.Item>
            <Nav.Trigger className="">
              <Nav.Link to="/" className="">
                Script
              </Nav.Link>
            </Nav.Trigger>
          </Nav.Item>

          <Nav.Indicator className=""/> 
        </Nav.List>

        <Nav.Viewport className=""/>
      </Nav.Root>
    </>
  )
}

MainNav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      title: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ),
};