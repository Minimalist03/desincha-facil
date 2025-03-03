
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Método Anti-Inchaço. Todos os direitos reservados.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-mint-dark transition-colors text-sm underline-animation">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-500 hover:text-mint-dark transition-colors text-sm underline-animation">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-500 hover:text-mint-dark transition-colors text-sm underline-animation">
              Contato
            </a>
          </div>
          <p className="mt-6 text-xs text-gray-400">
            Este site não substitui o aconselhamento médico profissional, diagnóstico ou tratamento.
            Sempre consulte um profissional de saúde qualificado.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
