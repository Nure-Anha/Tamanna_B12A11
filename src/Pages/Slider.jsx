import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = () => {
    return (
        <div className='relative'>
            <>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <img className='brightness-50' src="/public/myAssets/img01.jpg" alt="" />
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white">
                                <p className="text-sm md:text-lg mb-2">Every drop matters</p>
                                <h1 className="text-3xl md:text-5xl font-extrabold uppercase leading-tight">Give Blood, <br />Give Life</h1>

                                {/* Btn */}
                                <div className="flex gap-8 justify-center mt-20">
                                    <button className="btn bg-red-600 hover:bg-red-800 text-white hover:border-red-800 border-red-600 p-6">
                                    Join as a donor</button>

                                    <button className="btn bg-transparent text-white border-white hover:bg-white hover:text-red-600 p-6">Search Donors</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className='brightness-50' src="/public/myAssets/img03.jpg" alt="" />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white">
                                <p className="text-sm md:text-lg mb-2">One donation can save three lives</p>
                                <h1 className="text-3xl md:text-5xl font-extrabold uppercase leading-tight">DONATE BLOOD <br />TODAY</h1>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className='brightness-50' src="/public/myAssets/img2.jpg" alt="" />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white">
                                <p className="text-sm md:text-lg mb-2">Join the movement</p>
                                <h1 className="text-3xl md:text-5xl font-extrabold uppercase leading-tight">SAVE LIVES  THROUGH <br />BLOOD DONATION</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default Slider;