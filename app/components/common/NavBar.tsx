"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "@/app/globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Student's Corner", href: "#" },
  { name: "Registration", href: "/registration" },
  { name: "Career", href: "#" },
];

const userNavigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join("");
}

const NavBar = () => {
  const pathname = usePathname();
  const [logged, setLogged] = useState(false);

  return (
    <div className="bg-white w-full">
      <Disclosure as="nav">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset hover:cursor-pointer">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars2Icon
                  aria-hidden="true"
                  className="block size-6 group-data-open:hidden "
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-open:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <div className="bg-[var(--theme)] p-1.5 rounded">
                  <Link href="/">
                    <Image
                      alt="Thought Spring Academy"
                      src={`/assets/logo.png`}
                      width={22}
                      height={22}
                      className="w-5 h-5"
                    />
                  </Link>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={item.href == pathname ? "page" : undefined}
                      className={classNames(
                        item.href == pathname
                          ? "bg-[var(--hover)] rounded"
                          : "",
                        " text-sm px-3.5 py-2.5"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 cursor-pointer">
              {logged ? (
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full text-sm  cursor-pointer">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <Image
                        alt="profile"
                        src={`/assets/profile.png`}
                        width={32}
                        height={32}
                        className="size-8 rounded-full border border-black"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                        >
                          {item.name}
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              ) : (
                <Link href="/login">
                  <button className="bg-[var(--theme)] text-white text-sm px-5 py-2 rounded">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 py-4 rounded-bl-2xl rounded-br-2xl shadow-2xl w-full grid">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.href == pathname ? "page" : undefined}
                className={classNames(
                  item.href == pathname
                    ? "bg-[var(--hover)] rounded w-full"
                    : "",
                  " text-sm px-3.5 py-2.5"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export default NavBar;
