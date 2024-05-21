import React from "react";

function Header() {
  return (
    <header className=" text-gray-800 p-7 border-b border-gray-200">

      <div className="container mx-auto flex justify-between items-center mt-6 mb-20 text-sm max-w-7xl">
        <img
          src="/images/main-logo.svg"
          alt="Descripción de la imagen"
          style={{ width: "20%", height: "auto" }}
        />
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-gray-300">
                Graduados
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">
                Estudiantes
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-300">
                Estado de Admisión
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Reingresos
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Pago en Línea
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Aplicativos
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Emisora
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container font-bold mx-auto flex justify-end items-center text-lg max-w-7xl">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-300">
                La Institución
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">
                Estudia con Nosotros
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-300">
                Facultades
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Programas
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Nuevo Campus
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                SENA
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Zona Financiera
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                EdTech
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Glass
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
