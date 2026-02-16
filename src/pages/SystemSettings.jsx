import React, { useState } from 'react'
import { 
  Settings, 
  Save, 
  RotateCcw, 
  Download, 
  Upload, 
  Shield, 
  Database, 
  Globe, 
  Bell, 
  Mail, 
  Lock, 
  Users, 
  FileText, 
  CheckCircle, 
  AlertTriangle,
  Zap,
  Clock,
  BarChart3,
  Key,
  Eye,
  EyeOff
} from 'lucide-react'

export const SystemSettings = () => {
  const [activeTab, setActiveTab] = useState('general')
  const [isSaving, setIsSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState('')

  const [generalSettings, setGeneralSettings] = useState({
    systemName: 'EduBlockchain',
    systemEmail: 'admin@edublockchain.com',
    systemUrl: 'https://edublockchain.com',
    timezone: 'UTC',
    language: 'English',
    maxFileSize: '10MB',
    sessionTimeout: '30',
    maintenanceMode: false,
    debugMode: false
  })

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    passwordMinLength: '8',
    sessionExpiry: '24',
    maxLoginAttempts: '5',
    lockoutDuration: '15',
    encryptionLevel: 'AES-256',
    apiRateLimit: '1000',
    ipWhitelist: '',
    enableCaptcha: true,
    logRetention: '90'
  })

  const [emailSettings, setEmailSettings] = useState({
    smtpHost: 'smtp.gmail.com',
    smtpPort: '587',
    smtpUsername: 'noreply@edublockchain.com',
    smtpPassword: '••••••••',
    encryption: 'TLS',
    fromName: 'EduBlockchain',
    fromEmail: 'noreply@edublockchain.com',
    emailVerification: true,
    passwordResetEmail: true,
    notificationEmails: true
  })

  const [blockchainSettings, setBlockchainSettings] = useState({
    networkType: 'Ethereum',
    nodeUrl: 'https://mainnet.infura.io/v3/...',
    contractAddress: '0x1234567890123456789012345678901234567890',
    gasLimit: '21000',
    gasPrice: 'auto',
    confirmationBlocks: '12',
    blockExplorer: 'https://etherscan.io',
    walletPrivateKey: '•••••••••••••••••••••••••••••••••••••••••',
    enableTestnet: false
  })

  const tabs = [
    { id: 'general', label: 'General', icon: Settings },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'email', label: 'Email', icon: Mail },
    { id: 'blockchain', label: 'Blockchain', icon: Database },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'backup', label: 'Backup', icon: Download }
  ]

  const handleSave = async () => {
    setIsSaving(true)
    setSaveStatus('')
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      setSaveStatus('success')
      setTimeout(() => setSaveStatus(''), 3000)
    }, 1500)
  }

  const handleReset = () => {
    // Reset to default values
    setSaveStatus('reset')
    setTimeout(() => setSaveStatus(''), 3000)
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
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold cyber-gradient-text mb-2">System Settings</h1>
          <p className="text-gray-400">Configure system parameters and preferences</p>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleReset}
            className="px-4 py-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors flex items-center space-x-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset</span>
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="cyber-button flex items-center space-x-2 disabled:opacity-50"
          >
            {isSaving ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Saving...</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Changes</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Status Messages */}
      {saveStatus === 'success' && (
        <div className="mb-6 p-4 rounded-lg bg-green-400/10 border border-green-400/30">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-green-400">Settings saved successfully!</span>
          </div>
        </div>
      )}

      {saveStatus === 'reset' && (
        <div className="mb-6 p-4 rounded-lg bg-yellow-400/10 border border-yellow-400/30">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400">Settings reset to defaults!</span>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="flex space-x-1 mb-8 border-b border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-3 border-b-2 transition-colors ${
              activeTab === tab.id
                ? 'border-cyber-blue text-cyber-blue'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="cyber-card">
        {/* General Settings */}
        {activeTab === 'general' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6">General Configuration</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">System Name</label>
                <input
                  type="text"
                  value={generalSettings.systemName}
                  onChange={(e) => setGeneralSettings({...generalSettings, systemName: e.target.value})}
                  className="cyber-input w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">System Email</label>
                <input
                  type="email"
                  value={generalSettings.systemEmail}
                  onChange={(e) => setGeneralSettings({...generalSettings, systemEmail: e.target.value})}
                  className="cyber-input w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">System URL</label>
                <input
                  type="url"
                  value={generalSettings.systemUrl}
                  onChange={(e) => setGeneralSettings({...generalSettings, systemUrl: e.target.value})}
                  className="cyber-input w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Timezone</label>
                <select
                  value={generalSettings.timezone}
                  onChange={(e) => setGeneralSettings({...generalSettings, timezone: e.target.value})}
                  className="cyber-input w-full"
                >
                  <option value="UTC">UTC</option>
                  <option value="EST">EST</option>
                  <option value="PST">PST</option>
                  <option value="GMT">GMT</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Language</label>
                <select
                  value={generalSettings.language}
                  onChange={(e) => setGeneralSettings({...generalSettings, language: e.target.value})}
                  className="cyber-input w-full"
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Max File Size</label>
                <select
                  value={generalSettings.maxFileSize}
                  onChange={(e) => setGeneralSettings({...generalSettings, maxFileSize: e.target.value})}
                  className="cyber-input w-full"
                >
                  <option value="5MB">5MB</option>
                  <option value="10MB">10MB</option>
                  <option value="20MB">20MB</option>
                  <option value="50MB">50MB</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Session Timeout (minutes)</label>
                <input
                  type="number"
                  value={generalSettings.sessionTimeout}
                  onChange={(e) => setGeneralSettings({...generalSettings, sessionTimeout: e.target.value})}
                  className="cyber-input w-full"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={generalSettings.maintenanceMode}
                  onChange={(e) => setGeneralSettings({...generalSettings, maintenanceMode: e.target.checked})}
                  className="w-4 h-4 text-cyber-blue bg-gray-700 border-gray-600 rounded focus:ring-cyber-blue"
                />
                <span className="text-gray-300">Enable Maintenance Mode</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={generalSettings.debugMode}
                  onChange={(e) => setGeneralSettings({...generalSettings, debugMode: e.target.checked})}
                  className="w-4 h-4 text-cyber-blue bg-gray-700 border-gray-600 rounded focus:ring-cyber-blue"
                />
                <span className="text-gray-300">Enable Debug Mode</span>
              </label>
            </div>
          </div>
        )}

        {/* Security Settings */}
        {activeTab === 'security' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6">Security Configuration</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Password Min Length</label>
                <input
                  type="number"
                  value={securitySettings.passwordMinLength}
                  onChange={(e) => setSecuritySettings({...securitySettings, passwordMinLength: e.target.value})}
                  className="cyber-input w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Session Expiry (hours)</label>
                <input
                  type="number"
                  value={securitySettings.sessionExpiry}
                  onChange={(e) => setSecuritySettings({...securitySettings, sessionExpiry: e.target.value})}
                  className="cyber-input w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Max Login Attempts</label>
                <input
                  type="number"
                  value={securitySettings.maxLoginAttempts}
                  onChange={(e) => setSecuritySettings({...securitySettings, maxLoginAttempts: e.target.value})}
                  className="cyber-input w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Lockout Duration (minutes)</label>
                <input
                  type="number"
                  value={securitySettings.lockoutDuration}
                  onChange={(e) => setSecuritySettings({...securitySettings, lockoutDuration: e.target.value})}
                  className="cyber-input w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Encryption Level</label>
                <select
                  value={securitySettings.encryptionLevel}
                  onChange={(e) => setSecuritySettings({...securitySettings, encryptionLevel: e.target.value})}
                  className="cyber-input w-full"
                >
                  <option value="AES-128">AES-128</option>
                  <option value="AES-256">AES-256</option>
                  <option value="RSA-2048">RSA-2048</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">API Rate Limit (requests/hour)</label>
                <input
                  type="number"
                  value={securitySettings.apiRateLimit}
                  onChange={(e) => setSecuritySettings({...securitySettings, apiRateLimit: e.target.value})}
                  className="cyber-input w-full"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">IP Whitelist (comma separated)</label>
                <textarea
                  value={securitySettings.ipWhitelist}
                  onChange={(e) => setSecuritySettings({...securitySettings, ipWhitelist: e.target.value})}
                  rows={3}
                  className="cyber-input w-full"
                  placeholder="192.168.1.1, 10.0.0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Log Retention (days)</label>
                <input
                  type="number"
                  value={securitySettings.logRetention}
                  onChange={(e) => setSecuritySettings({...securitySettings, logRetention: e.target.value})}
                  className="cyber-input w-full"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={securitySettings.twoFactorAuth}
                  onChange={(e) => setSecuritySettings({...securitySettings, twoFactorAuth: e.target.checked})}
                  className="w-4 h-4 text-cyber-blue bg-gray-700 border-gray-600 rounded focus:ring-cyber-blue"
                />
                <span className="text-gray-300">Enable Two-Factor Authentication</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={securitySettings.enableCaptcha}
                  onChange={(e) => setSecuritySettings({...securitySettings, enableCaptcha: e.target.checked})}
                  className="w-4 h-4 text-cyber-blue bg-gray-700 border-gray-600 rounded focus:ring-cyber-blue"
                />
                <span className="text-gray-300">Enable CAPTCHA</span>
              </label>
            </div>
          </div>
        )}

        {/* Email Settings */}
        {activeTab === 'email' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6">Email Configuration</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">SMTP Host</label>
                <input
                  type="text"
                  value={emailSettings.smtpHost}
                  onChange={(e) => setEmailSettings({...emailSettings, smtpHost: e.target.value})}
                  className="cyber-input w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">SMTP Port</label>
                <input
                  type="text"
                  value={emailSettings.smtpPort}
                  onChange={(e) => setEmailSettings({...emailSettings, smtpPort: e.target.value})}
                  className="cyber-input w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">SMTP Username</label>
                <input
                  type="text"
                  value={emailSettings.smtpUsername}
                  onChange={(e) => setEmailSettings({...emailSettings, smtpUsername: e.target.value})}
                  className="cyber-input w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">SMTP Password</label>
                <input
                  type="password"
                  value={emailSettings.smtpPassword}
                  onChange={(e) => setEmailSettings({...emailSettings, smtpPassword: e.target.value})}
                  className="cyber-input w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Encryption</label>
                <select
                  value={emailSettings.encryption}
                  onChange={(e) => setEmailSettings({...emailSettings, encryption: e.target.value})}
                  className="cyber-input w-full"
                >
                  <option value="TLS">TLS</option>
                  <option value="SSL">SSL</option>
                  <option value="None">None</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">From Name</label>
                <input
                  type="text"
                  value={emailSettings.fromName}
                  onChange={(e) => setEmailSettings({...emailSettings, fromName: e.target.value})}
                  className="cyber-input w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">From Email</label>
                <input
                  type="email"
                  value={emailSettings.fromEmail}
                  onChange={(e) => setEmailSettings({...emailSettings, fromEmail: e.target.value})}
                  className="cyber-input w-full"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={emailSettings.emailVerification}
                  onChange={(e) => setEmailSettings({...emailSettings, emailVerification: e.target.checked})}
                  className="w-4 h-4 text-cyber-blue bg-gray-700 border-gray-600 rounded focus:ring-cyber-blue"
                />
                <span className="text-gray-300">Send Email Verification</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={emailSettings.passwordResetEmail}
                  onChange={(e) => setEmailSettings({...emailSettings, passwordResetEmail: e.target.checked})}
                  className="w-4 h-4 text-cyber-blue bg-gray-700 border-gray-600 rounded focus:ring-cyber-blue"
                />
                <span className="text-gray-300">Send Password Reset Emails</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={emailSettings.notificationEmails}
                  onChange={(e) => setEmailSettings({...emailSettings, notificationEmails: e.target.checked})}
                  className="w-4 h-4 text-cyber-blue bg-gray-700 border-gray-600 rounded focus:ring-cyber-blue"
                />
                <span className="text-gray-300">Send Notification Emails</span>
              </label>
            </div>

            <div className="mt-6">
              <button className="cyber-button flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Send Test Email</span>
              </button>
            </div>
          </div>
        )}

        {/* Blockchain Settings */}
        {activeTab === 'blockchain' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6">Blockchain Configuration</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Network Type</label>
                <select
                  value={blockchainSettings.networkType}
                  onChange={(e) => setBlockchainSettings({...blockchainSettings, networkType: e.target.value})}
                  className="cyber-input w-full"
                >
                  <option value="Ethereum">Ethereum</option>
                  <option value="Polygon">Polygon</option>
                  <option value="BSC">BSC</option>
                  <option value="Private">Private Network</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Node URL</label>
                <input
                  type="url"
                  value={blockchainSettings.nodeUrl}
                  onChange={(e) => setBlockchainSettings({...blockchainSettings, nodeUrl: e.target.value})}
                  className="cyber-input w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Contract Address</label>
                <input
                  type="text"
                  value={blockchainSettings.contractAddress}
                  onChange={(e) => setBlockchainSettings({...blockchainSettings, contractAddress: e.target.value})}
                  className="cyber-input w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Gas Limit</label>
                <input
                  type="number"
                  value={blockchainSettings.gasLimit}
                  onChange={(e) => setBlockchainSettings({...blockchainSettings, gasLimit: e.target.value})}
                  className="cyber-input w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Gas Price</label>
                <select
                  value={blockchainSettings.gasPrice}
                  onChange={(e) => setBlockchainSettings({...blockchainSettings, gasPrice: e.target.value})}
                  className="cyber-input w-full"
                >
                  <option value="auto">Auto</option>
                  <option value="slow">Slow</option>
                  <option value="standard">Standard</option>
                  <option value="fast">Fast</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Confirmation Blocks</label>
                <input
                  type="number"
                  value={blockchainSettings.confirmationBlocks}
                  onChange={(e) => setBlockchainSettings({...blockchainSettings, confirmationBlocks: e.target.value})}
                  className="cyber-input w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Block Explorer</label>
                <input
                  type="url"
                  value={blockchainSettings.blockExplorer}
                  onChange={(e) => setBlockchainSettings({...blockchainSettings, blockExplorer: e.target.value})}
                  className="cyber-input w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Wallet Private Key</label>
                <input
                  type="password"
                  value={blockchainSettings.walletPrivateKey}
                  onChange={(e) => setBlockchainSettings({...blockchainSettings, walletPrivateKey: e.target.value})}
                  className="cyber-input w-full"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={blockchainSettings.enableTestnet}
                  onChange={(e) => setBlockchainSettings({...blockchainSettings, enableTestnet: e.target.checked})}
                  className="w-4 h-4 text-cyber-blue bg-gray-700 border-gray-600 rounded focus:ring-cyber-blue"
                />
                <span className="text-gray-300">Enable Testnet Mode</span>
              </label>
            </div>

            <div className="mt-6">
              <button className="cyber-button flex items-center space-x-2">
                <Database className="w-4 h-4" />
                <span>Test Connection</span>
              </button>
            </div>
          </div>
        )}

        {/* Other tabs can be implemented similarly */}
        {activeTab !== 'general' && activeTab !== 'security' && activeTab !== 'email' && activeTab !== 'blockchain' && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Coming Soon</h3>
            <p className="text-gray-400">This section is under development</p>
          </div>
        )}
      </div>
      </div>
    </div>
  )
}
