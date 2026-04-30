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
        <div>

            <div className='flex justify-center items-center p-10 gap-10'>
                <div className="flex flex-col justify-start items-start text-center h-full px-4">

                    <h1 className="text-4xl font-bold text-black text-shadow: 0 2px 10px rgba(0,0,0,0.5) flex gap-1 leading-10 fjalla-one-regular">
                        {line1.map((char, index) => (
                            <span
                                key={index}
                                className="inline-block animate-letter "
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {char}
                            </span>
                        ))}
                    </h1>
                    <h1 className="text-6xl font-bold text-black text-shadow: 0 2px 10px rgba(0,0,0,0.5) flex gap-1 ">
                        {line2.map((char, index) => (
                            <span
                                key={index}
                                className="inline-block animate-letter "
                                style={{ animationDelay: `${(index + line1.length) * 0.1}s` }}
                            >
                                {char}
                            </span>
                        ))}
                    </h1>
                    <h1 className="text-6xl font-bold text-black text-shadow: 0 2px 10px rgba(0,0,0,0.5) flex gap-1 pt-3">
                        {line3.map((char, index) => (
                            <span
                                key={index}
                                className="inline-block animate-letter "
                                style={{ animationDelay: `${(index + line1.length + line2.length) * 0.1}s` }}
                            >
                                {char}
                            </span>
                        ))}
                    </h1>

                    <p className="text-black  md:text-xl max-w-2xl mt-6 mb-6 items-start text-2xl  text-start font-mono backdrop-blur-sm">
                        Experience unforgettable luxury weddings with <br /> stunning venues, grand decor, and premium hospitality.
                    </p>

                    <div className="flex gap-4">
                        <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-3 rounded-full text-lg shadow-lg shadow-amber-200 transition-all transform hover:scale-105">
                            Book Now
                        </button>

                        <button className="border-2 border-amber-600 text-amber-700 font-bold px-8 py-3 rounded-full text-lg hover:bg-amber-50 transition-all transform hover:scale-105">
                            Explore Venue
                        </button>
                    </div>

                </div>
                <div className='w-[40%] w-[10%] bg-amber-600 rounded-4xl shadow-2xl overflow-hidden '>
                    <img src={hotel} alt="" className='w-full h-full object-cover ' />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center text-center p-10 gap-5'>
                <div className='text-4xl text-slate-900 font-bold tracking-tight'>Now, what exactly is a hotel management software?</div>
                <div className="text-slate-600 text-lg leading-relaxed max-w-4xl">A hotel management software a.k.a - a software that streamlines the A-Z of hotel operations. <br /> It is a set of fully integrated modules that handle reservation, room operations, housekeeping, guest engagement, banqueting and so. <br /> Playing a significant role in increasing a hotel’s efficiency and revenue, the hotel management software has become an inseparable part of hotel management.</div>
            </div>
            <div className="py-20 bg-white text-center">

                <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
                    What We <span className="text-amber-600">Do</span>
                </h2>

                <p className="text-slate-500 mt-2 font-medium">
                    We provide complete hotel & wedding management solutions
                </p>

                {/* Cards */}
                <div className="min-w-4xl  flex flex-wrap justify-center gap-8 mt-10 px-10">

                    {/* Card 1 */}
                    <div onClick={() => navigate("/HotelOperation")} className="p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:border-amber-400 border border-gray-100 transition-all duration-300 group">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                            Hotel Operations
                        </h3>
                        <p className="text-slate-500 mt-2">
                            Easy room booking and real-time availability management.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div onClick={() => navigate("/RoomManagement")} className="p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:border-amber-400 border border-gray-100 transition-all duration-300 group">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                            Room Management
                        </h3>
                        <p className="text-slate-500 mt-2">
                            Track room status, check-in, and check-out seamlessly.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div onClick={() => navigate("/HouseKeeping")} className="p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:border-amber-400 border border-gray-100 transition-all duration-300 group">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                            Housekeeping Services
                        </h3>
                        <p className="text-slate-500 mt-2">
                            Efficient cleaning and maintenance tracking system.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div onClick={() => navigate("/FacilityManagement")} className="p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:border-amber-400 border border-gray-100 transition-all duration-300 group">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                            Facility Management
                        </h3>
                        <p className="text-slate-500 mt-2">
                            Manage all hotel amenities and services in one place.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div onClick={() => navigate("/InventoryControl")} className="p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:border-amber-400 border border-gray-100 transition-all duration-300 group">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                            Inventory Control
                        </h3>
                        <p className="text-slate-500 mt-2">
                            Track items, suppliers, and usage efficiently.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div onClick={() => navigate("/HotelHRMS")} className="p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:border-blue-400 border border-gray-100 transition-all duration-300 group">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            Hotel HRMS
                        </h3>
                        <p className="text-slate-500 mt-2">
                            Comprehensive workforce and payroll management system.
                        </p>
                    </div>

                </div>
            </div>
            <section className="py-20 bg-slate-50 text-center">

                <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
                    How Our System <span className="text-amber-600">Helps You</span>
                </h2>

                <p className="text-slate-500 mt-3 max-w-2xl mx-auto font-medium">
                    Manage your hotel operations efficiently with smart automation and seamless control.
                </p>

                <div className="flex flex-wrap justify-center gap-8 mt-12 min-w-6xl mx-auto px-6">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="w-[300px] p-8 rounded-3xl shadow-lg bg-white 
                                border-t-4 border-amber-500 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
                        >
                            <h3 className="text-xl font-bold text-slate-900">
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