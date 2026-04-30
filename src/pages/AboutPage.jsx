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
        <div className="bg-gray-50">
            {/* ================= HERO ================= */}
            <section className="relative h-[40vh] flex items-center">
                <img src={hotelreception} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 text-white px-6 md:px-16 max-w-7xl">
                    <h1 className="text-8xl md:text-6xl font-extrabold mb-8">About Us</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Empowering hotels with smart management solutions and seamless guest experiences.
                    </p>
                    <button className="bg-yellow-500 px-6 py-3 rounded-lg hover:scale-105 transition">
                        Explore Services
                    </button>
                </div>
            </section>

            {/* ================= WHO WE ARE ================= */}
            <section className="py-20 px-6 md:px-16 grid md:grid-cols-2 gap-10 items-center">

                <div>
                    <img src={couch} alt="" className="w-full h-[50vh] object-cover rounded-xl shadow-lg" />
                </div>

                <div>
                    <h2 className="text-8xl md:text-6xl font-bold mb-4">Who We Are</h2>
                    <p className="text-gray-600 text-3xl mb-6">
                        Our Hotel Management System simplifies operations, improves efficiency,
                        and enhances guest satisfaction.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white shadow rounded-xl text-3xl">Easy Booking</div>
                        <div className="p-4 bg-white shadow rounded-xl  text-3xl">Room Management</div>
                        <div className="p-4 bg-white shadow rounded-xl  text-3xl">Staff Control</div>
                        <div className="p-4 bg-white shadow rounded-xl  text-3xl">Reports</div>
                    </div>
                </div>
            </section>

            {/* ================= MISSION & VISION ================= */}
            <section className="py-16 px-6 md:px-16 text-center">
                <h2 className="text-3xl font-bold mb-10">Our Mission & Vision</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                        <p className="text-gray-600">
                            To simplify hotel operations and deliver exceptional guest experiences.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                        <p className="text-gray-600">
                            To become a leading digital platform in the hospitality industry.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= WHAT WE OFFER ================= */}
            <section className="py-20 px-6 md:px-16">
                <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        "Booking Management",
                        "Room Management",
                        "Customer Records",
                        "Housekeeping",
                        "Analytics",
                        "System Settings"
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
                            <h3 className="font-semibold mb-2">{item}</h3>
                            <p className="text-gray-600">Manage efficiently with our system.</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= WHY CHOOSE US & TEAM ================= */}
            <div className="bg-gray-100 py-16 relative">
                <div className="grid md:grid-cols-2 items-center">

                    {/* LEFT SIDE (Image + Content) */}
                    <div className="flex items-center">

                        {/* IMAGE - stuck to left */}
                        <div className="w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a"
                                alt="hotel"
                                className="w-full h-full object-cover rounded-r-2xl"
                            />
                        </div>

                        {/* CONTENT */}
                        <div className="w-1/2 px-6">
                            <h3 className="text-sm text-orange-500 font-semibold mb-4">
                                — WHY CHOOSE US
                            </h3>

                            <ul className="space-y-3">
                                {[
                                    "User-friendly and easy to use",
                                    "Secure and reliable system",
                                    "Real-time updates and notifications",
                                    "24/7 customer support",
                                    "Scalable for hotels of all sizes",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-700">
                                        <FaCheckCircle className="text-orange-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                    <div className="absolute left-1/2 top-0 h-[40vh] w-px top-10 bottom-10 bg-gray-300 "></div>

                    {/* RIGHT SIDE (TEAM) */}
                    <div className="px-6 md:px-12">
                        <h3 className="text-sm text-orange-500 font-semibold mb-6">
                            — OUR TEAM
                        </h3>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
                            {[
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
                            ].map((member, index) => (
                                <div
                                    key={index}
                                    className="bg-white  rounded-xl text-center shadow hover:shadow-lg transition"
                                >
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-60 mx-auto  mb-3 object-cover"
                                    />

                                    <h4 className="font-semibold text-gray-800">
                                        {member.name}
                                    </h4>
                                    <p className="text-sm text-gray-500 mb-2">
                                        {member.role}
                                    </p>

                                    <div className="flex justify-center gap-3 text-gray-500  mb-3">
                                        <FaLinkedinIn className="hover:text-orange-500 cursor-pointer" />
                                        <FaTwitter className="hover:text-orange-500 cursor-pointer" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* ================= STATS ================= */}
            <section className="bg-gray-900 text-white py-16">
                <div className="grid md:grid-cols-4 text-center gap-8 px-6 md:px-16">
                    {[
                        ["500+", "Hotels"],
                        ["10,000+", "Rooms"],
                        ["25,000+", "Guests"],
                        ["99%", "Satisfaction"]
                    ].map((item, i) => (
                        <div key={i}>
                            <h2 className="text-4xl font-bold mb-2">{item[0]}</h2>
                            <p className="text-gray-400">{item[1]}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="relative py-24 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
                <img
                    src={hotelreception}
                    alt="CTA Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-20 text-white px-6">
                    <h2 className="text-4xl font-bold mb-6">Start Your Journey With Us</h2>
                    <p className="text-xl mb-10 max-w-2xl mx-auto">Join hundreds of hotels that have transformed their operations with our smart management system.</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition transform hover:scale-105">
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