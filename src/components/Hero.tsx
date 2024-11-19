import React from 'react';
import { Scale, Building2, Landmark } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative">
      {/* Services Section */}
      <div className="relative z-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Cabinet d'Expertise</span>
              <span className="block text-secondary">Juridique, Fiscal et Foncier</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Votre partenaire de confiance pour tous vos besoins juridiques, fiscaux et fonciers.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-secondary hover:bg-yellow-400 md:py-4 md:text-lg md:px-10"
                >
                  Prendre rendez-vous
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="bg-gray-50 rounded-lg p-6 text-center shadow-lg">
              <div className="flex justify-center mb-4">
                <Scale className="h-12 w-12 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Expertise Juridique</h3>
              <p className="text-gray-600">Conseils et assistance juridique personnalisés</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center shadow-lg">
              <div className="flex justify-center mb-4">
                <Building2 className="h-12 w-12 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Conseil Fiscal</h3>
              <p className="text-gray-600">Optimisation et conformité fiscale</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center shadow-lg">
              <div className="flex justify-center mb-4">
                <Landmark className="h-12 w-12 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Expertise Foncière</h3>
              <p className="text-gray-600">Gestion et valorisation de votre patrimoine</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;