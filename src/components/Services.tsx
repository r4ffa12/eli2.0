import { motion } from "framer-motion";
import { Puzzle, Users, GraduationCap, ClipboardList } from "lucide-react";

const services = [
  {
    icon: Puzzle,
    title: "Terapia ABA",
    description:
      "Intervenção intensiva para desenvolver habilidades sociais, comunicativas e reduzir barreiras de aprendizado em crianças.",
  },
  {
    icon: Users,
    title: "Orientação Parental",
    description:
      "Treinamento prático para pais e cuidadores lidarem com desafios comportamentais no dia a dia.",
  },
  {
    icon: GraduationCap,
    title: "Consultoria Escolar",
    description:
      "Suporte para escolas na criação de planos de ensino individualizados (PEI) e estratégias de inclusão.",
  },
  {
    icon: ClipboardList,
    title: "Avaliação",
    description:
      "Análise funcional do comportamento para identificar as causas e traçar o melhor plano terapêutico.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase mb-4">
            Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Como posso ajudar?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Intervenções personalizadas para cada necessidade.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl p-8 border border-border card-hover">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
