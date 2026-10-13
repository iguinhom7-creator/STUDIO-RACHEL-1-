import React from 'react';
import { Heart, ShieldCheck, Gem } from 'lucide-react';

export const AboutStudio: React.FC = () => {
  const pillars = [
    {
      icon: Heart,
      title: 'Atendimento Personalizado',
      desc: 'Cada cliente é única. Analisamos o formato natural das mãos para indicar o design e técnica ideais.',
    },
    {
      icon: ShieldCheck,
      title: 'Biossegurança Rigorosa',
      desc: 'Ambiente esterilizado, materiais descartáveis e protocolos de higienização de padrão médico-estético.',
    },
    {
      icon: Gem,
      title: 'Produtos de Alto Padrão',
      desc: 'Géis, bases e finalizadores importados que asseguram resistência, brilho duradouro e saúde ungueal.',
    },
  ];

  return (
    <section id="studio" className="py-16 sm:py-24 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header com o nome do studio no topo */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1F1C18] tracking-tight mb-5">
            Studio Rachel Caetano
          </h2>

          <div className="w-10 h-[1.5px] bg-[#C5A059] mx-auto mb-6" />
          
          {/* Narrativa elegante */}
          <p className="text-base sm:text-lg text-[#554F45] font-light leading-relaxed text-balance">
            Um refúgio dedicado à valorização da sua beleza natural. No Studio Rachel Caetano, unimos técnica refinada, precisão anatômica e um acolhimento caloroso para proporcionar momentos de autocuidado e autoconfiança inigualáveis.
          </p>
        </div>

        {/* Pilares de Excelência */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EBE4D5] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-[#FAF5EB] group-hover:bg-[#F3EADA] border border-[#E3CA8D]/50 flex items-center justify-center text-[#8C6A24] mb-4 transition-colors">
                  <Icon className="w-5 h-5 text-[#A88438]" />
                </div>
                <h3 className="text-base font-serif font-semibold text-[#1F1C18] mb-2 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6C655A] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
