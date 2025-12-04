import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "O trabalho da Elivânia transformou nossa dinâmica familiar. A evolução do nosso filho tem sido incrível, e hoje nos sentimos muito mais preparados.",
    author: "Família S.",
    role: "Mãe de paciente",
  },
  {
    quote:
      "Recomendo a Elivânia para quem busca um acompanhamento sério e humanizado. Ela tem um olhar clínico diferenciado e resultados notáveis.",
    author: "Josuer e Maria",
    role: "Pais dedicados",
  },
  {
    quote:
      "Profissionalismo e carinho definem. A terapia ABA mudou a qualidade de vida de toda a nossa casa. Meu filho progride a cada sessão.",
    author: "Ana Lúcia",
    role: "Responsável",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="depoimentos" className="section-padding bg-amber-light">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            O que dizem as famílias
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-3xl p-8 md:p-12 shadow-md"
              >
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-primary/20 mb-6" />

                {/* Quote Text */}
                <p className="text-lg md:text-xl text-foreground italic leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {testimonials[currentIndex].author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
