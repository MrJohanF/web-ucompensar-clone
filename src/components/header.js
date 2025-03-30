"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faTimes, faChevronDown, faGraduationCap, faUser, faCreditCard, faDesktop, faRadio, faPen } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);
  
  const topNavLinks = [
    { name: "Graduados", href: "https://ucompensar.edu.co/graduados/", icon: faGraduationCap },
    { name: "Estudiantes", href: "https://ucompensar.edu.co/nuestros-estudiantes", icon: faUser },
    { name: "Estado de Admisión", href: "https://academico.ucompensar.edu.co:8091/academusoft/academico/inscripcionLinea4/consultaPublica/inicio.jsp" },
    { name: "Reingresos", href: "https://ucompensar.edu.co/reingresos/" },
    { name: "Pago en Línea", href: "https://estudiantes.ucompensar.edu.co:8081/pol/", icon: faCreditCard },
    { name: "Aplicativos", href: "https://unipanamericanaeduco.sharepoint.com/Portal%20MiPana/SitePages/INICIOPORTAL.aspx", icon: faDesktop },
    { name: "Emisora", href: "https://emisora.ucompensar.edu.co/", icon: faRadio },
    { name: "Blog", href: "https://ucompensar.edu.co/blog/", icon: faPen },
  ];
  
  // Added short names for medium screen sizes
  const mainNavLinks = [
    { 
      name: "La Institución", 
      shortName: "Institución",
      href: "https://ucompensar.edu.co/nuestra-institucion/",
      sublinks: [
        { name: "Historia", href: "/historia" },
        { name: "Misión y Visión", href: "/mision-vision" },
        { name: "Directivos", href: "/directivos" }
      ]
    },
    { 
      name: "Estudia con Nosotros", 
      shortName: "Estudia",
      href: "https://ucompensar.edu.co/inscripciones/",
      sublinks: [
        { name: "Pregrado", href: "/pregrado" },
        { name: "Posgrado", href: "/posgrado" },
        { name: "Educación Continua", href: "/educacion-continua" }
      ]
    },
    { 
      name: "Facultades", 
      shortName: "Facultades",
      href: "https://ucompensar.edu.co/facultades/",
      sublinks: [
        { name: "Ingenierías", href: "/facultad-ingenieria" },
        { name: "Ciencias Empresariales", href: "/facultad-empresariales" },
        { name: "Ciencias Sociales", href: "/facultad-sociales" }
      ]
    },
    { 
      name: "Programas", 
      shortName: "Programas",
      href: "https://ucompensar.edu.co/programas/",
      sublinks: [
        { name: "Programas Virtuales", href: "/programas-virtuales" },
        { name: "Programas Presenciales", href: "/programas-presenciales" },
        { name: "Doble Titulación", href: "/doble-titulacion" }
      ]
    },
    { 
      name: "Nuevo Campus",
      shortName: "Campus",
      href: "https://nuevocampus.ucompensar.edu.co/"
    },
    { 
      name: "SENA", 
      shortName: "SENA",
      href: "https://ucompensar.edu.co/sena/" 
    },
    { 
      name: "Zona Financiera", 
      shortName: "Financiera",
      href: "https://ucompensar.edu.co/zona-financiera/",
      sublinks: [
        { name: "Becas y Descuentos", href: "/becas" },
        { name: "Crédito Educativo", href: "/credito" },
        { name: "Financiación", href: "/financiacion" }
      ]
    },
    { 
      name: "EdTech", 
      shortName: "EdTech",
      href: "https://edtech.ucompensar.edu.co/"
    },
  ];

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-md'
        : 'bg-white/95 backdrop-blur-md'
    }`}>
      {/* Top Navigation - Hidden on mobile */}
      <div className="hidden md:block border-b border-slate-200/60">
        <div className="container mx-auto max-w-7xl px-4 py-2">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-indigo-600">¡Bienvenido a UCompensar!</span>
            </div>
            <ul className="flex flex-wrap gap-x-3 lg:gap-x-6 text-xs lg:text-sm">
              {topNavLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-slate-600 hover:text-indigo-600 transition-colors duration-200 flex items-center gap-1.5"
                  >
                    {link.icon && <FontAwesomeIcon icon={link.icon} className="text-indigo-500 opacity-80 w-3 h-3" />}
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="container mx-auto max-w-7xl px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 mr-4">
            <Link href="/" className="block">
              <img 
                src="/images/logo.png" 
                alt="Compensar Logo" 
                className="h-10 md:h-12 w-auto" 
              />
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <a href="/search" aria-label="Search">
              <button className="bg-slate-100 text-slate-500 p-2.5 rounded-full hover:bg-slate-200 transition-colors">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="w-4 h-4" />
              </button>
            </a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isMenuOpen ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-100 text-slate-500'} p-2.5 rounded-full hover:bg-slate-200 transition-all focus:outline-none`}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="w-4 h-4" />
            </button>
          </div>
          
          {/* Desktop Navigation with improved responsive design */}
          <nav className="hidden md:block flex-grow">
            <ul className="flex items-center justify-end">
              {mainNavLinks.map((link, index) => (
                <li key={link.name} className="group relative">
                  <a 
                    href={link.href} 
                    className="font-medium text-slate-700 hover:text-indigo-600 inline-flex items-center transition-colors duration-200"
                    onMouseEnter={() => link.sublinks && setActiveDropdown(index)}
                    onMouseLeave={() => link.sublinks && setActiveDropdown(null)}
                  >
                    {/* Use different text sizes and paddings based on viewport width */}
                    <span className="md:hidden lg:inline whitespace-nowrap px-1.5 md:px-2 py-2 text-[13px] xl:text-[15px]">
                      {link.name}
                    </span>
                    <span className="hidden md:inline lg:hidden whitespace-nowrap px-1 md:px-1.5 py-2 text-[13px]">
                      {link.shortName || link.name}
                    </span>
                    {link.sublinks && (
                      <FontAwesomeIcon 
                        icon={faChevronDown} 
                        className={`ml-1 w-2.5 h-2.5 opacity-60 transition-transform duration-200 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </a>
                  
                  {/* Dropdown hover effect */}
                  {link.sublinks && (
                    <div 
                      className={`absolute left-0 mt-0 w-64 transition-all duration-200 ${
                        activeDropdown === index 
                          ? 'opacity-100 visible translate-y-0' 
                          : 'opacity-0 invisible -translate-y-2'
                      } z-50`}
                      onMouseEnter={() => setActiveDropdown(index)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="pt-2">
                        <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2.5 overflow-hidden">
                          {link.sublinks.map((sublink, idx) => (
                            <a 
                              key={idx} 
                              href={sublink.href} 
                              className="block px-5 py-2.5 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                            >
                              {sublink.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
              
              {/* Adding flexible spacing element to push items properly */}
              <li className="w-1 md:w-2 lg:w-3"></li>
              
              <li className="ml-1 hidden lg:block">
                <a href="/search" className="block" aria-label="Search">
                  <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-600 p-2.5 rounded-full transition-all duration-300 border border-indigo-100">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="w-3.5 h-3.5" />
                  </button>
                </a>
              </li>
              <li className="ml-1.5 lg:ml-3">
                <a 
                  href="#registration-form" 
                  className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 text-white font-medium px-4 md:px-5 lg:px-6 py-2 md:py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-sm lg:text-base whitespace-nowrap"
                >
                  Inscríbete
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 z-50 bg-black/30 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white shadow-xl transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } h-full overflow-y-auto`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-5 border-b border-slate-100">
            <div className="flex justify-between items-center">
              <img 
                src="/images/main-logo.svg" 
                alt="Compensar Logo" 
                className="h-8 w-auto" 
              />
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-2"
              >
                <FontAwesomeIcon icon={faTimes} className="text-xl" />
              </button>
            </div>
          </div>
          
          <nav className="px-4 py-4">
            <ul className="space-y-1">
              {mainNavLinks.map((link, index) => (
                <li key={link.name} className="border-b border-slate-100 last:border-none">
                  {link.sublinks ? (
                    <div>
                      <button 
                        onClick={() => toggleDropdown(index)}
                        className="flex items-center justify-between w-full text-left font-medium text-slate-700 py-3.5 px-2"
                      >
                        {link.name}
                        <FontAwesomeIcon 
                          icon={faChevronDown} 
                          className={`text-slate-400 transition-transform duration-200 ${
                            activeDropdown === index ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      <div 
                        className={`overflow-hidden transition-all duration-300 ${
                          activeDropdown === index 
                            ? 'max-h-60 opacity-100 pb-2' 
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="pl-4 space-y-1 border-l-2 border-indigo-100 ml-2">
                          {link.sublinks.map((sublink, idx) => (
                            <a 
                              key={idx} 
                              href={sublink.href} 
                              className="block py-2.5 px-3 text-sm text-slate-600"
                            >
                              {sublink.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a 
                      href={link.href} 
                      className="block font-medium text-slate-700 py-3.5 px-2"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="px-4 py-4 mt-2">
            <p className="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-3 px-2">Enlaces rápidos</p>
            <div className="grid grid-cols-2 gap-2">
              {topNavLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-indigo-600 py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  {link.icon && <FontAwesomeIcon icon={link.icon} className="text-indigo-400 w-3 h-3" />}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="px-4 py-6 mt-auto border-t border-slate-100">
            <a 
              href="#registration-form"
              className="flex items-center justify-center bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all duration-300 w-full"
            >
              Inscríbete ahora
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;