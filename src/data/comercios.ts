import { Comercio, Categoria } from "../types";

export const categorias: Categoria[] = [
  {
    id: "academia",
    nome: "Academia",
    icone: "Dumbbell",
    cor: "bg-yellow-500",
    descricao: "Academia, fitness e bem-estar",
  },
  {
    id: "alimentacao",
    nome: "Alimentação",
    icone: "UtensilsCrossed",
    cor: "bg-orange-500",
    descricao:
      "Alimentação, restaurantes, pizzarias, lanchonetes, padarias e cafeterias",
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
  {
    id: "viagens",
    nome: "Viagens",
    icone: "Plane",
    cor: "bg-blue-600",
    descricao: "Agências de viagens, turismo e hospedagem",
  },
  {
    id: "transporte",
    nome: "Transporte",
    icone: "Bus",
    cor: "bg-red-500",
    descricao: "Serviços de transporte, táxis e aplicativos",
  },
  {
    id: "tecnologia",
    nome: "Tecnologia",
    icone: "Laptop",
    cor: "bg-blue-500",
    descricao: "Lojas de eletrônicos, informática e tecnologia",
  },
  {
    id: "entretenimento",
    nome: "Entretenimento",
    icone: "Film",
    cor: "bg-yellow-500",
    descricao: "Cinema, teatro, shows e eventos culturais",
  },
  {
    id: "esportes",
    nome: "Esportes",
    icone: "Trophy",
    cor: "bg-green-400",
    descricao: "Lojas de artigos esportivos",
  },
  {
    id: "animais",
    nome: "Animais",
    icone: "PawPrint",
    cor: "bg-orange-500",
    descricao: "Pet shops, clínicas veterinárias e adoção de animais",
  },
];

export const comercios: Comercio[] = [
  // alimentação
  {
    id: "pizzaria-surreal",
    nome: "Pizzaria Surreal",
    categoria: "alimentacao",
    descricao:
      "Pizzaria com ingredientes frescos e sabores surreal. Ambiente aconchegante e familiar.",
    endereco: "Rua Newton Prado, 535 - Centro",
    telefone: "(15) 99655-2341",
    horarios: "Seg-Ter: 19h às 23h,\nQua: Fechado,\nQui-Dom: 19h às 23h",
    avaliacao: 4.8,
    totalAvaliacoes: 247,
    imagem:
      "https://lh3.googleusercontent.com/pw/AP1GczOCZd4wCGau0xNcS40wSShDDnlomtBex3xVv_ChSUdBUiylzjb40Nes6-WrcSMrBMGgkw8x-i6nsKZ9bGhMTCEbBJDxWyPZbuvQqLMhpAETjCOq8r1TxjC1jrGB-RhKTulheYSxBSdYiYsRcKFu13KW=w640-h640-s-no-gm?authuser=4",
    galeria: [
      "https://lh3.googleusercontent.com/pw/AP1GczMOeiDqyyh2REp8osYzItris4SbONALDgyQlTfGcvUrfp3DyXEQp-0Hp3UVV_3ZJVmxOOlRUgr8hzwpMsLP9sysgVoAPaF_3Abqt2Syp2OumKGuYOMM6bex1jKBhkRAYj0TuzPdWH_b5HjqJLD2Tfw-=w1080-h608-s-no-gm?authuser=4",
      "https://lh3.googleusercontent.com/pw/AP1GczNHhIjLrohNvOIWaKiqdl8NFdqmehQIqa6_bh1iV9H-EdlaqvNo2dgOV0ialTP_e5T0_Ad4xiCo3VzbPR31B6HnmS935vzQxO1QJNEknzgz8md6KkVeqEqYmg9HtaQfpu04d2WyYMbVMfHphJwgO6Ae=w912-h912-s-no-gm?authuser=4",
      "https://lh3.googleusercontent.com/pw/AP1GczMXHo3GhhZrRg4oP8HBN17bbCJaxcbMN-zj103lI7y929iaeAQpZxf3G1_OEulL1Ww01TGwvlprFh6CmpZiw6lqThF7HvkIM42th6nNPJlOrMWgXXctI9V6IYlz0J3APrrtAn0xz6IzxEmaCQTMjuey=w858-h524-s-no-gm?authuser=4",
      "https://lh3.googleusercontent.com/pw/AP1GczOEMz2UsoPifSgxg0kDV3gea3QeDZKLav2fbmlZnRtg0t4lKTIrq7mIu_TOrvreXBB7KG7aOb6JJdOncPbLH9d3mur2Ta_CbEPTX7MdOgWfwOAJb5_Z8o34CyHjzqhDi1XL8DFkwk_g5mXh_lXlMM9_=w858-h644-s-no-gm?authuser=4",
    ],
    especialidades: [
      "Delivery",
      "Balcão",
      "Mesas e cadeiras",
      "Ambiente familiar",
      "Sabor incrível",
    ],
    facebook: "pizzariasurreal",
    instagram: "@pizzariasurreall",
    whatsapp: "15996552341",
  },
];
