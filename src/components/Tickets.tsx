import { Target, ShieldCheck, Briefcase, Zap, MapPin, Calendar, Clock } from "lucide-react";
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
    <div className="flex justify-center gap-2 sm:gap-4 md:gap-8 my-8 md:my-10">
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
        
        {/* Para Quem É Section */}
        <div className="mb-32">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-alquimia-light mb-4">Para Quem É Este Encontro</h2>
            <p className="text-alquimia-sand font-light text-lg">Uma tarde desenhada para perfis específicos de ação.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                title: "Protagonistas",
                desc: "Mulheres que desejam transformar suas próprias trajetórias em recursos estratégicos e reais."
              },
              {
                icon: <Briefcase className="w-6 h-6" />,
                title: "Líderes",
                desc: "Profissionais em busca de um repertório maduro, propositivo e inspirador."
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Decisoras",
                desc: "Aquelas que valorizam a autonomia, a presença marcante e o poder de ação prático."
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Estratégicas",
                desc: "Mulheres que buscam conexões autênticas em um ambiente de alto padrão e sem vitimismo."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                className="p-8 md:p-10 bg-alquimia-light rounded-2xl flex flex-col sm:flex-row gap-6 items-start shadow-xl border border-alquimia-gold/20 group hover:shadow-2xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="w-14 h-14 rounded-full bg-alquimia-wine text-alquimia-light flex items-center justify-center shrink-0 shadow-inner">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-serif text-alquimia-wine mb-3 group-hover:text-alquimia-terra transition-colors">{item.title}</h3>
                  <p className="text-alquimia-dark/80 font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ingresso / Escassez Section */}
        <motion.div 
          className="bg-alquimia-light rounded-3xl p-6 sm:p-8 md:p-16 lg:p-20 text-center max-w-5xl mx-auto relative overflow-hidden shadow-2xl mb-24"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-alquimia-gold via-alquimia-wine to-alquimia-gold"></div>
          
          <h2 className="text-3xl md:text-5xl font-serif text-alquimia-wine mb-6">
            O Início de Uma Nova História
          </h2>
          <p className="text-lg text-alquimia-wine/80 mb-6 max-w-2xl mx-auto font-light">
            O Alquimia Feminina é um espaço desenhado para uma experiência intimista, profunda e transformadora. Por este motivo, as vagas são estritamente limitadas.
          </p>
          
          <Countdown />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 w-full max-w-4xl mx-auto">
             <div className="bg-white border border-alquimia-sand rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
               <div className="w-12 h-12 rounded-full bg-alquimia-gold/10 flex items-center justify-center text-alquimia-gold mb-4">
                 <Calendar className="w-6 h-6" />
               </div>
               <span className="font-serif text-lg text-alquimia-wine mb-2">Data do Evento</span>
               <span className="font-light text-alquimia-dark text-sm">06 de Agosto de 2026</span>
             </div>
             
             <div className="bg-white border border-alquimia-sand rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
               <div className="w-12 h-12 rounded-full bg-alquimia-gold/10 flex items-center justify-center text-alquimia-gold mb-4">
                 <Clock className="w-6 h-6" />
               </div>
               <span className="font-serif text-lg text-alquimia-wine mb-2">Horário</span>
               <span className="font-light text-alquimia-dark text-sm">A confirmar</span>
             </div>

             <div className="bg-white border border-alquimia-sand rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
               <div className="w-12 h-12 rounded-full bg-alquimia-gold/10 flex items-center justify-center text-alquimia-gold mb-4">
                 <MapPin className="w-6 h-6" />
               </div>
               <span className="font-serif text-lg text-alquimia-wine mb-2">Localização</span>
               <span className="font-light text-alquimia-dark text-sm leading-relaxed mb-3">
                 <strong className="font-medium block mb-1">Espaço Genesis</strong>
                 R. José Bueno Ávila, 290 - Lot. Parque Real Guacu<br />Mogi Guaçu - SP
               </span>
               <a 
                 href="https://www.google.com/maps/search/?api=1&query=Espa%C3%A7o+Genesis,+R.+Jos%C3%A9+Bueno+%C3%81vila,+290+-+Lot.+Parque+Real+Guacu,+Mogi+Gua%C3%A7u+-+SP"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-alquimia-gold hover:text-alquimia-wine text-[10px] sm:text-xs font-bold uppercase tracking-widest underline underline-offset-4 transition-colors"
               >
                 Como chegar
               </a>
             </div>
          </div>
          
          
          <div>
            <button className="w-full md:w-auto bg-alquimia-wine text-white px-12 py-5 text-lg font-medium hover:bg-alquimia-terra transition-colors duration-300 rounded-xl shadow-lg hover:shadow-xl">
              Reservar Meu Lugar Agora
            </button>
          </div>
        </motion.div>

      </div>
      
      {/* Footer / Credits */}
      <footer className="w-full bg-alquimia-dark border-t border-alquimia-gold/20 py-12 md:py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
          
          <div className="flex flex-col md:items-start items-center">
            <span className="text-alquimia-gold/70 text-xs tracking-[0.2em] uppercase font-medium mb-2">Curadoria</span>
            <span className="text-alquimia-light font-serif text-xl md:text-2xl">Lais Stefhanini</span>
          </div>

          <div className="flex flex-col md:items-end items-center">
            <span className="text-alquimia-gold/70 text-xs tracking-[0.2em] uppercase font-medium mb-2">Realização</span>
            <span className="text-alquimia-light font-serif text-xl md:text-2xl">Âmbar Círculo</span>
          </div>

        </div>
        
        <div className="w-full text-center mt-12 pt-8 border-t border-alquimia-gold/10">
           <p className="text-alquimia-sand/40 text-xs">
             &copy; {new Date().getFullYear()} Alquimia Feminina. Todos os direitos reservados.
           </p>
        </div>
      </footer>
    </section>
  );
}
