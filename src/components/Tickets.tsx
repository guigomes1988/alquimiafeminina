import { MapPin, Calendar, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

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
    <section className="bg-alquimia-wine pt-24 flex flex-col" id="tickets">
      <div className="max-w-7xl mx-auto px-6 w-full flex-grow">
        
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
            <div className="md:col-span-2 flex flex-col justify-start gap-8">
              <div>
                <span className="text-alquimia-gold text-xs tracking-[0.2em] uppercase font-semibold block mb-2">Curadoria</span>
                <span className="font-serif text-2xl text-alquimia-wine block">Lais Stefhanini</span>
              </div>
              <div>
                <span className="text-alquimia-gold text-xs tracking-[0.2em] uppercase font-semibold block mb-2">Realização</span>
                <span className="font-serif text-2xl text-alquimia-wine block">Âmbar Círculo</span>
              </div>
            </div>

            {/* Lado Direito: Detalhes e Botão de Reserva */}
            <div className="md:col-span-3 flex flex-col justify-between gap-8">
              <div className="space-y-6">
                
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

              <div className="pt-4 border-t border-alquimia-sand/20">
                <button className="w-full bg-alquimia-wine text-white px-10 py-4.5 text-base font-semibold hover:bg-alquimia-terra transition-colors duration-300 rounded-xl shadow-lg hover:shadow-xl uppercase tracking-wider">
                  Inscreva-se agora
                </button>
              </div>

            </div>

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
