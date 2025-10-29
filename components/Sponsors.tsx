const sponsors = {
  platinum: [
    { name: "TechCorp", tagline: "Innovation Partner" },
    { name: "CloudNative", tagline: "Platform Sponsor" },
  ],
  gold: [
    { name: "DevTools Pro", tagline: "Workshop Sponsor" },
    { name: "AgileHub", tagline: "Community Partner" },
    { name: "InnovateLab", tagline: "Coffee Break Sponsor" },
  ],
  silver: [
    { name: "StartupX", tagline: "Media Partner" },
    { name: "CodeCraft", tagline: "Event Partner" },
    { name: "TechValley", tagline: "Local Partner" },
    { name: "SophiaInc", tagline: "Venue Partner" },
  ],
};

export function Sponsors() {
  return (
    <section id="sponsors" className="relative py-32 overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-orange-900 to-red-900"></div>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1646038572816-04ab3ff22b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwY29sb3JmdWx8ZW58MXx8fHwxNzYxNjIwNTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-white">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm mb-6">
            Ils nous font confiance
          </div>
          <h2 className="text-6xl md:text-7xl tracking-tight mb-8 leading-[1.1]">
            Nos partenaires<br />
            d'exception
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Ensemble, nous façonnons l'écosystème agile de demain et créons 
            une communauté d'excellence.
          </p>
        </div>

        <div className="space-y-16">
          {/* Platinum Sponsors */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent flex-grow"></div>
              <p className="text-sm text-white/60 uppercase tracking-wider">Platinum Partners</p>
              <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent flex-grow"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {sponsors.platinum.map((sponsor, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative p-12 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:border-white/30 transition-all">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl flex items-center justify-center">
                        <span className="text-white text-3xl">{sponsor.name[0]}</span>
                      </div>
                      <div>
                        <h4 className="text-3xl mb-1">{sponsor.name}</h4>
                        <p className="text-white/60">{sponsor.tagline}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent flex-grow"></div>
              <p className="text-sm text-white/60 uppercase tracking-wider">Gold Partners</p>
              <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent flex-grow"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {sponsors.gold.map((sponsor, index) => (
                <div
                  key={index}
                  className="group p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white text-2xl">{sponsor.name[0]}</span>
                  </div>
                  <h4 className="text-xl mb-2">{sponsor.name}</h4>
                  <p className="text-sm text-white/60">{sponsor.tagline}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent flex-grow"></div>
              <p className="text-sm text-white/60 uppercase tracking-wider">Silver Partners</p>
              <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent flex-grow"></div>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {sponsors.silver.map((sponsor, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all text-center"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-300 to-red-300 rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                    <span className="text-white text-lg">{sponsor.name[0]}</span>
                  </div>
                  <h4 className="mb-1">{sponsor.name}</h4>
                  <p className="text-xs text-white/60">{sponsor.tagline}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <div className="max-w-3xl mx-auto p-12 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
            <h3 className="text-4xl mb-4">Devenez partenaire</h3>
            <p className="text-white/70 mb-8 text-lg leading-relaxed">
              Associez votre marque à SophiAgile et bénéficiez d'une visibilité 
              exceptionnelle auprès de 500+ professionnels de l'agilité.
            </p>
            <button className="px-10 py-5 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all text-lg hover:scale-105">
              Découvrir les opportunités
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
