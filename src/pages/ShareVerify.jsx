import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import QRCode from 'qrcode'
import { 
  QrCode, 
  Share2, 
  Copy, 
  Download, 
  Link2,
  CheckCircle,
  Globe,
  Lock,
  Eye,
  EyeOff,
  Calendar,
  Settings,
  Smartphone,
  Mail
} from 'lucide-react'

export const ShareVerify = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [qrCodeUrl, setQrCodeUrl] = useState('')
  const [publicLink, setPublicLink] = useState('')
  const [shareSettings, setShareSettings] = useState({
    requirePassword: false,
    password: '',
    expiresAt: '',
    allowDownload: true,
    viewCount: 0,
    maxViews: 100,
  })
  const [copied, setCopied] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const certificates = [
    {
      id: 1,
      title: 'Bachelor of Computer Science',
      issuer: 'Tech University',
      date: '2024-01-15',
      status: 'verified',
      hash: '0x7f9a8b3c4d5e6f1a2b3c4d5e6f7a8b9c',
    },
    {
      id: 2,
      title: 'Web Development Certification',
      issuer: 'Code Academy',
      date: '2024-01-10',
      status: 'verified',
      hash: '0x8b7f9a3c4d5e6f1a2b3c4d5e6f7a8b9c',
    },
    {
      id: 3,
      title: 'Data Science Specialization',
      issuer: 'Tech University',
      date: '2024-01-05',
      status: 'verified',
      hash: '0x9c8b7f3a4d5e6f1a2b3c4d5e6f7a8b9c',
    },
  ]

  useEffect(() => {
    if (selectedCertificate) {
      generateQRCode()
      generatePublicLink()
    }
  }, [selectedCertificate])

  const generateQRCode = async () => {
    if (!selectedCertificate) return
    
    const verificationUrl = `https://EduBlockchain.io/verify/${selectedCertificate.hash}`
    try {
      const url = await QRCode.toDataURL(verificationUrl, {
        width: 300,
        margin: 2,
        color: {
          dark: '#00d4ff',
          light: '#0a0a0f',
        },
      })
      setQrCodeUrl(url)
    } catch (err) {
      console.error('Error generating QR code:', err)
    }
  }

  const generatePublicLink = () => {
    if (!selectedCertificate) return
    
    const link = `https://EduBlockchain.io/public/${selectedCertificate.hash}`
    setPublicLink(link)
  }

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(''), 2000)
  }

  const downloadQRCode = () => {
    const link = document.createElement('a')
    link.download = `certificate-${selectedCertificate.id}-qrcode.png`
    link.href = qrCodeUrl
    link.click()
  }

  const shareViaEmail = () => {
    const subject = 'Certificate Verification - ' + selectedCertificate.title
    const body = `Please verify my certificate using the following link:\n\n${publicLink}\n\nOr scan the QR code attached.\n\nThank you!`
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const updateShareSetting = (key, value) => {
    setShareSettings(prev => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-darker via-gray-900 to-cyber-darker">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230099ff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyber-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyber-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-pink/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,153,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,153,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyber-blue/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold cyber-gradient-text mb-2">Share & Verify</h1>
        <p className="text-gray-400">
          Generate QR codes and shareable links for instant certificate verification
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Certificate Selection */}
        <div className="lg:col-span-1">
          <div className="cyber-card">
            <h3 className="text-lg font-semibold text-white mb-4">Select Certificate</h3>
            <div className="space-y-3">
              {certificates.map((cert) => (
                <button
                  key={cert.id}
                  onClick={() => setSelectedCertificate(cert)}
                  className={`w-full p-4 rounded-lg border transition-all duration-300 text-left ${
                    selectedCertificate?.id === cert.id
                      ? 'border-cyber-blue bg-cyber-blue/10'
                      : 'border-gray-600 hover:border-gray-500 glass-dark'
                  }`}
                >
                  <h4 className="font-medium text-white mb-1">{cert.title}</h4>
                  <p className="text-sm text-gray-400 mb-2">{cert.issuer}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{cert.date}</span>
                    <span className="flex items-center space-x-1 text-xs text-green-400">
                      <CheckCircle className="w-3 h-3" />
                      <span>Verified</span>
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Share Settings */}
          {selectedCertificate && (
            <div className="cyber-card mt-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Settings className="w-5 h-5" />
                <span>Share Settings</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="flex items-center space-x-2 text-sm text-gray-300">
                    <input
                      type="checkbox"
                      checked={shareSettings.requirePassword}
                      onChange={(e) => updateShareSetting('requirePassword', e.target.checked)}
                      className="rounded border-gray-600 bg-cyber-dark text-cyber-blue focus:ring-cyber-blue"
                    />
                    <span>Require Password</span>
                  </label>
                  {shareSettings.requirePassword && (
                    <div className="mt-2 relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={shareSettings.password}
                        onChange={(e) => updateShareSetting('password', e.target.value)}
                        placeholder="Enter password"
                        className="cyber-input pr-10 w-full"
                      />
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  )}
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-sm text-gray-300">
                    <input
                      type="checkbox"
                      checked={shareSettings.allowDownload}
                      onChange={(e) => updateShareSetting('allowDownload', e.target.checked)}
                      className="rounded border-gray-600 bg-cyber-dark text-cyber-blue focus:ring-cyber-blue"
                    />
                    <span>Allow Download</span>
                  </label>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">Expires At</label>
                  <input
                    type="date"
                    value={shareSettings.expiresAt}
                    onChange={(e) => updateShareSetting('expiresAt', e.target.value)}
                    className="cyber-input w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">Max Views</label>
                  <input
                    type="number"
                    value={shareSettings.maxViews}
                    onChange={(e) => updateShareSetting('maxViews', parseInt(e.target.value))}
                    className="cyber-input w-full"
                    min="1"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* QR Code and Sharing Options */}
        <div className="lg:col-span-2">
          {selectedCertificate ? (
            <div className="space-y-6">
              {/* QR Code */}
              <div className="cyber-card">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                  <QrCode className="w-5 h-5" />
                  <span>QR Code</span>
                </h3>
                <div className="flex flex-col items-center">
                  {qrCodeUrl ? (
                    <>
                      <div className="p-4 bg-white rounded-lg mb-4">
                        <img src={qrCodeUrl} alt="Certificate QR Code" className="w-64 h-64" />
                      </div>
                      <div className="flex space-x-4">
                        <button
                          onClick={downloadQRCode}
                          className="cyber-button flex items-center space-x-2"
                        >
                          <Download className="w-4 h-4" />
                          <span>Download QR</span>
                        </button>
                        <button
                          onClick={() => copyToClipboard(qrCodeUrl, 'qr')}
                          className="glass flex items-center space-x-2 px-4 py-2 hover:bg-white/20 transition-all duration-300"
                        >
                          <Copy className="w-4 h-4" />
                          <span>{copied === 'qr' ? 'Copied!' : 'Copy Image'}</span>
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <QrCode className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                      <p className="text-gray-400">Generating QR code...</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Public Link */}
              <div className="cyber-card">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                  <Link2 className="w-5 h-5" />
                  <span>Public Link</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={publicLink}
                      readOnly
                      className="cyber-input flex-1"
                    />
                    <button
                      onClick={() => copyToClipboard(publicLink, 'link')}
                      className="glass p-3 hover:bg-white/20 transition-all duration-300"
                    >
                      {copied === 'link' ? <CheckCircle className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={shareViaEmail}
                      className="glass flex items-center space-x-2 px-4 py-2 hover:bg-white/20 transition-all duration-300"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Share via Email</span>
                    </button>
                    <button className="glass flex items-center space-x-2 px-4 py-2 hover:bg-white/20 transition-all duration-300">
                      <Smartphone className="w-4 h-4" />
                      <span>Share via SMS</span>
                    </button>
                    <button className="glass flex items-center space-x-2 px-4 py-2 hover:bg-white/20 transition-all duration-300">
                      <Globe className="w-4 h-4" />
                      <span>Social Media</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Preview */}
              <div className="cyber-card">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                  <Eye className="w-5 h-5" />
                  <span>Preview</span>
                </h3>
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">TC</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Tech University</h4>
                      <p className="text-sm text-gray-400">Verified Institution</p>
                    </div>
                  </div>
                  <h5 className="font-medium text-white mb-2">{selectedCertificate.title}</h5>
                  <p className="text-sm text-gray-400 mb-3">Issued on {selectedCertificate.date}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                    <span className="text-xs text-gray-500">Certificate Hash:</span>
                    <span className="text-xs font-mono text-cyber-blue">
                      {selectedCertificate.hash.slice(0, 20)}...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="cyber-card">
              <div className="text-center py-12">
                <QrCode className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No Certificate Selected</h3>
                <p className="text-gray-400">
                  Select a certificate from the list to generate QR codes and shareable links
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  )
}
