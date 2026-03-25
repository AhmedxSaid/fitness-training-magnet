'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Menu, 
  X, 
  MessageCircle, 
  Check, 
  ChevronLeft,
  Clock,
  Zap
} from 'lucide-react'
import { Button } from '@/components/ui/button'

// WhatsApp number
const WHATSAPP_NUMBER = "21624140724"
const WHATSAPP_MESSAGE = "مرحبا بيك في Challenge 7 أيام 🔥\n\nالتحدي هذا مجاني 100%\nو الهدف متاعو: تنقص شوية وزن و تولّي consistent\n\nأنا باش نكون معاك كل يوم خطوة بخطوة\n\n📌 أول حاجة:\nقداش طولك و وزنك توّا ؟"

// Navbar Component
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full px-4 sm:px-6 py-4 flex items-center justify-between"
    >
      {/* Title */}
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-[#111]">Challenge <span className="text-[#ff6b2c]">7 أيام</span></span>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-2 text-gray-600 hover:text-[#111] md:hidden"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Desktop CTA */}
      <div className="hidden md:block">
        <Button
          onClick={() => {
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank')
          }}
          className="bg-[#25D366] hover:bg-[#22c55e] text-white font-bold px-6 py-2.5 rounded-xl transition-all duration-200 hover:scale-105"
        >
          إبدا التحدي
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-4 shadow-lg rounded-b-3xl z-40"
        >
          <Button
            onClick={() => {
              setIsMenuOpen(false)
              window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank')
            }}
            className="w-full bg-[#25D366] hover:bg-[#22c55e] text-white font-bold py-3 rounded-xl"
          >
            إبدا التحدي
          </Button>
        </motion.div>
      )}
    </motion.nav>
  )
}

// Hero Section with Before/After
function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="px-4 sm:px-6 pt-4 pb-6 text-center"
    >
      {/* Before/After Pictures - FIRST THING THEY SEE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center gap-4 sm:gap-8 mb-6"
      >
        {/* Before */}
        <div className="relative">
          <div className="w-32 h-44 sm:w-40 sm:h-56 lg:w-48 lg:h-64 rounded-2xl overflow-hidden">
            <img src="/before.jpg" className="w-full h-full object-cover object-top" alt="قبل" />
          </div>
          <div className="absolute bottom-2 left-2 bg-gray-800/80 backdrop-blur px-2 py-0.5 rounded text-xs font-bold text-white">
            قبل
          </div>
        </div>

        {/* After */}
        <div className="relative">
          <div className="w-32 h-44 sm:w-40 sm:h-56 lg:w-48 lg:h-64 rounded-2xl overflow-hidden ring-2 ring-[#ff6b2c]">
            <img src="/after.jpg" className="w-full h-full object-cover object-top" alt="بعد" />
          </div>
          <div className="absolute bottom-2 right-2 bg-[#ff6b2c] px-2 py-0.5 rounded text-xs font-bold text-white">
            بعد
          </div>
        </div>
      </motion.div>

      {/* Urgency Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="inline-flex items-center gap-2 bg-[#ff6b2c]/10 text-[#ff6b2c] px-4 py-2 rounded-full text-sm font-medium mb-4"
      >
        <Zap className="w-4 h-4" />
        Challenge مجاني 🇹🇳
      </motion.div>
    </motion.section>
  )
}

// Main Hook Section - The Core Copy
function HookSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-10 px-4 text-center"
    >
      <div className="max-w-lg mx-auto">
        
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl font-bold text-[#111] leading-relaxed mb-3"
        >
          ديما تبدا و تبطل؟
        </motion.h1>

        {/* Curiosity */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-500 mb-6"
        >
          المشكلة موش فيك
        </motion.p>

        {/* Solution */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl sm:text-2xl font-bold text-[#111] mb-1"
        >
          Challenge 7 أيام مجاني
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-lg text-gray-600 mb-8"
        >
          تنقص 1–2kg و تولّي consistent 💪
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            onClick={() => {
              window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank')
            }}
            className="h-16 px-10 bg-[#25D366] hover:bg-[#22c55e] text-white font-bold rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg shadow-[#25D366]/30 flex items-center justify-center gap-3 text-xl mx-auto"
          >
            <MessageCircle className="w-6 h-6" />
            إبدا التحدي توّا
          </Button>
        </motion.div>

        {/* Trust Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm text-gray-400 mt-4"
        >
          مجاني 100%
        </motion.p>

      </div>
    </motion.section>
  )
}

// What You Get - Bullets
function WhatYouGetSection() {
  const items = [
    "✅ Workouts ساهلين (10–30 min)",
    "✅ Programme واضح: تعمل هذا و برك",
    "✅ Guidance كل يوم على WhatsApp",
    "✅ Tips بسيطة على الماكلة (تونسي)",
    "✅ تحس الفرق من أول 3 أيام",
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-10 px-4 bg-gray-50"
    >
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-xl font-bold text-[#111] mb-6">
          شنو باش تاخو:
        </h2>
        
        <div className="space-y-3">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-4 shadow-sm text-right"
            >
              <span className="text-gray-700 font-medium">{item}</span>
            </motion.div>
          ))}
        </div>

        {/* Second CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <Button
            onClick={() => {
              window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank')
            }}
            className="h-14 px-8 bg-[#25D366] hover:bg-[#22c55e] text-white font-bold rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg shadow-[#25D366]/30 flex items-center justify-center gap-2 text-lg mx-auto"
          >
            <MessageCircle className="w-5 h-5" />
            إبدا التحدي توّا
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}

// How It Works
function HowItWorksSection() {
  const steps = [
    { step: 1, text: "اضغط و ابعت على WhatsApp" },
    { step: 2, text: "قولي طولك و وزنك" },
    { step: 3, text: "استقبل برنامجك" },
    { step: 4, text: "ابدا تتبع" },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-10 px-4"
    >
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-xl font-bold text-[#111] mb-2">
          كيفاش تشرك؟
        </h2>
        <p className="text-gray-500 mb-6">
          أقل من دقيقة
        </p>
        
        <div className="space-y-3">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 bg-gray-50 rounded-xl p-4"
            >
              <div className="w-10 h-10 rounded-full bg-[#ff6b2c] text-white font-bold flex items-center justify-center flex-shrink-0">
                {item.step}
              </div>
              <span className="text-gray-700 font-medium text-right flex-1">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

// Final CTA
function FinalCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-12 px-4 bg-gradient-to-b from-white to-[#25D366]/5"
    >
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#111] mb-4">
          لو تتبع هذا لمدة 7 أيام…
        </h2>
        
        <div className="space-y-2 mb-6">
          <p className="flex items-center justify-center gap-2 text-lg">
            <Check className="w-5 h-5 text-[#22c55e]" />
            <span>حتشعر أخف</span>
          </p>
          <p className="flex items-center justify-center gap-2 text-lg">
            <Check className="w-5 h-5 text-[#22c55e]" />
            <span>حتشوف أحسن</span>
          </p>
          <p className="flex items-center justify-center gap-2 text-lg">
            <Check className="w-5 h-5 text-[#22c55e]" />
            <span>حتبغى تكمل</span>
          </p>
        </div>

        <Button
          onClick={() => {
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank')
          }}
          className="w-full sm:w-auto h-16 px-10 bg-[#25D366] hover:bg-[#22c55e] text-white font-bold rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg shadow-[#25D366]/30 flex items-center justify-center gap-3 text-xl mx-auto"
        >
          <MessageCircle className="w-6 h-6" />
          إبدا التحدي توّا (مجاني)
        </Button>

        <p className="mt-4 flex items-center justify-center gap-2 text-sm text-[#ff6b2c] font-medium">
          <Clock className="w-4 h-4" />
          <span>مجموعة جديدة كل أسبوع</span>
        </p>
      </div>
    </motion.section>
  )
}

// FAQ
function FAQSection() {
  const faqs = [
    { q: "لازم صالة؟", a: "لا. كل شي تقدر تعملو في الدار." },
    { q: "لازم مكملات؟", a: "لا. هذا على أكل حقيقي." },
    { q: "كان مبتدئ؟", a: "ممتاز. هذا مصنوع للمبتدئين." },
    { q: "بالفعل مجاني؟", a: "نعم. فقط شارك وابدا." },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-10 px-4 bg-gray-50"
    >
      <div className="max-w-md mx-auto">
        <h2 className="text-xl font-bold text-[#111] text-center mb-6">
          أسئلة متكررة
        </h2>
        
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.details
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm"
            >
              <summary className="p-4 cursor-pointer font-medium text-[#111] flex items-center justify-between">
                <span>{faq.q}</span>
                <ChevronLeft className="w-5 h-5 text-gray-400" />
              </summary>
              <div className="px-4 pb-4 text-gray-600 text-right">
                {faq.a}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

// WhatsApp Sticky Button
function WhatsAppSticky() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg shadow-[#25D366]/30 hover:scale-105 transition-transform"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="font-bold hidden sm:inline">إبدا التحدي</span>
    </motion.a>
  )
}

// Main Page Component
export default function FitnessLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Container */}
      <div className="max-w-5xl mx-auto">
        {/* Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white"
        >
          {/* Navbar */}
          <Navbar />

          {/* Hero Section - Before/After + Badge */}
          <HeroSection />
          
          {/* Main Hook */}
          <HookSection />
        </motion.div>

        {/* What You Get */}
        <WhatYouGetSection />
        
        {/* How It Works */}
        <HowItWorksSection />
        
        {/* Final CTA */}
        <FinalCTA />
        
        {/* FAQ */}
        <FAQSection />

        {/* Footer */}
        <footer className="text-center py-6 text-sm text-gray-400 border-t border-gray-100">
          <p>© 2024 Challenge 7 أيام 🇹🇳</p>
        </footer>
      </div>

      {/* WhatsApp Sticky Button */}
      <WhatsAppSticky />
    </div>
  )
}
