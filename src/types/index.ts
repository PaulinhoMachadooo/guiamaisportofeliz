export interface Comercio {
  id: string;
  nome: string;
  categoria: string;
  descricao: string;
  endereco: string;
  telefone: string;
  //email?: string;
  website?: string;
  horarios: string;
  //avaliacao: number;
  //totalAvaliacoes: number;
  imagem: string;
  especialidades?: string[];
  instagram?: string;
  facebook?: string;
  whatsapp?: string;
}

export interface Categoria {
  id: string;
  nome: string;
  icone: string;
  cor: string;
  descricao: string;
}