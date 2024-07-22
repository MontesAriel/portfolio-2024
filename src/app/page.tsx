import Header from "@/components/Header";
import Experiencie from "@/components/Experiencie";
import Tecnologies from "@/components/Tecnologies";
import Proyects from "@/components/Proyects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <Header id="header"/>
      <Experiencie id="experience"/>
      <Tecnologies id="technologies"/>
      <Proyects id="projects"/>
    </main>
  );
}
