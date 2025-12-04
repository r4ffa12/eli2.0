import { motion } from "framer-motion";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile-hero.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="gradient-hero min-h-screen pt-24 pb-16 flex items-center">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-6"
            >
              Psicologia & ABA
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance"
            >
              Desenvolvimento humano com{" "}
              <span className="gradient-text">ciência e afeto</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl"
            >
              Ajudo crianças e famílias a construírem autonomia e qualidade de
              vida através da Análise do Comportamento Aplicada.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" onClick={() => scrollToSection("#contato")}>
                Agende uma consulta
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#sobre")}
              >
                Saiba mais
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 relative flex justify-center"
          >
            <div className="relative">
              {/* Decorative blob */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-primary/20 shape-blob" />

          {/* Main image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={profileImage}
                  alt="Psicóloga Elivania"
                  className="w-full max-w-md object-cover"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 bg-card rounded-2xl p-4 shadow-lg border border-border z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">CRP</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">03/33280</p>
                    <p className="text-xs text-muted-foreground">Registro Ativo</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
