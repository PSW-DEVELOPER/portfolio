import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-2">
            <div className="flex flex-shrink-0 items-center">
                <h4 className="font-bold text-white text-3xl">PSW</h4>
            </div>
            <div className="text-white m-8 flex items-center justify-center gap-4 text-2xl">
                <a>
                    <FaFacebook className="hover:text-cyan-300" />
                </a>
                <a>
                    <FaGithub className="hover:text-cyan-300" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;