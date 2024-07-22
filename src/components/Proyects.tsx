import { FaCode } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";
import Image from "next/image";

export default function Proyects({ id }: { id: string }) {
    return(
        <section id={id} className="container py-14 mx-auto">
            <div>
                <div className="flex items-center pb-10">
                    <FaCode className="mr-1 text-3xl"/>
                    <h2 className="text-3xl font-semibold">Proyectos personales</h2>
                </div>
                <div className="lg:flex lg:justify-around">
                    <div>
                        <Image src="/app-movies.PNG" alt="app movies" width={600} height={600} className="rounded"/>
                    </div>
                    <div className="flex flex-col justify-around max-w-3xl">
                        <h4 className="text-2xl pb-2 font-semibold">App películas</h4>
                        <div className="flex ">
                            <span className="ml-1 bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">NextJs</span>
                            <span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">Redux</span>
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Tailwind</span>
                        </div>
                        <p className="py-4">
                            App de películas realizada con la API de TheMovieDB. Utiliza Next.js para el renderizado del lado del servidor y la navegación rápida, Redux para la gestión eficiente del estado de la aplicación, y Tailwind CSS para el diseño responsivo y moderno.
                        </p>
                        <div className="cursor-pointer max-w-52 flex text-center justify-center items-center border p-2 rounded-xl dark:bg-gray-900  dark:border-gray-600 md:text-base text-xs">
                            <FaCodeBranch className="mr-1"/>
                            <a href="https://github.com/MontesAriel/app-movies" target="_blank">Código</a>
                        </div>
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
                        <h4 className="text-2xl font-semibold pb-2">Clon Spotify</h4>
                        <div className="flex">
                            <span className="ml-1 bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">React</span>
                            <span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">Redux</span>
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Tailwind</span>
                        </div>
                        <p className="py-4">
                            Clon de Spotify realizado con la API spotify-web-api-js y documentación oficial de Spotify. Utiliza React para la creación de componentes de la interfaz de usuario, Redux para la gestión del estado global de la aplicación, y Tailwind CSS para el diseño responsivo y estilizado.
                        </p>
                        <div className="cursor-pointer max-w-52 flex text-center justify-center items-center border p-2 rounded-xl dark:bg-gray-900  dark:border-gray-600 md:text-base text-xs">
                            <FaCodeBranch className="mr-1"/>
                            <a href="https://github.com/MontesAriel/clon-spotify" target="_blank">Código</a>
                        </div>
                    </div>            
                </div>

                <div className="lg:flex lg:justify-around">
                    <div>
                        <Image src="/app-cripto.PNG" alt="app movies" width={600} height={600} className="rounded"/>
                    </div>
                    <div className="flex flex-col justify-around max-w-3xl">
                        <h4 className="text-2xl font-semibold pb-2">App Criptomonedas</h4>
                        <div className="flex">
                            <span className="ml-1 bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">React</span>
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Tailwind</span>
                            <span className="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">en curso</span>

                        </div>
                        <p className="py-4">
                            App de criptomonedas en la cual recién implementé React y Tailwind. La aplicación está en desarrollo y se centra en proporcionar información actualizada sobre diversas criptomonedas, utilizando React para la creación de componentes de la interfaz de usuario y Tailwind CSS para el diseño responsivo y estilizado.
                        </p>
                        <div className="cursor-not-allowed max-w-52 flex text-center justify-center items-center border p-2 rounded-xl dark:bg-gray-900  dark:border-gray-600 md:text-base text-xs">
                            <FaCodeBranch className="mr-1"/>
                            <a href="#" >Código</a>
                        </div>
                    </div>            
                </div>
                
            
        </section>
    )
}