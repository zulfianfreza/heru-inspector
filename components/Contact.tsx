import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Contact() {
    return (
        <section>
            <div className=" mx-5 lg:mx-10 mt-[30px] lg:mt-[60px]">
                <div className="p-5 lg:p-[30px]  bg-primary relative flex flex-col lg:flex-row gap-x-10 justify-between overflow-hidden gap-y-5">
                    <Image
                        src="/logo2.png"
                        height="272"
                        width="307"
                        alt=""
                        className=" absolute top-1/2 -translate-y-1/2 hidden lg:block"
                    />
                    <Image
                        src="/WhatsApp.png"
                        height="272"
                        width="271"
                        alt=""
                        className=" absolute top-1/2 -translate-y-1/2 lg:right-[30px] right-1/2 translate-x-1/2"
                    />
                    <h1 className="text-[36px]  lg:text-[64px] text-white">
                        Contact <br />
                        <span className=" font-bold">Heru Inspector</span>
                    </h1>
                    <div className="flex items-center gap-x-10 z-10 flex-col lg:flex-row gap-y-5">
                        <Link
                            href=""
                            className=" bg-white px-5 py-2.5 w-full lg:w-auto text-yankess flex rounded-full items-center gap-x-4 float-left text-[20px] lg:text-[24px]"
                        >
                            <Image
                                src="/wa.png"
                                height={40}
                                width={40}
                                alt="wa"
                            />
                            Hubungin WhatsApp
                        </Link>
                        <Link
                            href=""
                            className=" bg-white px-5 py-2.5 w-full lg:w-auto text-yankess flex rounded-full items-center gap-x-4 float-left text-[20px] lg:text-[24px]"
                        >
                            <Image
                                src="/fb.png"
                                height={40}
                                width={40}
                                alt="wa"
                            />
                            Facebook
                        </Link>
                        <Link
                            href=""
                            className=" bg-white px-5 py-2.5 w-full lg:w-auto text-yankess flex rounded-full items-center gap-x-4 float-left text-[20px] lg:text-[24px]"
                        >
                            <Image
                                src="/instagram.png"
                                height={40}
                                width={40}
                                alt="wa"
                            />
                            Instagram
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}