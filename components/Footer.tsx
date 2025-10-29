import { Linkedin, Mail, Twitter, Instagram, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-5xl mb-4 tracking-tight">
                Restez informé
              </h3>
              <p className="text-xl text-white/60">
                Recevez les dernières actualités et ne manquez aucune information 
                importante sur SophiAgile 2024.
              </p>
            </div>
            <div>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-grow px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-white/30 transition-colors text-lg"
                />
                <button className="px-8 py-4 bg-white text-black rounded-2xl hover:bg-white/90 transition-all flex items-center gap-2 group">
                  S'inscrire
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl mb-4 tracking-tight">SophiAgile</h3>
            <p className="text-white/60 leading-relaxed mb-6">
              La conférence de référence sur les méthodologies agiles en région PACA. 
              Rejoignez-nous le 26 septembre 2024 à Sophia Antipolis.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-white/40 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="#accueil" className="text-white/60 hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#programme" className="text-white/60 hover:text-white transition-colors">
                  Programme
                </a>
              </li>
              <li>
                <a href="#speakers" className="text-white/60 hover:text-white transition-colors">
                  Speakers
                </a>
              </li>
              <li>
                <a href="#sponsors" className="text-white/60 hover:text-white transition-colors">
                  Partenaires
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-white/40 uppercase tracking-wider text-sm">Ressources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Devenir sponsor
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Presse
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-white/40 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contact@sophiagile.fr" className="text-white/60 hover:text-white transition-colors">
                  contact@sophiagile.fr
                </a>
              </li>
              <li className="text-white/60">
                Sophia Antipolis<br />
                06560 Valbonne<br />
                France
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>
            © 2024 SophiAgile. Tous droits réservés.
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-white transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
