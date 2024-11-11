import { BsFillBarChartLineFill } from "react-icons/bs";


interface Table {
    materia: string;
    descripcion: string;
    cuatrimestre: string;
    estado: string;
    nota: number | null;
}

const TableGrades = ({ id }: { id: string }) => {
    const subjects:Table[] = [
    {
        materia: "Organización Empresarial",
        descripcion: "Organización y empresas. Estructuras organizacionales...",
        cuatrimestre: "1er",
        estado: "finalizado",
        nota: 8
    },
    {
        materia: "Comunicación Visual",
        descripcion: "La comunicación. Elementos de la comunicación...",
        cuatrimestre: "1er",
        estado: "finalizado",
        nota: 10
    },
    {
        materia: "Introducción a la Programación",
        descripcion: "Introducción a la programación, Algoritmos...",
        cuatrimestre: "1er",
        estado: "finalizado",
        nota: 10
    },
    {
        materia: "Programación Web I",
        descripcion: "Introducción al desarrollo web, HTML, Estilos...",
        cuatrimestre: "1er",
        estado: "finalizado",
        nota: 10
    },
    {
        materia: "Elementos de Matemática",
        descripcion: "Introducción al análisis lógico, lógica proposicional...",
        cuatrimestre: "1er",
        estado: "finalizado",
        nota: 8
    },
    {
        materia: "Base de datos I",
        descripcion: "Concepto de persistencia y bases de datos relacionales...",
        cuatrimestre: "2do",
        estado: "en curso",
        nota: null
    },
    {
        materia: "Programacion web II",
        descripcion: "Introducción a los lenguajes dinámicos de desarrollo web...",
        cuatrimestre: "2do",
        estado: "en curso",
        nota: null
    },
    {
        materia: "Programación orientada a objetos",
        descripcion: "Objetos, clases, UML, Abstracción, Herencia...",
        cuatrimestre: "2do",
        estado: "en curso",
        nota: null
    },
    {
        materia: "Sistemas empresariales",
        descripcion: "Teoría general de sistemas, CRM, ERP...",
        cuatrimestre: "2do",
        estado: "en curso",
        nota: null
    }
    ];
      
    // Filtramos las materias que están finalizadas y tienen nota
    const completedSubjects = subjects.filter((subject) => subject.estado === "finalizado" && subject.nota !== null);
    
    // Calculamos el promedio de notas
    const averageGrade = (
        completedSubjects.reduce((sum, subject) => sum + (subject.nota ?? 0), 0) / completedSubjects.length
    ).toFixed(2);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg container mx-auto" id={id}>
      <div>
        <div className="flex items-center pb-10">
          <BsFillBarChartLineFill className="mr-1 text-3xl" />
          <h2 className="text-3xl font-semibold">Calificaciones carrera</h2>
        </div>
        <p className="mb-5 text-lg font-medium text-gray-700 dark:text-gray-300">
          Promedio de notas: {averageGrade}
        </p>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Materia</th>
            <th scope="col" className="px-6 py-3">Cuatrimestre</th>
            <th scope="col" className="px-6 py-3">Descripción</th>
            <th scope="col" className="px-6 py-3">Nota</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                {subject.materia}
              </th>
              <td className="px-6 py-4">{subject.cuatrimestre}</td>
              <td className="px-6 py-4">{subject.descripcion}</td>
              <td className="px-6 py-4">{subject.nota !== null ? subject.nota : "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableGrades;
