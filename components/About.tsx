import React from "react";

export function About() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1571645163064-77faa9676a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwbmV0d29ya2luZyUyMGV2ZW50fGVufDF8fHx8MTc2MTYzNjkzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Event"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1705909773420-8d7af2a343f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzYxNzE0NjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-12 space-y-6">
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1518107616985-bd48230d3b20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzYxNzM0NTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1567943183748-3a7542120c90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjE2NzM0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Architecture"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:pl-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full text-sm mb-6">
              À propos de l'événement
            </div>
            
            <h2 className="text-6xl md:text-7xl tracking-tight mb-8 leading-[1.1]">
              Transformez
              <br />
              votre vision
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
              <p>
                SophiAgile 2024 est bien plus qu'une simple conférence. C'est un catalyseur 
                de transformation, un lieu où les idées audacieuses prennent vie et où les 
                pratiques agiles rencontrent l'innovation de demain.
              </p>
              <p>
                Rejoignez 500+ professionnels passionnés, échangez avec 20+ experts reconnus 
                et participez à 15+ sessions enrichissantes qui façonneront l'avenir de votre 
                organisation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h4 className="text-xl mb-2">Networking</h4>
                <p className="text-sm text-gray-600">
                  Connectez-vous avec des pairs et des leaders
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                </div>
                <h4 className="text-xl mb-2">Apprentissage</h4>
                <p className="text-sm text-gray-600">
                  Découvrez les dernières pratiques agiles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
