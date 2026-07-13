import { Calendar } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="flex flex-col">
      {/* Top Banner */}
      <div className="bg-alquimia-sand py-2.5 overflow-hidden flex whitespace-nowrap w-full border-b border-alquimia-gold/30">
        <div className="flex w-max animate-marquee text-alquimia-wine text-xs sm:text-sm font-normal tracking-[0.2em] uppercase">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center mx-4">
              <span>Inscrições Oficialmente Abertas</span> 
              <span className="mx-4 sm:mx-8 text-alquimia-wine/50 font-normal">❋</span> 
              <span>Vagas Limitadas</span>
              <span className="mx-4 sm:mx-8 text-alquimia-wine/50 font-normal">❋</span>
            </div>
          ))}
        </div>
      </div>

      <section className="relative min-h-[85vh] flex items-center bg-alquimia-wine text-alquimia-light overflow-hidden">
        {/* Image Background */}
        <div className="absolute inset-0 w-full h-full">
           {/* Gradients to ensure text readability */}
           <div className="absolute inset-0 bg-gradient-to-r from-alquimia-wine via-alquimia-wine/80 to-transparent z-10 hidden md:block"></div>
            <picture className="w-full h-full block">
             <source media="(max-width: 767px)" srcSet="/lais-web-mobile.jpg" />
             <img 
               src="/lais-web.jpg" 
               alt="Alquimia Feminina" 
               className="w-full h-auto absolute bottom-0 translate-y-16 md:translate-y-0 md:relative md:h-full md:object-cover md:object-center" 
             />
           </picture>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col lg:flex-row">
           <motion.div 
             className="w-full lg:w-[65%] flex flex-col items-center text-center sm:items-start sm:text-left justify-start px-6 pt-20 pb-72 md:pb-16 md:py-16 lg:py-24"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
           >
              
              {/* Logo & Badge Row */}
              <div className="flex flex-col items-center sm:flex-row sm:items-center gap-4 mb-6 sm:mb-12">
                <img 
                  src="/logo.png" 
                  alt="Alquimia Feminina" 
                  className="h-24 sm:h-28 md:h-32 lg:h-36 w-auto object-contain object-center sm:object-left"
                />
                <div className="inline-flex items-center space-x-2 border border-alquimia-gold/40 rounded-full px-4 py-1.5 text-[10px] sm:text-xs font-medium tracking-wide text-alquimia-sand uppercase mb-2 sm:mb-0 shrink-0 self-center sm:self-auto">
                  <span className="text-alquimia-gold">PRESENCIAL ❋ 2026</span>
                  <span className="text-alquimia-gold/50">/</span>
                  <span>MOGI GUAÇU, SP</span>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center justify-center sm:justify-start gap-3 text-alquimia-sand/90 mb-4 sm:mb-6 font-medium tracking-widest uppercase text-xs sm:text-sm">
                <Calendar className="w-4 h-4" />
                <span>06 DE AGOSTO DE 2026</span>
              </div>

              {/* Big Text */}
              <h1 className="text-center sm:text-left mx-auto sm:mx-0 text-[1.75rem] leading-[1.15] md:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-alquimia-light mb-8 sm:mb-12 max-w-[320px] sm:max-w-xl lg:max-w-2xl mt-2 sm:mt-0">
                Um encontro em torno de histórias reais. <br />
                <span className="text-alquimia-gold">Autoconhecimento força e protagonismo.</span>
              </h1>

              {/* CTA */}
              <div className="mt-2 sm:mt-4 hidden md:flex justify-start w-full sm:w-auto">
                <a 
                  href="https://www.sympla.com.br/evento/alquimia-feminina/3498690"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center bg-alquimia-gold text-white pl-4 pr-10 md:pl-6 md:pr-12 py-3.5 md:py-4 rounded-sm font-medium hover:bg-alquimia-gold/80 transition-colors duration-300 w-full sm:w-auto shadow-xl"
                >
                   <div className="flex items-center gap-2 md:gap-3">
                     <svg className="w-4 h-4 md:w-5 md:h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                     </svg>
                     <span className="text-xs md:text-sm tracking-widest font-semibold uppercase whitespace-nowrap">GARANTA SEU LUGAR</span>
                   </div>
                   
                   {/* Fake perforations */}
                   <div className="absolute right-1.5 md:right-2 top-0 bottom-0 flex flex-col justify-evenly">
                     {[...Array(6)].map((_, i) => (
                       <div key={i} className="w-1.5 h-1.5 bg-alquimia-wine rounded-full"></div>
                     ))}
                   </div>
                </a>
              </div>

           </motion.div>
         </div>

         {/* Mobile CTA inside the section, absolute at the bottom */}
         <div className="md:hidden absolute bottom-0 left-0 right-0 px-6 pt-16 pb-10 bg-gradient-to-t from-alquimia-wine via-alquimia-wine/90 to-transparent flex justify-center z-30">
           <a 
             href="https://www.sympla.com.br/evento/alquimia-feminina/3498690"
             target="_blank"
             rel="noopener noreferrer"
             className="group relative inline-flex items-center justify-center bg-alquimia-gold text-white pl-4 pr-10 py-3.5 rounded-sm font-medium hover:bg-alquimia-gold/80 transition-colors duration-300 w-full shadow-xl"
           >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
                <span className="text-xs tracking-widest font-semibold uppercase whitespace-nowrap">GARANTA SEU LUGAR</span>
              </div>
              
              {/* Fake perforations */}
              <div className="absolute right-1.5 top-0 bottom-0 flex flex-col justify-evenly">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-alquimia-wine rounded-full"></div>
                ))}
              </div>
           </a>
         </div>
      </section>
    </div>
  );
}
