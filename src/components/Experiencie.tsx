'use client'
import { useState } from "react";
import { FaBriefcase, FaCheck } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

interface ExperienceCompany {
    title: string;
    company: string;
    dates: string;
    description: string;
    technologies: { name: string, bgColor: string, textColor: string }[];
}

const ExperienceItem = ({ title, company, dates, description, technologies }: ExperienceCompany) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    return (
        <li className="mb-10 ms-6 lg:flex lg:justify-between">
            <div className="flex flex-col">
                <span className={`absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 ${isExpanded ? "bg-green-200 dark:bg-green-900" : "bg-gray-100 dark:bg-gray-700"}`}>
                    {isExpanded ? <FaCheck className="w-3.5 h-3.5 text-green-500 dark:text-green-400" /> : <BsBriefcaseFill className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />}
                </span>
                <h3 className="leading-tight text-white font-semibold">{title}</h3>
                <span className="text-sm py-1">{company}</span>
                <span className="text-sm">{dates}</span>
            </div>
            <div className="max-w-3xl">
                <p className={`text-white expanding-paragraph ${isExpanded ? 'expanded' : ''}`}>
                        {isExpanded ? description : `${description.substring(0, 100)}...`}
                </p>
                <div className="pb-2 flex items-center font-semibold text-green-400">
                    <button className="mt-1 mr-1" onClick={() => setIsExpanded(!isExpanded)}>
                        {isExpanded ? "ver menos" : "saber más"}
                    </button>
                    {isExpanded ? <IoIosArrowDown /> : <IoIosArrowForward />}
                </div>
                <p className=" flex flex-wrap">
                    <strong>Tecnologías: </strong>
                    {technologies.map((tech, index) => (
                        <span key={index} className={`mt-1 md:mt-0 ml-1 text-sm font-medium me-2 px-2.5 py-0.5 rounded ${tech.bgColor} ${tech.textColor}`}>
                            {tech.name}
                        </span>
                    ))}
                </p>
            </div>
        </li>
    );
};

export default function Experience({ id }: { id: string }) {
    const experiences: ExperienceCompany[] = [
        {
            title: "Desarrollador front-end",
            company: "Buenas Vibras",
            dates: "2024 - actualidad",
            description: "Actualmente, como Desarrollador front-end en Buenas Vibras, trabajo en la migración de una página web de viajes desde JQuery a Next.js. Este proceso incluye reescribir el código existente para aprovechar las ventajas de Next.js, como el renderizado del lado del servidor, la generación estática y el enrutamiento sencillo. Utilizo TypeScript para añadir tipado estático, lo que mejora la mantenibilidad y robustez del código. Además, implemento el manejo de estados con Context y React-Form para la gestión eficiente de formularios, asegurando una mejor organización y flujo de datos. También aplico CSS para estilizar la interfaz, garantizando una experiencia de usuario óptima y un diseño responsivo que se adapta a diferentes dispositivos. Este esfuerzo de migración no solo moderniza la tecnología utilizada, sino que también mejora significativamente el rendimiento y la escalabilidad de la aplicación web.",
            technologies: [
                { name: "NextJs", bgColor: "bg-gray-800", textColor: "text-gray-300" },
                { name: "Typescript", bgColor: "bg-blue-900", textColor: "text-blue-300" },
                { name: "TailwindCSS", bgColor: "bg-purple-900", textColor: "text-purple-300" },
                { name: "Scrum", bgColor: "bg-red-900", textColor: "text-red-300" },
                { name: "Docker", bgColor: "bg-pink-900", textColor: "text-pink-300" },
                { name: "Bitbucket", bgColor: "bg-yellow-900", textColor: "text-yellow-300" },
                { name: "Jira", bgColor: "bg-indigo-900", textColor: "text-indigo-300" },
            ],
        },
        {
            title: "Desarrollador front-end",
            company: "Inhouse",
            dates: "2023 - 2024",
            description: "En mi rol como Desarrollador front-end, fui responsable del diseño y desarrollo de aplicaciones utilizando React, creando interfaces de usuario interactivas y dinámicas mediante componentes reutilizables. Además, integré Inertia.js con Laravel para construir aplicaciones monolíticas eficientes, gestionando rutas y asegurando una comunicación fluida entre el frontend y el backend. También implementé diseño responsivo con Tailwind CSS, asegurando que las aplicaciones fueran accesibles y se vieran bien en dispositivos de diferentes tamaños. Adherí a la metodología de trabajo scrum para organizar y gestionar proyectos, colaborando efectivamente en equipos multidisciplinarios. Utilicé Git para la gestión de versiones, manteniendo un control preciso de los cambios en el código. Trabajé en la optimización del rendimiento de las aplicaciones para garantizar tiempos de carga rápidos y una experiencia de usuario fluida. Finalmente, realicé mantenimiento y actualización continua de las aplicaciones, asegurando que siempre estuvieran al día con las últimas tecnologías y requerimientos del mercado.",
            technologies: [
                { name: "React", bgColor: "bg-blue-800", textColor: "text-blue-300" },
                { name: "Laravel", bgColor: "bg-red-800", textColor: "text-red-300" },
                { name: "Inertia", bgColor: "bg-pink-800", textColor: "text-pink-300" },
                { name: "Git", bgColor: "bg-gray-800", textColor: "text-gray-300" },
                { name: "TailwindCSS", bgColor: "bg-purple-800", textColor: "text-purple-300" },
                { name: "Scrum", bgColor: "bg-green-800", textColor: "text-green-300" },
            ],
        },
        {
            title: "Tutor Javascript",
            company: "Coderhouse",
            dates: "2022 - 2024",
            description: "Como Tutor, despejé dudas de los estudiantes durante las clases en vivo y fuera de ellas, proporcionando aclaraciones y apoyo adicional. Corregí desafíos de clase y entregas intermedias, asegurando que los estudiantes comprendieran los conceptos clave y ofrecí retroalimentación constructiva. Tomé asistencia para mantener un registro preciso de la participación de los estudiantes. Participé activamente en las clases, aportando ejemplos prácticos y experiencias personales, además de ofrecer soporte continuo al docente principal. Realicé un seguimiento cercano a los estudiantes, acompañándolos en su proceso de aprendizaje a lo largo del curso, motivándolos a realizar los desafíos planteados y brindando apoyo constante para asegurar su éxito académico.",
            technologies: [
                { name: "Javascript", bgColor: "bg-yellow-800", textColor: "text-yellow-300" },
            ],
        },
        {
            title: "Programador full stack (MERN)",
            company: "Vívet SRL",
            dates: "2022 - 2023",
            description: "Como Desarrollador Full Stack, integré soluciones avanzadas utilizando React Hook Context, React Router y varios hooks para crear aplicaciones web dinámicas y eficientes. Implementé Material UI para mejorar la apariencia y la usabilidad de las interfaces de usuario. Mantuve y mejoré un ecommerce, asegurando su funcionamiento óptimo y actualizando características según las necesidades del negocio. Realicé tareas de web scraping con Express y Puppeteer, conectando los datos obtenidos a Google Sheets para su análisis y utilización posterior. Desarrollé un panel de control para administradores y operarios, facilitando la gestión de las operaciones diarias. Implementé funcionalidades de geocoding y mapping con Google Maps, mejorando la localización y visualización de datos geoespaciales. Creé un chatbot interactivo utilizando React para mejorar la atención al cliente. Realicé la migración de componentes de JQuery a React, modernizando el código base y mejorando la eficiencia del proyecto. Finalmente, conecté Microsoft Clarity y Google Analytics para obtener insights detallados sobre el comportamiento de los usuarios y optimizar las estrategias de marketing y desarrollo.",
            technologies: [
                { name: "React", bgColor: "bg-blue-800", textColor: "text-blue-300" },
                { name: "Git", bgColor: "bg-gray-800", textColor: "text-gray-300" },
                { name: "MongoDB", bgColor: "bg-red-800", textColor: "text-red-300" },
                { name: "Node", bgColor: "bg-green-800", textColor: "text-green-300" },
                { name: "Express", bgColor: "bg-yellow-800", textColor: "text-yellow-300" },
                { name: "Material UI", bgColor: "bg-purple-900", textColor: "text-purple-300" },
                { name: "Firebase", bgColor: "bg-indigo-900", textColor: "text-indigo-300" },
                { name: "Context", bgColor: "bg-pink-900", textColor: "text-pink-300" },
            ]
        }
    ]

    return (
        <section id={id} className="container items-center py-10 mx-auto">
            <div>
                <div className="flex items-center pb-5">
                    <FaBriefcase className="text-2xl mr-1" />
                    <h2 className="text-3xl font-semibold">Experiencia laboral</h2>
                </div>
                <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} {...exp} />
                    ))}
                </ol>
            </div>
        </section>
    );
}
                
