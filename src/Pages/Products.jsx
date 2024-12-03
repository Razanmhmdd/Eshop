

import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} 
from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import Eproduct from '../Components/ProductShowcase/Eproduct'



  const minPrice = 0;
  const maxPrice = 10000;

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Laptops', href: '#' },
  { name: 'Mobile phones', href: '#' },
  { name: 'Tablets', href: '#' },
  { name: 'LED TV', href: '#' },
  { name: 'HeadPhones', href: '#' },
  { name: 'Watches', href: '#' },
]
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true },
    ],
  },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [priceRange, setPriceRange] = useState(40000); // Default value

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href} className="block px-2 py-3">
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                          <MinusIcon aria-hidden="true" className="size-5 [.group:not([data-open])_&]:hidden" />
                        </span>
                        
                      </DisclosureButton>
                    </h3>
                    
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  defaultValue={option.value}
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:checked]:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
                <div className="border-b border-gray-200 py-6 px-4">
  <h3 className="font-medium text-gray-900">Price Range</h3>
  <div className="mt-4">
    {/* Price Range Display */}
    <div className="flex justify-between text-sm text-gray-600">
      <span>Rs.{minPrice}</span>
      <span>Rs.{priceRange}</span>
      <span>Rs.{maxPrice}</span>
    </div>

    {/* Price Range Slider */}
    <input
      type="range"
      min={minPrice}
      max={maxPrice}
      value={priceRange}
      onChange={(e) => setPriceRange(e.target.value)}
      className="w-full mt-2 appearance-none bg-pink-200 h-1 rounded outline-none focus:ring-2 focus:ring-pink-500"
    />
  </div>
</div>

              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-baseline justify-between border-b border-gray-200 pb-6 pt-24 gap-4">
  <h1 className="text-4xl font-bold tracking-tight text-pink-500">Featured Products</h1>
  <div className="relative w-full sm:w-auto">
    <input
      id="id-s03"
      type="search"
      name="id-s03"
      placeholder="Search here"
      aria-label="Search content"
      className="relative w-full h-10 px-4 pr-12 text-sm transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-pink-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-2.5 right-3 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      aria-label="Search icon"
      role="graphics-symbol"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  </div>
  <div className="flex items-star">
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
          Sort
          <ChevronDownIcon
            aria-hidden="true"
            className="mr-24 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {sortOptions.map((option) => (
            <MenuItem key={option.name}>
              <a
                href={option.href}
                className={classNames(
                  option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                  'block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:outline-none',
                )}
              >
                {option.name}
              </a>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>

    <button
      type="button"
      className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
    >
      <span className="sr-only">View grid</span>
      <Squares2X2Icon aria-hidden="true" className="size-5" />
    </button>
    <button
      type="button"
      onClick={() => setMobileFiltersOpen(true)}
      className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
    >
      <span className="sr-only">Filters</span>
      <FunnelIcon aria-hidden="true" className="size-5" />
    </button>
  </div>
</div>


          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-pink-600">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                          <MinusIcon aria-hidden="true" className="size-5 [.group:not([data-open])_&]:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                
                                <input
                                  defaultValue={option.value}
                                  defaultChecked={option.checked}
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:checked]:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label htmlFor={`filter-${section.id}-${optionIdx}`} className="text-sm text-gray-600">
                              {option.label}
                            </label>
                          </div>
                          
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                  
                ))}
           <div className="border-b border-gray-200 py-6">
  <h3 className="font-medium text-gray-900">Price Range</h3>
  <div className="mt-4">
    {/* Price Range Display */}
    <div className="flex justify-between text-sm text-gray-600">
      <span>Rs.{minPrice}</span>
      <span>Rs.{priceRange}</span>
      <span>Rs.{maxPrice}</span>
    </div>

    {/* Price Range Slider */}
    <input
      type="range"
      min={minPrice}
      max={maxPrice}
      value={priceRange}
      onChange={(e) => setPriceRange(e.target.value)}
      className="w-full mt-2 appearance-none bg-pink-200 h-1 rounded outline-none focus:ring-2 focus:ring-pink-500"
    />
  </div>
</div>

              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <Eproduct/>
    <nav role="navigation" aria-label="Pagination Navigation">
  <ul class="flex items-center justify-center text-sm list-none md:gap-1 text-slate-700">
    <li>
      <a href="javascript:void(0)" aria-label="Goto Page 1" class="inline-flex items-center justify-center h-10 gap-4 px-4 text-sm font-medium transition duration-300 rounded focus-visible:outline-none stroke-slate-700 text-slate-700 hover:bg-pink-50 hover:text-pink-500 hover:stroke-pink-500 focus:bg-pink-50 focus:text-pink-600 focus:stroke-pink-600"><span class="order-2">Prev</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 -mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" role="graphics-symbol" aria-labelledby="title-09 desc-09">
          <title id="title-09">Previous page</title>
          <desc id="desc-09">link to previous page</desc>
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </a>
    </li>

    <li>
      <a href="javascript:void(0)" aria-label="Goto Page 3" class="inline-flex items-center justify-center h-10 gap-4 px-4 text-sm font-medium transition duration-300 rounded focus-visible:outline-none stroke-slate-700 text-slate-700 hover:bg-pink-50 hover:text-pink-500 hover:stroke-pink-500 focus:bg-pink-50 focus:text-pink-600 focus:stroke-pink-600"><span>Next </span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 -mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" role="graphics-symbol" aria-labelledby="title-10 desc-10">
          <title id="title-10">Next page</title>
          <desc id="desc-10">link to next page</desc>
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </li>
  </ul>
</nav>
              </div>
            </div>
            
          </section>
        </main>
      </div>
    </div>
  )
}
