import { motion } from "motion/react";

const schedule = [
  {
    type: "Abertura",
    title: "Abertura e Condução",
    speaker: "Lais Stefhanini",
    description: "Psicanalista Alquímica e idealizadora do evento.",
    highlight: false,
    image: "/palestrantes/Lais Stefhanini.jpeg",
    number: "01",
  },
  {
    type: "Talk",
    title: "Histórias Reais de Alto Impacto",
    speaker: "Três Mulheres da Região",
    description: "Uma conversa autêntica compartilhando trajetórias de protagonismo.",
    highlight: false,
    image: "/placeholder.jpg",
    number: "02",
  },
  {
    type: "Palestra",
    title: "A transição de carreira da advocacia para a terapia integrativa",
    speaker: "Anna Rita Peltier",
    description: "Terapeuta Integrativa.",
    highlight: false,
    image: "/palestrantes/Dra. Anna Rita Peltier.jpeg",
    number: "03",
  },
  {
    type: "Intervalo",
    title: "Mostrando a intencionalidade na comunicação visual",
    speaker: "Joseanna Fagundes",
    description: "",
    highlight: false,
    image: "/palestrantes/Joseanna Fagundes.jpg",
  },
  {
    type: "Palestra",
    title: "Autoestima e o cuidado íntimo feminino",
    speaker: "Dra. Anamarya Rocha",
    description: "Ginecologista - JK Estética.",
    highlight: false,
    image: "/palestrantes/Dra Anamarya Rocha.jpeg",
    number: "04",
  },
  {
    type: "Intervalo",
    title: "Defesa pessoal feminina",
    speaker: "Isabela de Pádua",
    description: "",
    highlight: false,
    image: "/palestrantes/Isabela de Pádua.jpeg",
  },
  {
    type: "Palestra",
    title: "História, jornada de autoconhecimento e visão de futuro",
    speaker: "Lais Stefhanini",
    description: "Psicanalista.",
    highlight: false,
    image: "/palestrantes/Lais Stefhanini.jpeg",
    number: "05",
  },
  {
    type: "Palestra Principal",
    title: "Comunicação Forte e Protagonismo",
    speaker: "Mônica Salgado",
    description: "Jornalista e Influenciadora Digital. Foco em comunicação forte, engajamento feminino intenso, sem pauta política e pautada pelo protagonismo.",
    highlight: true,
    image: "/palestrantes/Mônica Salgado.jpeg",
    number: "06",
  },
  {
    type: "Encerramento",
    title: "Sorteio de Brindes",
    speaker: "Encerramento de Palco",
    description: "Sorteio de brindes e encerramento oficial.",
    highlight: false,
    image: "/placeholder.jpg",
    number: "07",
  },
  {
    type: "Coffee Break",
    title: "Networking e Fotos",
    speaker: "Presença de Mônica Salgado",
    description: "Momentos de interação, networking e sessão de fotos.",
    highlight: false,
    image: "/placeholder.jpg",
    number: "08",
  },
];

export default function Lineup() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="lineup">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-serif text-alquimia-wine mb-4">A Jornada</h2>
          <p className="text-alquimia-gold font-light text-lg">Um cronograma desenhado para inspirar e equipar.</p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] md:-translate-x-1/2 bg-alquimia-sand/30 z-0">
             <motion.div 
               className="absolute top-0 left-0 w-full bg-alquimia-gold"
               initial={{ height: 0 }}
               whileInView={{ height: "100%" }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 2.5, ease: "easeInOut" }}
             />
          </div>

          <div className="space-y-16">
            {schedule.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative z-10 flex flex-col md:flex-row items-center md:justify-between group">
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-alquimia-light border-2 border-alquimia-gold z-20 flex items-center justify-center">
                    <motion.div 
                      className="w-1.5 h-1.5 bg-alquimia-wine rounded-full opacity-0"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className={`hidden md:block w-[45%] ${isEven ? 'order-1' : 'order-3'}`}></div>

                  {/* Card Content */}
                  <motion.div 
                    className={`w-full md:w-[45%] pl-20 md:pl-0 ${isEven ? 'order-3 md:text-left' : 'order-1 md:text-right'} ${item.highlight ? 'z-30' : ''}`}
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className={`flex flex-col sm:flex-row gap-6 p-6 md:p-8 bg-white border border-alquimia-sand rounded-xl shadow-sm hover:shadow-md transition-shadow hover:border-alquimia-gold/40 ${item.highlight ? 'ring-1 ring-alquimia-gold/50 shadow-md bg-alquimia-light/30' : ''} ${!isEven ? 'sm:flex-row-reverse' : ''}`}>
                      <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-full overflow-hidden border border-alquimia-sand">
                        <img 
                          src={item.image} 
                          alt={item.speaker} 
                          className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                      <div className={`flex-1 flex flex-col justify-center ${!isEven ? 'sm:items-end sm:text-right' : 'sm:items-start sm:text-left'}`}>
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                           {item.number && (
                              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-alquimia-wine text-alquimia-light text-[10px] font-bold shrink-0">
                                {item.number}
                              </span>
                            )}
                            <span className="inline-block px-2.5 py-1 bg-alquimia-sand/40 text-alquimia-wine text-[10px] font-bold tracking-widest uppercase rounded">
                              {item.type}
                            </span>
                        </div>
                        <h4 className="text-lg md:text-xl font-medium text-alquimia-wine mb-2 leading-snug">{item.title}</h4>
                        <h3 className="font-serif text-base text-alquimia-dark mb-2">{item.speaker}</h3>
                        {item.description && (
                          <p className="text-alquimia-wine/70 text-sm font-light leading-relaxed">{item.description}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
