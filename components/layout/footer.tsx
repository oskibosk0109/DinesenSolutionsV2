import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Dinesen Solutions
            </h3>
            <p className="text-sm">
              Skræddersyede IT-løsninger bygget med moderne teknologi og AI.
              Hurtigere, smartere og mere omkostningseffektivt end traditionelle udviklingshuse.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Hurtige links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/om-os"
                  className="text-sm hover:text-white transition-colors"
                >
                  Om os
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-sm hover:text-white transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+4512345678"
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <Phone size={16} />
                  +45 12 34 56 78
                </a>
              </li>
              <li>
                <a
                  href="mailto:kontakt@dinesensolutions.dk"
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <Mail size={16} />
                  kontakt@dinesensolutions.dk
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <MapPin size={16} />
                København, Danmark
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Dinesen Solutions. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  );
}