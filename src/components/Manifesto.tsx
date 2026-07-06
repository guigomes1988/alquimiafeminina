import AnimatedSymbol from "./AnimatedSymbol";
import { motion } from "motion/react";

export default function Manifesto() {
  return (
    <section className="py-24 bg-alquimia-light text-alquimia-dark" id="manifesto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Coluna da Imagem e Tags */}
          <motion.div 
            className="relative flex flex-col items-center lg:items-start order-2 lg:order-1 mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-lg lg:max-w-none mx-auto lg:mx-0 flex justify-center lg:justify-start">
              {/* Símbolo Animado */}
              <AnimatedSymbol className="relative z-10 w-full max-w-[500px] lg:max-w-[600px] h-auto" />
            </div>
          </motion.div>

          {/* Coluna de Conteúdo (Textos) */}
          <motion.div 
            className="flex flex-col order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            
            {/* Título Menor */}
            <div className="flex items-center gap-3 text-alquimia-gold mb-6 font-medium tracking-widest uppercase text-xs">
              <span>❋</span>
              <span>O MANIFESTO</span>
            </div>

            {/* Título Principal */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-alquimia-wine mb-8 leading-[1.15]">
              Transforme a <br className="hidden md:block" />
              <span className="italic text-alquimia-gold font-light">(sua)</span> história
            </h2>

            {/* Parágrafos */}
            <div className="space-y-6 text-alquimia-dark/80 font-light text-base md:text-lg leading-relaxed">
              <p>
                O Alquimia Feminina é um evento presencial reunindo cerca de 120 mulheres para uma tarde de palestras, conversas e experiências em torno de um mesmo eixo: <strong className="font-medium text-alquimia-wine">a transformação da própria história em força.</strong>
              </p>
              
              <p>
                A proposta foge do discurso da queixa e do vitimismo. Celebra mulheres que atravessaram desafios reais, pessoais, familiares, profissionais, e os transmutaram em autonomia, presença e protagonismo. Uma linha de comunicação madura, propositiva e inspiradora.
              </p>

              <p>
                A curadoria combina nomes de fora e talentos da região, formatos dinâmicos e momentos de interação, criando uma experiência completa, não apenas um ciclo de palestras.
              </p>
              
              {/* Citação da Autora */}
              <blockquote className="mt-10 pt-8 border-t border-alquimia-wine/20 italic font-serif text-alquimia-dark/90 text-lg lg:text-xl">
                "Aprendi que a dor só começa a mudar quando a gente entende o que ela carrega, como ela nos moldou e de que forma ainda influencia nossas escolhas. [...] Aos poucos, a sua história deixa de ser apenas ferida e passa a se tornar recurso."
              </blockquote>

              {/* Informações da Autora */}
              <div className="flex items-center space-x-4 mt-8">
                <div>
                  <p className="font-medium text-alquimia-wine">Lais Stefhanini</p>
                  <p className="text-xs tracking-widest uppercase text-alquimia-gold mt-1">Psicanalista Alquímica e Idealizadora</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

