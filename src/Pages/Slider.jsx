import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router';

const Slider = () => {
    return (
        <div className='relative'>
            <>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <img className='brightness-50' src="/myAssets/hrt3.jpg" alt="" />
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white">
                                <p className="text-sm md:text-lg mb-2">Every drop matters</p>
                                <h1 className="text-3xl md:text-5xl font-extrabold uppercase leading-tight">Give Blood,Give Life</h1>

                                {/* Btn */}
                                <div className="flex gap-8 justify-center mt-20">
                                    <Link to={'/register'} className="btn bg-red-600 hover:bg-red-800 text-white hover:border-red-800 border-red-600 p-6">
                                    Join as a donor</Link>

                                    <Link to={'/search-page'} className="btn bg-transparent text-white border-white hover:bg-white hover:text-red-600 p-6">Search Donors</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    

                    <SwiperSlide>
                        <img className='brightness-50' src="/myAssets/img2.jpg" alt="" />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white">
                                <p className="text-sm md:text-lg mb-2">Join the movement</p>
                                <h1 className="text-3xl md:text-5xl font-extrabold uppercase leading-tight">SAVE LIVES  THROUGH <br />BLOOD DONATION</h1>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <img className='brightness-50' src="/myAssets/im1.jpg" alt="" />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white">
                                <p className="text-sm md:text-lg mb-2">One donation can save three lives</p>
                                <h1 className="text-3xl md:text-5xl font-extrabold uppercase leading-tight">DONATE BLOOD <br />TODAY</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 z-300 animate-bounce">
                    <img className='w-10' src="/myAssets/arrow.png" alt="" />
                </div>
            </>
        </div>
    );
};

export default Slider;