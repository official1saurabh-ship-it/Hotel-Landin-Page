const Footer = () => {
    return (
        <footer className="bg-[#071c2f] text-white pt-16 pb-8">

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Newsletter */}
                <div>
                    <h2 className="text-xl font-bold mb-4 text-white">Newsletter</h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        At BioSofttech, we are committed to architecting resilient software ecosystems that empower enterprises.
                    </p>

                    <div className="flex items-center border border-gray-600 rounded-full overflow-hidden focus-within:border-amber-500 transition-colors">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="bg-transparent px-4 py-2 outline-none w-full text-sm text-white"
                        />
                        <button className="bg-amber-500 hover:bg-amber-600 text-black px-5 py-2 text-sm font-bold transition-colors">
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* Explore */}
                <div>
                    <h2 className="text-xl font-bold mb-4 text-white">Explore</h2>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li className="hover:text-amber-500 cursor-pointer transition-colors">Home</li>
                        <li className="hover:text-amber-500 cursor-pointer transition-colors">Services</li>
                        <li className="hover:text-amber-500 cursor-pointer transition-colors">About Us</li>
                        <li className="hover:text-amber-500 cursor-pointer transition-colors">Latest Products</li>
                        <li className="hover:text-amber-500 cursor-pointer transition-colors">Testimonial</li>
                        <li className="hover:text-amber-500 cursor-pointer transition-colors">Our Team</li>
                        <li className="hover:text-amber-500 cursor-pointer transition-colors">Contact Us</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-xl font-bold mb-4 text-white">Contact Info</h2>

                    <div className="space-y-4 text-gray-400 text-sm">
                        <p className="flex items-center gap-2"><span className="text-amber-500">📍</span> Lucknow, Uttar Pradesh - 226028</p>
                        <p className="flex items-center gap-2"><span className="text-amber-500">✉️</span> info@biosoftech.com</p>
                        <p className="flex items-center gap-2"><span className="text-amber-500">📞</span> +91 6209688930</p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-6">
                        <div className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded hover:border-amber-500 hover:text-amber-500 cursor-pointer transition-all">
                            f
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded hover:border-amber-500 hover:text-amber-500 cursor-pointer transition-all">
                            ig
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded hover:border-amber-500 hover:text-amber-500 cursor-pointer transition-all">
                            in
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded hover:border-amber-500 hover:text-amber-500 cursor-pointer transition-all">
                            tw
                        </div>
                    </div>
                </div>

                {/* Popular Post */}
                <div>
                    <h2 className="text-xl font-bold mb-4 text-white">Popular Post</h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <p className="text-amber-500 text-xs font-bold tracking-wider">INVESTMENT</p>
                            <p className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                                Revisiting Your Investment & Distribution Goals
                            </p>
                        </div>

                        <div>
                            <p className="text-amber-500 text-xs font-bold tracking-wider">BUSINESS</p>
                            <p className="text-gray-300 hover:text-white cursor-pointer transition-colors">
                                Dimensional Fund Advisors Interview with Director
                            </p>
                        </div>
                    </div>

                    <button className="mt-6 px-6 py-2 bg-white hover:bg-amber-500 text-black rounded-full text-sm font-bold transition-all transform hover:scale-105">
                        View All Blogs →
                    </button>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-400">
                © 2026 <span className="text-amber-500 font-bold">BioSofttech</span> All rights reserved.
                <div className="mt-2 text-xs">
                    Privacy Policy • Designed By BioSofttech Solution Pvt. Ltd.
                </div>
            </div>

        </footer>
    );
};

export default Footer;