import React from 'react'
import { Shield, Upload, CheckCircle, ArrowRight, Users, Building, FileText, Zap, Lock, Globe, QrCode, Search } from 'lucide-react'

export const HowItWorks = () => {
  const steps = [
    {
      step: '1',
      title: 'Institution Issues Certificate',
      description: 'Educational institutions create and issue digital certificates directly to students through our secure platform.',
      icon: Building,
      details: [
        'Create professional certificate templates',
        'Add student information and achievements',
        'Sign with institutional digital signature',
        'Issue directly to student blockchain wallet'
      ]
    },
    {
      step: '2',
      title: 'Stored on Blockchain',
      description: 'Each certificate is cryptographically secured and immutably stored on the blockchain network.',
      icon: Shield,
      details: [
        'Cryptographic hash generation',
        'Immutable blockchain recording',
        'Decentralized verification',
        'Tamper-proof security guarantee'
      ]
    },
    {
      step: '3',
      title: 'Student Manages Portfolio',
      description: 'Students receive and manage their certificates in their personal digital portfolio.',
      icon: Users,
      details: [
        'Personal certificate dashboard',
        'Organize by category or date',
        'Download PDF copies',
        'Share with employers or institutions'
      ]
    },
    {
      step: '4',
      title: 'Instant Verification',
      description: 'Anyone can instantly verify certificate authenticity using multiple verification methods.',
      icon: CheckCircle,
      details: [
        'QR code scanning',
        'Certificate ID search',
        'Blockchain hash verification',
        'Real-time validation results'
      ]
    }
  ]

  const verificationMethods = [
    {
      icon: QrCode,
      title: 'QR Code Verification',
      description: 'Scan the QR code on any certificate to instantly verify its authenticity.',
      process: ['Open camera app', 'Scan QR code', 'View verification results', 'Download verification report']
    },
    {
      icon: Search,
      title: 'Certificate ID Search',
      description: 'Enter the unique certificate ID to verify details directly on our platform.',
      process: ['Visit verification page', 'Enter certificate ID', 'View certificate details', 'Confirm authenticity']
    },
    {
      icon: FileText,
      title: 'Document Upload',
      description: 'Upload a certificate PDF or image to verify its blockchain record.',
      process: ['Upload certificate file', 'System extracts data', 'Blockchain verification', 'Instant results']
    }
  ]

  const benefits = [
    { icon: Lock, title: 'Enhanced Security', description: 'Military-grade encryption protects certificate data from unauthorized access.' },
    { icon: Zap, title: 'Lightning Fast', description: 'Verify certificates in seconds, not days or weeks like traditional methods.' },
    { icon: Globe, title: 'Global Access', description: 'Access and verify certificates from anywhere in the world, 24/7.' },
    { icon: Shield, title: 'Fraud Prevention', description: 'Eliminate certificate fraud with immutable blockchain records.' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 via-cyber-purple/20 to-cyber-pink/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="cyber-gradient-text">How It Works</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A simple, secure, and transparent process for issuing, managing, and verifying academic certificates on the blockchain.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold cyber-gradient-text mb-4">The Process</h2>
            <p className="text-xl text-gray-300">
              Four simple steps to secure certificate management
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="cyber-card h-full">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <step.icon className="w-12 h-12 text-cyber-blue mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 mb-4">{step.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyber-blue flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-cyber-blue" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold cyber-gradient-text mb-4">Verification Methods</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple ways to verify certificate authenticity instantly
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {verificationMethods.map((method, index) => (
              <div key={index} className="cyber-card hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{method.title}</h3>
                  <p className="text-gray-400 mb-6">{method.description}</p>
                </div>
                <div className="space-y-3">
                  {method.process.map((processStep, processIndex) => (
                    <div key={processIndex} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-cyber-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs text-cyber-blue font-semibold">{processIndex + 1}</span>
                      </div>
                      <span className="text-sm text-gray-300">{processStep}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold cyber-gradient-text mb-4">Why Choose EduBlockchain?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of blockchain-powered certificate management
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card text-center hover:scale-105 transition-all duration-300">
                <benefit.icon className="w-12 h-12 text-cyber-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cyber-card text-center p-12">
            <Upload className="w-16 h-16 text-cyber-blue mx-auto mb-6" />
            <h2 className="text-3xl font-bold cyber-gradient-text mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of institutions already using EduBlockchain for secure certificate management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/login" className="cyber-button text-lg px-8 py-4">
                Sign Up Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="/features" className="glass text-lg px-8 py-4 hover:bg-white/20 transition-all duration-300">
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
