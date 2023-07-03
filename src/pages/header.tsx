import React from 'react';
import Image from 'next/image';
import { Fragment, useState } from 'react'
import { Link } from 'react-scroll'
import { Dialog, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="font-sans z-50 bg-white hue-rotate-15 w-screen h-20 fixed shadow-2xl overflow-hidden">
      <nav className="mx-auto h-20 flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="https://uday-cheekatipalli.vercel.app/" className="-m-1.5 p-1.5">
            <span className="sr-only">Uday</span>
            <Image src="/flogo.png" width={150} height={20} alt="Logo" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-black"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
        <Popover className="relative">
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
            </Transition>
          </Popover>
          <Link to="about" spy={true} smooth={true} className="transition ease-in-out duration-500 hover:-translate-1 hover:scale-110 text-md font-semibold leading-6 text-black cursor-pointer">About</Link>
          <Link to="experience" spy={true} smooth={true} className="transition ease-in-out duration-500 hover:-translate-1 hover:scale-110 text-md font-semibold leading-6 text-black cursor-pointer">Experience</Link>
          <Link to="projects" spy={true} smooth={true} className="transition ease-in-out duration-500 hover:-translate-1 hover:scale-110 text-md font-semibold leading-6 text-black cursor-pointer">Projects</Link>
          <Link to="skills" spy={true} smooth={true} className="transition ease-in-out duration-500 hover:-translate-1 hover:scale-110 text-md font-semibold leading-6 text-black cursor-pointer">Skills</Link>
          <Link to="contact" spy={true} smooth={true} className="transition ease-in-out duration-500 hover:-translate-1 hover:scale-110 text-md font-semibold leading-6 text-black cursor-pointer">Contact</Link>
        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed bg-white inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Uday</span>
              <Image src="/flogo.png" width={150} height={20} alt="Logo" priority={false} />
            </a>
            <button
              type="button"
              className="rounded-md p-2.5 text-black"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link to="about" onClick={() => setMobileMenuOpen(false)} spy={true} smooth={true} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-indigo-200 cursor-pointer">About</Link>
                <Link to="experience" onClick={() => setMobileMenuOpen(false)} spy={true} smooth={true} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-indigo-200 cursor-pointer">Experience</Link>
                <Link to="projects" onClick={() => setMobileMenuOpen(false)} spy={true} smooth={true} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-indigo-200 cursor-pointer">Projects</Link>
                <Link to="skills" onClick={() => setMobileMenuOpen(false)} spy={true} smooth={true} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-indigo-200 cursor-pointer">Skills</Link>
                <Link to="contact" onClick={() => setMobileMenuOpen(false)} spy={true} smooth={true} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-indigo-200 cursor-pointer">Contact</Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
