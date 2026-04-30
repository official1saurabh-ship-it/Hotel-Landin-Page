import React from "react";
import { Activity, ClipboardCheck, Package, Smartphone, BarChart3, Camera, Wrench, CalendarDays } from "lucide-react";

const housekeepingFeatures = [
    { title: "Live Room Status", desc: "Instantly track room readiness from 'Dirty' to 'Inspected' in one dashboard.", icon: Activity },
    { title: "Auto-Task Assignment", desc: "Intelligent task distribution based on staff location and priority.", icon: ClipboardCheck },
    { title: "Linen & Supply Tracking", desc: "Monitor supply levels and inventory with automated low-stock alerts.", icon: Package },
    {
        title: "Staff Mobile Portal", desc: "Dedicated mobile interface for housekeeping teams to update status on the go.", icon: Smartphone
    },
    { title: "Turnover Analytics", desc: "Measure cleaning durations and performance with detailed efficiency reports.", icon: BarChart3 },
    { title: "Visual Inspections", desc: "Enable photo-proof submissions for high-standard quality assurance.", icon: Camera },
    { title: "Rapid Maintenance Alerts", desc: "Report broken fixtures directly from the room for immediate response.", icon: Wrench },
    { title: "Dynamic Shift Scheduling", desc: "Organize cleaning rotations with a seamless drag-and-drop calendar.", icon: CalendarDays },
];

const HouseKeeping = () => {
    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Smart Housekeeping Operations</h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Optimize turnover times with real-time status tracking and automated task distribution.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {housekeepingFeatures.map((f, i) => (
                        <div key={i} className="p-6 rounded-2xl border border-slate-100 hover:border-amber-500 transition-all group
 bg-slate-50/50">
                            <f.icon className="text-amber-600 mb-4 group-hover:scale-110 transition-transform" size={32} />
                            <h3 className="font-bold text-slate-900 mb-2">{f.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition-colors">
                        Get Started Today
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HouseKeeping