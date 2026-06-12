import React from 'react';
import Link from 'next/link';

const TopBar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Lado Esquerdo: Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg"></div>
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition">
              <span className="text-xl font-bold tracking-tight text-gray-900">
                Blog<span className="text-indigo-600">Mens</span>
              </span>
            </Link>
          </div>

          {/* Centro: Navegação (Desktop) */}
          <nav className="hidden md:flex space-x-10">
            <Link href="/dashboard" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition">Dashboard</Link>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition">Projetos</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition">Equipe</a>
          </nav>

          {/* Lado Direito: Ações */}
          <div className="flex items-center gap-4">
            <Link href="/login" className="cursor-pointer text-sm font-medium text-gray-700 hover:text-indigo-600 transition">
              <button className="text-sm font-medium text-gray-500 hover:text-gray-900">
                Login
              </button>
            </Link>
            <Link href="/cadastro" className="cursor-pointer text-sm font-medium text-gray-700 hover:text-indigo-600 transition">
              <button className="rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition">
                Cadastro
              </button>
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default TopBar;