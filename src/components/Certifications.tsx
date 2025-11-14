import { Award, Shield, Leaf, CheckCircle } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      icon: Award,
      name: ' IS:10701',
      description: 'Structural Grade',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Shield,
      name: 'ISO Certified',
      description: 'Quality Management',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Leaf,
      name: 'E0/E1',
      description: 'Zero Emission  ',
      color: 'from-trees-primary to-trees-secondary',
    },
    {
      icon: CheckCircle,
      name: 'FSC',
      description: 'Eco-Friendly',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section className="glass-strong rounded-xl p-10">
      <div className="text-center mb-8">
        <h3 className="text-trees-primary text-2xl font-semibold mb-2">
          Certified Excellence
        </h3>
        <p className="text-gray-600">
          Recognized certifications ensuring quality and sustainability
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <div 
            key={index}
            className="bg-white/90 backdrop-blur-lg border border-gray-200 rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 group"

          >
            <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${cert.color} rounded-full mb-4 group-hover:scale-110 transition-transform`}>
              <cert.icon className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-semibold text-trees-secondary mb-1">{cert.name}</h4>
            <p className="text-xs text-gray-600">{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
