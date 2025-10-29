import { Linkedin, Twitter } from "lucide-react";

const speakers = [
  {
    name: "Sophie Martin",
    role: "Agile Coach & Formatrice",
    company: "Agile Partners",
    image: "https://images.unsplash.com/photo-1759922378092-14917cba3f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHNwZWFrZXJ8ZW58MXx8fHwxNzYxNzQyMjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "15 ans d'expérience en transformation agile",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Jean Dupont",
    role: "Scrum Master",
    company: "Tech Solutions",
    image: "https://images.unsplash.com/photo-1635768229592-8c2532d33cb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcHJvZmVzc2lvbmFsJTIwbWFufGVufDF8fHx8MTc2MTcyNTc4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Expert en scaling agile et SAFe",
    color: "from-red-500 to-rose-500",
  },
  {
    name: "Marie Laurent",
    role: "Design Thinking Lead",
    company: "Innovation Lab",
    image: "https://images.unsplash.com/photo-1752118464988-2914fb27d0f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHNwZWFrZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE3NDIyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Spécialiste UX et méthodologies créatives",
    color: "from-orange-600 to-amber-500",
  },
  {
    name: "Thomas Bernard",
    role: "DevOps Architect",
    company: "Cloud Native Inc",
    image: "https://images.unsplash.com/photo-1518107616985-bd48230d3b20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzYxNzM0NTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Expert CI/CD et culture DevOps",
    color: "from-red-600 to-pink-600",
  },
  {
    name: "Claire Dubois",
    role: "Agile Leader",
    company: "Transform Inc",
    image: "https://images.unsplash.com/photo-1759922378092-14917cba3f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHNwZWFrZXJ8ZW58MXx8fHwxNzYxNzQyMjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Coach en transformation organisationnelle",
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Alexandre Roy",
    role: "Product Owner",
    company: "Digital First",
    image: "https://images.unsplash.com/photo-1635768229592-8c2532d33cb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcHJvZmVzc2lvbmFsJTIwbWFufGVufDF8fHx8MTc2MTcyNTc4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Stratégie produit et innovation",
    color: "from-amber-500 to-orange-600",
  },
];

export function Speakers() {
  return (
    <section id="speakers" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-orange-100 to-red-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-br from-red-100 to-rose-100 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full text-sm mb-6">
            Nos experts
          </div>
          <h2 className="text-6xl md:text-7xl tracking-tight mb-8 leading-[1.1]">
            Apprenez des<br />
            meilleurs
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Des leaders reconnus qui partagent leur vision, leur expérience 
            et leurs insights sur l'agilité de demain.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[3/4]">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${speaker.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-10`}></div>
                
                {/* Image */}
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Social Icons - Show on Hover */}
                <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Linkedin size={24} className="text-gray-900" />
                  </button>
                  <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Twitter size={24} className="text-gray-900" />
                  </button>
                </div>

                {/* Info on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-sm mb-2">{speaker.bio}</p>
                </div>
              </div>

              {/* Speaker Info */}
              <div className="px-2">
                <h3 className="text-2xl mb-2">{speaker.name}</h3>
                <p className="text-gray-600 mb-1">{speaker.role}</p>
                <p className="text-sm text-gray-400">{speaker.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-6">
            Et beaucoup d'autres experts à découvrir
          </p>
          <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-lg">
            Voir tous les speakers
          </button>
        </div>
      </div>
    </section>
  );
}
