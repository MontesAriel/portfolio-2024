'use client'
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { IoCloseSharp } from "react-icons/io5";

export default function Navbar() {
    const [menuHamburger, setMenuHamburger] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>("");

    const handleSetActive = (section: string) => {
        setActiveSection(section);
    };

    return (
        <nav className="fixed w-full z-20 top-0 start-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4 md:hidden relative">
                <button onClick={() => setMenuHamburger(!menuHamburger)}>
                    {menuHamburger ? <IoCloseSharp className="text-xl"/> : <GiHamburgerMenu className="text-lg"/>}
                </button>
            </div>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-2">
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 border p-2 rounded-xl dark:bg-gray-900 dark:border-gray-400" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-400">
                        <li>
                            <ScrollLink
                                to="header"
                                smooth={true}
                                duration={500}
                                className={"cursor-pointer block py-2 px-3 md:p-0 hover:text-green-400"}
                                style={{ color: activeSection === "header" ? "rgb(74 222 128)" : "" }}
                                onClick={() => handleSetActive("header")}
                            >
                                Sobre mí
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="experience"
                                smooth={true}
                                duration={500}
                                className={"cursor-pointer block py-2 px-3 md:p-0 hover:text-green-400"}
                                style={{ color: activeSection === "experience" ? "rgb(74 222 128)" : "" }}
                                onClick={() => handleSetActive("experience")}
                            >
                                Experiencia
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="technologies"
                                smooth={true}
                                duration={500}
                                className={"cursor-pointer block py-2 px-3 md:p-0 hover:text-green-400"}
                                style={{ color: activeSection === "technologies" ? "rgb(74 222 128)" : "" }}
                                onClick={() => handleSetActive("technologies")}
                            >
                                Tecnologías
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="projects"
                                smooth={true}
                                duration={500}
                                className={"cursor-pointer block py-2 px-3 md:p-0 hover:text-green-400 "}
                                style={{ color: activeSection === "proyects" ? "rgb(74 222 128)" : "" }}
                                onClick={() => handleSetActive("projects")}
                            >
                                Proyectos personales
                            </ScrollLink>
                        </li>                    
                    </ul>
                </div>
            </div>

            {menuHamburger ?
                <div className="text-white text-center bg-neutral-950 p-24 absolute w-full h-screen">
                    <ul className="text-2xl flex flex-col justify-center">
                        <li className="py-2">
                            <ScrollLink
                                to="header"
                                smooth={true}
                                duration={500}
                                onClick={() => { handleSetActive("header"); setMenuHamburger(false); }}
                                className={`cursor-pointer hover:text-green-400 ${activeSection === "header" ? "text-green-400" : ""}`}
                            >
                                Sobre mí
                            </ScrollLink>
                        </li>
                        <li className="py-2">
                            <ScrollLink
                                to="experience"
                                smooth={true}
                                duration={500}
                                onClick={() => { handleSetActive("experience"); setMenuHamburger(false); }}
                                className={`cursor-pointer hover:text-green-400 ${activeSection === "experience" ? "text-green-400" : ""}`}
                            >
                                Experiencia
                            </ScrollLink>
                        </li>
                        <li className="py-2">
                            <ScrollLink
                                to="technologies"
                                smooth={true}
                                duration={500}
                                onClick={() => { handleSetActive("technologies"); setMenuHamburger(false); }}
                                className={`cursor-pointer hover:text-green-400 ${activeSection === "technologies" ? "text-green-400" : ""}`}
                            >
                                Tecnologías
                            </ScrollLink>
                        </li>
                        <li className="py-2">
                            <ScrollLink
                                to="projects"
                                smooth={true}
                                duration={500}
                                onClick={() => { handleSetActive("projects"); setMenuHamburger(false); }}
                                className={`cursor-pointer hover:text-green-400 ${activeSection === "projects" ? "text-green-400" : ""}`}
                            >
                                Proyectos personales
                            </ScrollLink>
                        </li>    
                    </ul>
                </div>
                : null
            }
        </nav>
    );
}
