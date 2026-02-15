import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Shield, 
  Users, 
  Award, 
  Globe,
  CheckCircle,
  ArrowRight,
  Target,
  Zap,
  Lock,
  BarChart3,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github
} from 'lucide-react'

export const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Blockchain Security',
      description: 'Military-grade cryptographic security ensures certificates are tamper-proof and permanently verifiable.',
    },
    {
      icon: Zap,
      title: 'Instant Verification',
      description: 'Verify any certificate in seconds using QR codes, blockchain hashes, or unique certificate IDs.',
    },
    {
      icon: Globe,
      title: 'Global Recognition',
      description: 'Accepted by institutions and employers worldwide with seamless integration into existing systems.',
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'Your data is encrypted and decentralized. Only you control who can access your certificate information.',
    },
  ]

  const stats = [
    { label: 'Certificates Secured', value: '500K+', icon: Award },
    { label: 'Institutions', value: '1,000+', icon: Users },
    { label: 'Countries', value: '50+', icon: Globe },
    { label: 'Verification Success', value: '99.9%', icon: CheckCircle },
  ]

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Blockchain expert with 10+ years in fintech and academic technology.',
      image: 'SC',
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Full-stack developer specializing in distributed systems and cryptography.',
      image: 'MR',
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Product',
      bio: 'Product visionary focused on user experience and educational technology.',
      image: 'EJ',
    },
    {
      name: 'David Kim',
      role: 'Lead Engineer',
      bio: 'Blockchain developer with expertise in smart contracts and DeFi.',
      image: 'DK',
    },
  ]

  const faqs = [
    {
      question: 'How does blockchain verification work?',
      answer: 'Each certificate is cryptographically hashed and stored on the blockchain, creating an immutable record. Anyone can verify the certificate\'s authenticity by checking its hash against the blockchain record.',
    },
    {
      question: 'Is my personal data secure?',
      answer: 'Yes. We use advanced encryption and decentralized storage. Your personal information is never stored on the blockchain - only the certificate hash and verification data.',
    },
    {
      question: 'How do institutions get started?',
      answer: 'Institutions can sign up for our platform, complete verification, and start issuing certificates within minutes. We provide comprehensive onboarding and support.',
    },
    {
      question: 'What if I lose access to my certificates?',
      answer: 'Your certificates are permanently stored on the blockchain. You can always regain access through your institutional email or blockchain wallet recovery process.',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 via-cyber-purple/20 to-cyber-pink/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="cyber-gradient-text">About CertChain</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionizing academic credential verification with blockchain technology. 
              We're building a future where certificates are secure, verifiable, and universally trusted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/public-verification" className="cyber-button text-lg px-8 py-4">
                Try Verification
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/login" className="glass text-lg px-8 py-4 hover:bg-white/20 transition-all duration-300">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="cyber-card text-center">
                <stat.icon className="w-8 h-8 text-cyber-blue mx-auto mb-4" />
                <div className="text-3xl font-bold cyber-gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cyber-card text-center p-12">
            <Target className="w-16 h-16 text-cyber-blue mx-auto mb-6" />
            <h2 className="text-3xl font-bold cyber-gradient-text mb-4">Our Mission</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              To eliminate certificate fraud and streamline academic credential verification worldwide. 
              We believe that academic achievements should be easily verifiable, universally recognized, 
              and securely stored for life.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold cyber-gradient-text mb-4">Why Choose CertChain?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the next generation of certificate management with cutting-edge blockchain technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card hover:scale-105 transition-transform duration-300">
                <feature.icon className="w-12 h-12 text-cyber-blue mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold cyber-gradient-text mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate professionals dedicated to revolutionizing academic credential verification.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="cyber-card text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{member.image}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-cyber-blue mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold cyber-gradient-text mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">
              Common questions about CertChain and blockchain verification
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="cyber-card">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cyber-card">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold cyber-gradient-text mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-300">
                Have questions? We'd love to hear from you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Mail className="w-8 h-8 text-cyber-blue mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-400">support@certchain.io</p>
              </div>
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyber-blue mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-cyber-blue mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Office</h3>
                <p className="text-gray-400">San Francisco, CA</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="p-3 rounded-lg glass hover:bg-white/20 transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 rounded-lg glass hover:bg-white/20 transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 rounded-lg glass hover:bg-white/20 transition-all duration-300">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
