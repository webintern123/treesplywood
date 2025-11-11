import { Award, Shield, Leaf, CheckCircle } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      icon: Award,
      name: 'ISO 9001:2015',
      description: 'Quality Management',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Shield,
      name: 'ISO 14001',
      description: 'Environmental Management',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Leaf,
      name: 'FSC Certified',
      description: 'Sustainable Forestry',
      color: 'from-trees-primary to-trees-secondary',
    },
    {
      icon: CheckCircle,
      name: 'BIS Approved',
      description: 'Bureau of Indian Standards',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section className="glass-strong rounded-xl p-10">
      <div className="text-center mb-8">
        <h3 className="text-trees-primary text-2xl font-semibold mb-2">
          Certifications & Standards
        </h3>
        <p className="text-gray-600">
          Committed to quality, safety, and environmental responsibility
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
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
