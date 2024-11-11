import Header from "@/components/Header";
import Experiencie from "@/components/Experiencie";
import Tecnologies from "@/components/Tecnologies";
import Proyects from "@/components/Proyects";
import TableGrades from "@/components/TableGrades";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:p-24 p-12">
      <Header id="header"/>
      <Experiencie id="experience"/>
      <Tecnologies id="technologies"/>
      <Proyects id="projects"/>
      <TableGrades id="grades" />
    </main>
  );
}
