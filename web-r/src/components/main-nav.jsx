import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import store from "@/store/store";
import { useData } from "@/hooks";
import * as Nav from "@/components/ui"
export function MainNav() {
  
  const globalState = useSelector((state) => state.global);
  // console.log(globalState.mainNav);
  const data = useData();
  if (!data)
    return <></>;
  console.log(data);
  return (
    <>
      <Nav.Root className="flex gap-2 md:gap-2">
        <Nav.List>
          <Nav.Item>
            <Nav.Trigger className="bg-blue-ghost bg-blue-4">
              <Nav.Link to={`/${data.id}`}>
                {data.name}
              </Nav.Link>
            </Nav.Trigger>
          </Nav.Item>
          <Nav.Item>
            <Nav.Trigger className="bg-blue-ghost">
              <Nav.Link to={`/${data.id}/files`}>
                Files
              </Nav.Link>
            </Nav.Trigger>
          </Nav.Item>
          <Nav.Item>
            <Nav.Trigger className="bg-blue-ghost	" icon={true} iconClassName={""}>
              Objects{" "}
            </Nav.Trigger>
            <Nav.Content>
              <Nav.DropMenuList>
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
              <Nav.Link to="/">
                Script
              </Nav.Link>
            </Nav.Trigger>
          </Nav.Item>

          <Nav.Indicator/> 
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