import React from "react";
import hotelreception from "../assets/hotel-reception.jpg"
import couch from "../assets/couch.jpg"
import bed from "../assets/bed.jpg"
import img1 from "../assets/img1.avif"
import img2 from "../assets/img2.avif"
import img3 from "../assets/img3.avif"
import img4 from "../assets/img4.avif"
import { FaCheckCircle, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const AboutPage = () => {
    const teamMembers = [
        {
            name: "Rahul Sharma",
            role: "CEO & Founder",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Anjali Verma",
            role: "Project Manager",
            img: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            name: "Vikram Singh",
            role: "Lead Developer",
            img: "https://randomuser.me/api/portraits/men/65.jpg",
        },
        {
            name: "Neha Patel",
            role: "UI/UX Designer",
            img: "https://randomuser.me/api/portraits/women/68.jpg",
        },
    ];

    const features = [
        "User-friendly and easy to use",
        "Secure and reliable system",
        "Real-time updates and notifications",
        "24/7 customer support",
        "Scalable for hotels of all sizes",
    ];


    return (
        <div className="bg-gray-50 overflow-x-hidden">
            {/* ================= HERO ================= */}
            <section className="relative h-[40vh] md:h-[50vh] flex items-center">
                <img src={hotelreception} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 text-white px-6 md:px-16 max-w-7xl">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-8">About Us</h1>
                    <p className="text-base md:text-xl mb-6 max-w-2xl">
                        Empowering hotels with smart management solutions and seamless guest experiences.
                    </p>
                    <button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg hover:scale-105 transition">
                        Explore Services
                    </button>
                </div>
            </section>

            {/* ================= WHO WE ARE ================= */}
            <section className="py-12 md:py-20 px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                <div>
                    <img src={couch} alt="Who we are" className="w-full h-[30vh] md:h-[50vh] object-cover rounded-xl shadow-lg" />
                </div>

                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Who We Are</h2>
                    <p className="text-gray-600 text-lg md:text-2xl mb-6">
                        Our Hotel Management System simplifies operations, improves efficiency,
                        and enhances guest satisfaction.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 bg-white shadow rounded-xl text-lg font-medium">Easy Booking</div>
                        <div className="p-4 bg-white shadow rounded-xl text-lg font-medium">Room Management</div>
                        <div className="p-4 bg-white shadow rounded-xl text-lg font-medium">Staff Control</div>
                        <div className="p-4 bg-white shadow rounded-xl text-lg font-medium">Reports</div>
                    </div>
                </div>
            </section>

            {/* ================= MISSION & VISION ================= */}
            <section className="py-12 md:py-16 px-6 md:px-16 text-center bg-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Mission & Vision</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-md border-t-4 border-yellow-500">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">Our Mission</h3>
                        <p className="text-gray-600 text-base md:text-lg">
                            To simplify hotel operations and deliver exceptional guest experiences through innovative technology.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-md border-t-4 border-yellow-500">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">Our Vision</h3>
                        <p className="text-gray-600 text-base md:text-lg">
                            To become a leading digital platform in the hospitality industry, setting new standards for efficiency.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= WHAT WE OFFER ================= */}
            <section className="py-12 md:py-20 px-6 md:px-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Offer</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {[
                        "Booking Management",
                        "Room Management",
                        "Customer Records",
                        "Housekeeping",
                        "Analytics",
                        "System Settings"
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300 border-l-4 border-yellow-500">
                            <h3 className="font-bold text-lg md:text-xl mb-2">{item}</h3>
                            <p className="text-gray-600">Manage efficiently with our comprehensive and easy-to-use system.</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= WHY CHOOSE US & TEAM ================= */}
            <div className="bg-gray-100 py-16 relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 relative">
                    
                    {/* Vertical Divider (Desktop only) */}
                    <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-gray-300"></div>

                    {/* LEFT SIDE (Why Choose Us) */}
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0 lg:pr-12">
                        {/* IMAGE */}
                        <div className="w-full md:w-1/2 h-64 md:h-full">
                            <img
                                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a"
                                alt="hotel"
                                className="w-full h-full object-cover md:rounded-r-2xl"
                            />
                        </div>

                        {/* CONTENT */}
                        <div className="w-full md:w-1/2 px-6">
                            <h3 className="text-sm text-orange-500 font-bold mb-4 tracking-widest uppercase">
                                — WHY CHOOSE US
                            </h3>

                            <ul className="space-y-4">
                                {features.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-700">
                                        <FaCheckCircle className="text-orange-500 mt-1 flex-shrink-0" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT SIDE (TEAM) */}
                    <div className="px-6 lg:pl-12">
                        <h3 className="text-sm text-orange-500 font-bold mb-6 tracking-widest uppercase">
                            — OUR TEAM
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl text-center shadow-md hover:shadow-lg transition overflow-hidden group"
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition duration-500"
                                        />
                                    </div>

                                    <div className="p-4">
                                        <h4 className="font-bold text-gray-800 text-lg">
                                            {member.name}
                                        </h4>
                                        <p className="text-sm text-gray-500 mb-4">
                                            {member.role}
                                        </p>

                                        <div className="flex justify-center gap-4 text-gray-500">
                                            <FaLinkedinIn className="hover:text-orange-500 cursor-pointer transition" />
                                            <FaTwitter className="hover:text-orange-500 cursor-pointer transition" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* ================= STATS ================= */}
            <section className="bg-gray-900 text-white py-12 md:py-20">
                <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-y-10 gap-x-4 px-6 md:px-16 max-w-7xl mx-auto">
                    {[
                        ["500+", "Hotels"],
                        ["10,000+", "Rooms"],
                        ["25,000+", "Guests"],
                        ["99%", "Satisfaction"]
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <h2 className="text-3xl md:text-5xl font-bold mb-2 text-yellow-500">{item[0]}</h2>
                            <p className="text-gray-400 font-medium uppercase tracking-wider text-xs md:text-sm">{item[1]}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="relative py-20 md:py-32 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/70 z-10"></div>
                <img
                    src={hotelreception}
                    alt="CTA Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-20 text-white px-6 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Your Journey With Us</h2>
                    <p className="text-lg md:text-xl mb-10 text-gray-200">Join hundreds of hotels that have transformed their operations with our smart management system.</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition transform hover:scale-105 shadow-xl">
                            Book Now
                        </button>

                        <button className="border-2 border-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-black transition">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutPage;