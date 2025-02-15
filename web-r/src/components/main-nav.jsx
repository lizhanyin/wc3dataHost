import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Routes, Route, useParams } from 'react-router-dom';
import { useData } from "@/hooks";
import * as Nav from "@/components/ui";
import { objectTypes } from "@/components/app";

import AbilityIcon from "@/components/app/objects/assets/objecteditor-customability.png";
import BuffIcon from "@/components/app/objects/assets/objecteditor-customability.png";
import DestructibleIcon from "@/components/app/objects/assets/objecteditor-customdestructible.png";
import DoodadIcon from "@/components/app/objects/assets/objecteditor-customdoodad.png";
import ItemIcon from "@/components/app/objects/assets/objecteditor-customitem.png";
import UnitIcon from "@/components/app/objects/assets/objecteditor-customunit.png";
import UpgradeIcon from "@/components/app/objects/assets/objecteditor-customupgrade.png";

const Icon = ({className, name, ...props}) => {
  let Icon = AbilityIcon;
  switch (name) {
    case "ability":
      Icon = AbilityIcon;
      break;
    case "buff":
      Icon = BuffIcon;
      break;
    case "destructible":
      Icon = DestructibleIcon;
      break;
    case "doodad":
      Icon = DoodadIcon;
      break;
    case "item":
      Icon = ItemIcon;
      break;
    case "unit":
      Icon = UnitIcon;
      break;
    case "upgrade":
      Icon = UpgradeIcon;
      break;
  }
  return <img src={Icon} className={className} {...props}/>;
}

const ObjectMenuInner = () => {
  const { build, type } = useParams();
  return (
    <Nav.Item>
      <Nav.Trigger className="bg-blue-ghost" icon={true} iconClassName={""}>
        Objects{" "}
      </Nav.Trigger>
      <Nav.Content>
        <Nav.DropMenuList>
          {Object.keys(objectTypes).map(t => (
            <Nav.DropMenu key={t} to={`/${build}/${t}`}>
              <Nav.DropMenuTitle event-key={`objects.${t}`} className="flex">
                <Icon key={t} name={t} className="mr-1.5"/>{objectTypes[t]}
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
  const data = useData();
  if (!data)
    return <></>;

  return (
    <Nav.Root className="flex gap-2 md:gap-2">
      <Nav.List>
        <Nav.ItemLink to={`/${data.id}`} className="bg-blue-4 dark:bg-blue-4">{data.name}</Nav.ItemLink>
        <Nav.ItemLink to={`/${data.id}/files`}>Files</Nav.ItemLink>
        {(!data.isMap || data.hasFile("objects.json")) &&
          <Routes><Route path="/:type?/*" element={<ObjectMenuInner/>}></Route></Routes>
        }
        {(!!data.isMap) && (
          <Nav.ItemLink to={`/${data.id}/map`}>Map</Nav.ItemLink>
        )}
        <Nav.ItemLink to={`/${data.id}/script`}>Script</Nav.ItemLink>
        <Nav.Indicator/> 
      </Nav.List>
      <Nav.Viewport className="shadow-[0_10px_38px_-10px]"/>
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