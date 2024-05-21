import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className=" text-gray-800 p-7 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center mt-6 mb-16 text-sm max-w-7xl">
        <img
          src="/images/main-logo.svg"
          alt="Descripción de la imagen"
          style={{ width: "20%", height: "auto" }}
        />

        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="https://ucompensar.edu.co/graduados/" className="hover:text-gray-300">
                Graduados
              </a>
            </li>
            <li>
              <a href="https://ucompensar.edu.co/nuestros-estudiantes" className="hover:text-gray-300">
                Estudiantes
              </a>
            </li>
            <li>
              <a href="https://academico.ucompensar.edu.co:8091/academusoft/academico/inscripcionLinea4/consultaPublica/inicio.jsp?_ga=2.13743991.1975776578.1629394524-1415034027.1626278245&_gl=1*vziaht*_ga*NzIyOTEyNjMyLjE3MTIyNDg3NTY.*_ga_XGQ6YMBJF1*MTcxNjI0NDA1MS4zMS4wLjE3MTYyNDQwNTEuNjAuMC4w" className="hover:text-gray-300">
                Estado de Admisión
              </a>
            </li>
            <li>
              <a href="https://ucompensar.edu.co/reingresos/" className="hover:text-gray-300">
                Reingresos
              </a>
            </li>
            <li>
              <a href="https://estudiantes.ucompensar.edu.co:8081/pol/?_gl=1*vziaht*_ga*NzIyOTEyNjMyLjE3MTIyNDg3NTY.*_ga_XGQ6YMBJF1*MTcxNjI0NDA1MS4zMS4wLjE3MTYyNDQwNTEuNjAuMC4w" className="hover:text-gray-300">
                Pago en Línea
              </a>
            </li>
            <li>
              <a href="https://unipanamericanaeduco.sharepoint.com/Portal%20MiPana/SitePages/INICIOPORTAL.aspx" className="hover:text-gray-300">
                Aplicativos
              </a>
            </li>
            <li>
              <a href="https://emisora.ucompensar.edu.co/?_gl=1*vziaht*_ga*NzIyOTEyNjMyLjE3MTIyNDg3NTY.*_ga_XGQ6YMBJF1*MTcxNjI0NDA1MS4zMS4wLjE3MTYyNDQwNTEuNjAuMC4w" className="hover:text-gray-300">
                Emisora
              </a>
            </li>
            <li>
              <a href="https://ucompensar.edu.co/blog/" className="hover:text-gray-300">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container font-bold mx-auto flex justify-end items-center text-lg max-w-7xl">
        <nav>
          <ul className="flex space-x-7">
            <li>
              <a href="https://ucompensar.edu.co/nuestra-institucion/" className="hover:text-gray-300">
                La Institución
              </a>
            </li>
            <li>
              <a href="https://ucompensar.edu.co/inscripciones/" className="hover:text-gray-300">
                Estudia con Nosotros
              </a>
            </li>
            <li>
              <a href="https://ucompensar.edu.co/facultades/" className="hover:text-gray-300">
                Facultades
              </a>
            </li>
            <li>
              <a href="https://ucompensar.edu.co/programas/" className="hover:text-gray-300">
                Programas
              </a>
            </li>
            <li>
              <a href="https://nuevocampus.ucompensar.edu.co/?_gl=1*1ves8cq*_ga*NzIyOTEyNjMyLjE3MTIyNDg3NTY.*_ga_XGQ6YMBJF1*MTcxNjI0NDA1MS4zMS4wLjE3MTYyNDQwNTEuNjAuMC4w" className="hover:text-gray-300">
                Nuevo Campus
              </a>
            </li>
            <li>
              <a href="https://ucompensar.edu.co/sena/" className="hover:text-gray-300">
                SENA
              </a>
            </li>
            <li>
              <a href="https://ucompensar.edu.co/zona-financiera/" className="hover:text-gray-300">
                Zona Financiera
              </a>
            </li>
            <li>
              <a href="https://edtech.ucompensar.edu.co/?_gl=1*15u6ff4*_ga*NzIyOTEyNjMyLjE3MTIyNDg3NTY.*_ga_XGQ6YMBJF1*MTcxNjI0NDA1MS4zMS4wLjE3MTYyNDQwNTEuNjAuMC4w" className="hover:text-gray-300">
                EdTech
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-300">
                <button className="bg-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full">
                <FontAwesomeIcon className="min-w-3" icon={faMagnifyingGlass} />
                  </button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
