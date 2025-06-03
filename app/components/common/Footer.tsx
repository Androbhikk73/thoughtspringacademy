import React from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white drop-shadow-2xl pt-10 bottom-0  left-0 w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-white">
        {/* <div className="bg-[var(--theme)] p-1.5 rounded w-fit">
          <Image
            alt="Thought Spring Academy"
            src={`/assets/logo.png`}
            width={40}
            height={40}
            className="w-9 h-9"
          />
        </div> */}
        <div className="block md:grid grid-cols-2 gap-6">
          <div className="order-first px-4 md:px-0 md:order-last">
            <h6 className="pb-3 font-semibold">Social Profiles</h6>
            <div className="flex space-x-3">
              <Link href="">
                <Image
                  alt="Facebook"
                  src={`/assets/social/facebook.png`}
                  width={40}
                  height={40}
                  className="w-9 h-9"
                />
              </Link>
              <Link href="">
                <Image
                  alt="Linkedin"
                  src={`/assets/social/linkedin.png`}
                  width={40}
                  height={40}
                  className="w-9 h-9"
                />
              </Link>
            </div>
          </div>
          <div className="space-y-4 py-8 px-4 md:px-0">
            <div className="block sm:flex items-center space-x-2">
              <EnvelopeIcon aria-hidden="true" className="block size-5" />
              <h6 className="text-sm">
                <Link href="mailto:hello@thoughtspringacademy.com">
                  hello@thoughtspringacademy.com
                </Link>
              </h6>
            </div>
            <div className="block sm:flex items-center space-x-2">
              <PhoneIcon aria-hidden="true" className="block size-5" />

              <h6 className="text-sm">
                <Link href="tel:0000000000">+91 0000000000</Link>
              </h6>
            </div>
            <div className="block sm:flex items-center space-x-2">
              <MapPinIcon aria-hidden="true" className="block size-5" />
              <h6 className="text-sm cursor-pointer">
                Bansdroni, Kolkata, India
              </h6>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-t-slate-200 pt-10 pb-6 text-center">
          <h6 className="text-xs">
            &copy; 2025 Thought Spring Academy. All rights reserved.
          </h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
