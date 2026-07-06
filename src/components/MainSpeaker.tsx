import { motion } from "motion/react";
import { Instagram } from "lucide-react";

export default function MainSpeaker() {
  return (
    <section className="py-24 bg-alquimia-gold relative overflow-hidden" id="main-speaker">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Column */}
          <motion.div 
            className="relative flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Outer Border */}
            <div className="relative p-6 sm:p-8 w-full max-w-[500px]">
              <div className="absolute inset-0 border border-alquimia-wine/40"></div>
              <div className="absolute inset-2 border border-alquimia-wine/40"></div>
              {/* Image */}
              <div className="relative z-10 w-full aspect-[4/5] overflow-hidden bg-alquimia-light">
                <img 
                  src="/palestrantes/Mônica Salgado.jpeg" 
                  alt="Mônica Salgado" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            className="flex flex-col text-alquimia-dark text-center lg:text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-sm md:text-base tracking-widest uppercase font-medium text-alquimia-dark/80 mb-4">
              Atração Principal
            </h3>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-alquimia-wine mb-8 leading-[0.9]">
              MÔNICA<br />SALGADO
            </h2>
            <div className="text-lg md:text-xl font-light text-alquimia-dark/90 leading-relaxed max-w-lg mx-auto lg:mx-0">
              <p>
                O evento é puxado pela presença de Mônica Salgado, jornalista e influenciadora de ampla audiência, reconhecida por uma comunicação forte e por um engajamento feminino intenso e fiel, na mesma linha do evento: sem vitimismo, pautada pela força e pela escolha do <strong className="font-semibold">protagonismo</strong>.
              </p>
            </div>
            <div className="mt-8 flex justify-center lg:justify-start">
              <a 
                href="https://www.instagram.com/monicasalgado/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-alquimia-wine text-alquimia-light px-6 py-3 rounded-xl font-semibold hover:bg-alquimia-terra transition-colors duration-300 shadow-md hover:shadow-lg text-xs tracking-wider uppercase"
              >
                <Instagram className="w-4 h-4 shrink-0" />
                <span>Conheça mais</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
