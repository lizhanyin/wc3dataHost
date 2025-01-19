import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import store from "@/store/store";
import * as Nav from "@/components/ui"
export function MainNav() {
  
  const globalState = useSelector((state) => state.global);
  console.log(globalState.mainNav);

  return (
    <>

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
      <Nav.Root className="flex gap-2 md:gap-2">
        <Nav.List className=""> {/* shadow-[0_2px_10px] shadow-blackA4 */}
          <Nav.Item>
            <Nav.Trigger className="bg-blue-ghost">
              <Nav.Link to="/" className="">
                Home
              </Nav.Link>
            </Nav.Trigger>
          </Nav.Item>

          <Nav.Item>
            <Nav.Trigger className="bg-blue-ghost	" icon={true} iconClassName={""}>
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
            <Nav.Trigger className="bg-blue-ghost	">
              <Nav.Link to="/" className="">
                Script
              </Nav.Link>
            </Nav.Trigger>
          </Nav.Item>

          <Nav.Indicator className=""/> 
        </Nav.List>

        <Nav.Viewport className="bg-blue-app shadow-[0_2px_10px] shadow-blackA4"/>
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