import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
    return (
        <section>
            <div className=" mx-5 lg:mx-[100px] flex flex-col lg:flex-row gap-x-[70px] my-[30px] gap-y-[30px] lg:gap-y-0 ">
                <div className="flex-1 space-y-5">
                    <h1 className=" text-primary font-bold text-[40px] lg:text-[56px] xl:text-[92px] leading-relaxed">
                        Jasa Inspeksi Mobil Bekas !
                    </h1>
                    <p className=" text-[#6D6D6D] text-12px lg:text-[24px] font-light">
                        <span className=" italic font-medium text-primary">
                            Heru Inspector
                        </span>{" "}
                        adalah{" "}
                        <span className=" text-primary font-medium">
                            layanan profesional
                        </span>{" "}
                        untuk memeriksa /{" "}
                        <span className=" text-primary font-medium">
                            inpeksi
                        </span>{" "}
                        kondisi{" "}
                        <span className=" text-primary font-medium">
                            Mobil Bekas
                        </span>{" "}
                        sebelum dibeli atau dijual. oleh teknisi yang terlatih,{" "}
                        <span className=" text-primary font-medium">
                            Heru Inspector akan memberikan laporan rinci tentang
                            kondisi kendaraan.
                        </span>
                    </p>
                    <Link
                        href=""
                        className=" bg-secondary-light px-5 py-2.5 w-full hover:bg-secondary duration-300 transition hover:shadow lg:w-auto text-yankess flex rounded-full items-center gap-x-4 float-left text-[20px] lg:text-[24px]"
                    >
                        <Image src="/wa.png" height={40} width={40} alt="wa" />
                        Hubungin WhatsApp
                    </Link>
                </div>
                <div className="w-auto lg:w-[506px] xl:w-[605px] flex-1 lg:flex-none">
                    <div className="bg-primary w-full">
                        <div className=" w-full relative h-[206px] lg:h-[398px] ">
                            <Image
                                src="/hero.png"
                                fill={true}
                                alt="hero"
                                className=" object-cover"
                            />
                        </div>
                        <div className="px-4 py-2 relative">
                            <p className=" text-[16px] lg:text-[36px] text-white">
                                Lebih dari 20 tahun Berpengalaman di dunia
                                Otomotif
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
