import React from "react";
import { 
    ShieldCheck, 
    CalendarClock, 
    Zap, 
    Users, 
    AlertTriangle, 
    FileText, 
    Thermometer, 
    Map 
} from "lucide-react";

const facilityFeatures = [
    { 
        title: "Asset Lifecycle Tracking", 
        desc: "Monitor the health and maintenance history of every piece of equipment in real-time.", 
        icon: ShieldCheck 
    },
    { 
        title: "Preventative Maintenance", 
        desc: "Schedule recurring inspections to prevent costly breakdowns before they happen.", 
        icon: CalendarClock 
    },
    { 
        title: "Energy Monitoring", 
        desc: "Track utility usage across all branches to identify significant saving opportunities.", 
        icon: Zap 
    },
    { 
        title: "Vendor Management", 
        desc: "Manage external service providers and track work order progress in one portal.", 
        icon: Users 
    },
    { 
        title: "Emergency Work Orders", 
        desc: "Rapidly deploy technicians for critical repairs with instant mobile notifications.", 
        icon: AlertTriangle 
    },
    { 
        title: "Compliance & Audits", 
        desc: "Stay ahead of safety regulations with digital checklists and automated audit logs.", 
        icon: FileText 
    },
    { 
        title: "Smart HVAC Control", 
        desc: "Integrated climate management to optimize guest comfort and reduce energy costs.", 
        icon: Thermometer 
    },
    { 
        title: "Facility Mapping", 
        desc: "Visualize asset distribution across floors and departments for better logistics.", 
        icon: Map 
    },
];

const FacilityManagement = () => {
    return (
        <section className="bg-slate-50 py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Omnichannel Facility Management</h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Centralize the maintenance and performance of your hotel's physical assets. Keep every system running at peak efficiency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {facilityFeatures.map((f, i) => (
                        <div key={i} className="p-8 rounded-2xl border border-slate-200 hover:border-blue-500 transition-all group bg-white shadow-sm hover:shadow-md">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <f.icon size={24} />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-3 text-lg">{f.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 transform hover:scale-105">
                        Optimize Your Facilities
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FacilityManagement;
