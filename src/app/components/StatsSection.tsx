import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { TrendingUp, Users, Award, Calendar } from 'lucide-react';

interface StatCardProps {
  value: number;
  label: string;
  delay?: number;
  icon?: React.ReactNode;
  highlight?: boolean;
}

function StatCard({ value, label, delay = 0, icon, highlight = false }: StatCardProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={`relative overflow-hidden rounded-2xl p-8 ${
        highlight
          ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white shadow-2xl'
          : 'bg-white text-gray-800 shadow-lg'
      } hover:shadow-2xl transition-shadow duration-300`}
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 opacity-10">
        <div className="w-32 h-32 bg-white rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative">
        {icon && (
          <div className={`mb-4 ${highlight ? 'text-blue-200' : 'text-blue-600'}`}>
            {icon}
          </div>
        )}
        
        <div className="text-5xl md:text-6xl font-bold mb-2">
          {count.toLocaleString()}
        </div>
        
        <div className={`text-lg font-medium ${highlight ? 'text-blue-100' : 'text-gray-600'}`}>
          {label}
        </div>
      </div>
    </motion.div>
  );
}

interface PeriodBarProps {
  period: string;
  value: number;
  maxValue: number;
  delay: number;
}

function PeriodBar({ period, value, maxValue, delay }: PeriodBarProps) {
  const percentage = (value / maxValue) * 100;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-semibold text-gray-800">{period}</span>
        <span className="text-2xl font-bold text-blue-600">{value}</span>
      </div>
      
      <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ delay: delay + 0.3, duration: 1, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function StatsSection() {
  const periods = [
    { period: '2024 - A', value: 127 },
    { period: '2024 - B', value: 244 },
    { period: '2025 - A', value: 130 },
    { period: '2025 - B', value: 86 },
  ];

  const maxValue = Math.max(...periods.map(p => p.value));
  const totalGraduates = 587;

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-2 rounded-full font-medium mb-4">
            <TrendingUp className="w-5 h-5" />
            <span>Nuestro Impacto</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Datos Históricos
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transformando vidas a través de la educación empresarial
          </p>
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <StatCard
            value={totalGraduates}
            label="Total Graduados"
            delay={0.1}
            icon={<Award className="w-12 h-12" />}
            highlight={true}
          />
          
          <StatCard
            value={371}
            label="Graduados 2024"
            delay={0.2}
            icon={<Users className="w-12 h-12" />}
          />
          
          <StatCard
            value={216}
            label="Graduados 2025"
            delay={0.3}
            icon={<Calendar className="w-12 h-12" />}
          />
        </div>   

        {/* Fun Fact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-6 py-3 rounded-full font-medium shadow-md">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span>¡Más de 500 profesionales capacitados en los últimos 2 años!</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
