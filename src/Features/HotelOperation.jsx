import React, { useState, useRef } from "react";
import {
    DoorOpen,
    ClipboardList,
    LogOut,
    BedDouble,
    Activity,
    Image,
    Building2,
} from "lucide-react";

const features = [
    {
        title: "Room Book",
        desc: "Seamlessly manage room bookings and reservations with real-time updates.",
        icon: DoorOpen,
    },
    {
        title: "Booking List",
        desc: "View and manage all guest bookings in a comprehensive, organized list.",
        icon: ClipboardList,
    },
    {
        title: "Room Checkout",
        desc: "Streamlined process for guest departures and final billing updates.",
        icon: LogOut,
    },
    {
        title: "Room List",
        desc: "Comprehensive view of all available and occupied rooms in the hotel.",
        icon: BedDouble,
    },
    {
        title: "Room Status",
        desc: "Monitor real-time room availability, cleaning status, and maintenance.",
        icon: Activity,
    },
    {
        title: "Room Image",
        desc: "Manage high-quality visuals for each room type to enhance guest selection.",
        icon: Image,
    },
    {
        title: "Branches",
        desc: "Easily switch between and manage multiple hotel locations from one portal.",
        icon: Building2,
    },
];

const FeatureCard = ({ item }) => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const cardRef = useRef(null);
    const Icon = item.icon;

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xRotation = ((mouseY / height) - 0.5) * -20;
        const yRotation = ((mouseX / width) - 0.5) * 20;

        setRotate({ x: xRotation, y: yRotation });
    };

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.05, 1.05, 1.05)`,
                transition: "transform 0.1s ease-out",
                transformStyle: "preserve-3d"
            }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl cursor-pointer group flex flex-col items-center text-center min-h-[280px] justify-center border border-gray-100"
        >
            <div
                style={{ transform: "translateZ(50px)" }}
                className="mb-6 p-4 bg-blue-50 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
            >
                <Icon size={40} strokeWidth={1.5} />
            </div>

            <h3
                style={{ transform: "translateZ(30px)" }}
                className="text-xl font-bold text-gray-800 mb-3"
            >
                {item.title}
            </h3>

            <p
                style={{ transform: "translateZ(20px)" }}
                className="text-gray-500 leading-relaxed text-sm"
            >
                {item.desc}
            </p>
        </div>
    );
};

const HotelOperations = () => {
    return (
        <section className="bg-gray-50 py-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                        Hotel Operations
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    <p className="text-gray-500 mt-6 text-lg max-w-2xl mx-auto">
                        Streamline your hospitality management with our powerful suite of operational tools.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((item, index) => (
                        <FeatureCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HotelOperations;