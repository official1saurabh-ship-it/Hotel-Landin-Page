import React from 'react';
import {
    LayoutDashboard,
    Users,
    UserPlus,
    Briefcase,
    CalendarCheck,
    UserCog,
    Wallet,
    ShieldCheck
} from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
            <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">
            {description}
        </p>
    </div>
);

const SectionHeader = ({ title, subtitle }) => (
    <div className="mb-10">
        <div className="flex items-center gap-2 mb-2">
            <div className="h-1 w-8 bg-blue-600 rounded-full"></div>
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-xs">{subtitle}</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    </div>
);
const HotelHRMS = () => {
    return (
        <section className="py-20 px-6 bg-gray-50/50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Main Header */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                        Hotel <span className="text-blue-600">HRMS</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A comprehensive human resource management system designed specifically for the hospitality industry.
                        Efficiently manage your workforce from a single, integrated platform.
                    </p>
                </div>

                {/* Core Management Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <FeatureCard
                        icon={LayoutDashboard}
                        title="HR Dashboard"
                        description="Real-time overview of your hotel's workforce analytics, key metrics, and daily HR activities at a glance."
                    />
                    <FeatureCard
                        icon={ShieldCheck}
                        title="HRMS"
                        description="Robust core human resource management system to centralize and secure all your organizational data."
                    />
                </div>

                {/* Employees Section */}
                <div className="mb-20">
                    <SectionHeader
                        subtitle="Workforce Management"
                        title="Employees"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <FeatureCard
                            icon={Users}
                            title="All Employees"
                            description="A centralized directory to view and manage comprehensive profiles for your entire hotel staff."
                        />
                        <FeatureCard
                            icon={CalendarCheck}
                            title="Attendance"
                            description="Seamlessly track daily attendance, shifts, and leave requests with automated reporting."
                        />
                        <FeatureCard
                            icon={Briefcase}
                            title="Departments"
                            description="Organize your staff into specialized hotel departments for better workflow and management."
                        />
                        <FeatureCard
                            icon={UserPlus}
                            title="Add Employees"
                            description="Streamlined onboarding process to quickly add new staff members with role-based access."
                        />
                        <FeatureCard
                            icon={UserCog}
                            title="Add Branch Manager"
                            description="Dedicated tools to appoint and manage leadership across multiple hotel branches or properties."
                        />
                    </div>
                </div>

                {/* Payroll Section */}
                <div>
                    <SectionHeader
                        subtitle="Financial Management"
                        title="Payroll"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <FeatureCard
                            icon={Wallet}
                            title="Employee Salary"
                            description="Automated payroll processing with precise salary calculations, deductions, and payment scheduling."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HotelHRMS;
