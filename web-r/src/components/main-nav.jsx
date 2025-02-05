import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Routes, Route } from 'react-router-dom';
import store from "@/store/store";
import { useData } from "@/hooks";
import * as Nav from "@/components/ui";
import objectTypes from "@/components/app/objects/types";

const ObjectMenuInner = () => {
  const { build, type } = useParams();
  return (
    <Nav.Item>
      <Nav.Trigger className="bg-blue-ghost	" icon={true} iconClassName={""}>
        Objects{" "}
      </Nav.Trigger>
      <Nav.Content>
        <Nav.DropMenuList>
          {Object.keys(objectTypes).map(t => (
            <Nav.DropMenu key={t} to={`/${build}/${t}`}>
              <Nav.DropMenuTitle eventKey={`objects.${t}`}>
                <span className={`ObjectIcon ${t}`} />{objectTypes[t]}
              </Nav.DropMenuTitle>
              <Nav.DropMenuDesc></Nav.DropMenuDesc>
            </Nav.DropMenu>
          ))}
        </Nav.DropMenuList>
      </Nav.Content>
    </Nav.Item>
  )
};

export function MainNav() {
  const globalState = useSelector((state) => state.global);
  // console.log(globalState.mainNav);
  const data = useData();
  if (!data)
    return <></>;

  return (
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
        {(!data.isMap || data.hasFile("objects.json")) &&
          <Routes><Route path="/:type?/*" element={<ObjectMenuInner/>}></Route></Routes>
        }

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