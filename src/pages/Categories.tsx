import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import Header from "../components/Header";
import CategoryCard from "../components/CategoryCard";
import { categorias, comercios } from "../data/comercios";
import { Link, useParams } from "react-router-dom";

const Categories: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategorias = useMemo(() => {
    if (!searchQuery) return categorias;
    return categorias.filter((categoria) =>
      categoria.nome.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const getCategoriaComerciosCount = (categoriaId: string) => {
    return comercios.filter((comercio) => comercio.categoria === categoriaId)
      .length;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8" data-aos="fade-up">
          {/*<h1 className="text-3xl font-bold text-gray-900 mb-4">
            Todas as Categorias
          </h1>
          <p className="text-gray-600 mb-6">
            Explore diferentes tipos de estabelecimentos em nossa cidade
          </p>*/}
          
          
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar categorias..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {filteredCategorias.map((categoria) => (
            <CategoryCard
              key={categoria.id}
              categoria={categoria}
              comerciosCount={getCategoriaComerciosCount(categoria.id)}
            />
          ))}
        </div>

        {filteredCategorias.length === 0 && (
          <div className="text-center py-12" data-aos="fade-up">
            <p className="text-gray-500 text-lg">
              Nenhuma categoria encontrada
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
