import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a 
                  href="https://wa.me/573005711969" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  +57 300 5711969
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a 
                  href="mailto:gustavo.prada@ccibague.org"
                  className="hover:text-blue-400 transition-colors"
                >
                  gustavo.prada@ccibague.org
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Ibagué, Colombia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  className="hover:text-blue-400 transition-colors"
                >
                  Nuestro Impacto
                </a>
              </li>
              <li>
                <a 
                  href="#belleza" 
                  className="hover:text-blue-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('belleza')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  E.E. BELLEZA
                </a>
              </li>
              <li>
                <a 
                  href="#gastronomia" 
                  className="hover:text-blue-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('gastronomia')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  E.E. GASTRONOMÍA
                </a>
              </li>
              <li>
                <a 
                  href="#autopartes" 
                  className="hover:text-blue-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('autopartes')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  E.E. AUTOPARTES
                </a>
              </li>
              <li>
                <a 
                  href="#diseno" 
                  className="hover:text-blue-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('diseno')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  E.E. DISEÑO-MANUALIDADES
                </a>
              </li>
              <li>
                <a 
                  href="#aliados" 
                  className="hover:text-blue-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('aliados')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Aliados Estratégicos
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://www.facebook.com/ccdeibague"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/camaracomercioibague/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-full hover:from-purple-700 hover:to-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/ccdeibague"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Síguenos en nuestras redes sociales para estar al día con nuestros cursos y eventos.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; 2026 Cámara de Comercio de Ibagué. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}