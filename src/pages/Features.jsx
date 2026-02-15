import React from 'react'
import { Shield, Zap, Globe, Lock, Users, CheckCircle, ArrowRight, Database, FileText } from 'lucide-react'

export const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Blockchain Security',
      description: 'Military-grade cryptographic security ensures your certificates are tamper-proof and permanently verifiable on the blockchain.',
      benefits: ['Immutable records', 'Cryptographic protection', 'Decentralized storage']
    },
    {
      icon: Zap,
      title: 'Instant Verification',
      description: 'Verify any certificate in seconds using QR codes, blockchain hashes, or unique certificate IDs.',
      benefits: ['Real-time verification', 'Multiple verification methods', 'Mobile-friendly QR codes']
    },
    {
      icon: Globe,
      title: 'Global Recognition',
      description: 'Accepted by institutions and employers worldwide with seamless integration into existing systems.',
      benefits: ['Worldwide acceptance', 'Easy integration', 'Standardized format']
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'Your data is encrypted and decentralized. Only you control who can access your certificate information.',
      benefits: ['End-to-end encryption', 'User-controlled access', 'GDPR compliant']
    },
    {
      icon: Users,
      title: 'Multi-Role Support',
      description: 'Comprehensive platform supporting students, institutions, and administrators with role-based access control.',
      benefits: ['Role-based permissions', 'Separate dashboards', 'Custom workflows']
    },
    {
      icon: Database,
      title: 'Smart Analytics',
      description: 'Advanced analytics and reporting for institutions to track certificate issuance and verification trends.',
      benefits: ['Real-time analytics', 'Custom reports', 'Trend analysis']
    }
  ]

  const capabilities = [
    { name: 'Certificate Issuance', description: 'Create and issue digital certificates instantly' },
    { name: 'Batch Processing', description: 'Process multiple certificates at once' },
    { name: 'Template Library', description: 'Professional certificate templates' },
    { name: 'Custom Branding', description: 'Add your institution\'s branding' },
    { name: 'Email Notifications', description: 'Automated email alerts' },
    { name: 'API Access', description: 'RESTful API for integration' },
    { name: 'Mobile App', description: 'Native mobile applications' },
    { name: 'Export Options', description: 'Multiple export formats' },
    { name: 'Audit Trail', description: 'Complete audit logs' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 via-cyber-purple/20 to-cyber-pink/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="cyber-gradient-text">Powerful Features</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Everything you need to manage, verify, and share academic certificates with confidence and security.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card group hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyber-blue flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold cyber-gradient-text mb-4">Platform Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive tools and features designed for modern certificate management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="cyber-card hover:border-cyber-blue/50 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cyber-blue/20 rounded-full flex items-center justify-center">
                    <FileText className="w-4 h-4 text-cyber-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{capability.name}</h4>
                    <p className="text-sm text-gray-400">{capability.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cyber-card text-center p-12">
            <Shield className="w-16 h-16 text-cyber-blue mx-auto mb-6" />
            <h2 className="text-3xl font-bold cyber-gradient-text mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the future of certificate management with EduBlockchain's powerful features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/login" className="cyber-button text-lg px-8 py-4">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="/how-it-works" className="glass text-lg px-8 py-4 hover:bg-white/20 transition-all duration-300">
                Learn How It Works
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
