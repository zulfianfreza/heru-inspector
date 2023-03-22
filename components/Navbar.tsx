"use client";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
    return (
        <>
            <div className=" w-full py-3 lg:py-4 text-white text-[16px] lg:text-[24px] bg-primary flex items-center">
                <marquee>
                    inpeksi kendaraan berkualitas & berpengalaman ! inpeksi
                    kendaraan berkualitas & berpengalaman ! inpeksi kendaraan
                    berkualitas & berpengalaman !
                </marquee>
            </div>
            <div className=" px-5 lg:px-10 flex justify-between items-center py-[30px]">
                <Image src="/logo.png" height={80} width={250} alt="logo" />
                <nav className=" gap-x-9 text-lg items-center text-[24px] hidden lg:flex">
                    <Link
                        href=""
                        className=" text-secondary-dark py-[15px] px-2.5 bg-secondary-lighten border-b-[2px] border-b-secondary"
                    >
                        Home
                    </Link>
                    <Link
                        href=""
                        className=" text-yankess py-[15px] px-2.5 hover:bg-secondary-lighten duration-300 transition-all border-b-[2px] border-b-white hover:border-b-secondary hover:text-secondary-dark"
                    >
                        Our Service
                    </Link>
                    <Link
                        href=""
                        className=" text-yankess py-[15px] px-2.5 hover:bg-secondary-lighten duration-300 transition-all border-b-[2px] border-b-white hover:border-b-secondary hover:text-secondary-dark"
                    >
                        How Heru Work
                    </Link>
                    <Link
                        href=""
                        className=" bg-secondary-light text-yankess px-5 py-2.5 flex rounded-full items-center gap-x-4"
                    >
                        <Image
                            src="/contact.png"
                            height={40}
                            width={40}
                            alt="wa"
                        />
                        Contact Heru Inspector
                    </Link>
                </nav>
                <Menu
                    as="div"
                    className="relative inline-block lg:hidden text-left"
                >
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-primary p-3 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                            <Image
                                src="/menu.png"
                                height={17}
                                width={21}
                                alt=""
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
                        <Menu.Items className="absolute right-0 mt-2 w-80 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="p-2 space-y-2 ">
                                <Menu.Item>
                                    <button
                                        className={`
                                                    bg-secondary-lighten text-secondary border-b-[3px] border-b-secondary flex w-full items-center rounded-md px-2.5 py-2.5 text-[20px]`}
                                    >
                                        Home
                                    </button>
                                </Menu.Item>
                                <Menu.Item>
                                    <button
                                        className={`
                                                    bg-white text-yankess border-b-[3px] transition-all duration-300 hover:text-secondary border-b-white hover:bg-secondary-lighten hover:border-b-secondary flex w-full items-center rounded-md px-2.5 py-2.5 text-[20px]`}
                                    >
                                        Our Service
                                    </button>
                                </Menu.Item>
                                <Menu.Item>
                                    <button
                                        className={`
                                                    bg-white text-yankess border-b-[3px] transition-all duration-300 hover:text-secondary border-b-white hover:bg-secondary-lighten hover:border-b-secondary flex w-full items-center rounded-md px-2.5 py-2.5 text-[20px]`}
                                    >
                                        How Heru Work
                                    </button>
                                </Menu.Item>
                                <Menu.Item>
                                    <button className=" bg-secondary-light w-full text-yankess px-5 py-2.5 flex rounded-full items-center gap-x-4 text-[20px]">
                                        <Image
                                            src="/contact.png"
                                            height={40}
                                            width={40}
                                            alt="wa"
                                        />
                                        Contact Heru Inspector
                                    </button>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </>
    );
}
