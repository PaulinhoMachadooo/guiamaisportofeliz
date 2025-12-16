import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Phone } from "lucide-react";
import { Comercio } from "../types";

interface ComercioCardProps {
  comercio: Comercio;
}

const ComercioCard: React.FC<ComercioCardProps> = ({ comercio }) => {
  const isGratuito = comercio.tipoAnuncio === "gratuito";

  if (isGratuito) {
    return (
      <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-gray-300">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">
            {comercio.nome}
          </h3>
          {/*<span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
            Gratuito
          </span>*/}
        </div>

        <div className="space-y-2">
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="truncate">{comercio.endereco}</span>
          </div>

          <div className="flex items-center text-gray-600 text-sm">
            <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
            <a
              href={`tel:${comercio.telefone}`}
              className="hover:text-blue-600 transition-colors"
            >
              {comercio.telefone}
            </a>
          </div>

          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{comercio.horarios}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      to={`/comercio/${comercio.id}`}
      className="group block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
      data-aos="fade-up"
      data-aos-delay="150"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={comercio.imagem}
          alt={comercio.nome}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
          {comercio.nome}
        </h3>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {comercio.descricao}
        </p>

        <div className="space-y-2">
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="truncate">{comercio.endereco}</span>
          </div>

          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{comercio.horarios}</span>
          </div>

          <div className="flex items-center text-gray-500 text-sm">
            <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{comercio.telefone}</span>
          </div>
        </div>

        {comercio.especialidades && comercio.especialidades.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {comercio.especialidades.slice(0, 3).map((especialidade, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 bg-[#ff5e00] text-white text-xs rounded-full"
              >
                {especialidade}
              </span>
            ))}
          </div>
        )}

        <div className="mt-3 flex items-center justify-between">
          <span className="text-blue-900 text-sm font-medium group-hover:text-blue-00">
            Ver detalhes →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ComercioCard;
