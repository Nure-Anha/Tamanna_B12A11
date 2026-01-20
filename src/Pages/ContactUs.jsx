import React from 'react';

const ContactUs = () => {
    return (
        <div className="bg-[#f1f6fa] pb-20 py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-red-700 mb-10">Contact Us</h2>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="bg-white p-8 rounded-lg shadow-md border border-rose-100">
                            <h3 className="text-2xl font-semibold text-red-600 mb-4">Get in Touch</h3>
                            <p className="text-gray-600 mb-6">Have questions or need urgent help? Contact us anytime. We are always ready to support blood donors and recipients.</p>

                            <div className="space-y-4 text-gray-700">
                                <p className='flex gap-x-3'>
                                    <img className='w-6' src="/public/myAssets/emergency-phone.png" alt="" />
                                    <div>
                                        <a href=""><span className="font-medium">Phone:</span> +880 1836349141</a>
                                    </div>
                                </p>
                                <p className='flex gap-x-3'>
                                    <img className='w-6' src="/public/myAssets/gmail.png" alt="" />
                                    <div>
                                        <a href=""><span className="font-medium">Email:</span> nureanha99@gmail.com</a>
                                    </div>
                                </p>
                                <p className='flex gap-x-3'>
                                    <img className='w-6' src="/public/myAssets/map-and-location.png" alt="" />
                                    <div><span className="font-medium">Address:</span> Middle Badda, Dhaka</div>
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md border border-rose-100">
                            <h3 className="text-2xl font-semibold text-red-600 mb-4">Say Hello To Us</h3>

                            <form className="space-y-4">
                                <input className="input w-full" type="text" placeholder="Your Name"/>
                                <input className="input w-full" type="email" placeholder="Your Email"/>
                                <textarea className="textarea w-full" placeholder="Your Message" rows="4"></textarea>
                                <button className="btn bg-red-600 hover:bg-red-700 text-white w-full">Send Message</button>
                            </form>
                        </div>

                    </div>
                </div>
        </div>
    );
};

export default ContactUs;