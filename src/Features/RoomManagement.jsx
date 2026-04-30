import React, { useState, useRef } from "react";
import {
    Bed,
    Settings,
    Tags,
    Brush,
    Wrench,
    LayoutDashboard,
    History,
    ShieldCheck,
} from "lucide-react";

const features = [
    {
        title: "Room Book",
        desc: "Define and manage various room types like Deluxe, Suite, and Standard with custom attributes.",
        icon: Bed,
    },
    {
        title: "Booking List",
        desc: "Define and manage various room types like Deluxe, Suite, and Standard with custom attributes.",
        icon: Bed,
    },
    {
        title: "Room Checkout",
        desc: "Monitor real-time room availability, occupancy levels, and upcoming vacancies across all floors.",
        icon: LayoutDashboard,
    },
    {
        title: "Room Status",
        desc: "Set and manage seasonal tariffs, weekend rates, and special promotional pricing effortlessly.",
        icon: Tags,
    },


    {
        title: "Room Facilities",
        desc: "Track real-time cleaning progress and mark rooms as 'Ready' for immediate guest check-ins.",
        icon: Brush,
    },
    {
        title: "Facilities Details",
        desc: "Schedule and track room repairs, routine maintenance, and equipment servicing history.",
        icon: Wrench,
    },
    {
        title: "Room Settings",
        desc: "Customize in-room amenities and services offered for each specific room category.",
        icon: Settings,
    },
    {
        title: "Room List",
        desc: "Access detailed historical data of guests who stayed in specific rooms to personalize service.",
        icon: History,
    },
    {
        title: "Room Images",
        desc: "Perform and log regular room quality checks to maintain high hospitality standards.",
        icon: ShieldCheck,
    },
    {
        title: "Bed Type List",
        desc: "Perform and log regular room quality checks to maintain high hospitality standards.",
        icon: ShieldCheck,
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
                className="mb-6 p-4 bg-amber-50 rounded-full text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300"
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

const RoomManagement = () => {
    return (
        <section className="bg-slate-50 py-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                        Room Management
                    </h2>
                    <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
                    <p className="text-gray-500 mt-6 text-lg max-w-2xl mx-auto">
                        Efficiently control every aspect of your hotel's inventory with our comprehensive room management tools.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item, index) => (
                        <FeatureCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoomManagement;