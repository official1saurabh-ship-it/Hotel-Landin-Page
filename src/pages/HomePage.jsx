import React from 'react'
import hotel from "../assets/Hotel.png"
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const line1 = "Fast and Simple All-in-One".split("");
    const line2 = "Hotel Management System ".split("");
    const line3 = "Take Control Easily & Efficiently".split("");
    const features = [
        {
            title: "Easy Room Booking",
            desc: "Guests can quickly book rooms with real-time availability and instant confirmation.",
        },
        {
            title: "Smart Room Management",
            desc: "Track room status, check-ins, and check-outs without confusion.",
        },
        {
            title: "Efficient Housekeeping",
            desc: "Assign cleaning tasks and monitor room readiness in one place.",
        },
        {
            title: "Inventory Control",
            desc: "Manage hotel items, supplies, and vendors with ease.",
        },
        {
            title: "Facility Management",
            desc: "Handle all amenities and services smoothly.",
        },
    ];

    return (
        <div className="overflow-x-hidden">

            <div className='flex flex-col lg:flex-row justify-center items-center p-6 md:p-10 gap-10'>
                <div className="flex flex-col justify-start items-center lg:items-start text-center lg:text-start h-full px-4">

                    <h1 className="text-3xl md:text-4xl font-bold text-black flex flex-wrap justify-center lg:justify-start gap-1 leading-tight fjalla-one-regular">
                        {line1.map((char, index) => (
                            <span
                                key={index}
                                className="inline-block animate-letter "
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </h1>
                    <h1 className="text-4xl md:text-6xl font-bold text-black flex flex-wrap justify-center lg:justify-start gap-1 leading-tight">
                        {line2.map((char, index) => (
                            <span
                                key={index}
                                className="inline-block animate-letter "
                                style={{ animationDelay: `${(index + line1.length) * 0.1}s` }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </h1>
                    <h1 className="text-4xl md:text-6xl font-bold text-black flex flex-wrap justify-center lg:justify-start gap-1 pt-3 leading-tight">
                        {line3.map((char, index) => (
                            <span
                                key={index}
                                className="inline-block animate-letter "
                                style={{ animationDelay: `${(index + line1.length + line2.length) * 0.1}s` }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </h1>

                    <p className="text-black text-lg md:text-xl max-w-2xl mt-6 mb-6 font-mono backdrop-blur-sm">
                        Experience unforgettable luxury weddings with <br className="hidden md:block" /> stunning venues, grand decor, and premium hospitality.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-3 rounded-full text-lg shadow-lg shadow-amber-200 transition-all transform hover:scale-105">
                            Book Now
                        </button>

                        <button className="border-2 border-amber-600 text-amber-700 font-bold px-8 py-3 rounded-full text-lg hover:bg-amber-50 transition-all transform hover:scale-105">
                            Explore Venue
                        </button>
                    </div>

                </div>
                <div className='w-full lg:w-[40%] bg-amber-600 rounded-3xl md:rounded-4xl shadow-2xl overflow-hidden mt-8 lg:mt-0'>
                    <img src={hotel} alt="Hotel" className='w-full h-auto object-cover ' />
                </div>
            </div>

            <div className='flex flex-col justify-center items-center text-center p-6 md:p-10 gap-5'>
                <div className='text-2xl md:text-4xl text-slate-900 font-bold tracking-tight'>Now, what exactly is a hotel management software?</div>
                <div className="text-slate-600 text-base md:text-lg leading-relaxed max-w-4xl">
                    A hotel management software a.k.a - a software that streamlines the A-Z of hotel operations. 
                    <br className="hidden md:block" /> It is a set of fully integrated modules that handle reservation, room operations, housekeeping, guest engagement, banqueting and so. 
                    <br className="hidden md:block" /> Playing a significant role in increasing a hotel’s efficiency and revenue, the hotel management software has become an inseparable part of hotel management.
                </div>
            </div>

            <div className="py-12 md:py-20 bg-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                    What We <span className="text-amber-600">Do</span>
                </h2>

                <p className="text-slate-500 mt-2 font-medium px-4">
                    We provide complete hotel & wedding management solutions
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10 px-6 md:px-10 max-w-7xl mx-auto">
                    {[
                        { title: "Hotel Operations", desc: "Easy room booking and real-time availability management.", path: "/HotelOperation" },
                        { title: "Room Management", desc: "Track room status, check-in, and check-out seamlessly.", path: "/RoomManagement" },
                        { title: "Housekeeping Services", desc: "Efficient cleaning and maintenance tracking system.", path: "/HouseKeeping" },
                        { title: "Facility Management", desc: "Manage all hotel amenities and services in one place.", path: "/FacilityManagement" },
                        { title: "Inventory Control", desc: "Track items, suppliers, and usage efficiently.", path: "/InventoryControl" },
                        { title: "Hotel HRMS", desc: "Comprehensive workforce and payroll management system.", path: "/HotelHRMS" },
                    ].map((card, index) => (
                        <div key={index} onClick={() => navigate(card.path)} className="p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:border-amber-400 border border-gray-100 transition-all duration-300 group cursor-pointer bg-white">
                            <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                                {card.title}
                            </h3>
                            <p className="text-slate-500 mt-2 text-sm md:text-base">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <section className="py-12 md:py-20 bg-slate-50 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                    How Our System <span className="text-amber-600">Helps You</span>
                </h2>

                <p className="text-slate-500 mt-3 max-w-2xl mx-auto font-medium px-4">
                    Manage your hotel operations efficiently with smart automation and seamless control.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 max-w-7xl mx-auto px-6">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 md:p-8 rounded-3xl shadow-lg bg-white 
                                border-t-4 border-amber-500 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
                        >
                            <h3 className="text-lg md:text-xl font-bold text-slate-900">
                                {item.title}
                            </h3>
                            <p className="text-slate-500 mt-2 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default HomePage