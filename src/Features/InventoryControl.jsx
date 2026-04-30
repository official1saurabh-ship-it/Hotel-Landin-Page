import React from "react";
import { 
    Boxes, 
    BarChartHorizontal, 
    Truck, 
    AlertCircle, 
    FileSpreadsheet, 
    History, 
    ShieldCheck, 
    QrCode 
} from "lucide-react";

const inventoryFeatures = [
    { 
        title: "Real-time Stock Tracking", 
        desc: "Maintain precise visibility of your entire inventory across multiple storage locations.", 
        icon: Boxes 
    },
    { 
        title: "Automated Reordering", 
        desc: "Set intelligent par levels and receive instant alerts when stock reaches critical thresholds.", 
        icon: AlertCircle 
    },
    { 
        title: "Supplier Management", 
        desc: "Centralize vendor contacts, lead times, and purchase histories in one unified portal.", 
        icon: Truck 
    },
    { 
        title: "Usage Analytics", 
        desc: "Visualize consumption patterns to identify waste and optimize procurement cycles.", 
        icon: BarChartHorizontal 
    },
    { 
        title: "Digital Purchase Orders", 
        desc: "Generate and track professional POs with automated approval workflows.", 
        icon: FileSpreadsheet 
    },
    { 
        title: "Audit History", 
        desc: "Keep a permanent, tamper-proof record of every item movement and adjustment.", 
        icon: History 
    },
    { 
        title: "Quality Control", 
        desc: "Log inspections for incoming goods to ensure they meet your hotel's premium standards.", 
        icon: ShieldCheck 
    },
    { 
        title: "QR/Barcode Integration", 
        desc: "Accelerate stock takes and item check-outs with seamless scanning capabilities.", 
        icon: QrCode 
    },
];

const InventoryControl = () => {
    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Precision Inventory Control</h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Eliminate stockouts and reduce waste with our intelligent inventory management suite. Gain total control over your supply chain.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {inventoryFeatures.map((f, i) => (
                        <div key={i} className="p-8 rounded-2xl border border-slate-100 hover:border-emerald-500 transition-all group bg-slate-50/30">
                            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                <f.icon size={24} />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-3 text-lg">{f.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="bg-emerald-600 text-white px-10 py-4 rounded-full font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 transform hover:scale-105">
                        Optimize Your Inventory
                    </button>
                </div>
            </div>
        </section>
    );
};

export default InventoryControl;
