"use client";

import Image from "next/image";
import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "@/app/globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "#" },
  { name: "Student's Corner", href: "#" },
  { name: "Registration", href: "#" },
  { name: "Career", href: "#" },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join("");
}

const NavBar = () => {
  const pathname = usePathname();

  return (
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
                <Image
                  alt="Thought Spring Academy"
                  src={`/assets/logo.png`}
                  width={22}
                  height={22}
                  className="w-5 h-5"
                />
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
                      item.href == pathname ? "bg-[var(--hover)] rounded" : "",
                      " text-sm px-3.5 py-2.5"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className="bg-[var(--theme)] text-white text-sm px-5 py-2 rounded">
              <Link href="/login">Login</Link>
            </button>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 py-4 rounded-bl-2xl rounded-br-2xl shadow-2xl">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.href == pathname ? "page" : undefined}
              className={classNames(
                item.href == pathname ? "bg-[var(--hover)] rounded w-full" : "",
                " text-sm px-3.5 py-2.5"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default NavBar;
