import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  ChevronDownIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, easeOut, motion } from "motion/react";
import React, { Fragment } from "react";

const ContactedPersons = () => {
  return (
    <div>
      <h6 className="text-lg font-semibold mb-4 border-b-2 border-[var(--theme)] w-fit pr-4 pb-1">
        Contacted Persons
      </h6>
      <div className="space-y-8">
        <div className="w-full divide-y space-y-6">
          <Disclosure
            as="div"
            className="p-6 rounded-xl bg-white/5 border border-slate-100 shadow-xl"
          >
            {({ open }) => (
              <>
                <DisclosureButton className="group flex w-full items-center justify-between  cursor-pointer">
                  <span className="text-sm/6 font-semimedium text-black group-data-hover:text-black/80">
                    From: Kousik Kayal
                  </span>
                  <ChevronDownIcon className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
                </DisclosureButton>
                <AnimatePresence>
                  {open && (
                    <DisclosurePanel static as={Fragment}>
                      <div className="border-t border-slate-200 mt-4">
                        <motion.div
                          initial={{ opacity: 0, y: -24 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -24 }}
                          transition={{ duration: 0.2, ease: easeOut }}
                          className="origin-top text-sm py-6"
                        >
                          <div>
                            <div className="flex justify-between items-center pb-2">
                              <div className="w-full flex justify-start items-center gap-3">
                                <EnvelopeIcon className="h-4 w-4" />
                                <h6>kousikkayal.73@gmail.com</h6>
                              </div>
                              <div className="w-full flex justify-end items-center gap-3">
                                <PhoneIcon className="h-4 w-4" />
                                <h6>+91 7980566783</h6>
                              </div>
                            </div>
                            <div className="p-4">
                              <h6 className="text-[var(--theme)] text-base">
                                Hola!
                              </h6>
                              <p className="pt-4 text-sm text-black/60">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Alias, ab. Soluta impedit
                                temporibus quaerat at tempora? Minima reiciendis
                                quas vitae, autem dicta ea laudantium iure
                                error, architecto vel delectus magni.
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </DisclosurePanel>
                  )}
                </AnimatePresence>
              </>
            )}
          </Disclosure>
        </div>
        <div className="w-full divide-y space-y-6">
          <Disclosure
            as="div"
            className="p-6 rounded-xl bg-white/5 border border-slate-100 shadow-xl"
          >
            {({ open }) => (
              <>
                <DisclosureButton className="group flex w-full items-center justify-between  cursor-pointer">
                  <span className="text-sm/6 font-semimedium text-black group-data-hover:text-black/80">
                    From: Kousik Kayal
                  </span>
                  <ChevronDownIcon className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180" />
                </DisclosureButton>
                <AnimatePresence>
                  {open && (
                    <DisclosurePanel static as={Fragment}>
                      <div className="border-t border-slate-200 mt-4">
                        <motion.div
                          initial={{ opacity: 0, y: -24 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -24 }}
                          transition={{ duration: 0.2, ease: easeOut }}
                          className="origin-top text-sm py-6"
                        >
                          <div>
                            <div className="flex justify-between items-center pb-2">
                              <div className="w-full flex justify-start items-center gap-3">
                                <EnvelopeIcon className="h-4 w-4" />
                                <h6>kousikkayal.73@gmail.com</h6>
                              </div>
                              <div className="w-full flex justify-end items-center gap-3">
                                <PhoneIcon className="h-4 w-4" />
                                <h6>+91 7980566783</h6>
                              </div>
                            </div>
                            <div className="p-4">
                              <h6 className="text-[var(--theme)] text-base">
                                Hola!
                              </h6>
                              <p className="pt-4 text-sm text-black/60">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Alias, ab. Soluta impedit
                                temporibus quaerat at tempora? Minima reiciendis
                                quas vitae, autem dicta ea laudantium iure
                                error, architecto vel delectus magni.
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </DisclosurePanel>
                  )}
                </AnimatePresence>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default ContactedPersons;
