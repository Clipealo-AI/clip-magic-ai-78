import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-6">
              🔜 Muy pronto
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              <span className="gradient-text">Precios</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Estamos preparando los planes de Clipealo. Los precios se anunciarán muy pronto.
              Únete a la lista de espera para ser el primero en enterarte.
            </p>
            <motion.a
              href="/"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-3 bg-foreground text-background rounded-full font-semibold hover:bg-foreground/90 transition-colors"
            >
              Volver al inicio
            </motion.a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
