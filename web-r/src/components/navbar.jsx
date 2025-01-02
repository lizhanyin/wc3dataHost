import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import store from '../state/store'

import LogoMain from '../assets/icon.png';

import { Navbar, Modal, Button, Card, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './navbar.css';
import '../index.scss';
import UnitImg from "./objects/assets/objecteditor-customunit.png";
import ItemImg from "./objects/assets/objecteditor-customitem.png";
import DestructibleImg from "./objects/assets/objecteditor-customdestructible.png";
import DoodadImg from "./objects/assets/objecteditor-customdoodad.png";
import AbilityImg from "./objects/assets/objecteditor-customability.png";
import BuffImg from "./objects/assets/objecteditor-customability.png";
import UpgradeImg from "./objects/assets/objecteditor-customupgrade.png";

// const products = [
//   { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
//   { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
//   { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
//   { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
//   { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
// ]

const objects = {
  unit: { name: 'Units', description: 'Units are the characters that players control in the game.', href: '/unit', img: UnitImg },
  item: { name: 'Items', description: 'Items are objects that can be picked up and used by units.', href: '/item', img: ItemImg },
  destructible: { name: 'Destructibles', description: 'Destructibles are objects that can be destroyed.', href: '/destructible', img: DestructibleImg },
  doodad: { name: 'Doodads', description: 'Doodads are objects that are purely decorative.', href: '/doodad', img: DoodadImg },
  ability: { name: 'Abilities', description: 'Abilities are the actions that units can perform.', href: '/abilitie', img: AbilityImg }, 
  buff: { name: 'Buffs/Effects', description: 'Buffs and effects are temporary changes to units.', href: '/buff', img: BuffImg },
  upgrade: { name: 'Upgrades', description: 'Upgrades are permanent changes to units.', href: '/upgrade', img: UpgradeImg },
}

export default function AppNavbar() {

  const build = store.build;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const globalState = useSelector((state) => state.global);
  const navTitle = globalState.navTitle || {name: "WC3 Data", href: "/"};

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <Navbar className="app-navbar"  bg="light" expand="lg" expanded={mobileMenuOpen}>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand'>
              <span className="AppIcon" />
              {!build ? <span className='TitleText'>WC3 Data</span> : <span></span>}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => toggleMenu()}/>
          {!!build && <Navbar.Collapse>
            {/* <WithData id={build}>
              <DataMenu/>
            </WithData> */}
          </Navbar.Collapse>}
        </Container>
      </Navbar>
{/*         
        <PopoverGroup className="hidden lg:flex lg:gap-x-5">
          {/*
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              Product
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          

          { navTitle.href === '/' ? (
            <Link
              to="/"
              className="block md:inline-block py-4 md:py-0 px-4 md:px-0"
              onClick={() => toggleMenu(false)}
            >
              {navTitle.name}
          </Link>
            ) : (
              <>
                <Link
                  to="/"
                  className="block md:inline-block py-4 md:py-0 px-4 md:px-0"
                  onClick={() => toggleMenu(false)}
                >
                  {navTitle.name}
                </Link>

                {Object.keys(objects).map((key) => (
                  <div key={key} className="group relative flex items-center gap-x-1 rounded-lg">
                    <div className="flex size-6 flex-none items-center justify-center rounded-lg bg-gray-50">
                      <img alt="" src={objects[key].img} className="size-5 group-hover:text-indigo-600"/>
                    </div>
                    <div className="flex-auto">
                      <Link
                        key={key}
                        to={objects[key].href}
                        className="nav-link block text-blue-400 md:inline-block py-4 md:py-0 px-4 md:px-0"
                        onClick={() => toggleMenu(false)}
                      >
                        {objects[key].name}
                      </Link>
                    </div>
                  </div>
                ))}
              </>
            )
          }
        </PopoverGroup> */}

    </>
  )
}

