import { 
  Calculator, Ruler, Layers, Package, Download, RotateCcw, Info,
  Target, DollarSign, Clock, TrendingDown, Scale, FileText,
  HelpCircle, ArrowRight, ChevronRight, Star, MessageSquare, Zap
} from 'lucide-react';
import { useState } from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { ModernSectionHeader } from '../components/design-system/ModernSectionHeader';
import { ModernButton } from '../components/design-system/ModernButton';
import { ModernCard } from '../components/design-system/ModernCard';
import { PageHero } from '../components/PageHero';
import { MagneticButton } from '../components/design-system/MagneticButton';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Testimonials } from '../components/Testimonials';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb';
import { motion } from 'motion/react';
import jsPDF from 'jspdf';

// Types
interface CalculationResult {
  totalSheets: number;
  totalArea: number;
  wastageArea: number;
  wastagePercentage: number;
  recommendedSheets: number;
}

interface CalculatorPageProps {
  onNavigate: (page: string) => void;
}

// Standard Sheet Sizes
const standardSizes = [
  { label: "8' × 4' (2440 × 1220 mm)", width: 2440, height: 1220 },
  { label: "7' × 4' (2134 × 1220 mm)", width: 2134, height: 1220 },
  { label: "7' × 3' (2134 × 915 mm)", width: 2134, height: 915 },
  { label: "6' × 4' (1830 × 1220 mm)", width: 1830, height: 1220 },
  { label: "6' × 3' (1830 × 915 mm)", width: 1830, height: 915 },
];

// Thickness Options
const thicknesses = [
  { label: "4 mm", value: 4 },
  { label: "6 mm", value: 6 },
  { label: "8 mm", value: 8 },
  { label: "12 mm", value: 12 },
  { label: "15 mm", value: 15 },
  { label: "18 mm", value: 18 },
  { label: "19 mm", value: 19 },
  { label: "25 mm", value: 25 },
];

// Plywood Types
const plywoodTypes = [
  { name: "Samrat (Premium)" },
  { name: "Bhima (Marine Grade)" },
  { name: "Ananta (Structural)" },
  { name: "Agni (Fire-Resistant)" },
  { name: "Vajra (Resilient)" },
  { name: "Ujval (Interior)" },
  { name: "Block Board" },
  { name: "Flush Doors" },
];

export function CalculatorPage({ onNavigate }: CalculatorPageProps) {
  const [unit, setUnit] = useState<'mm' | 'feet'>('feet');
  const [sheetSize, setSheetSize] = useState(standardSizes[0]);
  const [customWidth, setCustomWidth] = useState('');
  const [customHeight, setCustomHeight] = useState('');
  const [projectArea, setProjectArea] = useState('');
  const [thickness, setThickness] = useState(thicknesses[3]);
  const [plywoodType, setPlywoodType] = useState(plywoodTypes[0]);
  const [wastageBuffer, setWastageBuffer] = useState(10);
  const [result, setResult] = useState<CalculationResult | null>(null);

  // <-- Move downloadReport HERE
  const downloadReport = () => {
    if (!result) return;

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Plywood Calculator Report', 20, 20);

    doc.setFontSize(12);
    doc.text(`Project Area: ${projectArea} ${unit === 'feet' ? 'sq. ft' : 'sq. m'}`, 20, 40);
    doc.text(`Sheet Size: ${sheetSize.label}`, 20, 50);
    doc.text(`Plywood Type: ${plywoodType.name}`, 20, 60);
    doc.text(`Thickness: ${thickness.label}`, 20, 70);
    doc.text(`Wastage Buffer: ${wastageBuffer}%`, 20, 80);

    doc.text(`Sheets Required (Base): ${result.totalSheets}`, 20, 100);
    doc.text(`Recommended Sheets (with buffer): ${result.recommendedSheets}`, 20, 110);
    doc.text(`Total Coverage: ${result.totalArea.toFixed(2)} ${unit === 'feet' ? 'sq. ft' : 'sq. m'}`, 20, 120);
    doc.text(`Wastage: ${result.wastageArea.toFixed(2)} ${unit === 'feet' ? 'sq. ft' : 'sq. m'} (${result.wastagePercentage.toFixed(1)}%)`, 20, 130);

    doc.save('plywood-calculation-report.pdf');
  };




interface CalculatorPageProps {
  onNavigate: (page: string) => void;
}


  const calculateSheets = () => {
    const areaNeeded = parseFloat(projectArea);
    if (!areaNeeded || areaNeeded <= 0) return;

    const sheetWidth = unit === 'mm' ? sheetSize.width / 1000 : sheetSize.width / 304.8;
    const sheetHeight = unit === 'mm' ? sheetSize.height / 1000 : sheetSize.height / 304.8;
    const sheetArea = sheetWidth * sheetHeight;

    const baseSheets = Math.ceil(areaNeeded / sheetArea);
    const wastageMultiplier = 1 + (wastageBuffer / 100);
    const recommendedSheets = Math.ceil(baseSheets * wastageMultiplier);
    
    const totalArea = recommendedSheets * sheetArea;
    const wastageArea = totalArea - areaNeeded;
    const wastagePercentage = (wastageArea / areaNeeded) * 100;

    setResult({
      totalSheets: baseSheets,
      totalArea,
      wastageArea,
      wastagePercentage,
      recommendedSheets,
    });
  };

  const resetCalculator = () => {
    setProjectArea('');
    setCustomWidth('');
    setCustomHeight('');
    setWastageBuffer(10);
    setResult(null);
  };

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  onClick={() => onNavigate('home')}
                  className="cursor-pointer hover:text-trees-primary transition-colors"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="w-4 h-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-trees-primary font-semibold">
                  Plywood Calculator
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <PageHero
        title="Plywood Calculator"
        subtitle="Estimate What You Need - Quick & Easy"
        description="Figure out exactly how much plywood your project requires with our simple, fast, and accurate calculation tool."
        image="https://images.unsplash.com/photo-1560184984-40825b480203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwd29ya3Nob3AlMjBjYXJwZW50cnl8ZW58MXx8fHwxNzYyMjM0ODMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
        badge="Quick Estimate Tool"
        badgeIcon={Calculator}
        height="sm"
        overlayOpacity="medium"
        stats={[
          { value: 'Accurate', label: 'Results' },
          { value: 'Instant', label: 'Calculations' },
          { value: 'Completely', label: 'Free' },
        ]}
      />

      {/* Why Use Calculator Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <ModernSectionHeader
            badge="Easy & Smarter Planning "
            badgeIcon={Target}
            title="Why Use Our Calculator?"
            subtitle="Plan better, save money, and cut down waste with quick and accurate plywood calculations."
          />
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: 'Accurate Estimates',
                desc: 'Get perfect calculations based on actual sheet sizes and your project dimensions.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: DollarSign,
                title: 'Save Money',
                desc: 'Avoid buying extra material with smart wastage and budgeting suggestions.',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: Clock,
                title: 'Save Time',
                desc: 'Instant results — no need for manual math or complicated spread sheets.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: TrendingDown,
                title: 'Reduce Waste',
                desc: 'Use materials efficiently with helpful buffer recommendations tailored to your project.',
                color: 'from-orange-500 to-orange-600'
              },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ModernCard variant="elevated">
                  <div className="p-6 text-center space-y-4">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                  </div>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageContainer className="space-y-20">

      {/* Calculator Section */}
      <section className="grid lg:grid-cols-3 gap-8">
        {/* Input Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-trees-primary rounded-lg p-2">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-trees-primary">Project Details</h2>
            </div>

            <div className="space-y-6">
              {/* Unit Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Measurement Unit
                </label>
                <div className="flex gap-3">
                  <button
                    onClick={() => setUnit('feet')}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
                      unit === 'feet'
                        ? 'border-trees-primary bg-trees-primary/10 text-trees-primary font-semibold'
                        : 'border-gray-200 text-gray-600 hover:border-trees-primary/50'
                    }`}
                  >
                    Square Feet
                  </button>
                  <button
                    onClick={() => setUnit('mm')}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
                      unit === 'mm'
                        ? 'border-trees-primary bg-trees-primary/10 text-trees-primary font-semibold'
                        : 'border-gray-200 text-gray-600 hover:border-trees-primary/50'
                    }`}
                  >
                    Square Meters
                  </button>
                </div>
              </div>

              {/* Sheet Size */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-trees-primary" />
                  Standard Sheet Size
                </label>
                <select
                  value={standardSizes.findIndex(s => s === sheetSize)}
                  onChange={(e) => setSheetSize(standardSizes[parseInt(e.target.value)])}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-trees-primary focus:border-transparent"
                >
                  {standardSizes.map((size, index) => (
                    <option key={index} value={index}>
                      {size.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Plywood Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-trees-primary" />
                  Plywood Type
                </label>
                <select
                  value={plywoodTypes.findIndex(p => p === plywoodType)}
                  onChange={(e) => setPlywoodType(plywoodTypes[parseInt(e.target.value)])}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-trees-primary focus:border-transparent"
                >
                  {plywoodTypes.map((type, index) => (
                    <option key={index} value={index}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Thickness */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Thickness
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {thicknesses.map((t) => (
                    <button
                      key={t.value}
                      onClick={() => setThickness(t)}
                      className={`py-2 px-3 rounded-lg border-2 transition-all text-sm ${
                        thickness.value === t.value
                          ? 'border-trees-primary bg-trees-primary/10 text-trees-primary font-semibold'
                          : 'border-gray-200 text-gray-600 hover:border-trees-primary/50'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Area */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Package className="w-4 h-4 text-trees-primary" />
                  Total Project Area
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={projectArea}
                    onChange={(e) => setProjectArea(e.target.value)}
                    placeholder={unit === 'feet' ? 'Enter area in sq. ft' : 'Enter area in sq. m'}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-trees-primary focus:border-transparent"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                    {unit === 'feet' ? 'sq. ft' : 'sq. m'}
                  </span>
                </div>
              </div>

              {/* Wastage Buffer */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Wastage Buffer: {wastageBuffer}%
                </label>
                <input
                  type="range"
                  min="5"
                  max="25"
                  step="5"
                  value={wastageBuffer}
                  onChange={(e) => setWastageBuffer(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, var(--trees-primary) 0%, var(--trees-primary) ${(wastageBuffer - 5) / 20 * 100}%, #e5e7eb ${(wastageBuffer - 5) / 20 * 100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>5%</span>
                  <span>15%</span>
                  <span>25%</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <ModernButton
                  variant="primary"
                  size="lg"
                  className="flex-1"
                  icon={<Calculator />}
                  onClick={calculateSheets}
                >
                  Calculate Sheets
                </ModernButton>
                <ModernButton
                  variant="outline"
                  size="lg"
                  icon={<RotateCcw />}
                  onClick={resetCalculator}
                >
                  Reset
                </ModernButton>
              </div>
            </div>
          </div>

          {/* Info Card */}
          <div className="glass-card rounded-xl p-6 bg-blue-50/50">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-blue-900 mb-2">How to Use This Calculator</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Choose your measurement unit (sq. ft or sq. m)</li>
                  <li>• Select the sheet size or enter custom dimensions</li>
                  <li>• Pick the plywood type and thickness</li>
                  <li>• Enter the total area of your project</li>
                  <li>• Adjust the wastage buffer based on how complex your work is</li>
                  <li>• Click “Calculate” to get your sheet estimate.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-trees-primary mb-4">Calculation Results</h3>
              
              {result ? (
                <div className="space-y-4">
                  {/* Sheets Required */}
                  <div className="bg-trees-primary/10 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Sheets Required (Base)</p>
                    <p className="text-3xl font-bold text-trees-primary">{result.totalSheets}</p>
                  </div>

                  {/* Recommended with Wastage */}
                  <div className="bg-trees-secondary/10 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Recommended (with buffer)</p>
                    <p className="text-3xl font-bold text-trees-secondary">{result.recommendedSheets}</p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200 my-4"></div>

                  {/* Details */}
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Total Coverage:</span>
                      <span className="text-sm font-semibold text-gray-800">
                        {result.totalArea.toFixed(2)} {unit === 'feet' ? 'sq. ft' : 'sq. m'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Wastage:</span>
                      <span className="text-sm font-semibold text-gray-800">
                        {result.wastageArea.toFixed(2)} {unit === 'feet' ? 'sq. ft' : 'sq. m'} ({result.wastagePercentage.toFixed(1)}%)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Sheet Size:</span>
                      <span className="text-sm font-semibold text-gray-800">{sheetSize.label}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Thickness:</span>
                      <span className="text-sm font-semibold text-gray-800">{thickness.label}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <ModernButton
  variant="primary"
  size="md"
  className="w-full"
  icon={<Download />}
  onClick={downloadReport} // <-- add this
>
  Download Report
</ModernButton>

                </div>
              ) : (
                <div className="text-center py-12">
                  <Calculator className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-sm">
                    Fill in your project details and hit “Calculate” to view your estimate.
                  </p>
                </div>
              )}
            </div>

            {/* Quick Tips */}
            <div className="glass-card rounded-xl p-6 bg-amber-50/50">
              <h4 className="text-amber-900 mb-3 flex items-center gap-2">
                <Info className="w-4 h-4" />
                Pro Tips
              </h4>
              <ul className="text-xs text-amber-800 space-y-2">
                <li>●	Add 10–15% extra for curves or cutouts</li>
<li>●	Align grain direction for a uniform finish</li>
<li>●	Keep a few spare sheets for touch-ups</li>
<li>●	Confirm stock before placing your order</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Example Projects */}
      <section>
        <ModernSectionHeader
          badge="Examples"
          title="Common Project Requirements"
          subtitle="Use this quick guide to understand typical plywood needs for different spaces."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Kitchen Cabinets', area: '120-150 sq. ft', sheets: '4-5 sheets', type: 'Bhima/Samrat BWP' },
            { name: 'Bedroom Wardrobe', area: '80-100 sq. ft', sheets: '3-4 sheets', type: 'Ujval Interior' },
            { name: 'False Ceiling', area: '200-250 sq. ft', sheets: '7-8 sheets', type: 'Ujval IS:303' },
            { name: 'TV Unit', area: '40-50 sq. ft', sheets: '2 sheets', type: 'Samrat Premium' },
            { name: 'Study Table', area: '25-30 sq. ft', sheets: '1 sheet', type: 'Ujval Interior' },
            { name: 'Full Room Interior', area: '400-500 sq. ft', sheets: '15-18 sheets', type: 'Ananta/Samrat' },
          ].map((project, index) => (
            <div key={index} className="glass-card rounded-xl p-6 hover:shadow-xl transition-all">
              <h4 className="text-trees-primary mb-3">{project.name}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Typical Area:</span>
                  <span className="font-medium text-gray-800">{project.area}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sheets Needed:</span>
                  <span className="font-medium text-gray-800">{project.sheets}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Recommended:</span>
                  <span className="font-medium text-gray-800">{project.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Tools Section */}
      <section>
        <ModernSectionHeader
          badge="More Tools"
          badgeIcon={Calculator}
          title="Explore Related Tools"
          subtitle="Use these helpful tools to plan your project with confidence."
        />

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <ModernCard variant="elevated" className="cursor-pointer" onClick={() => onNavigate('comparison')}>
              <div className="p-8 text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-trees-primary/10 flex items-center justify-center">
                  <Scale className="w-10 h-10 text-trees-primary" />
                </div>
                <h4>Product Comparison</h4>
                <p className="text-gray-600">
                  Compare features, specs, and warranties to find plywood of your choice.
                </p>
                <ModernButton variant="outline" icon={<ArrowRight className="w-4 h-4" />} fullWidth>
                  Compare Products
                </ModernButton>
              </div>
            </ModernCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -8 }}
          >
            <ModernCard variant="elevated" className="cursor-pointer" onClick={() => onNavigate('sample-request')}>
              <div className="p-8 text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-trees-primary/10 flex items-center justify-center">
                  <Package className="w-10 h-10 text-trees-primary" />
                </div>
                <h4>Request Samples</h4>
                <p className="text-gray-600">
                  Order free samples and feel the quality yourself before making a choice.
                </p>
                <ModernButton variant="outline" icon={<ArrowRight className="w-4 h-4" />} fullWidth>
                  Request Samples
                </ModernButton>
              </div>
            </ModernCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -8 }}
          >
            <ModernCard variant="elevated" className="cursor-pointer" onClick={() => onNavigate('downloads')}>
              <div className="p-8 text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-trees-primary/10 flex items-center justify-center">
                  <FileText className="w-10 h-10 text-trees-primary" />
                </div>
                <h4>Downloads Center</h4>
                <p className="text-gray-600">
                  Browse catalogs, technical sheets, and installation guides—all in one place.
                </p>
                <ModernButton variant="outline" icon={<Download className="w-4 h-4" />} fullWidth>
                  Browse Downloads
                </ModernButton>
              </div>
            </ModernCard>
          </motion.div>
        </div>
      </section>
    </PageContainer>

    

    {/* Calculator FAQ Section */}
    <section className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <ModernSectionHeader
          badge="Got Questions?"
          badgeIcon={HelpCircle}
          title="Calculator FAQs"
          subtitle="Common questions about using our plywood calculator"
        />

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="accuracy" className="bg-white border border-gray-200 rounded-2xl px-6">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                How accurate is the calculator?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
               ●	The calculator gives results close to real project needs based on standard sheet sizes (8'×4', 7'×4', etc.) and common wastage patterns.<br></br>
●	You can expect 95–98% accuracy for most projects.<br></br>
●	For complex designs or unusual cuts, add a 15–20% buffer.

              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="wastage" className="bg-white border border-gray-200 rounded-2xl px-6">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                What wastage percentage should I use?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                <ul className="space-y-2 mt-2">
                  <li><strong>5-10%:</strong> Simple straight-cut work (shelves, basic furniture)</li>
                  <li><strong>10-15%:</strong> Standard projects (cabinets, wardrobes, room interiors)</li>
                  <li><strong>15-20%:</strong> Detailed designs (curves, patterns, grain matching)</li>
                  <li><strong>20-25%:</strong> Complex or commercial work with tight accuracy requirements</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="save" className="bg-white border border-gray-200 rounded-2xl px-6">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                Can I save my calculations?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                You can download a PDF report using the “Download Report” button.
 Saving multiple calculations is coming soon.
 For now, you can also take a screenshot or print the page.

              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="custom" className="bg-white border border-gray-200 rounded-2xl px-6">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                Can I use custom sheet sizes?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes. You can enter custom sheet dimensions if your project needs them.
 Standard sizes are recommended to reduce wastage, but custom sizes are possible—just check availability with our team

              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="thickness" className="bg-white border border-gray-200 rounded-2xl px-6">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-trees-primary">
                Does thickness change the number of sheets needed?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                No. Thickness doesn’t affect the sheet count for covering an area.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Need more help with calculations?</p>
            <ModernButton
              variant="outline"
              size="lg"
              icon={<MessageSquare className="w-5 h-5" />}
              onClick={() => onNavigate('contact')}
            >
              Contact Our Experts
            </ModernButton>
          </div>
        </div>
      </div>
    </section>

    {/* Related Tools */}
    <section className="section-padding">
      <PageContainer>
        <ModernSectionHeader
          badge="More Tools"
          badgeIcon={Zap}
          title="Explore Other Tools"
          subtitle="Use our complete suite of tools to plan and execute your plywood projects"
        />

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ModernCard variant="elevated" className="p-8 h-full group cursor-pointer hover:shadow-2xl transition-all duration-300" onClick={() => onNavigate('comparison')}>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-trees-secondary mb-2 group-hover:text-trees-primary transition-colors">Product Comparison</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Compare features, specs, and warranties side-by-side to find the plywood that fits your needs.
                  </p>
                  <div className="flex items-center gap-2 text-trees-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>Compare Products</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </ModernCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ModernCard variant="elevated" className="p-8 h-full group cursor-pointer hover:shadow-2xl transition-all duration-300" onClick={() => onNavigate('sample-request')}>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-trees-secondary mb-2 group-hover:text-trees-primary transition-colors">Request Samples</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Order free samples and feel the quality yourself before making a choice.
                  </p>
                  <div className="flex items-center gap-2 text-trees-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>Request Samples</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </ModernCard>
          </motion.div>
        </div>
      </PageContainer>
    </section>

    {/* CTA Section */}
    <section className="section-padding bg-gradient-to-br from-trees-primary to-trees-secondary relative overflow-hidden">
      

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Get expert advice, quality products, and professional support for all your plywood needs
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <MagneticButton strength={0.2}>
              <ModernButton
                variant="light"
                size="xl"
                icon={<ArrowRight className="w-6 h-6" />}
                onClick={() => onNavigate('contact')}
              >
                Contact Our Experts
              </ModernButton>
            </MagneticButton>
            <ModernButton
              variant="outline"
              size="xl"
              icon={<Package className="w-6 h-6" />}
              onClick={() => onNavigate('products')}
              className="border-white text-white hover:bg-white/20"
            >
              Browse Products
            </ModernButton>
          </div>
        </motion.div>
      </div>
    </section>
    </div>
  );
}
