import Image from "next/image";
import React from "react";

export default function Why() {
    return (
        <section id="why">
            <div className=" mx-5 lg:mx-10 mt-[30px] lg:mt-[60px]">
                <div className="p-[20px] bg-secondary-light border-l-[3px] border-l-secondary">
                    <p className=" text-[36px] lg:text-[64px] font-bold">
                        Kenapa harus dilakukan Inspeksi ?
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 lg:gap-10 mt-2.5 lg:mt-10">
                    <div className=" bg-secondary flex">
                        <div className="w-[100px] lg:w-[180px] h-[100%] relative">
                            <Image
                                src="/deals.png"
                                fill={true}
                                alt="deal"
                                className=" object-fill"
                            />
                        </div>
                        <div className="flex-1 p-5 border-l-[3px] border-l-secondary-light">
                            <h1 className=" text-[20px] lg:text-[64px] leading-tight font-bold">
                                Layak Dibeli
                            </h1>
                            <p className=" text-[12px] lg:text-[24px]">
                                Melakukan cek kendaraan apakah layak untuk
                                dibeli
                            </p>
                        </div>
                    </div>
                    <div className=" bg-secondary-light flex">
                        <div className="w-[100px] lg:w-[180px] h-[100%] relative">
                            <Image
                                src="/scam.png"
                                fill={true}
                                alt="deal"
                                className=" object-fill"
                            />
                        </div>
                        <div className="flex-1 p-5 border-l-[3px] border-l-secondary">
                            <h1 className=" text-[20px] lg:text-[64px] leading-tight font-bold">
                                Cegah Scam
                            </h1>
                            <p className=" text-[12px] lg:text-[24px]">
                                Mencegah adanya indikasi ditipu oleh penjual
                                kendaraan
                            </p>
                        </div>
                    </div>
                    <div className=" bg-secondary-light flex">
                        <div className="w-[100px] lg:w-[180px] h-[100%] relative">
                            <Image
                                src="/good.png"
                                fill={true}
                                alt="deal"
                                className=" object-fill"
                            />
                        </div>
                        <div className="flex-1 p-5 border-l-[3px] border-l-secondary">
                            <h1 className=" text-[20px] lg:text-[64px] leading-tight font-bold">
                                Cek Kondisi
                            </h1>
                            <p className=" text-[12px] lg:text-[24px]">
                                Melakukan cek Kondisi kendaraan apakah kendaraan
                                masih ke-adaan bagus
                            </p>
                        </div>
                    </div>
                    <div className=" bg-secondary-light flex">
                        <div className="w-[100px] lg:w-[180px] h-[100%] relative">
                            <Image
                                src="/recommended.png"
                                fill={true}
                                alt="deal"
                                className=" object-fill"
                            />
                        </div>
                        <div className="flex-1 p-5 border-l-[3px] border-l-secondary">
                            <h1 className=" text-[20px] lg:text-[64px] leading-tight font-bold">
                                Rekomendasi
                            </h1>
                            <p className=" text-[12px] lg:text-[24px]">
                                Memberikan rekomendasi terbaik untuk kepuasan
                                berkendara
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
