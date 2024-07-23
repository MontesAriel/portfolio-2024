import Image from "next/image"
import { FaLinkedin } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

export default function Header({ id }: { id: string }) {
    return(
        <header id={id} className="flex md:justify-around md:flex-row flex-col-reverse items-center py-10">
            <div className="text-left mr-10">
                <div>
                    <h1 className="text-5xl font-semibold">Hola, soy Ariel Montes</h1>
                    <div className="my-5 text-lg">
                        <p><strong className="text-green-400">Desarrollador front end</strong> con orientación a la experiencia del usuario.</p>
                        <p>Actualmente, estoy cursando la carrera de <strong className="text-green-400">analista de sistemas</strong>.</p>
                        <p>Vivo en Buenos Aires, Argentina.</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex text-center justify-center items-center border p-2 rounded-xl dark:bg-gray-900  dark:border-gray-600 hover:bg-gray-950 hover:border-green-400 cursor-pointer mr-2">
                        <MdMail className="mr-1"/>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=montesarieel@gmail.com" target="_blank">Contáctame</a>

                    </div>
                    <div className="flex text-center justify-center items-center border p-2 rounded-xl dark:bg-gray-900  dark:border-gray-600 hover:bg-gray-950 hover:border-green-400 cursor-pointer">
                        <FaLinkedin className="mr-1"/>
                        <a href="https://www.linkedin.com/in/montesariel/" target="_blank">Linkedin</a>
                    </div>
                </div>
            </div>
            <div className="flex justify-end md:pb-0 pb-5">
                <Image src="/avata2.jpg" alt="avatar Ariel Montes" width={400} height={400} className="rounded-full"/>
            </div>
        </header>
    )
}