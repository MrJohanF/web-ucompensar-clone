import React from "react";

export default function Home() {
  return (
    <main className="font-sans text-slate-800">
      {/* Hero Section with Gradient Background */}
      <section className="relative py-16 bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto items-center">
            {/* Left Column - Content and Form */}
            <div className="lg:w-1/2">
              {/* Program Type Badge */}
              <div className="inline-block mb-8">
                <span className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-medium px-5 py-2 rounded-full text-sm uppercase tracking-wider shadow-md">
                  Programa Presencial
                </span>
              </div>

              {/* Program Title and Description */}
              <div className="mb-10">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
                  Ingeniería de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">Software</span>
                  <span className="block mt-1 text-2xl font-normal opacity-90">Bogotá</span>
                </h1>
                <p className="text-lg text-slate-200 leading-relaxed mb-8">
                  Desarrolla soluciones de software y conviértete en un líder
                  digital de uno de los sectores con mayor crecimiento del
                  mercado. Obtén tres titulaciones a lo largo de tu formación.
                </p>
                <a
                  href="#registration-form"
                  className="group inline-flex items-center bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-500/30"
                >
                  <span>Inscríbete Ahora</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Right Column - Program Card */}
            <div className="lg:w-1/2">
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.01] border border-white/20">
                <div className="relative">
                  <img
                    src="/images/img-software.jpg"
                    alt="Estudiantes de ingeniería de software"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                      Facultad de Ingeniería
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                      <p className="text-xs font-medium text-slate-300 uppercase tracking-wider">SNIES</p>
                      <p className="text-base text-white mt-1">109130</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-300 uppercase tracking-wider">Duración</p>
                      <p className="text-base text-white mt-1">10 semestres</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-300 uppercase tracking-wider">Vigencia</p>
                      <p className="text-base text-white mt-1">7 años</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-300 uppercase tracking-wider">Resolución</p>
                      <p className="text-base text-white mt-1">9058 del 28/08/2019</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <h4 className="text-xs font-medium text-slate-300 uppercase tracking-wider mb-3">Jornadas disponibles</h4>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="flex-1 bg-white/5 rounded-lg p-3">
                        <span className="text-amber-300 text-xs font-medium block mb-1">Diurna</span>
                        <p className="text-white text-sm">7:00 a.m. a 1:00 p.m.</p>
                      </div>
                      <div className="flex-1 bg-white/5 rounded-lg p-3">
                        <span className="text-amber-300 text-xs font-medium block mb-1">Nocturna</span>
                        <p className="text-white text-sm">6:00 p.m. a 10:00 p.m.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <a href="#" className="flex items-center text-amber-300 hover:text-amber-200 text-sm font-medium transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Ver tarifas de créditos aquí
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="registration-form" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-teal-600 to-teal-500 py-6 px-8">
                <h2 className="text-2xl font-bold text-white">Solicita información personalizada</h2>
                <p className="text-teal-100 mt-1">Completa el formulario y un asesor se pondrá en contacto contigo</p>
              </div>
              
              <form className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Tipo de estudiante</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all">
                      <option value="">Seleccionar...</option>
                      <option value="new">Nuevo ingreso</option>
                      <option value="transfer">Transferencia</option>
                      <option value="graduate">Posgrado</option>
                    </select>
                  </div>
                  
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Nombre</label>
                    <input
                      type="text"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="Ingresa tu nombre"
                    />
                  </div>
                  
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Apellido</label>
                    <input
                      type="text"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="Ingresa tu apellido"
                    />
                  </div>
                  
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="correo@ejemplo.com"
                    />
                  </div>
                  
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Teléfono</label>
                    <input
                      type="tel"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="+57 xxx xxx xxxx"
                    />
                  </div>
                  
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Documento de identidad</label>
                    <input
                      type="text"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="Número de documento"
                    />
                  </div>
                  
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Canal preferido</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all">
                      <option value="">Seleccionar...</option>
                      <option value="email">Correo electrónico</option>
                      <option value="phone">Llamada telefónica</option>
                      <option value="whatsapp">WhatsApp</option>
                    </select>
                  </div>
                  
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">¿Cómo te enteraste de nosotros?</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all">
                      <option value="">Seleccionar...</option>
                      <option value="social">Redes sociales</option>
                      <option value="search">Buscadores (Google)</option>
                      <option value="friend">Un amigo o familiar</option>
                      <option value="event">Feria educativa</option>
                      <option value="ad">Publicidad</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-6">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      className="mt-0.5 h-5 w-5 text-teal-500 rounded border-slate-300 focus:ring-teal-500 focus:ring-offset-0"
                    />
                    <span className="ml-3 text-sm text-slate-600">
                      Acepto la{" "}
                      <a href="#" className="text-teal-600 hover:text-teal-500 font-medium">
                        Política de Protección de Datos Personales
                      </a>{" "}
                      y recibir información sobre programas académicos.
                    </span>
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="mt-8 w-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-amber-500/30 transition-all duration-300 flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                  Enviar solicitud
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Titulaciones Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Obtén Tres Titulaciones</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Nuestro programa por ciclos propedéuticos te permite obtener tres titulaciones a lo largo de tu formación, permitiéndote ingresar más rápido al mercado laboral.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-[1.02]">
              <div className="h-3 bg-teal-500"></div>
              <div className="p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal-50 text-teal-500 mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-medium text-teal-600">Nivel 1: 4 Semestres</span>
                  <h3 className="text-xl font-extrabold text-slate-800 mt-1 mb-4">
                    Técnica Profesional en Programación de Aplicaciones de Software
                  </h3>
                </div>
                <div className="mt-6 space-y-2.5 text-sm text-slate-600">
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Resolución 9059 del 28 de agosto de 2019</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Vigencia: 7 años</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>SNIES: 108334</span>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <a href="#" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium">
                    Ver tarifas de créditos
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-[1.02]">
              <div className="h-3 bg-indigo-500"></div>
              <div className="p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-50 text-indigo-500 mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-medium text-indigo-600">Nivel 2: 6 Semestres</span>
                  <h3 className="text-xl font-extrabold text-slate-800 mt-1 mb-4">
                    Tecnología en Desarrollo de Aplicaciones Web y Móviles
                  </h3>
                </div>
                <div className="mt-6 space-y-2.5 text-sm text-slate-600">
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Resolución 9057 del 28 de agosto de 2019</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Vigencia: 7 años</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>SNIES: 108335</span>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <a href="#" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
                    Ver tarifas de créditos
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-[1.02]">
              <div className="h-3 bg-amber-500"></div>
              <div className="p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-50 text-amber-500 mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-medium text-amber-600">Nivel 3: 10 Semestres</span>
                  <h3 className="text-xl font-extrabold text-slate-800 mt-1 mb-4">
                    Profesional en Ingeniería de Software
                  </h3>
                </div>
                <div className="mt-6 space-y-2.5 text-sm text-slate-600">
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Resolución 9058 del 28 de agosto de 2019</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Vigencia: 7 años</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>SNIES: 109130</span>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <a href="#" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium">
                    Ver tarifas de créditos
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Oportunidades Profesionales</h2>
                <p className="text-slate-600 mb-8">
                  Al completar tu formación como Ingeniero de Software, estarás preparado para desempeñarte en diversos roles profesionales en el sector de tecnología:
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Ingeniero de calidad",
                    "Gerente de proyectos de software",
                    "Líder de desarrollo de software",
                    "Desarrollador de software web",
                    "Integrador de soluciones web y móviles",
                    "Desarrollador de aplicaciones móviles",
                    "Líder Técnico de pruebas"
                  ].map((position, index) => (
                    <li key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm border-l-4 border-teal-500">
                      <div className="mr-4 text-teal-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span>{position}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <div className="aspect-w-16 aspect-h-9 relative group">
                    <img
                      src="/images/woman-working.jpg"
                      alt="Mujer desarrolladora trabajando"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-white font-bold text-lg">Desarrollo Web Frontend</h3>
                      <p className="text-slate-200 text-sm">HTML, CSS, JavaScript, React</p>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <h4 className="font-semibold text-slate-800 mb-2">Alta demanda en el mercado</h4>
                    <p className="text-slate-600">Los desarrolladores frontend se encuentran entre los profesionales más solicitados en la industria tech actual.</p>
                  </div>
                </div>
                
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <div className="aspect-w-16 aspect-h-9 relative group">
                    <img
                      src="/images/men-working.jpg"
                      alt="Hombre desarrollador trabajando"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-white font-bold text-lg">Desarrollo Backend</h3>
                      <p className="text-slate-200 text-sm">Node.js, Python, Java, SQL</p>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <h4 className="font-semibold text-slate-800 mb-2">Especialización técnica</h4>
                    <p className="text-slate-600">Los expertos en backend son fundamentales para crear aplicaciones seguras, eficientes y escalables.</p>
                  </div>
                </div>
                
                <div className="rounded-2xl overflow-hidden shadow-xl md:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="p-8 bg-indigo-900 text-white flex flex-col justify-center">
                      <h3 className="text-xl font-bold mb-4">Sector en constante crecimiento</h3>
                      <p className="text-indigo-100 mb-6">La industria del desarrollo de software continúa expandiéndose a nivel global con excelentes oportunidades laborales.</p>
                      <div className="mt-auto">
                        <a href="#" className="inline-flex items-center text-amber-300 hover:text-amber-200 font-medium">
                          Explorar salarios promedio
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="md:col-span-2 bg-gradient-to-r from-indigo-800 to-indigo-700 p-8 text-white">
                      <h4 className="font-bold mb-4 text-lg">Tecnologías que dominarás</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {["JavaScript", "React", "Angular", "Node.js", "Python", "Java", "SQL", "MongoDB", "Git", "Docker", "AWS", "Azure"].map((tech, index) => (
                          <span key={index} className="bg-white/10 px-3 py-1.5 rounded-lg text-sm backdrop-blur-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-indigo-800 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Matrículas Abiertas</h2>
            <p className="text-xl text-indigo-100 mb-10">
              Somos la institución universitaria para todos y nuestro objetivo es
              integrar a la comunidad con el sector productivo para afrontar los
              desafíos del futuro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#registration-form"
                className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-indigo-700 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-white/20 transition-all duration-300"
              >
                Inscríbete ahora
              </a>
              <a
                href="https://ucompensar.edu.co/wp-content/uploads/2021/04/Brochure-Ingenieria-de-Software-Presencial.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-xl transition-all duration-300"
              >
                Ver plan de estudios
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Profile and Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/Ingeniero-de-calidad-ucompensar.jpg"
                    alt="Ingeniero de calidad trabajando"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-40"></div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-500 rounded-full opacity-10 z-0"></div>
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500 rounded-full opacity-10 z-0"></div>
              </div>
              
              <div className="mt-16 relative z-10">
                <h2 className="inline-block text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600 mb-6">
                  Tu Perfil Profesional
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-indigo-500 mb-8"></div>
                
                <p className="text-lg text-slate-700 leading-relaxed">
                  El ingeniero de software es competente en todas y cada una de las
                  etapas que comprenden el ciclo de vida de construcción de software
                  como requerimientos, análisis, diseño, arquitectura, implementación,
                  pruebas y puesta en marcha, así como en administrar tiempos,
                  recursos y procesos de una manera efectiva para la finalización
                  exitosa de proyectos de software.
                </p>
                
                <div className="mt-10 flex flex-wrap gap-3">
                  {["Proactivo", "Analítico", "Trabajo en equipo", "Orientado a soluciones"].map((trait, index) => (
                    <span key={index} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="sticky top-24">
                <h2 className="text-4xl font-bold text-slate-800 mb-8">Sé un experto en:</h2>
                
                <div className="space-y-6">
                  {[
                    { skill: "Diseño y desarrollo web", icon: "🌐" },
                    { skill: "Diseño UX/UI", icon: "🎨" },
                    { skill: "Diseño y desarrollo de aplicaciones móviles", icon: "📱" },
                    { skill: "Arquitectura de software y desarrollo BackEnd", icon: "🏗️" },
                    { skill: "Desarrollo FrontEnd", icon: "⚛️" },
                    { skill: "Ingeniería de requerimientos", icon: "📋" },
                    { skill: "Cloud Computing", icon: "☁️" },
                    { skill: "Testing y aseguramiento de la calidad", icon: "🧪" },
                    { skill: "Metodologías ágiles de desarrollo", icon: "⚡" },
                    { skill: "Gestión de proyectos de software", icon: "📊" },
                    { skill: "Integración de tecnologías", icon: "🔄" },
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-indigo-500"
                    >
                      <div className="text-2xl mr-4">{item.icon}</div>
                      <span className="text-lg text-slate-800">{item.skill}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12">
                  <a
                    href="https://ucompensar.edu.co/wp-content/uploads/2021/04/Brochure-Ingenieria-de-Software-Presencial.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-teal-600 to-indigo-600 hover:from-teal-700 hover:to-indigo-700 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Descargar plan de estudios
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}