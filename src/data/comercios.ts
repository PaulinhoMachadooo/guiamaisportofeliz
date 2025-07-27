import { Comercio, Categoria } from "../types";

export const categorias: Categoria[] = [
  {
    id: "restaurantes",
    nome: "Restaurantes",
    icone: "UtensilsCrossed",
    cor: "bg-orange-500",
    descricao: "Restaurantes, lanchonetes, bares e cafeterias",
  },
  {
    id: "servicos",
    nome: "Serviços",
    icone: "Wrench",
    cor: "bg-blue-500",
    descricao: "Serviços profissionais, consultoria e assistência técnica",
  },
  {
    id: "varejo",
    nome: "Varejo",
    icone: "ShoppingBag",
    cor: "bg-green-500",
    descricao: "Lojas, boutiques, mercados e comércio em geral",
  },
  {
    id: "saude",
    nome: "Saúde",
    icone: "Heart",
    cor: "bg-red-500",
    descricao: "Clínicas, farmácias, laboratórios e profissionais da saúde",
  },
  {
    id: "beleza",
    nome: "Beleza",
    icone: "Scissors",
    cor: "bg-pink-500",
    descricao: "Salões de beleza, barbearias e estética",
  },
  {
    id: "educacao",
    nome: "Educação",
    icone: "GraduationCap",
    cor: "bg-purple-500",
    descricao: "Escolas, cursos, universidades e ensino",
  },
];

export const comercios: Comercio[] = [
  // Restaurantes
  {
    id: "1",
    nome: "Restaurante Sabores da Terra",
    categoria: "restaurantes",
    descricao:
      "Culinária regional com ingredientes frescos e pratos tradicionais. Ambiente aconchegante e familiar.",
    endereco: "Rua das Flores, 123 - Centro",
    telefone: "(11) 3456-7890",
    email: "contato@saboresdaterra.com.br",
    website: "www.saboresdaterra.com.br",
    horarios: "Seg-Dom: 11h às 23h",
    avaliacao: 4.8,
    totalAvaliacoes: 247,
    imagem:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800",
    especialidades: [
      "Comida Caseira",
      "Pratos Regionais",
      "Sobremesas Artesanais",
    ],
    instagram: "@saboresdaterra",
    whatsapp: "11987654321",
  },
  {
    id: "2",
    nome: "Pizzaria Bella Vista",
    categoria: "restaurantes",
    descricao:
      "As melhores pizzas da cidade com massa artesanal e ingredientes selecionados. Delivery disponível.",
    endereco: "Av. Principal, 456 - Jardim Esperança",
    telefone: "(11) 3456-7891",
    email: "pedidos@bellavista.com.br",
    horarios: "Ter-Dom: 18h às 24h",
    avaliacao: 4.6,
    totalAvaliacoes: 189,
    imagem:
      "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800",
    especialidades: ["Pizza Artesanal", "Massa Caseira", "Delivery"],
    instagram: "@pizzariabellavista",
    whatsapp: "11987654322",
  },
  {
    id: "3",
    nome: "Café & Cia",
    categoria: "restaurantes",
    descricao:
      "Cafeteria moderna com cafés especiais, doces caseiros e ambiente ideal para trabalhar ou relaxar.",
    endereco: "Praça da Liberdade, 789 - Centro",
    telefone: "(11) 3456-7892",
    email: "ola@cafeecia.com.br",
    horarios: "Seg-Sáb: 7h às 20h, Dom: 8h às 18h",
    avaliacao: 4.7,
    totalAvaliacoes: 156,
    imagem:
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800",
    especialidades: ["Cafés Especiais", "Doces Caseiros", "Wi-Fi Gratuito"],
    instagram: "@cafeecia",
    facebook: "cafeecia",
  },

  // Serviços
  {
    id: "4",
    nome: "TechFix Assistência Técnica",
    categoria: "servicos",
    descricao:
      "Assistência técnica especializada em smartphones, notebooks e eletrônicos. Orçamento gratuito.",
    endereco: "Rua da Tecnologia, 321 - Vila Nova",
    telefone: "(11) 3456-7893",
    email: "suporte@techfix.com.br",
    website: "www.techfix.com.br",
    horarios: "Seg-Sex: 8h às 18h, Sáb: 8h às 12h",
    avaliacao: 4.9,
    totalAvaliacoes: 312,
    imagem:
      "https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=800",
    especialidades: ["Smartphones", "Notebooks", "Eletrônicos"],
    instagram: "@techfixassistencia",
    whatsapp: "11987654323",
  },
  {
    id: "5",
    nome: "Advocacia Silva & Associados",
    categoria: "servicos",
    descricao:
      "Escritório de advocacia com mais de 20 anos de experiência. Atendimento personalizado.",
    endereco: "Av. Justiça, 654 - Centro",
    telefone: "(11) 3456-7894",
    email: "contato@silvaadvocacia.com.br",
    website: "www.silvaadvocacia.com.br",
    horarios: "Seg-Sex: 8h às 17h",
    avaliacao: 4.5,
    totalAvaliacoes: 98,
    imagem:
      "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800",
    especialidades: ["Direito Civil", "Direito Trabalhista", "Direito Família"],
    whatsapp: "11987654324",
  },

  // Varejo
  {
    id: "6",
    nome: "Moda & Estilo Boutique",
    categoria: "varejo",
    descricao:
      "Roupas femininas das melhores marcas. Peças exclusivas e atendimento personalizado.",
    endereco: "Rua da Moda, 987 - Centro",
    telefone: "(11) 3456-7895",
    email: "vendas@modaestilo.com.br",
    instagram: "@modaestiloboutique",
    horarios: "Seg-Sex: 9h às 19h, Sáb: 9h às 17h",
    avaliacao: 4.4,
    totalAvaliacoes: 201,
    imagem:
      "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800",
    especialidades: ["Roupas Femininas", "Acessórios", "Marcas Exclusivas"],
    facebook: "modaestiloboutique",
    whatsapp: "11987654325",
  },
  {
    id: "7",
    nome: "Supermercado Família",
    categoria: "varejo",
    descricao:
      "Supermercado com produtos frescos, variedade e preços competitivos. Estacionamento gratuito.",
    endereco: "Av. Comercial, 147 - Jardim Paraíso",
    telefone: "(11) 3456-7896",
    email: "atendimento@superfamilia.com.br",
    horarios: "Seg-Dom: 7h às 22h",
    avaliacao: 4.3,
    totalAvaliacoes: 445,
    imagem:
      "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800",
    especialidades: [
      "Produtos Frescos",
      "Variedade",
      "Estacionamento Gratuito",
    ],
    whatsapp: "11987654326",
  },

  // Saúde
  {
    id: "8",
    nome: "Clínica São Lucas",
    categoria: "saude",
    descricao:
      "Clínica médica com especialistas em diversas áreas. Atendimento de qualidade e humanizado.",
    endereco: "Rua da Saúde, 258 - Centro",
    telefone: "(11) 3456-7897",
    email: "agendamento@clinicasaolucas.com.br",
    website: "www.clinicasaolucas.com.br",
    horarios: "Seg-Sex: 7h às 19h, Sáb: 7h às 12h",
    avaliacao: 4.7,
    totalAvaliacoes: 178,
    imagem:
      "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800",
    especialidades: ["Clínica Geral", "Cardiologia", "Pediatria"],
    whatsapp: "11987654327",
  },
  {
    id: "9",
    nome: "Farmácia Vida & Saúde",
    categoria: "saude",
    descricao:
      "Farmácia completa com medicamentos, produtos de higiene e atendimento farmacêutico.",
    endereco: "Praça Central, 369 - Centro",
    telefone: "(11) 3456-7898",
    email: "contato@farmaciavidasaude.com.br",
    horarios: "Seg-Dom: 6h às 23h",
    avaliacao: 4.5,
    totalAvaliacoes: 267,
    imagem:
      "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800",
    especialidades: ["Medicamentos", "Produtos Naturais", "Delivery"],
    whatsapp: "11987654328",
  },

  // Beleza
  {
    id: "10",
    nome: "Salão Elegance",
    categoria: "beleza",
    descricao:
      "Salão de beleza completo com cabeleireiros experientes e produtos de qualidade.",
    endereco: "Rua Bela Vista, 741 - Jardim Flores",
    telefone: "(11) 3456-7899",
    email: "agendamento@salaoelegance.com.br",
    instagram: "@salaoelegance",
    horarios: "Ter-Sáb: 8h às 19h",
    avaliacao: 4.8,
    totalAvaliacoes: 134,
    imagem:
      "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800",
    especialidades: ["Corte e Escova", "Coloração", "Tratamentos"],
    facebook: "salaoelegance",
    whatsapp: "11987654329",
  },
  {
    id: "11",
    nome: "Barbearia Clássica",
    categoria: "beleza",
    descricao:
      "Barbearia tradicional com serviços clássicos e ambiente masculino acolhedor.",
    endereco: "Rua dos Homens, 852 - Centro",
    telefone: "(11) 3456-7800",
    email: "contato@barbeariaclassica.com.br",
    horarios: "Seg-Sáb: 8h às 19h",
    avaliacao: 4.9,
    totalAvaliacoes: 89,
    imagem:
      "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800",
    especialidades: ["Corte Masculino", "Barba", "Bigode"],
    instagram: "@barbeariaclassica",
    whatsapp: "11987654330",
  },

  // Educação
  {
    id: "12",
    nome: "Escola Futuro Brilhante",
    categoria: "educacao",
    descricao:
      "Escola de ensino fundamental e médio com metodologia inovadora e professores qualificados.",
    endereco: "Av. Educação, 963 - Vila Escolar",
    telefone: "(11) 3456-7801",
    email: "secretaria@futurobrilhante.edu.br",
    website: "www.futurobrilhante.edu.br",
    horarios: "Seg-Sex: 7h às 17h",
    avaliacao: 4.6,
    totalAvaliacoes: 156,
    imagem:
      "https://images.pexels.com/photos/256491/pexels-photo-256491.jpeg?auto=compress&cs=tinysrgb&w=800",
    especialidades: [
      "Ensino Fundamental",
      "Ensino Médio",
      "Atividades Extracurriculares",
    ],
    facebook: "escolafuturobrilhante",
  },
  {
    id: "13",
    nome: "Curso de Idiomas Global",
    categoria: "educacao",
    descricao:
      "Curso de idiomas com professores nativos e metodologia comunicativa. Inglês, espanhol e francês.",
    endereco: "Rua Internacional, 174 - Centro",
    telefone: "(11) 3456-7802",
    email: "matriculas@cursoglobal.com.br",
    website: "www.cursoglobal.com.br",
    horarios: "Seg-Sex: 8h às 22h, Sáb: 8h às 12h",
    avaliacao: 4.7,
    totalAvaliacoes: 203,
    imagem:
      "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
    especialidades: ["Inglês", "Espanhol", "Francês"],
    instagram: "@cursoglobal",
    whatsapp: "11987654331",
  }, {
    id: "14",
    nome: "Curso de Idiomas Global",
    categoria: "educacao",
    descricao:
      "Curso de idiomas com professores nativos e metodologia comunicativa. Inglês, espanhol e francês.",
    endereco: "Rua Internacional, 174 - Centro",
    telefone: "(11) 3456-7802",
    email: "matriculas@cursoglobal.com.br",
    website: "www.cursoglobal.com.br",
    horarios: "Seg-Sex: 8h às 22h, Sáb: 8h às 12h",
    avaliacao: 4.7,
    totalAvaliacoes: 203,
    imagem:
      "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
    especialidades: ["Inglês", "Espanhol", "Francês"],
    instagram: "@cursoglobal",
    whatsapp: "11987654331",
  },
];
