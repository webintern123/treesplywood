import React from 'react';
import { PageHero } from '../components/PageHero';
import { GridContainer } from '../components/layout/GridContainer';
import { AdvancedCard } from '../components/design-system/AdvancedCard';
import { AnimatedProcess } from '../components/design-system/AnimatedProcess';
import { AnimatedStats } from '../components/design-system/AnimatedStats';
import { CheckCircle, Award, Microscope, Shield, ThumbsUp, FileCheck, Factory, TestTube } from 'lucide-react';
import { motion } from 'motion/react';

const qualityStats = [
  { value: '20', label: 'Quality Tests', suffix: '+', icon: TestTube },
  { value: '99.8', label: 'Pass Rate', suffix: '%', icon: CheckCircle },
  { value: '15', label: 'Years Experience', suffix: '+', icon: Award },
  { value: '100', label: 'Satisfaction', suffix: '%', icon: ThumbsUp }
];


const qualityProcess = [
  { number: '1', title: 'Raw Material Selection', description: 'Only premium grade timber from certified sustainable forests', icon: () => <span>🌲</span> },
  { number: '2', title: 'Laboratory Testing', description: 'Advanced testing for strength, moisture, and adhesive quality', icon: () => <span>🔬</span> },
  { number: '3', title: 'Manufacturing Control', description: 'Automated quality checks at every production stage', icon: () => <span>⚙️</span> },
  { number: '4', title: 'Final Inspection', description: 'Rigorous visual and mechanical inspection before dispatch', icon: () => <span>✓</span> }
];


const testingStandards = [
  {
    icon: Microscope,
    title: 'Adhesive Bond Strength',
    tests: ['Boiling Water Test (6 hours)', 'Cyclic Boiling Test', 'Shear Strength Test'],
    standard: 'IS 303, IS 710'
  },
  {
    icon: Shield,
    title: 'Moisture Resistance',
    tests: ['Water Immersion Test', 'Steam Test', 'Humidity Resistance'],
    standard: 'IS 303'
  },
  {
    icon: TestTube,
    title: 'Physical Properties',
    tests: ['Density Test', 'Dimensional Stability', 'Surface Quality Check'],
    standard: 'IS 1734'
  },
  {
    icon: FileCheck,
    title: 'Formaldehyde Emission',
    tests: ['E0 & E1 Compliance', 'Indoor Air Quality', 'VOC Testing'],
    standard: 'CARB Phase 2'
  },
  {
    icon: Award,
    title: 'Fire Resistance',
    tests: ['Flame Spread Test', 'Smoke Generation', 'Surface Burning'],
    standard: 'IS 5509'
  },
  {
    icon: Factory,
    title: 'Termite Resistance',
    tests: ['Termite Attack Test', 'Borer Resistance', 'Fungal Resistance'],
    standard: 'IS 4833'
  }
];

const certifications = [
  { name: 'IS 303', description: 'Plywood (General Purpose)' },
  { name: 'IS 710', description: 'Marine Plywood' },
  { name: 'IS 2202', description: 'Block Board' },
  { name: 'IS 5509', description: 'Fire Retardant Plywood' },
  { name: 'IS 707', description: 'Decorative Veneers' },
  { name: 'ISO 9001', description: 'Quality Management' },
  { name: 'CARB P2', description: 'Formaldehyde Compliance' },
  { name: 'FSC', description: 'Sustainable Sourcing' }
];

const labEquipment = [
  { name: 'Universal Testing Machine', purpose: 'Strength & load testing' },
  { name: 'Moisture Meter', purpose: 'Moisture content analysis' },
  { name: 'Boiling Tank', purpose: 'Water resistance testing' },
  { name: 'Emission Chamber', purpose: 'Formaldehyde testing' },
  { name: 'Microscope', purpose: 'Surface & glue line inspection' },
  { name: 'Climate Chamber', purpose: 'Environmental testing' }
];

interface QualityPageProps {
  onNavigate: (page: string) => void;
}

export default function QualityPage({ onNavigate }: QualityPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PageHero
        title="Quality Assurance & Testing"
        subtitle="Uncompromising quality standards backed by advanced testing facilities and international certifications"
        image="https://images.unsplash.com/photo-1599583863916-e06c29087f51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwY29udHJvbCUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzYyMTQ4NjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        badge="Quality First"
      />

      {/* Stats */}
      {/* Stats */}
<GridContainer className="py-20">
  <div className="col-span-12">
    <div className="flex flex-wrap justify-between items-center text-center gap-6">
      {qualityStats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex-1 min-w-[120px]"
        >
          <div className="text-4xl md:text-5xl font-bold text-trees-secondary">
            {stat.value}{stat.suffix}
          </div>
          <div className="text-sm md:text-base text-gray-600 mt-2">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</GridContainer>


      {/* Quality Process */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-20">
        <GridContainer>
          <div className="col-span-12 mb-12 text-center">
            <h2 className="text-3xl text-trees-secondary mb-4">Our Quality Control Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every sheet undergoes rigorous quality checks at multiple stages
            </p>
          </div>
          <div className="col-span-12">
            <AnimatedProcess steps={qualityProcess} />
          </div>
        </GridContainer>
      </div>

      {/* Testing Standards */}
      {/* Testing Standards */}
<GridContainer className="py-20">
  <div className="col-span-12 mb-12 text-center">
    <h2 className="text-3xl text-trees-secondary mb-4">Comprehensive Testing Standards</h2>
    <p className="text-gray-600">Over 20 quality tests performed on every batch</p>
  </div>

  {/* Fixed 3×2 Grid */}
  <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    {testingStandards.map((test, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="w-full"
      >
       <AdvancedCard
  variant="glass"
  hoverEffect="3d"
  className="h-full p-6 bg-white rounded-2xl shadow-md"
>
  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-trees-primary to-trees-secondary flex items-center justify-center mb-4">
    <test.icon className="w-7 h-7 text-white" />
  </div>

  <h3 className="text-xl mb-3 text-trees-secondary">{test.title}</h3>

  <ul className="space-y-2 mb-4">
    {test.tests.map((testItem, i) => (
      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
        {testItem}
      </li>
    ))}
  </ul>

  <div className="pt-4 border-t border-gray-200">
    <p className="text-xs text-trees-primary font-semibold">
      Standard: {test.standard}
    </p>
  </div>
</AdvancedCard>
      </motion.div>
    ))}

  </div>
</GridContainer>

      {/* Certifications Grid */}
      {/* Certifications Grid */}
<div className="bg-gradient-to-br from-trees-primary/5 to-trees-secondary/5 py-20">
  <GridContainer>
    <div className="col-span-12 mb-12 text-center">
      <h2 className="text-3xl text-trees-secondary mb-4">Certifications & Compliance</h2>
      <p className="text-gray-600">Meeting and exceeding international quality standards</p>
    </div>

    {/* 4 cards on top, 4 cards bottom → fixed 4x2 layout */}
    <div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="w-full"
        >
          <AdvancedCard
            variant="glass"
            className="p-6 text-center h-full bg-white shadow-md rounded-2xl"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-white" />
            </div>

            <h4 className="mb-1 text-trees-secondary text-lg font-semibold">
              {cert.name}
            </h4>

            <p className="text-xs text-gray-600">{cert.description}</p>
          </AdvancedCard>
        </motion.div>
      ))}

    </div>
  </GridContainer>
</div>


      {/* Laboratory Equipment */}
      <GridContainer className="py-20">
        <div className="col-span-12 lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl mb-6 text-trees-secondary">State-of-the-Art Testing Lab</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Our in-house laboratory is equipped with advanced testing equipment operated by certified 
              quality technicians, ensuring every product meets the highest standards.
            </p>
            <div className="space-y-4">
              {labEquipment.map((equipment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-trees-primary to-trees-secondary flex items-center justify-center flex-shrink-0">
                    <Microscope className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-trees-secondary mb-1">{equipment.name}</h4>
                    <p className="text-sm text-gray-600">{equipment.purpose}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-6"
        >
          
        </motion.div>
      </GridContainer>

      {/* Factory Tour CTA */}
      {/* Factory Tour CTA */}
<div className="bg-gradient-to-br from-gray-50 to-white py-20">
  <GridContainer>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="col-span-12 text-center"
    >
      <Factory className="w-16 h-16 text-trees-primary mx-auto mb-6" />
      <h2 className="text-3xl mb-4 text-trees-secondary">See Quality in Action</h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
        Schedule a factory tour to witness our quality control process firsthand. 
        See how we test and certify every sheet of plywood.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => onNavigate('contact')}
          className="px-8 py-4 bg-gradient-to-r from-trees-primary to-trees-secondary text-white rounded-xl hover:shadow-lg transition-all"
        >
          Schedule Factory Visit
        </button>
        <button
          onClick={() => onNavigate('sample-request')}
          className="px-8 py-4 bg-white border-2 border-trees-primary text-trees-primary rounded-xl hover:bg-gray-50 transition-all"
        >
          Request Test Samples
        </button>
      </div>
    </motion.div>
  </GridContainer>
</div>

    </div>
  );
}
