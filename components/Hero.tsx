import { ArrowRight, Calendar, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 via-red-600/85 to-rose-600/90 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1761223976272-0d6d4bc38636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMGF1ZGllbmNlfGVufDF8fHx8MTc2MTcxMDgyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Conference"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 py-32 text-white">
        <div className="max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm mb-8">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              26 Septembre 2024
            </span>
            <span className="w-1 h-1 bg-white/50 rounded-full"></span>
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              Sophia Antipolis
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl tracking-tight mb-8 leading-[0.9]">
            SophiAgile
            <span className="block text-white/60">2024</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-white/90 mb-12 max-w-3xl leading-relaxed">
            Où l'agilité rencontre l'innovation. Une journée pour redéfinir 
            la façon dont nous construisons le futur.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-20">
            <button className="group px-8 py-5 bg-white text-black rounded-full hover:bg-white/90 transition-all flex items-center gap-3 text-lg">
              Réserver ma place
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-5 border-2 border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all text-lg">
              Découvrir le programme
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl">
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="text-5xl mb-2">500+</div>
              <div className="text-white/70">Participants</div>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="text-5xl mb-2">20+</div>
              <div className="text-white/70">Speakers</div>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="text-5xl mb-2">15+</div>
              <div className="text-white/70">Sessions</div>
            </div>
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="text-5xl mb-2">8h</div>
              <div className="text-white/70">De contenu</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 text-white/60 animate-bounce">
          <span className="text-sm">Scroll</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
