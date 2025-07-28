import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { Categoria } from '../types';

interface CategoryCardProps {
  categoria: Categoria;
  comerciosCount: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ categoria, comerciosCount }) => {
  const IconComponent = Icons[categoria.icone as keyof typeof Icons] as React.ComponentType<any>;

  return (
    <Link
      to={`/categoria/${categoria.id}`}
      className="group block p-2 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center space-x-4">
        <div className={`${categoria.cor} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
          {IconComponent && <IconComponent className="h-6 w-6 text-white" />}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {categoria.nome}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{categoria.descricao}</p>
          <p className="text-xs text-gray-400 mt-2 font-medium">
            {comerciosCount} {comerciosCount === 1 ? 'estabelecimento' : 'estabelecimentos'}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;