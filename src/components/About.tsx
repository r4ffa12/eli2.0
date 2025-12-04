import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import aboutImage from "@/assets/about-therapy.jpg";

const credentials = [
  "Especialista em ABA (PUC-GO)",
  "Certificação PCM (Crisis Management)",
  "Pós-graduanda em Neuropsicologia",
];

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-card">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={aboutImage}
                alt="Elivania em atendimento"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-2xl" />

            {/* CRP Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 md:bottom-8 md:right-auto md:-left-6 bg-card rounded-xl p-5 shadow-lg border-l-4 border-primary"
            >
              <span className="block text-primary font-bold text-lg">CRP</span>
              <span className="text-muted-foreground text-sm">03/33280</span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase mb-4">
              Sobre Mim
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Acolhimento guiado pela ciência
            </h2>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Sou psicóloga formada pela UNINOVE e Pós-graduada em Análise do
                Comportamento Aplicada (ABA) pela PUC-GO. Atualmente, aprofundo
                meus conhecimentos na pós-graduação em Neuropsicologia.
              </p>
              <p>
                Minha missão é clara: tornar a ciência do comportamento acessível
                e transformadora. Trabalho de forma colaborativa com famílias e
                escolas, acreditando que cada pequeno progresso é uma grande
                vitória.
              </p>
            </div>

            {/* Credentials */}
            <ul className="space-y-4">
              {credentials.map((credential, index) => (
                <motion.li
                  key={credential}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{credential}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
