import React from "react";

function Footer() {
  return (
    <footer className="bg-[#4e5357] min-h-96 mt-28 text-xs">
      <div className="container mx-auto max-w-7xl pt-20">
        <div className="flex justify-center items-start space-x-14">
          <div className="w-2/6 flex flex-col justify-center items-start">
            <img
              src="/images/Logo-Fundacion-Universitaria-compensar.svg"
              alt="Descripción de la imagen"
            />
            <p className="pt-10">
              Fundación Universitaria Compensar P.J. Resolución 23635 del 23
              diciembre 1981 | 12455 del 9 de julio 2020. – VIGILADA
              MINEDUCACIÓN
            </p>
            <p className="pt-5">
              Para requerimientos de autoridades, tutelas o notificaciones
              judiciales por favor dirigirse al correo:
            </p>
            <p className="text-orange-600 pt-5">
              notificacionesjudiciales@ucompensar.edu.co
            </p>
            <div className="flex justify-center items-start space-x-20 pt-5">
              <p>Síguenos en nuestras redes:</p>
              <div className="flex flex-row">
                <img
                  src="/images/facebook.png"
                  alt="Descripción de la imagen"
                  style={{ width: "30px", height: "auto" }}
                />
                <img
                  src="/images/instagram.png"
                  alt="Descripción de la imagen"
                  style={{ width: "30px", height: "auto" }}
                />
                <img
                  src="/images/likedln.png"
                  alt="Descripción de la imagen"
                  style={{ width: "30px", height: "auto" }}
                />
                <img
                  src="/images/youtube.png"
                  alt="Descripción de la imagen"
                  style={{ width: "30px", height: "auto" }}
                />
              </div>
            </div>
          </div>
          <div className="w-4/6 flex flex-col justify-center">
            <div className="flex justify-center items-start bg-[#707070] rounded-2xl p-10">
              <div className="w-1/4 flex flex-col justify-center">
                <h2 className="text-xl font-bold text-orange-600 pb-5">
                  Bogota
                </h2>
                <p>Sede Principal</p>
                <p>Avenida (Calle) 32 No. 17 – 30</p>
                <p>Teléfono: 601 338 06 66</p>
              </div>
              <div className="w-1/4 flex flex-col justify-center">
                <h2 className="text-xl font-bold text-orange-600 pb-5">
                  Villavicencio
                </h2>
                <p>Sede Cofrem</p>
                <p>Carrera 35 No. 20A-02</p>
                <p>Vía Catama (antes del Colegio Cofrem)</p>
                <p>Teléfono: 608 681 86 40</p>
              </div>
              <div className="w-2/4 flex flex-col justify-center">
                <div className="flex justify-center items-start">
                  <div className="w-1/3 flex flex-col justify-center">
                    <img
                      src="/images/Sello-ICONTEC_ISO-9001.png"
                      alt="Descripción de la imagen"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="w-1/3 flex flex-col justify-center">
                    <img
                      src="/images/Sello-ICONTEC_NTC-5555.png"
                      alt="Descripción de la imagen"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className="w-1/3 flex flex-col justify-center">
                    <img
                      src="/images/Sello-ICONTEC-Certificacion_de_Servicios.png"
                      alt="Descripción de la imagen"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto pb-10">
        <div class="border-t border-gray-400 my-2"></div>
        <h1 className="text-lg font-bold text-orange-600 py-3">
          links importantes
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="https://ucompensar.edu.co/documentos-de-interes/" className="hover:text-gray-300">
                Documentos de Interés
              </a>
            </li>
            <li>
              <a href="https://ucompensar.edu.co/regimen-tributario-especial/" className="hover:text-gray-300">
                Régimen Tributario Especial
              </a>
            </li>
            <li>
              <a href="https://recurso.ucompensar.edu.co/Servicio/saleForceWebToCase/src/PQRSF.html?_gl=1*g8m8zi*_ga*NzIyOTEyNjMyLjE3MTIyNDg3NTY.*_ga_XGQ6YMBJF1*MTcxNjI0NDA1MS4zMS4wLjE3MTYyNDQwNTEuNjAuMC4w" className="hover:text-gray-300">
                Radica tus PQRSF AQUÍ
              </a>
            </li>
            <li>
              <a href="https://ucompensar.edu.co/preguntas-frecuentes/" className="hover:text-gray-300">
                Preguntas Frecuentes
              </a>
            </li>
            <li>
              <a href="https://ucompensar.edu.co/wp-content/uploads/2023/12/Resolucion-328-Derechos-Pecuniarios-2024-firmado.pdf" className="hover:text-gray-300">
                Derechos Pecuniarios
              </a>
            </li>
            <li>
              <a href="https://ucompensar.edu.co/wp-content/uploads/2021/06/Resolucion-12455-de-9-de-julio-de-2020.pdf" className="hover:text-gray-300">
                Estatutos
              </a>
            </li>
            <li>
              <a href="https://ucompensar.edu.co/wp-content/uploads/2023/06/POL-PAJ-02-V06-Tratamiento-de-datos-personales.pdf" className="hover:text-gray-300">
                Tratamiento de datos personales
              </a>
            </li>
            <li>
              <a href="https://ucompensar.edu.co/wp-content/uploads/2023/08/Reglamento-estudiantil-v2.pdf" className="hover:text-gray-300">
                Reglamento estudiantes
              </a>
            </li>
            <li>
              <a href="https://ucompensar.edu.co/wp-content/uploads/2022/07/Reglamento-Docente-ucompensar.pdf" className="hover:text-gray-300">
                Reglamento del profesorado
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
