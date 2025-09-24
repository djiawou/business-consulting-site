
import { BrainCircuit, IterationCw } from 'lucide-react';

const expertiseAreas = [
  {
    icon: <BrainCircuit className="w-16 h-16 text-primary icon-glow" />,
    title: 'Strategic Advice',
    description: 'We provide actionable, data-driven strategies to navigate market complexities and seize growth opportunities.',
  },
  {
    icon: <IterationCw className="w-16 h-16 text-primary icon-glow" />,
    title: 'Digital Transformation',
    description: 'Our experts guide you through every step of digitalization, from process automation to customer experience.',
  },
  {
    icon: (
      <div className="w-16 h-16 flex items-center justify-center icon-glow">
        <svg
          className="w-14 h-14 text-primary"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M85 15H15C11.6863 15 9 17.6863 9 21V79C9 82.3137 11.6863 85 15 85H85C88.3137 85 91 82.3137 91 79V21C91 17.6863 88.3137 15 85 15Z"
            stroke="currentColor"
            strokeWidth="5"
          />
          <path
            d="M28.4 67.4V46.72L36.16 32.6H47.44L55.24 46.72V67.4H47.08V51.28L46.48 48.94H37.12L36.52 51.28V67.4H28.4ZM60.295 67.4V32.6H68.455V67.4H60.295Z"
            fill="currentColor"
          />
        </svg>
      </div>
    ),
    title: 'SAP Support',
    description: 'Maximize your SAP investment with our comprehensive support, implementation, and optimization services.',
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold text-primary">Our Core Expertise</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Leveraging deep industry knowledge to deliver unparalleled results in key business domains.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {expertiseAreas.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-6 rounded-lg transition-all">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold font-headline mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
