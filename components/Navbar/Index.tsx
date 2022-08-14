import React, { Fragment, useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dialog, Transition } from '@headlessui/react';

const navItems = [
  {
    title: 'About us',
    path: '/about_us',
  },
  {
    title: 'What we do',
    path: '/what_we_do',
  },
  {
    title: 'Our work',
    path: '/our_work',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
  {
    title: 'Say hi',
    path: '/hello',
  },
];

export const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let offset = 50;
    function onScroll() {
      if (!isSticky && window.scrollY > offset) {
        setIsSticky(true);
      } else if (isSticky && window.scrollY <= offset) {
        setIsSticky(false);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isSticky]);

  return (
    <div
      id="navbar"
      className={clsx(
        'fixed inset-x-0 top-0 z-40 h-16 transition-colors duration-300',
        isSticky || router.asPath !== '/'
          ? 'border-b border-slate-200 bg-white'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-screen-lg py-4 px-4 md:px-8">
        <div className=" flex flex-wrap justify-between items-center">
          <Link href="/">
            <h1 className="font-semibold text-2xl text-[#0A142F]">
              Rea<span className="text-[#FFC93E]">c</span>t
            </h1>
          </Link>

          <div className="md:flex">
            <nav className="hidden font-semibold  text-gray-900  md:block">
              <ul className="flex space-x-10">
                {navItems.map((item) => (
                  <li className="relative" key={item.title}>
                    <Link href={item.path}>
                      <a className="text-sm">{item.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex justify-between items-center space-x-4 pl-6 md:space-x-6">
            {/* <GithubIcon className="fill-gray-600 hover:fill-indigo-600 dark:fill-gray-400 dark:hover:fill-indigo-400" /> */}
            <MenuPopOver display="flex" />
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuPopOver = ({ display }: { display: string }) => {
  let [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div className={display}>
      <button aria-label="Navigation Menu" onClick={() => setIsOpen(!isOpen)}>
        <svg
          className="h-6 w-6 hover:stroke-indigo-600 dark:hover:stroke-indigo-400"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <Transition
        show={isOpen}
        appear
        as={Fragment}
        enter="transform transition ease-in-out duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition ease-in-out duration-300 delay-200"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <Dialog
          as="div"
          className={clsx('fixed inset-0 z-50 ', display)}
          onClose={setIsOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300 delay-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed top-0 bottom-0 left-0 w-full max-w-xs rounded-r-2xl bg-white p-6 shadow-lg dark:bg-gray-800 ">
            <a className="mx-auto mt-4">
              <h1 className="font-semibold text-2xl text-[#0A142F]">
                Rea<span className="text-[#FFC93E]">c</span>t
              </h1>
            </a>

            <ul className="mt-16 space-y-6">
              {navItems.map((item) => (
                <li className="relative" key={item.title}>
                  <Link href={item.path}>
                    <a
                      onClick={() => setIsOpen(false)}
                      className={clsx(
                        'peer block text-lg font-semibold transition-all duration-150 hover:text-indigo-500',
                        router.asPath === item.path ? 'text-indigo-500' : ''
                      )}
                    >
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>

            <button
              aria-label="Close Navigation Menu"
              className="absolute top-5 right-5"
              onClick={() => setIsOpen(false)}
            >
              <svg viewBox="0 0 10 10" className="h-4 w-4" aria-hidden="true">
                <path
                  d="M0 0L10 10M10 0L0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
