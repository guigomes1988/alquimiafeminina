import { MapPin, Calendar, Clock, Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

const symbolPaths = [
  "M131.93,210.37c-42.84,0-77.7-34.85-77.7-77.7v-.39s0-.28,0-.28V54.97h78.8c42.33.6,76.59,35.22,76.59,77.7,0,19.54-7.28,38.21-20.5,52.58-13.14,14.28-30.98,23.09-50.23,24.8l-.29.03c-2.26.19-4.5.29-6.68.29ZM56.74,131.47h0s0,.54,0,.54v.66c0,41.46,33.72,75.19,75.18,75.19,2.11,0,4.28-.09,6.46-.28l.29-.03c18.63-1.66,35.89-10.18,48.61-24,12.79-13.9,19.84-31.97,19.84-50.88,0-41.46-33.73-75.19-75.19-75.19l-1.34.02v-.02H56.74v73.99Z",
  "M240.42,210.37c-2.18,0-4.42-.1-6.67-.29l-.3-.03c-19.25-1.71-37.09-10.52-50.23-24.8-13.22-14.37-20.5-33.04-20.5-52.58,0-42.47,34.26-77.1,76.59-77.69h0s.74,0,.74,0c.12,0,.24,0,.36,0h.02s.13,0,.13,0h77.54v77.7c0,42.84-34.85,77.7-77.7,77.7ZM240.42,56.23v1.25c-41.46,0-75.19,33.73-75.19,75.19,0,18.91,7.04,36.98,19.84,50.88,12.71,13.82,29.98,22.35,48.61,24l.29.03c2.17.18,4.35.28,6.45.28,41.46,0,75.19-33.73,75.19-75.19v-1.2s0-.01,0-.01V57.48h-73.78s-1.26,0-1.26,0l-.14-1.25Z",
  "M186.93,187.57c-1.09,0-2.18-.02-3.28-.07-19.51-.81-37.86-8.87-51.67-22.69-30.03-30.03-30.29-78.74-.77-109.09h0s.49-.5.49-.5c.1-.1.19-.19.29-.29l.11-.11L186.92,0l54.94,54.94c30.29,30.29,30.29,79.59,0,109.88-1.54,1.54-3.2,3.06-4.92,4.51l-.23.19c-13.99,11.7-31.55,18.05-49.78,18.05ZM132.87,55.83l.88.89c-29.32,29.32-29.32,77.02,0,106.33,13.37,13.37,31.13,21.17,50,21.95,18.77.79,37-5.4,51.34-17.4l.23-.19c1.66-1.4,3.27-2.87,4.76-4.37,29.32-29.32,29.32-77.02,0-106.33l-.86-.85v-.02S186.92,3.55,186.92,3.55l-53.13,53.13-.92-.85Z",
  "M187.1,372.34l-54.94-54.94c-30.29-30.29-30.29-79.59,0-109.88,1.54-1.54,3.2-3.06,4.92-4.51l.23-.19c14.83-12.41,33.67-18.79,53.06-17.98,19.51.81,37.86,8.87,51.67,22.69,30.07,30.07,30.29,78.87.66,109.21h0s-.38.38-.38.38c-.09.09-.19.19-.28.28l-.11.11-54.83,54.83ZM134.81,316.51l52.28,52.28,53.13-53.13.92.85-.89-.89c14.2-14.2,22.02-33.08,22.02-53.17s-7.82-38.96-22.02-53.17c-13.37-13.37-31.13-21.17-50-21.95-18.77-.8-37,5.4-51.34,17.4l-.22.19c-1.67,1.41-3.27,2.88-4.76,4.37-29.32,29.32-29.32,77.02,0,106.33l.88.87v.02Z",
  "M262.47,263.74c-19.9,0-39.79-7.57-54.94-22.72-1.54-1.54-3.06-3.19-4.51-4.92l-.19-.23c-12.41-14.83-18.79-33.67-17.98-53.06.81-19.51,8.87-37.86,22.69-51.67,30.29-30.29,79.59-30.29,109.88,0l.07.07,54.87,54.87-54.94,54.94c-15.15,15.15-35.04,22.72-54.94,22.72ZM262.47,110.93c-19.25,0-38.51,7.33-53.17,21.99-13.37,13.37-21.17,31.13-21.95,50-.78,18.76,5.4,37,17.4,51.34l.19.22c1.41,1.67,2.88,3.27,4.37,4.76,29.32,29.32,77.02,29.32,106.33,0l.84-.84,52.32-52.32-53.14-53.14.86-.91-.89.89c-14.66-14.66-33.91-21.99-53.17-21.99Z",
  "M109.88,263.92c-19.5,0-38.99-7.27-54.02-21.81h0s-1.02-1.01-1.02-1.01L0,186.26l54.94-54.94c30.3-30.3,79.59-30.29,109.88,0,1.54,1.54,3.06,3.19,4.51,4.92l.19.23c12.41,14.83,18.79,33.67,17.98,53.06-.81,19.51-8.87,37.86-22.69,51.67-15.15,15.15-35.04,22.72-54.94,22.72ZM56.71,239.43c29.32,29.32,77.02,29.32,106.33,0,13.37-13.37,21.17-31.13,21.95-50,.78-18.76-5.4-37-17.4-51.34l-.19-.22c-1.41-1.67-2.88-3.27-4.37-4.76-29.32-29.32-77.02-29.32-106.33,0l-.86.88h-.02S3.55,186.26,3.55,186.26l53.13,53.13-.83.91h0s.87-.87.87-.87Z",
  "M131.93,317.87H54.23v-77.7c0-42.84,34.85-77.7,77.7-77.7,2.18,0,4.42.1,6.67.29l.3.03c19.25,1.71,37.09,10.52,50.23,24.8,13.22,14.37,20.5,33.04,20.5,52.58,0,42.47-34.26,77.1-76.59,77.69h0s-.68,0-.68,0c-.14,0-.28,0-.42,0ZM131.93,316.61v-1.25c41.46,0,75.19-33.73,75.19-75.19,0-18.91-7.04-36.98-19.84-50.88-12.71-13.82-29.98-22.35-48.61-24l-.29-.03c-2.17-.18-4.35-.28-6.45-.28-41.46,0-75.19,33.73-75.19,75.19v1.18s0,.01,0,.01v73.99h75.14s.05,1.25.05,1.25Z",
  "M318.12,317.87h-78.8c-42.34-.6-76.59-35.22-76.59-77.7,0-19.54,7.28-38.21,20.5-52.58,13.14-14.28,30.98-23.09,50.23-24.8l.29-.03c2.26-.19,4.5-.29,6.68-.29,42.84,0,77.7,34.85,77.7,77.7v.39s0,.28,0,.28v77.02ZM240.42,164.98c-2.11,0-4.28.09-6.46.28l-.29.03c-18.63,1.66-35.89,10.18-48.61,24-12.79,13.9-19.84,31.97-19.84,50.88,0,41.46,33.73,75.19,75.19,75.19v1.25l.06-1.25h1.35s0,0,0,0h73.78v-75.19c0-41.46-33.73-75.19-75.19-75.19Z",
  "M186.17,248c-34.09,0-61.83-27.74-61.83-61.83s27.74-61.83,61.83-61.83,61.83,27.74,61.83,61.83-27.74,61.83-61.83,61.83ZM186.17,126.85c-32.71,0-59.32,26.61-59.32,59.32s26.61,59.32,59.32,59.32,59.32-26.61,59.32-59.32-26.61-59.32-59.32-59.32"
];

function BackgroundSymbol({ className, rotateDirection = 1 }: { className?: string, rotateDirection?: number }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 372.35 372.34"
      className={className}
      animate={{ rotate: 360 * rotateDirection }}
      transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
    >
      <g fill="currentColor">
        {symbolPaths.map((d, index) => (
          <path key={index} d={d} />
        ))}
      </g>
    </motion.svg>
  );
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-08-06T13:00:00").getTime(); // Ajustar horário se necessário

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-2 sm:gap-4 md:gap-8 mb-8 md:mb-10 mt-4">
      {[
        { label: 'Dias', value: timeLeft.days },
        { label: 'Horas', value: timeLeft.hours },
        { label: 'Minutos', value: timeLeft.minutes },
        { label: 'Segundos', value: timeLeft.seconds },
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center w-14 sm:w-16 md:w-20">
          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white border border-alquimia-sand rounded-xl sm:rounded-2xl flex items-center justify-center text-alquimia-wine font-serif text-xl sm:text-2xl md:text-4xl shadow-sm mb-2 sm:mb-3">
            {item.value.toString().padStart(2, '0')}
          </div>
          <span className="text-[9px] sm:text-[10px] md:text-xs font-medium uppercase tracking-widest text-alquimia-dark/60">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Tickets() {
  return (
    <section className="bg-alquimia-wine pt-24 flex flex-col relative overflow-hidden" id="tickets">
      {/* Background Animated Symbols */}
      <BackgroundSymbol 
        className="absolute -left-36 -top-36 w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] text-alquimia-gold/[0.1] pointer-events-none z-0" 
        rotateDirection={1} 
      />
      <BackgroundSymbol 
        className="absolute -right-36 bottom-24 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] text-alquimia-gold/[0.1] pointer-events-none z-0" 
        rotateDirection={-1} 
      />

      <div className="max-w-7xl mx-auto px-6 w-full flex-grow relative z-10">
        
        {/* Ingresso / Escassez Section */}
        <motion.div 
          className="bg-alquimia-light rounded-3xl p-6 sm:p-8 md:p-16 lg:p-20 text-center max-w-5xl mx-auto relative overflow-hidden shadow-2xl mb-24"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-alquimia-gold via-alquimia-wine to-alquimia-gold"></div>
          
          <img 
            src="/logo-v2.png" 
            alt="Alquimia Feminina" 
            className="h-24 sm:h-32 md:h-40 w-auto object-contain mx-auto mb-8"
          />
          <p className="text-lg text-alquimia-wine/80 mb-6 max-w-2xl mx-auto font-light">
            O Alquimia Feminina é um evento desenhado para uma experiência intimista, profunda e transformadora. Vagas limitadas, garanta a sua reserva.
          </p>
          
          <h5 className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-alquimia-wine/80 uppercase mt-8">
            O evento acontece em:
          </h5>
          <Countdown />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 text-left mt-16 w-full max-w-4xl mx-auto border-t border-alquimia-sand/40 pt-12">
            
            {/* Lado Esquerdo: Curadoria e Realização */}
            <div className="md:col-span-2 flex flex-col justify-start gap-6">
              <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-xl overflow-hidden border border-alquimia-sand">
                <img 
                  src="/palestrantes/Lais Stefhanini.jpeg" 
                  alt="Lais Stefhanini" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <span className="text-alquimia-gold text-xs tracking-[0.2em] uppercase font-semibold block mb-2">Curadoria</span>
                  <span className="font-serif text-2xl text-alquimia-wine block mb-1">Lais Stefhanini</span>
                  <a 
                    href="https://www.instagram.com/laisstefhanini/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-alquimia-gold hover:text-alquimia-wine text-xs font-medium transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 shrink-0" />
                    <span className="font-sans">@laisstefhanini</span>
                  </a>
                </div>
                <div>
                  <span className="text-alquimia-gold text-xs tracking-[0.2em] uppercase font-semibold block mb-2">Realização</span>
                  <span className="font-serif text-2xl text-alquimia-wine block">Âmbar Círculo</span>
                </div>
              </div>
            </div>

            {/* Lado Direito: Detalhes */}
            <div className="md:col-span-3 space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-alquimia-gold/10 flex items-center justify-center text-alquimia-gold shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-serif text-lg text-alquimia-wine block font-medium">Data do Evento</span>
                  <span className="font-light text-alquimia-dark text-sm block">06 de Agosto de 2026</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-alquimia-gold/10 flex items-center justify-center text-alquimia-gold shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-serif text-lg text-alquimia-wine block font-medium">Horário</span>
                  <span className="font-light text-alquimia-dark text-sm block">A confirmar</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-alquimia-gold/10 flex items-center justify-center text-alquimia-gold shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-serif text-lg text-alquimia-wine block font-medium">Localização</span>
                  <span className="font-light text-alquimia-dark text-sm leading-relaxed block">
                    <strong className="font-semibold block mb-0.5">Espaço Genesis</strong>
                    R. José Bueno Ávila, 290 - Lot. Parque Real Guacu<br />Mogi Guaçu - SP
                  </span>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Espa%C3%A7o+Genesis,+R.+Jos%C3%A9+Bueno+%C3%81vila,+290+-+Lot.+Parque+Real+Guacu,+Mogi+Gua%C3%A7u+-+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-alquimia-gold hover:text-alquimia-wine text-xs font-bold uppercase tracking-widest underline underline-offset-4 mt-2 inline-block transition-colors"
                  >
                    Como chegar
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Botão de Inscrição Centralizado */}
          <div className="mt-12 text-center border-t border-alquimia-sand/20 pt-8">
            <button className="w-full md:w-auto bg-alquimia-wine text-white px-16 py-5 text-lg font-semibold hover:bg-alquimia-terra transition-colors duration-300 rounded-xl shadow-lg hover:shadow-xl uppercase tracking-widest">
              GARANTA SUA VAGA
            </button>
          </div>
        </motion.div>

      </div>
      
      {/* Footer / Credits */}
      <footer className="w-full bg-alquimia-dark border-t border-alquimia-gold/20 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <p className="text-alquimia-sand/40 text-xs">
             &copy; {new Date().getFullYear()} Alquimia Feminina. Todos os direitos reservados.
           </p>
        </div>
      </footer>
    </section>
  );
}
