"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaWhatsapp,
    FaYoutube,
} from "react-icons/fa";
import { Link as LinkRS } from "react-scroll";

export default function Footer() {
    return (
        <section>
            <div className=" mt-[30px] lg:mt-[60px] p-5 lg:px-[100px] lg:py-10 bg-primary relative">
                <Image
                    src="/half1.png"
                    height={183}
                    width={366}
                    alt=""
                    className=" absolute top-0 lg:left-0 left-1/2 -translate-x-1/2 lg:translate-x-0 z-[1]"
                />
                <Image
                    src="/dots.png"
                    height={348}
                    width={336}
                    alt=""
                    className=" absolute lg:top-0 top-1/2 -translate-y-1/2 lg:translate-y-0 lg:right-5 right-1/2 translate-x-1/2 lg:translate-x-0"
                />
                <Image
                    src="/half2.png"
                    height={183}
                    width={366}
                    alt=""
                    className=" absolute bottom-0 lg:right-0 right-1/2 translate-x-1/2 lg:translate-x-0 z-[1]"
                />
                <div className=" z-30">
                    <div className="flex gap-x-[144px] flex-col lg:flex-row gap-y-[30px]">
                        <div className=" flex-1">
                            <h1 className=" text-[24px] lg:text-[40px] text-white">
                                <span className=" font-bold">
                                    Percayakan cek kondisi mobil
                                </span>{" "}
                                kepada
                                <span className=" font-bold">
                                    Heru Inspector.
                                </span>
                            </h1>
                            <p className=" text-[16px] lg:text-[24px] text-[#ADADAD] italic">
                                Heru Inspector akan memberikan experience yang
                                terbaik dalam menjalankan pekerjaan.
                            </p>
                        </div>
                        <div className=" p-[30px] bg-[#344364] w-full lg:w-[516px] rounded-[20px] z-30">
                            <div className=" flex justify-between items-center">
                                <p className=" text-white text-[20px]">
                                    Whatsapp kami sekarang
                                </p>
                                <Image
                                    src="/wa.png"
                                    height={24}
                                    width={24}
                                    alt=""
                                />
                            </div>
                            <div className="mt-4">
                                <form action="" className=" space-y-2.5">
                                    <textarea
                                        name=""
                                        id=""
                                        className=" h-[103px] rounded w-full p-2.5 text-[#6D6D6D]"
                                        defaultValue="Hai Heru Inspector, saya butuh jasa
                                        anda, bisa kah untuk membantu melakukan
                                        inpeksi mobil sekarang?"
                                    ></textarea>
                                    <button className=" w-full rounded bg-secondary py-2.5 text-white   ">
                                        Kirim
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className=" border-[#203a68] my-[30px]" />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-[100px] items-center gap-y-[30px]">
                    <div className=" flex flex-col items-center gap-y-[30px]">
                        <Image
                            src={"/logo_vertikal.png"}
                            height={178}
                            width={150}
                            alt="logo"
                        />
                        <p className=" italic text-[20px] text-[#989EA8]">
                            Copyright © 2023. All Rights Reserved.
                        </p>
                    </div>
                    <div className="mt-[30px]">
                        <div className="flex flex-col lg:flex-row justify-between gap-y-2.5">
                            <div className="flex flex-col gap-y-2.5 lg:gap-y-9">
                                <LinkRS
                                    to="home"
                                    spy={true}
                                    smooth="easeInOutQuart"
                                    duration={1000}
                                    offset={-105}
                                    className=" cursor-pointer text-[20px] text-[#E5E5E5] hover:text-white duration-300 transition"
                                >
                                    Home
                                </LinkRS>
                                <LinkRS
                                    to="service"
                                    spy={true}
                                    smooth="easeInOutQuart"
                                    duration={1000}
                                    offset={-105}
                                    className=" cursor-pointer text-[20px] text-[#E5E5E5]"
                                >
                                    Service
                                </LinkRS>
                            </div>
                            <div className="flex flex-col gap-y-2.5 lg:gap-y-9">
                                <LinkRS
                                    to="how"
                                    spy={true}
                                    smooth="easeInOutQuart"
                                    duration={1000}
                                    offset={-105}
                                    className=" cursor-pointer text-[20px] text-[#E5E5E5]"
                                >
                                    Work
                                </LinkRS>
                                <LinkRS
                                    to="contact"
                                    spy={true}
                                    smooth="easeInOutQuart"
                                    duration={1000}
                                    offset={-105}
                                    className=" cursor-pointer text-[20px] text-[#E5E5E5]"
                                >
                                    Contact
                                </LinkRS>
                            </div>
                        </div>
                        <div className=" mt-[70px] flex gap-x-4 justify-center z-50">
                            <button className=" bg-[#3B4662] p-2.5 rounded hover:bg-[#3b4662]/70 duration-300 transition">
                                <FaFacebookF className=" h-4 w-4 text-white" />
                            </button>
                            <button className=" bg-[#3B4662] p-2.5 rounded hover:bg-[#3b4662]/70 duration-300 transition">
                                <FaTwitter className=" h-4 w-4 text-white" />
                            </button>
                            <button className=" bg-[#3B4662] p-2.5 rounded hover:bg-[#3b4662]/70 duration-300 transition z-50">
                                <FaInstagram className=" h-4 w-4 text-white" />
                            </button>
                            <button className=" bg-[#3B4662] p-2.5 rounded hover:bg-[#3b4662]/70 duration-300 transition z-50">
                                <FaLinkedinIn className=" h-4 w-4 text-white" />
                            </button>
                            <button className=" bg-[#3B4662] p-2.5 rounded hover:bg-[#3b4662]/70 duration-300 transition">
                                <FaYoutube className=" h-4 w-4 text-white" />
                            </button>
                            <button className=" bg-[#3B4662] p-2.5 rounded hover:bg-[#3b4662]/70 duration-300 transition">
                                <FaWhatsapp className=" h-4 w-4 text-white" />
                            </button>
                        </div>
                    </div>
                    <div className=" space-y-2.5">
                        <h1 className=" text-white text-[36px] font-bold">
                            Address
                        </h1>
                        <p className=" text-[#e5e5e5] text-[20px]">
                            Heru Inspector Padalarang, Kab. Bandung Barat Jawa
                            Barat, 40553
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
