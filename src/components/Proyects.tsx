'use client'

import { FaCode } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";
import Image from "next/image";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

export default function Proyects({ id }: { id: string }) {
    const [isExpanded, setIsExpanded] = useState<boolean>(true);

    return(
        <section id={id} className="container py-14 mx-auto">
            <div>
                <div className="flex items-center pb-10">
                    <FaCode className="mr-1 text-3xl"/>
                    <h2 className="text-3xl font-semibold">Proyectos personales</h2>

                    <div>
                        {isExpanded ? <IoIosArrowDown className="w-10 text-3xl cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}/> : <IoIosArrowForward className="w-10 text-3xl cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}/>}
                    </div>
                </div>
            </div>
            {isExpanded && 
                <div>
                    <div className="lg:flex lg:justify-around">
                        <div>
                            <Image src="/app-movies.PNG" alt="app movies" width={600} height={600} className="rounded"/>
                        </div>
                        <div className="flex flex-col justify-around max-w-3xl">
                            <h4 className="text-2xl py-2 md:py-0 md:pb-2 font-semibold">App películas</h4>
                            <div className="flex ">
                                <span className="ml-1 bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">NextJs</span>
                                <span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">Redux</span>
                                <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Tailwind</span>
                            </div>
                            <p className="py-4">
                                App de películas realizada con la API de TheMovieDB. Utiliza Next.js para el renderizado del lado del servidor y la navegación rápida, Redux para la gestión eficiente del estado de la aplicación, y Tailwind CSS para el diseño responsivo y moderno.
                            </p>
                            <div className="hover:bg-gray-950 hover:border-green-400 cursor-pointer max-w-52 flex text-center justify-center items-center border p-2 rounded-xl dark:bg-gray-900  dark:border-gray-600 md:text-base text-xs">
                                <FaCodeBranch className="mr-1"/>
                                <a href="https://github.com/MontesAriel/app-movies" target="_blank">Código</a>
                            </div>
                        </div>            
                    </div>

                    <div className="lg:flex lg:justify-around py-20">
                        <div>
                            <video width="600" height="600" controls preload="auto" loop>
                                <source src="/video-spotify.mp4" type="video/mp4" />
                                Video informativo app spotify
                            </video>
                        </div>
                        <div className="flex flex-col justify-around max-w-3xl">
                            <h4 className="text-2xl py-2 md:py-0 md:pb-2 font-semibold">Clon Spotify</h4>
                            <div className="flex">
                                <span className="ml-1 bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">React</span>
                                <span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">Redux</span>
                                <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Tailwind</span>
                            </div>
                            <p className="py-4">
                                Clon de Spotify realizado con la API spotify-web-api-js y documentación oficial de Spotify. Utiliza React para la creación de componentes de la interfaz de usuario, Redux para la gestión del estado global de la aplicación, y Tailwind CSS para el diseño responsivo y estilizado.
                            </p>
                            <div className="hover:bg-gray-950 hover:border-green-400 cursor-pointer max-w-52 flex text-center justify-center items-center border p-2 rounded-xl dark:bg-gray-900  dark:border-gray-600 md:text-base text-xs">
                                <FaCodeBranch className="mr-1"/>
                                <a href="https://github.com/MontesAriel/clon-spotify" target="_blank">Código</a>
                            </div>
                        </div>            
                    </div>

                    <div className="lg:flex lg:justify-around">
                        <div>
                            <Image src="/mercado-libre.jpeg" alt="clon mercado libre" width={600} height={600} className="rounded"/>
                        </div>
                        <div className="flex flex-col justify-around max-w-3xl">
                            <h4 className="text-2xl py-2 md:py-0 md:pb-2 font-semibold">Mercado Libre</h4>
                            <div className="flex">
                                <span className="ml-1 bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">PHP</span>
                                <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Mysql</span>
                                <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Css</span>
                                <span className="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">HTML</span>
                            </div>
                            <p className="py-4">
                                Proyecto que realicé para la universidad en el cual es un Clon de Mercado Libre con php, mysql, html y css. Tiene las funcionalidades de poder registrarse y loguearse como vendedor o usuario. En la vista vendedor podes agregar, eliminar o editar los productos del vendedor. En la vista usuario tiene un home y una vista del producto.
                            </p>
                            <div className="hover:bg-gray-950 hover:border-green-400 cursor-pointer max-w-52 flex text-center justify-center items-center border p-2 rounded-xl dark:bg-gray-900  dark:border-gray-600 md:text-base text-xs">
                                <FaCodeBranch className="mr-1"/>
                                <a href="https://github.com/MontesAriel/mercado-libre-php" target="_blank" >Código</a>
                            </div>
                        </div>            
                    </div>
                </div>
            }
                
            
        </section>
    )
}