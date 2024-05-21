import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-start space-x-20 max-w-7xl mx-auto">
          <div className="py-8 flex-1">
            <div className="relative text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-orange-600"></div>
              </div>
              <div className="relative bg-white px-4 inline-block border rounded-2xl border-orange-600">
                <span className="text-sm font-semibold text-orange-500 bg-white px-2">
                  Presencial
                </span>
              </div>
            </div>

            <div className="my-8">
              <h1 className="text-gray-900 text-5xl font-bold pb-4">
                Ingeniería de Software – Bogotá
              </h1>
              <p className="text-gray-900">
                Desarrolla soluciones de software y conviértete en un líder
                digital de uno de los sectores con mayor crecimiento del
                mercado. Obtén tres titulaciones a lo largo de tu formación
              </p>
              <button
                type="submit"
                className=" bg-white border hover:bg-orange-600 text-gray-800 px-16 py-4 rounded-3xl border-orange-600 my-5"
              >
                Inscríbete Aqui
              </button>
            </div>

            {/* Formulario de grid 3x3 */}
            <form className="mb-4">
              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Estudiante"
                  className="border p-2 max-h-11"
                />
                <input
                  type="text"
                  placeholder="Nombre"
                  className="border p-2 max-h-11"
                />
                <input
                  type="text"
                  placeholder="Apellido"
                  className="border p-2 max-h-11"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="border p-2 max-h-11"
                />
                <input
                  type="text"
                  placeholder="Numero de contact"
                  className="border p-2 max-h-11"
                />
                <input
                  type="text"
                  placeholder="Numero de documento"
                  className="border p-2 max-h-11"
                />
                <input
                  type="text"
                  placeholder="Canal preferido"
                  className="border p-2 max-h-11"
                />
                <input
                  type="text"
                  placeholder="Como se entero"
                  className="border p-2 max-h-11"
                />
                <div className="flex items-center border-2 p-2">
                  <input type="checkbox" id="checkbox" className="mr-2" />
                  <label className="text-gray-700 text-xs" htmlFor="checkbox">
                    Acepto la Política de Protección de Datos Personales
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 bg-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Enviar
              </button>
            </form>
          </div>
          {/* Parte derecha: Imagen */}
          <div className="flex-1 bg-[#617989]">
            <img
              src="/images/img-software.jpg"
              alt="Descripción de la imagen"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="flex flex-col text-left mt-4 pl-8 space-y-2 pb-3">
              <p>SNIES: 109130</p>
              <p>Resolución: 9058 del 28 de agosto de 2019</p>
              <p>Duración del programa: 10 semestres</p>
              <p>Facultad de: Ingeniería</p>
              <p>Años de vigencia: 7 años</p>
              <p>Jornada diurna: 7:00 a.m. a 1:00 p.m.</p>
              <p>Jornada nocturna: 6:00 p.m. a 10:00 p.m.</p>
              <p>Ver tarifas de créditos: Aquí</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-32 text-gray-900">
        <div className="flex justify-center items-center">
          <h2 className="text-4xl font-bold mb-8">Titulaciones</h2>{" "}
          {/* Centrado con un margen abajo */}
        </div>

        <div className="flex justify-center items-start space-x-8 max-w-7xl mx-auto">
          {" "}
          {/* Ajustado para centrar y agregar espacio horizontalmente */}
          <div className="bg-[#f8f7f5] rounded-lg shadow-lg p-6 w-1/3 flex flex-col justify-center items-center text-center space-y-4 min-h-72">
            <h3 className="text-lg font-semibold">Técnica Profesional en</h3>
            <h2 className="text-xl text-gray-800">
              PROGRAMACIÓN DE APLICACIONES DE SOFTWARE
            </h2>
            <p className="text-sm text-gray-600 mt-4">
              Resolución 9059 del 28 de agosto de 2019
              <br />
              Años de vigencia: 7 años
              <br />
              SNIES: 108334
            </p>
            <a href="#" className="text-blue-500 underline mt-4 inline-block">
              Ver tarifas de créditos aquí
            </a>
          </div>
          <div className="bg-[#f8f7f5]  rounded-lg shadow-lg p-6 w-1/3 flex flex-col justify-center items-center text-center space-y-4 min-h-72">
            <h3 className="text-lg font-semibold">Tecnología en</h3>
            <h2 className="text-xl text-gray-800">
              DESARROLLO DE APLICACIONES WEB Y MÓVILES
            </h2>
            <p className="text-sm text-gray-600 mt-4">
              Resolución 9057 del 28 de agosto de 2019
              <br />
              Años de vigencia: 7 años
              <br />
              SNIES: 108335
            </p>
            <a href="#" className="text-blue-500 underline mt-4 inline-block">
              Ver tarifas de créditos aquí
            </a>
          </div>
          <div className="bg-[#f8f7f5]  rounded-lg shadow-lg p-6 w-1/3 flex flex-col justify-center items-center text-center space-y-4 min-h-72">
            <h3 className="text-lg font-semibold">Profesional en</h3>
            <h2 className="text-xl text-gray-800">INGENIERÍA DE SOFTWARE</h2>
            <p className="text-sm text-gray-600 mt-4">
              Resolución 9058 del 28 de agosto de 2019
              <br />
              Años de vigencia: 7 años
              <br />
              SNIES: 109130
            </p>
            <a href="#" className="text-blue-500 underline mt-4 inline-block">
              Ver tarifas de créditos aquí
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-32 text-gray-900">
        <div className="flex justify-center items-start space-x-8 max-w-7xl mx-auto">
          <div className="p-6 w-1/3 flex flex-col justify-center text-st space-y-4 min-h-72">
            <h2 className="text-4xl font-bold mb-8">Titulaciones</h2>{" "}
            <div className="container mx-auto mt-12 text-gray-900">
              <ul className="list-disc pl-10 space-y-1 text-gray-900 marker:text-gray-700">
                <li>Ingeniero de calidad.</li>
                <li>Gerente de proyectos de software.</li>
                <li>Líder de desarrollo de software</li>
                <li>Desarrollador de software web.</li>
                <li>Integrador de soluciones web y móviles.</li>
                <li>Desarrollador de aplicaciones móviles.</li>
                <li>Líder Técnico de pruebas.</li>
              </ul>
            </div>
          </div>
          <div className="p-6 w-1/3 flex flex-col justify-center items-center text-center space-y-4 min-h-72">
            <p className="text-sm text-gray-600 mt-4">
              <img
                src="/images/woman-working.jpg"
                alt="Descripción de la imagen"
                style={{ width: "100%", height: "auto" }}
              />
            </p>
          </div>
          <div className="p-6 w-1/3 flex flex-col justify-center items-center text-center space-y-4 min-h-72">
            <p className="text-sm text-gray-600 mt-4">
              <img
                src="/images/men-working.jpg"
                alt="Descripción de la imagen"
                style={{ width: "100%", height: "auto" }}
              />
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-32 text-gray-900 bg-gray-200 max-w-7xl pt-10 pb-10">
        <div className="flex justify-center items-center">
          <h2 className="text-4xl font-bold mb-8">Matrículas Abiertas</h2>
        </div>
        <div className="flex justify-center items-center">
          <h2 className="text-base mb-8">
            Somos la institución universitaria para todos y nuestro objetivo es
            integrar a la comunidad con el sector productivo para afrontar los
            desafíos del futuro.
          </h2>
        </div>
      </div>

      <div className="flex justify-center items-start space-x-20 max-w-7xl mx-auto mt-32">
        <div className="py-8 flex-1">
          <img
            src="/images/Ingeniero-de-calidad-ucompensar.jpg"
            alt="Descripción de la imagen"
            style={{ width: "100%", height: "auto" }}
          />

          <div className="flex flex-col items-start pt-5">
            <h1 className="text-orange-600 text-3xl font-bold max-w-xs pb-2">
              Este será tu perfil
            </h1>
            <div className="border-t border-orange-600 w-full"></div>
          </div>

          <p className="text-gray-900 pt-5">
            El ingeniero de software es competente en todas y cada una de las
            etapas que comprenden el ciclo de vida de construcción de software
            como requerimientos, análisis, diseño, arquitectura, implementación,
            pruebas y puesta en marcha, así como en administrar tiempos,
            recursos y procesos de una manera efectiva para la finalización
            exitosa de proyectos de software.
          </p>
        </div>

        <div className="flex-1">
          <h1 className="text-gray-900 text-5xl font-bold">
            Sé un experto en:
          </h1>
          <div className="container mx-auto mt-12 text-gray-900">
            <ul className="list-disc pl-10 space-y-4 text-gray-900 marker:text-orange-500">
              <li>Diseño y desarrollo web.</li>
              <li>Diseño UX/UI.</li>
              <li>Diseño y desarrollo de aplicaciones móviles.</li>
              <li>Arquitectura de software. Desarrollo backEnd.</li>
              <li>Desarrollo frontEnd.</li>
              <li>Ingeniería de requerimientos.</li>
              <li>Cloud Computing.</li>
              <li>Testing y aseguramiento de la calidad.</li>
              <li>Metodologías ágiles de desarrollo.</li>
              <li>Gestión de proyectos de software.</li>
              <li>Integración de tecnologías.</li>
            </ul>
          </div>
          <button
            type="submit"
            className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded"
          >
            Plan de estudios
          </button>
        </div>
      </div>
    </section>
  );
}
