'use client'
import { GiGraduateCap } from "react-icons/gi";
import Image from "next/image";
import { Tooltip } from "react-tooltip";

export default function Tecnologies({ id }: { id: string }) {
    return(
        <section id={id} className="container items-center py-10 mx-auto">
            <div className="flex items-center  pb-5">
                <GiGraduateCap className="mr-1 text-3xl"/>
                <h2 className="text-3xl font-semibold ">Tecnologías utilizadas</h2>
            </div>

            <div className="mt-5 flex flex-wrap justify-between">
                <Image 
                    data-tooltip-id="redux"
                    src="/redux-icono.png" alt="icono react" 
                    width={60} height={60} 
                    className="rounded cursor-pointer card-img transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:brightness-110"
                />
                <Image 
                    data-tooltip-id="tailwind"
                    src="/tailwind-icono.png" alt="icono react" 
                    width={60} height={60}
                    className="rounded cursor-pointer card-img transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:brightness-110"
                />
                <Image
                    data-tooltip-id="material-ui" 
                    src="/material-ui-icono.png" alt="icono react" 
                    width={60} height={60}
                    className="rounded cursor-pointer card-img transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:brightness-110"
                />
                <Image 
                    data-tooltip-id="react"
                    src="/logo-react.png" alt="icono react" 
                    width={100} height={80}
                    className="rounded cursor-pointer card-img transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:brightness-110"
                />
                <Image 
                    data-tooltip-id="javascript"
                    src="/javascript-icono.png" alt="icono react" 
                    width={60} height={60}
                    className="rounded cursor-pointer card-img transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:brightness-110"
                />
                <Image
                    data-tooltip-id="git" 
                    src="/git-icono.png" alt="icono react" 
                    width={60} height={60}
                    className="rounded cursor-pointer card-img transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:brightness-110"
                />
                <Image 
                    data-tooltip-id="boostrap"
                    src="/boostrap-icono.png" alt="icono react" 
                    width={70} height={60}
                    className="rounded cursor-pointer card-img transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:brightness-110"
                />
                <Image
                    data-tooltip-id="next" 
                    src="/nextjs-icon.webp" alt="icono react" 
                    width={60} height={60}
                    className="rounded cursor-pointer card-img transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:brightness-110"
                />

                <Tooltip id="redux">Redux</Tooltip>
                <Tooltip id="react">React</Tooltip>
                <Tooltip id="git">Git</Tooltip>
                <Tooltip id="material-ui">Material Ui</Tooltip>
                <Tooltip id="javascript">Javascript</Tooltip>
                <Tooltip id="boostrap">Boostrap</Tooltip>
                <Tooltip id="tailwind">TailwindCSS</Tooltip>
                <Tooltip id="next">NextJs</Tooltip>
            </div>
        </section>
    )
} 