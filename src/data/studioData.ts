export interface PortfolioItem {
  id: number;
  src: string;
  fallbackSrc: string;
  title: string;
  category: string;
  description: string;
}

export const STUDIO_LINKS = {
  whatsapp: 'https://wa.me/message/3VLZFGNH7M4CL1',
  instagram: 'https://instagram.com/rachelcaetanonail?obrf=MWZueTFkOWE3djJndg%3D%3D',
  google: 'https://share.google/iaAl3VV4o3kL8tBQo',
  gallery: 'https://postimg.cc/gallery/srCRj9Q',
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    src: '/portfolio/work_1.jpg',
    fallbackSrc: 'https://i.postimg.cc/522GTjRF/54f9e42f-8156-482c-a0b1-b2cf73093712.jpg',
    title: 'Alongamento em Gel com Acabamento Natural',
    category: 'Alongamento em Gel',
    description: 'Estrutura simétrica, curvatura C impecável e cuticulagem alinhada com brilho espelhado.'
  },
  {
    id: 2,
    src: '/portfolio/work_2.jpg',
    fallbackSrc: 'https://i.postimg.cc/bNTWm13H/6737b588-9d18-4b10-89d3-5583d0664eb4.jpg',
    title: 'Baby Boomer & Nail Art Sofisticada',
    category: 'Design Exclusivo',
    description: 'Degradê suave e harmônico com encapsulado sutil, ideal para ocasiões especiais ou dia a dia.'
  },
  {
    id: 3,
    src: '/portfolio/work_3.jpg',
    fallbackSrc: 'https://i.postimg.cc/NjjVSLz2/729e763d-5bd5-4d01-8723-8fcf4bf7e00d.jpg',
    title: 'Banho de Gel & Francesinha Clássica',
    category: 'Esmaltação & Blindagem',
    description: 'Proteção para unhas naturais com durabilidade prolongada e linha do sorriso precisa.'
  },
  {
    id: 4,
    src: '/portfolio/work_4.jpg',
    fallbackSrc: 'https://i.postimg.cc/RVRygwXL/803bbe82-7254-4a35-9551-28d886e30dd8.jpg',
    title: 'Formato Almond com Nude Elegance',
    category: 'Estruturação & Cor',
    description: 'Tom nude sofisticado com acabamento ultrafino, valorizando o formato anatômico das mãos.'
  }
];

export const STUDIO_SERVICES = [
  {
    name: 'Alongamento em Gel',
    desc: 'Extensão duradoura com aparência fina, curvatura simétrica e resistência garantida.',
    tag: 'Mais procurado'
  },
  {
    name: 'Banho de Gel / Blindagem',
    desc: 'Camada protetora sobre as unhas naturais para evitar quebras e prolongar a esmaltação.',
    tag: 'Proteção'
  },
  {
    name: 'Esmaltação em Gel',
    desc: 'Brilho espelhado impecável e secagem instantânea com durabilidade de até 20 dias.',
    tag: 'Durabilidade'
  },
  {
    name: 'Manutenção Periódica',
    desc: 'Alinhamento da estrutura, reposição de produto e renovação do design original.',
    tag: 'Cuidado Contínuo'
  },
  {
    name: 'Spa & Cuidados das Mãos',
    desc: 'Esfoliação, hidratação profunda e tratamento cuticular relaxante.',
    tag: 'Bem-estar'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Quanto tempo leva para o procedimento ficar pronto?',
    answer: 'O tempo médio para o procedimento ficar pronto é de 50 minutos a 1h30, unindo agilidade, técnica refinada e acabamento impecável.'
  },
  {
    question: 'Qual a durabilidade e a frequência ideal para manutenção?',
    answer: 'Com os devidos cuidados, o alongamento e a blindagem possuem alta durabilidade. Recomendamos o retorno para manutenção a cada 20 a 25 dias para preservar a saúde da lâmina natural.'
  },
  {
    question: 'Como faço para agendar meu horário?',
    answer: 'Basta clicar no botão "AGENDAR HORÁRIO" ou no ícone do WhatsApp para falar diretamente conosco e escolher a melhor data e horário para seu atendimento.'
  },
  {
    question: 'Como funciona o Curso de Nail Design?',
    answer: 'O curso é prático e intensivo, cobrindo desde a preparação correta e controle de produto até o acabamento perfeito. Fale conosco no WhatsApp para consultar o cronograma e valores.'
  }
];
