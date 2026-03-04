import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

export function Header() {
  return (
    <header className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20 px-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
            <GraduationCap className="w-16 h-16" />
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-4 tracking-tight"
        >
          ESCUELA EMPRESARIAL
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
        >
          Explora nuestros cursos y regístrate fácilmente
        </motion.p>
      </div>
    </header>
  );
}
