import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoMain from '../assets/icon.png';

import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
} from '@heroicons/react/24/outline'

import './navbar.css';
import '../index.scss';

// const products = [
//   { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
//   { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
//   { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
//   { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
//   { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
// ]

const objects = {
  unit: { name: 'Units', description: 'Units are the characters that players control in the game.', href: '/unit' },
  item: { name: 'Items', description: 'Items are objects that can be picked up and used by units.', href: '/item' },
  destructible: { name: 'Destructibles', description: 'Destructibles are objects that can be destroyed.', href: '/destructible' },
  doodad: { name: 'Doodads', description: 'Doodads are objects that are purely decorative.', href: '/doodad' },
  ability: { name: 'Abilities', description: 'Abilities are the actions that units can perform.', href: '/abilitie' },
  buff: { name: 'Buffs/Effects', description: 'Buffs and effects are temporary changes to units.', href: '/buff' },
  upgrade: { name: 'Upgrades', description: 'Upgrades are permanent changes to units.', href: '/upgrade' },
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="fixed flex top-0 left-0 z-50 h-12 w-full bg-white items-center shadow-md">
        <div className="flex">
          <Link
            to="/"
            className="m-1.5 p-1.5"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img alt="" src={LogoMain} className="h-10 w-auto"/>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => toggleMenu()}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
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
          */}
          {Object.keys(objects).map((key) => (
            // <a key={key} href={objects[key].href} className="text-sm/6 font-semibold text-gray-900">
            //   {objects[key].name}
            // </a>
            <Link
              key={key}
              to={objects[key].href}
              className="nav-link block md:inline-block py-4 md:py-0 px-4 md:px-0"
              onClick={() => toggleMenu(false)}
            >
              {objects[key].name}
            </Link>
          ))}
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <span className="sr-only">Your Company</span>
            <Link
              to="/"
              className="m-1.5 p-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <img alt="" className="h-8 w-auto"/>
            </Link>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* 
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                */}
                {Object.keys(objects).map((key) => (
                  <Link
                    key={key}
                    to={objects[key].href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {objects[key].name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

