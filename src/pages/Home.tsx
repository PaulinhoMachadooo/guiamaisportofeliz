import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import CategoryCard from "../components/CategoryCard";
import ComercioCard from "../components/ComercioCard";
import { categorias, comercios } from "../data/comercios";

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query.trim()) {
      // Buscar por categoria primeiro
      const categoriaEncontrada = categorias.find(
        (categoria) =>
          categoria.nome.toLowerCase().includes(query.toLowerCase()) ||
          categoria.descricao.toLowerCase().includes(query.toLowerCase())
      );

      if (categoriaEncontrada) {
        navigate(`/categoria/${categoriaEncontrada.id}`);
        return;
      }

      // Buscar por comércio específico
      const comercioEncontrado = comercios.find(
        (comercio) =>
          comercio.nome.toLowerCase().includes(query.toLowerCase()) ||
          comercio.descricao.toLowerCase().includes(query.toLowerCase()) ||
          (comercio.especialidades &&
            comercio.especialidades.some((esp) =>
              esp.toLowerCase().includes(query.toLowerCase())
            ))
      );

      if (comercioEncontrado) {
        navigate(`/comercio/${comercioEncontrado.id}`);
        return;
      }
    }
  };

  const filteredComercios = useMemo(() => {
    if (!searchQuery) return comercios.slice(0, 6);
    return comercios.filter(
      (comercio) =>
        comercio.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comercio.descricao.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (comercio.especialidades &&
          comercio.especialidades.some((esp) =>
            esp.toLowerCase().includes(searchQuery.toLowerCase())
          ))
    );
  }, [searchQuery]);

  const topRatedComercios = useMemo(() => {
    return comercios.sort((a, b) => b.avaliacao - a.avaliacao).slice(0, 4);
  }, []);

  const getCategoriaComerciosCount = (categoriaId: string) => {
    return comercios.filter((comercio) => comercio.categoria === categoriaId)
      .length;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={handleSearch} />

      {/* Carousel Section */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Carousel />
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#112342] to-blue-900 text-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center" data-aos="fade-up" data-aos-delay="200">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descubra os melhores comércios da sua cidade
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Encontre restaurantes, serviços, lojas e muito mais. Tudo em um só
              lugar, com avaliações e informações completas.
            </p>
            <Link
              to="/categorias"
              className="inline-flex items-center px-8 py-3 bg-[#ff5e00] text-[#112342] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Explorar Categorias
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Categorias
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore diferentes tipos de estabelecimentos em nossa cidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="300">
            {categorias.map((categoria) => (
              <CategoryCard
                key={categoria.id}
                categoria={categoria}
                comerciosCount={getCategoriaComerciosCount(categoria.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* DESTAQUE CARD */}

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12" data-aos="fade-up">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="h-6 w-6 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Destaque
                </h2>
              </div>
              <p className="text-gray-600">
                Os estabelecimentos em destaque
              </p>
            </div>
            <Link
              to="/categorias"
              className="text-blue-900 hover:text-blue-700 font-medium flex items-center"
            >
              Ver todos
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="200">
            {topRatedComercios.map((comercio) => (
              <ComercioCard key={comercio.id} comercio={comercio} />
            ))}
          </div>
        </div>
      </section>

      {/* Search Results */}
      {searchQuery && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Resultados da busca para "{searchQuery}"
              </h2>
              <p className="text-gray-600">
                {filteredComercios.length}{" "}
                {filteredComercios.length === 1
                  ? "resultado encontrado"
                  : "resultados encontrados"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="200">
              {filteredComercios.map((comercio) => (
                <ComercioCard key={comercio.id} comercio={comercio} />
              ))}
            </div>

            {filteredComercios.length === 0 && (
              <div className="text-center py-12" data-aos="fade-up">
                <p className="text-gray-500 text-lg mb-4">
                  Nenhum resultado encontrado
                </p>
                <p className="text-gray-400">
                  Tente buscar por: restaurante, pizza, salão, farmácia, escola,
                  etc.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-[#ff5e00] py-12" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">GUIA+</h3>
            <p className="text-gray-400 mb-6">
              Conectando você aos melhores comércios da sua cidade
            </p>
            <div className="flex justify-center space-x-6">
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Início
              </Link>
              <Link
                to="/categorias"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Categorias
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
