import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-[0_4px_70px_0_rgba(0,0,0,0.05)]">
      <nav
        className="mx-auto flex container items-center justify-between p-6 md:px-8 lg:max-w-[83rem]"
        aria-label="Global"
      >
        <div className="flex ">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="w-auto h-8" src="/images/Logo.svg" alt="" />
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-12 ">
          <NavLink
            to="#"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Про нас
          </NavLink>

          <NavLink
            to="#"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Преимущества
          </NavLink>
          <NavLink
            to="#"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Хиты продаж
          </NavLink>
          <NavLink
            to="#"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Модельный ряд
          </NavLink>
          <NavLink
            to="#"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Наши кейсы
          </NavLink>
          <NavLink
            to="#"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Продукты
          </NavLink>
        </Popover.Group>
        <div className="hidden lg:flex lg:justify-end lg:items-center ">
          <Link to="#" className="mr-2">
            <img src="/images/Whatsapp.svg" alt="whatsapp icon" />
          </Link>
          <Link to="#">
            <img src="/images/Instagram.svg" alt="instagram icon" />
          </Link>
          <p className="h-5 mx-2 border-r border-gray-300"></p>
          <button className="border-primary border-2 rounded-full py-2.5 px-4 text-dark-200">
            Заказать звонок
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 " />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink to="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="w-auto h-8" src="/images/Logo.svg" alt="" />
            </NavLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root h-full mt-6">
            <div className="flex flex-col justify-between h-full -my-6">
              <div className="py-6 space-y-2 text-3xl">
                <NavLink
                  to="#"
                  className="block px-3 py-2 -mx-3 font-medium leading-7 rounded-lg text-dark-400 hover:bg-gray-50 "
                >
                  Про нас
                </NavLink>
                <NavLink
                  to="#"
                  className="block px-3 py-2 -mx-3 font-medium leading-7 rounded-lg text-dark-400 hover:bg-gray-50"
                >
                  Преимущества
                </NavLink>
                <NavLink
                  to="#"
                  className="block px-3 py-2 -mx-3 font-medium leading-7 rounded-lg text-dark-400 hover:bg-gray-50"
                >
                  Хиты продаж
                </NavLink>
                <NavLink
                  to="#"
                  className="block px-3 py-2 -mx-3 font-medium leading-7 rounded-lg text-dark-400 hover:bg-gray-50"
                >
                  Модельный ряд
                </NavLink>
                <NavLink
                  to="#"
                  className="block px-3 py-2 -mx-3 font-medium leading-7 rounded-lg text-dark-400 hover:bg-gray-50"
                >
                  Наши кейсы
                </NavLink>
                <NavLink
                  to="#"
                  className="block px-3 py-2 -mx-3 font-medium leading-7 rounded-lg text-dark-400 hover:bg-gray-50"
                >
                  Продукты
                </NavLink>
              </div>
              <div className="py-6 space-y-4">
                <div className="flex items-center">
                  <Link to="#" className="mr-3">
                    <img src="/images/whatsapp-black.svg" alt="whatsapp icon" />
                  </Link>
                  <Link to="#">
                    <img
                      src="/images/instagram-black.svg"
                      alt="instagram icon"
                    />
                  </Link>
                  <p className="mx-3 border-r border-black h-7"></p>
                  <span className="text-lg font-medium text-dark-400">
                    +996 (997) 91-91-70
                  </span>
                </div>
                <button className="border-primary border-2 rounded-lg py-2.5 px-4 text-dark-200">
                  Заказать звонок
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
