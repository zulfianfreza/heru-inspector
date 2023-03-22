"use client";
import Image from "next/image";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";

export default function Offer() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 640 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };
    return (
        <section id="why">
            <div className=" px-5 lg:px-10 mt-[30px] text-center lg:mt-[60px] bg-primary py-5 text-white">
                <h1 className=" text-[28px] lg:text-[64px]">
                    PENAWARAN TERBAIK
                </h1>
                <p className=" text-[14px] lg:text-[24px]">
                    Heru Inspector memberikan penawaran layanan inspeksi mobil
                    yang terbaik !
                </p>
            </div>
            <div className=" w-full py-3 lg:py-4 text-white text-[16px] lg:text-[24px] bg-danger flex items-center">
                <marquee>
                    Dapatkan promo deal hemat ! Dapatkan promo deal hemat !
                    Dapatkan promo deal hemat ! Dapatkan promo deal hemat !
                    Dapatkan promo deal hemat !
                </marquee>
            </div>
            <div className="">
                <Carousel
                    responsive={responsive}
                    swipeable={false}
                    draggable={false}
                    infinite={true}
                    autoPlay={false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="transform 300ms ease-in-out"
                    transitionDuration={500}
                    containerClass=" mx-2.5  lg:mx-5 mt-[30px]"
                    removeArrowOnDeviceType={["desktop"]}
                    itemClass="p-2.5 lg:p-5"
                    sliderClass=""
                    customLeftArrow={
                        <button className=" p-2.5 bg-[#E5E5E5] absolute top-1/2 -translate-y-1/2 left-2.5 cursor-pointer rounded-full ">
                            <FaChevronLeft className=" h-6 w-6" />
                        </button>
                    }
                    customRightArrow={
                        <button className=" p-2.5 bg-[#E5E5E5] absolute top-1/2 -translate-y-1/2 right-2.5 cursor-pointer rounded-full ">
                            <FaChevronRight className=" h-6 w-6" />
                        </button>
                    }
                >
                    <div className=" border shadow hover:shadow-xl transition duration-300">
                        <div className=" bg-primary w-full py-5 text-center">
                            <h1 className=" uppercase text-white font-bold text-[20px] lg:text-[36px]">
                                Premium
                            </h1>
                        </div>
                        <div className=" h-[367px] w-full relative">
                            <Image
                                src="/car_premium.png"
                                fill={true}
                                alt="premium"
                                className=" object-cover"
                            />
                        </div>
                        <div className="w-full py-2.5 text-center bg-danger-light">
                            <p className=" text-danger font-bold text-[20px] lg:text-[28px]">
                                Promo Promo Promo Promo
                            </p>
                        </div>
                        <div className=" px-[30px] py-10 text-center">
                            <p className=" text-dark-silver text-[16px] lg:text-[24px]">
                                City car, small sedan (e.g. Honda Jazz, Daihatsu
                                Xenia, Toyota Avanza, Suzuki Ertiga)
                            </p>
                            <p className=" font-bold text-[24px] mt-[30px] lg:text-[36px] text-danger line-through">
                                Rp 388.999
                            </p>
                            <p className=" font-bold text-yankess text-[36px] lg:text-[64px]">
                                Rp 200.000
                            </p>
                            <button className=" p-5 bg-secondary-light text-[20px] lg:text-[24px] font-bold hover:bg-secondary transition duration-300">
                                Booking Inspeksi Sekarang !
                            </button>
                        </div>
                    </div>
                    <div className=" border shadow hover:shadow-xl transition duration-300">
                        <div className=" bg-primary w-full py-5 text-center">
                            <h1 className=" uppercase text-white font-bold text-[20px] lg:text-[36px]">
                                Pertalite
                            </h1>
                        </div>
                        <div className=" h-[367px] w-full relative">
                            <Image
                                src="/car_pertalite.png"
                                fill={true}
                                alt="premium"
                                className=" object-cover"
                            />
                        </div>
                        <div className="w-full py-2.5 text-center bg-danger-light">
                            <p className=" text-danger font-bold text-[20px] lg:text-[28px]">
                                Promo Promo Promo Promo
                            </p>
                        </div>
                        <div className=" px-[30px] py-10 text-center">
                            <p className=" text-dark-silver text-[16px] lg:text-[24px]">
                                Full Size sedan, SUV (e.g. Toyota Fortuner,
                                Mazda CX-5, Nissan X-Trail, Honda Accord)
                            </p>
                            <p className=" font-bold text-[24px] mt-[30px] lg:text-[36px] text-danger line-through">
                                Rp 388.999
                            </p>
                            <p className=" font-bold text-yankess text-[36px] lg:text-[64px]">
                                Rp 300.000
                            </p>
                            <button className=" p-5 bg-secondary-light text-[20px] lg:text-[24px] font-bold hover:bg-secondary transition duration-300">
                                Booking Inspeksi Sekarang !
                            </button>
                        </div>
                    </div>
                    <div className=" border shadow hover:shadow-xl transition duration-300">
                        <div className=" bg-primary w-full py-5 text-center">
                            <h1 className=" uppercase text-white font-bold text-[20px] lg:text-[36px]">
                                Pertamax
                            </h1>
                        </div>
                        <div className=" h-[367px] w-full relative">
                            <Image
                                src="/car_pertamax.png"
                                fill={true}
                                alt="premium"
                                className=" object-cover"
                            />
                        </div>
                        <div className="w-full py-2.5 text-center bg-danger-light">
                            <p className=" text-danger font-bold text-[20px] lg:text-[28px]">
                                Promo Promo Promo Promo
                            </p>
                        </div>
                        <div className=" px-[30px] py-10 text-center">
                            <p className=" text-dark-silver text-[16px] lg:text-[24px]">
                                Eropa Car, Luxury MPV (e.g. Toyota Alphard,
                                Audi, BMW) / Mobil Usia 10 Tahun Keatas
                            </p>
                            <p className=" font-bold text-[24px] mt-[30px] lg:text-[36px] text-danger line-through">
                                Rp 388.999
                            </p>
                            <p className=" font-bold text-yankess text-[36px] lg:text-[64px]">
                                Rp 400.000
                            </p>
                            <button className=" p-5 bg-secondary-light text-[20px] lg:text-[24px] font-bold hover:bg-secondary transition duration-300">
                                Booking Inspeksi Sekarang !
                            </button>
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
