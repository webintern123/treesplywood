import React from 'react';
import { PageHero } from '../components/PageHero';
import { GridContainer } from '../components/layout/GridContainer';
import { AdvancedCard } from '../components/design-system/AdvancedCard';
import { AnimatedStats } from '../components/design-system/AnimatedStats';
import { ParallaxSection } from '../components/design-system/ParallaxSection';
import { MagneticButton } from '../components/design-system/MagneticButton';
import { ModernButton } from '../components/design-system/ModernButton';
import { Leaf, TreePine, Recycle, Award, Heart, Sun, Droplet, Shield, Download, Package } from 'lucide-react';
import { motion } from 'motion/react';

// NEW (correct)
const sustainabilityStats = [
  { value: '100', label: 'FSC Certified', suffix: '%', icon: Award },
  { value: '50000', label: 'Trees Planted', suffix: '+', icon: TreePine },
  { value: '75', label: 'Waste Recycled', suffix: '%', icon: Recycle },
  { value: '30', label: 'Carbon Reduced', suffix: '%', icon: Leaf }
];


const initiatives = [
  {
    icon: TreePine,
    title: 'Sustainable Forestry',
    description: 'We source 100% of our timber from FSC-certified sustainable forests, ensuring responsible forest management and biodiversity conservation.',
    stats: '50,000+ trees planted annually',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: Recycle,
    title: 'Zero Waste Manufacturing',
    description: 'Our advanced manufacturing process recycles 75% of production waste into bio-fuel and composite materials, minimizing environmental impact.',
    stats: '500 tons of waste recycled yearly',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: Sun,
    title: 'Renewable Energy',
    description: 'Solar panels power 40% of our manufacturing facilities, reducing carbon emissions and promoting clean energy usage.',
    stats: '2000 kWh solar energy daily',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    icon: Droplet,
    title: 'Water Conservation',
    description: 'Closed-loop water recycling systems reduce water consumption by 60%, with advanced treatment ensuring zero discharge of pollutants.',
    stats: '10 million liters saved annually',
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: Shield,
    title: 'Non-Toxic Adhesives',
    description: 'We use eco-friendly, low-emission adhesives that are formaldehyde-free, ensuring safe indoor air quality for your family.',
    stats: 'E0 & E1 emission standards',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    icon: Heart,
    title: 'Community Development',
    description: 'Supporting local communities through fair employment, education programs, and sustainable livelihood initiatives.',
    stats: '2000+ families supported',
    color: 'from-red-500 to-pink-600'
  }
];

const certifications = [
  {
    name: 'FSC Certification',
    description: 'Forest Stewardship Council certified sustainable sourcing',
    year: '2015'
  },
  {
    name: 'ISO 14001',
    description: 'Environmental Management System certification',
    year: '2016'
  },
  {
    name: 'Green Pro',
    description: 'CII GreenPro certified eco-friendly products',
    year: '2018'
  },
  {
    name: 'LEED Contributor',
    description: 'Products contribute to LEED certification points',
    year: '2019'
  }
];

const timeline = [
  { year: '2015', milestone: 'Started FSC certification program' },
  { year: '2017', milestone: 'Installed first solar power system' },
  { year: '2019', milestone: 'Achieved zero liquid discharge' },
  { year: '2021', milestone: 'Launched tree plantation drive' },
  { year: '2023', milestone: 'Carbon neutral manufacturing' },
  { year: '2025', milestone: 'Target 100% renewable energy' }
];

interface SustainabilityPageProps {
  onNavigate: (page: string) => void;
}

export default function SustainabilityPage({ onNavigate }: SustainabilityPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PageHero
        title="Our Commitment to Sustainability"
        subtitle="Building a greener future through responsible forestry, eco-friendly manufacturing, and environmental stewardship"
        image="https://images.unsplash.com/photo-1598962277067-f13ebd6cfdca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJpbGl0eSUyMGZvcmVzdCUyMGdyZWVufGVufDF8fHx8MTc2MjIzNjAwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        badge="Sustainability"
      />

      {/* Stats Section */}
      <GridContainer className="py-20">
        <div className="col-span-12">
          <AnimatedStats stats={sustainabilityStats} />
        </div>
      </GridContainer>

      {/* Vision Section */}
      <ParallaxSection>
        <GridContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-8 lg:col-start-3 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6">
              <Leaf className="w-4 h-4 text-green-600" />
              <span className="text-sm text-green-700">Our Green Vision</span>
            </div>
            <h2 className="text-4xl mb-6 text-trees-secondary">
              Crafting Quality While Caring for Our Planet
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Trees Plywood, sustainability isn't just a buzzword—it's woven into every fiber of our products. 
              From responsibly sourced timber to eco-friendly manufacturing, we're committed to creating beautiful, 
              durable plywood while preserving forests for future generations.
            </p>
          </motion.div>
        </GridContainer>
      </ParallaxSection>

      {/* Initiatives Grid */}
      <GridContainer className="py-20">
        <div className="col-span-12 mb-12">
          <h2 className="text-3xl text-center text-trees-secondary mb-4">Our Green Initiatives</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Comprehensive sustainability programs across our entire value chain
          </p>
        </div>

        {initiatives.map((initiative, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="col-span-12 md:col-span-6 lg:col-span-4"
          >
            <AdvancedCard variant="glass" hoverEffect="3d" className="h-full p-6">

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${initiative.color} flex items-center justify-center mb-6`}>
                <initiative.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-trees-secondary">{initiative.title}</h3>
              <p className="text-gray-600 mb-4">{initiative.description}</p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-trees-primary">{initiative.stats}</p>
              </div>
            </AdvancedCard>
          </motion.div>
        ))}
      </GridContainer>

      {/* Certifications */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <GridContainer>
          <div className="col-span-12 mb-12 text-center">
            <h2 className="text-3xl text-trees-secondary mb-4">Environmental Certifications</h2>
            <p className="text-gray-600">Recognized globally for our sustainable practices</p>
          </div>

          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="col-span-12 md:col-span-6 lg:col-span-3"
            >
              <AdvancedCard variant="glass" className="p-6 text-center h-full bg-white/80 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-2 text-trees-secondary">{cert.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{cert.description}</p>
                <span className="text-xs text-green-600 font-semibold">Since {cert.year}</span>
              </AdvancedCard>
            </motion.div>
          ))}
        </GridContainer>
      </div>

      {/* Timeline */}
      <GridContainer className="py-20">
        <div className="col-span-12 mb-12 text-center">
          <h2 className="text-3xl text-trees-secondary mb-4">Our Sustainability Journey</h2>
          <p className="text-gray-600">Milestones in our commitment to the environment</p>
        </div>

        <div className="col-span-12 lg:col-span-10 lg:col-start-2">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-trees-primary to-trees-secondary transform -translate-x-1/2 hidden md:block" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                  <AdvancedCard variant="glass" className="p-6 inline-block">
                    <h4 className="text-2xl mb-2 text-trees-primary">{item.year}</h4>
                    <p className="text-gray-700">{item.milestone}</p>
                  </AdvancedCard>
                </div>
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-trees-primary to-trees-secondary border-4 border-white shadow-lg z-10 hidden md:block" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </GridContainer>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-trees-primary to-trees-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border-4 border-white rounded-full" />
          <div className="absolute bottom-20 right-20 w-80 h-80 border-4 border-white rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold mb-8">
              <TreePine className="w-5 h-5" />
              <span>Sustainable Choice</span>
            </div>
            
            <h2 className="text-white mb-6">
              Join Us in Building a Sustainable Future
            </h2>
            
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Every plywood sheet you choose from Trees contributes to reforestation, 
              renewable energy, and a healthier planet for generations to come.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <MagneticButton strength={0.2}>
                <ModernButton
                  variant="light"
                  size="xl"
                  icon={<Leaf className="w-6 h-6" />}
                  onClick={() => onNavigate('products')}
                >
                  Explore Eco-Friendly Products
                </ModernButton>
              </MagneticButton>
              
              <MagneticButton strength={0.2}>
                <ModernButton
                  variant="outline"
                  size="xl"
                  icon={<Download className="w-6 h-6" />}
                  onClick={() => onNavigate('downloads')}
                  className="border-white text-white hover:bg-white/20"
                >
                  Download Sustainability Report
                </ModernButton>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
