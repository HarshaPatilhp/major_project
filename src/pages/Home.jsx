import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, Users, FileText, CheckCircle, Upload, ArrowRight, BookOpen, Building, Lock, Zap, Globe } from 'lucide-react'

export const Home = () => {
  const stats = [
    { label: 'Total Certificates', value: '1,247', icon: FileText },
    { label: 'Verified Records', value: '1,156', icon: CheckCircle },
    { label: 'Blockchain Status', value: 'Active', icon: Shield },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 via-cyber-purple/20 to-cyber-pink/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="cyber-gradient-text">Secure Academic Records with Blockchain Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionizing certificate verification and management through decentralized blockchain technology. 
              Secure, transparent, and tamper-proof academic credentials for the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login" className="cyber-button text-lg px-8 py-4">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/about" className="glass text-lg px-8 py-4 hover:bg-white/20 transition-all duration-300">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Login Cards Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Institution Login Card */}
            <div className="cyber-card group hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Institution Login</h3>
                <p className="text-gray-400 mb-6">
                  Access your institution dashboard to issue and manage certificates
                </p>
                <Link to="/login" className="cyber-button w-full">
                  Login as Institution
                </Link>
              </div>
            </div>

            {/* Student Login Card */}
            <div className="cyber-card group hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyber-purple to-cyber-pink rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Student Login</h3>
                <p className="text-gray-400 mb-6">
                  View and manage your certificates, share with employers
                </p>
                <Link to="/login" className="cyber-button w-full">
                  Login as Student
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="cyber-card text-center">
                <stat.icon className="w-12 h-12 text-cyber-blue mx-auto mb-4" />
                <div className="text-3xl font-bold cyber-gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Buttons Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold cyber-gradient-text mb-4">Quick Actions</h2>
            <p className="text-xl text-gray-300">
              Get started with certificate management and verification
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Upload Document Card */}
            <div className="cyber-card group hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <Upload className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Upload Document</h3>
                <p className="text-gray-400 mb-6">
                  Upload and verify your academic documents securely
                </p>
                <Link to="/public-verification" className="cyber-button w-full">
                  Upload Now
                </Link>
              </div>
            </div>

            {/* Verify Certificate Card */}
            <div className="cyber-card group hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyber-purple to-cyber-pink rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Verify Certificate</h3>
                <p className="text-gray-400 mb-6">
                  Instantly verify the authenticity of any certificate
                </p>
                <Link to="/public-verification" className="cyber-button w-full">
                  Verify Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold cyber-gradient-text mb-4">Why Choose EduBlockchain?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the next generation of certificate management with cutting-edge blockchain technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cyber-card hover:scale-105 transition-transform duration-300">
              <Lock className="w-12 h-12 text-cyber-blue mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Unbreakable Security</h3>
              <p className="text-gray-400">Military-grade cryptographic security ensures your certificates are tamper-proof and permanently verifiable.</p>
            </div>
            
            <div className="cyber-card hover:scale-105 transition-transform duration-300">
              <Zap className="w-12 h-12 text-cyber-purple mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
              <p className="text-gray-400">Verify any certificate in seconds using QR codes, blockchain hashes, or unique certificate IDs.</p>
            </div>
            
            <div className="cyber-card hover:scale-105 transition-transform duration-300">
              <Globe className="w-12 h-12 text-cyber-pink mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Global Recognition</h3>
              <p className="text-gray-400">Accepted by institutions and employers worldwide with seamless integration into existing systems.</p>
            </div>
            
            <div className="cyber-card hover:scale-105 transition-transform duration-300">
              <Users className="w-12 h-12 text-cyber-blue mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">User Friendly</h3>
              <p className="text-gray-400">Intuitive interface designed for students, institutions, and employers with minimal technical knowledge required.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
