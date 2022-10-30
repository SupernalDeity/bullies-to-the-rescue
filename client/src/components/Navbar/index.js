import React, { useState } from 'react';
import Auth from '../../utils/auth';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Available Dogs', href: '/Dogs', current: false },
  { name: 'Contact Us', href: '/Contact', current: false },
  { name: 'Login', href: '/Login', current: false },
  { name: 'Signup', href: '/Signup', current: false },
  { name: 'Donate', href: 'https://www.paypal.com/donate/?hosted_button_id=3LXX39ST38LVL&source=url', current: false },
]
const navigationLoggedin = [
  { name: 'Home', href: '/', current: false },
  { name: 'Available Dogs', href: '/Dogs', current: false },
  { name: 'Apply', href: '/Apply', current: false },
  { name: 'Contact Us', href: '/Contact', current: false },
  { name: 'View Applications', href: '/applications', current: false },
  { name: 'Logout', href: '/Login', current: false },
  { name: 'Donate', href: 'https://www.paypal.com/donate/?hosted_button_id=3LXX39ST38LVL&source=url', current: false },
]

function classNames(...classes) {
  let classList = classes.filter(Boolean).join(' ');
  console.log(classList);
  return classList;
}

function Navbar() {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  if (Auth.loggedIn()) {
    return (<Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className='lg:flex lg:justify-center'>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src="https://iconarchive.com/download/i107369/google/noto-emoji-animals-nature/22264-paw-prints.ico"
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src="https://iconarchive.com/download/i107369/google/noto-emoji-animals-nature/22264-paw-prints.ico"
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigationLoggedin.map((item) =>
                        item.name === "Logout" ?
                          <button
                            key={item.name}
                            onClick={Auth.logout}
                            className={classNames(
                              item.href.toLowerCase() === currentPage.toLowerCase() ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-md font-medium'
                            )}
                            aria-current={item.href.toLowerCase() === currentPage.toLowerCase() ? 'page' : undefined}
                          >
                            {item.name}
                          </button>
                          : <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.href.toLowerCase() === currentPage.toLowerCase() ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-md font-medium'
                            )}
                            aria-current={item.href.toLowerCase() === currentPage.toLowerCase() ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigationLoggedin.map((item) => {
                  return (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.href.toLowerCase() === currentPage.toLowerCase() ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.href.toLowerCase() === currentPage.toLowerCase() ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  )
                })}
              </div>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
    );
  }

  // If logged out show login controls
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className='lg:flex lg:justify-center'>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src="https://iconarchive.com/download/i107369/google/noto-emoji-animals-nature/22264-paw-prints.ico"
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src="https://iconarchive.com/download/i107369/google/noto-emoji-animals-nature/22264-paw-prints.ico"
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.href.toLowerCase() === currentPage.toLowerCase() ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-md font-medium'
                          )}
                          aria-current={item.href.toLowerCase() === currentPage.toLowerCase() ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => {
                  return (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.href.toLowerCase() === currentPage.toLowerCase() ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.href.toLowerCase() === currentPage.toLowerCase() ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  )
                })}
              </div>
            </Disclosure.Panel>
          </div>
        </>
      )}

    </Disclosure>
  )
}
export default Navbar