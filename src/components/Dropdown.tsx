'use client'
import dropdownMenuItemsData from '@/data/dropdownMenuItemsData'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { TbGridDots } from 'react-icons/tb'

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(' ')
// }

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full items-center justify-center gap-x-6 bg-eastbay px-3 py-2 text-xl font-semibold text-white shadow-sm hover:bg-jacarta">
          <TbGridDots />
          Shop Categories
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-white"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 w-64 origin-top-right bg-eastbay align-middle shadow-lg focus:outline-none">
          <div className="py-0">
            {dropdownMenuItemsData.map((data) => (
              <Menu.Item
                key={data.id}
                as="a"
                href="#"
                className="text-md block border-b-2 border-jacarta px-4 py-2 
                ui-active:bg-jacarta  
                ui-active:text-white  
                ui-not-active:bg-eastbay 
                ui-not-active:text-white"
              >
                {data.text}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
