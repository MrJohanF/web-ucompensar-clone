import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  // Social media links array
  const socialLinks = [
    { name: "Facebook", icon: "/images/facebook.png", url: "https://www.facebook.com/UCompensarOficial" },
    { name: "Instagram", icon: "/images/instagram.png", url: "https://www.instagram.com/ucompensaroficial/" },
    { name: "LinkedIn", icon: "/images/likedln.png", url: "https://www.linkedin.com/school/fundacion-universitaria-compensar/" },
    { name: "YouTube", icon: "/images/youtube.png", url: "https://www.youtube.com/channel/UCx6kJ7RJa_JR2-PEylfVcjw" },
  ];

  // Important links array
  const importantLinks = [
    { name: "Documentos de Interés", url: "https://ucompensar.edu.co/documentos-de-interes/" },
    { name: "Régimen Tributario Especial", url: "https://ucompensar.edu.co/regimen-tributario-especial/" },
    { name: "Radica tus PQRSF AQUÍ", url: "https://recurso.ucompensar.edu.co/Servicio/saleForceWebToCase/src/PQRSF.html?_gl=1*g8m8zi*_ga*NzIyOTEyNjMyLjE3MTIyNDg3NTY.*_ga_XGQ6YMBJF1*MTcxNjI0NDA1MS4zMS4wLjE3MTYyNDQwNTEuNjAuMC4w" },
    { name: "Preguntas Frecuentes", url: "https://ucompensar.edu.co/preguntas-frecuentes/" },
    { name: "Derechos Pecuniarios", url: "https://ucompensar.edu.co/wp-content/uploads/2023/12/Resolucion-328-Derechos-Pecuniarios-2024-firmado.pdf" },
    { name: "Estatutos", url: "https://ucompensar.edu.co/wp-content/uploads/2021/06/Resolucion-12455-de-9-de-julio-de-2020.pdf" },
    { name: "Tratamiento de datos personales", url: "https://ucompensar.edu.co/wp-content/uploads/2023/06/POL-PAJ-02-V06-Tratamiento-de-datos-personales.pdf" },
    { name: "Reglamento estudiantes", url: "https://ucompensar.edu.co/wp-content/uploads/2023/08/Reglamento-estudiantil-v2.pdf" },
    { name: "Reglamento del profesorado", url: "https://ucompensar.edu.co/wp-content/uploads/2022/07/Reglamento-Docente-ucompensar.pdf" },
  ];

  return (
    <footer className="bg-slate-800 text-white mt-28">
      <div className="container mx-auto max-w-7xl pt-16 px-4 lg:px-0">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left Column - Logo and Contact Info */}
          <div className="lg:w-2/5">
            <div className="max-w-xs">
              <Image
                src="/images/logo_white.png"
                alt="Fundación Universitaria Compensar"
                width={250}
                height={80}
                className="h-auto"
              />
            </div>
            
            <p className="text-gray-300 mt-8 text-sm leading-relaxed">
              Fundación Universitaria Compensar P.J. Resolución 23635 del 23
              diciembre 1981 | 12455 del 9 de julio 2020. – VIGILADA
              MINEDUCACIÓN
            </p>
            
            <p className="text-gray-300 mt-5 text-sm leading-relaxed">
              Para requerimientos de autoridades, tutelas o notificaciones
              judiciales por favor dirigirse al correo:
            </p>
            
            <a 
              href="mailto:notificacionesjudiciales@ucompensar.edu.co" 
              className="text-orange-400 hover:text-orange-300 mt-3 inline-block text-sm font-medium"
            >
              notificacionesjudiciales@ucompensar.edu.co
            </a>
            
            {/* Social Media Section */}
            <div className="mt-8">
              <p className="text-gray-300 text-sm mb-3">Síguenos en nuestras redes:</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label={social.name}
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={32}
                      height={32}
                      className="h-auto"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Campus Info and Certifications */}
          <div className="lg:w-3/5">
            <div className="bg-slate-700 rounded-xl p-6 lg:p-8 shadow-lg">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Bogota Campus */}
                <div className="md:w-1/3">
                  <h2 className="text-xl font-bold text-orange-400 mb-4">
                    Bogotá
                  </h2>
                  <div className="text-gray-300 text-sm space-y-2">
                    <p>Sede Principal</p>
                    <p>Avenida (Calle) 32 No. 17 – 30</p>
                    <p>Teléfono: 601 338 06 66</p>
                  </div>
                </div>
                
                {/* Villavicencio Campus */}
                <div className="md:w-1/3">
                  <h2 className="text-xl font-bold text-orange-400 mb-4">
                    Villavicencio
                  </h2>
                  <div className="text-gray-300 text-sm space-y-2">
                    <p>Sede Cofrem</p>
                    <p>Carrera 35 No. 20A-02</p>
                    <p>Vía Catama (antes del Colegio Cofrem)</p>
                    <p>Teléfono: 608 681 86 40</p>
                  </div>
                </div>
                
                {/* Certifications */}
                <div className="md:w-1/3">
                  <h2 className="text-xl font-bold text-orange-400 mb-4">
                    Certificaciones
                  </h2>
                  <div className="grid grid-cols-3 gap-4">
                    <Image
                      src="/images/Sello-ICONTEC_ISO-9001.png"
                      alt="Sello ICONTEC ISO 9001"
                      width={100}
                      height={100}
                      className="w-full h-auto"
                    />
                    <Image
                      src="/images/Sello-ICONTEC_NTC-5555.png"
                      alt="Sello ICONTEC NTC 5555"
                      width={100}
                      height={100}
                      className="w-full h-auto"
                    />
                    <Image
                      src="/images/Sello-ICONTEC-Certificacion_de_Servicios.png"
                      alt="Sello ICONTEC Certificación de Servicios"
                      width={100}
                      height={100}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Important Links Section */}
        <div className="mt-12">
          <div className="border-t border-slate-600 pt-6">
            <h2 className="text-lg font-bold text-orange-400 mb-4 uppercase">
              Links importantes
            </h2>
            <nav aria-label="Enlaces importantes">
              <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
                {importantLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.url}
                      className="text-gray-300 hover:text-orange-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="mt-12 pb-8 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Fundación Universitaria Compensar. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;