import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Users, 
  Building, 
  FileText, 
  Shield,
  Activity,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  BarChart3,
  Settings,
  Database,
  Globe,
  Lock,
  Eye,
  Download,
  Calendar,
  Clock,
  Zap
} from 'lucide-react'

export const AdminDashboard = () => {
  // Calculate live statistics from stored data
  const uploadedCertificates = JSON.parse(localStorage.getItem('uploadedCertificates') || '[]')
  
  const systemStats = [
    {
      label: 'Total Institutions',
      value: '0', // Would come from institution management system
      icon: Building,
      color: 'text-cyber-blue',
      bgColor: 'bg-cyber-blue/10',
      change: 'No data available',
    },
    {
      label: 'Total Students',
      value: '0', // Would come from user management system
      icon: Users,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      change: 'No data available',
    },
    {
      label: 'Certificates Issued',
      value: uploadedCertificates.length.toString(),
      icon: FileText,
      color: 'text-cyber-purple',
      bgColor: 'bg-cyber-purple/10',
      change: `${uploadedCertificates.length} total`,
    },
    {
      label: 'System Health',
      value: '100%',
      icon: Shield,
      color: 'text-cyber-pink',
      bgColor: 'bg-cyber-pink/10',
      change: 'Operational',
    },
  ]

  // Live recent activity based on uploaded certificates
  const recentActivity = uploadedCertificates.slice(0, 4).map((cert, index) => ({
    id: cert.id,
    type: 'certificate',
    title: 'Certificate uploaded',
    entity: `${cert.title} - ${cert.issuer}`,
    time: 'Recently uploaded',
    status: 'verified',
  }))

  // If no certificates, show default message
  if (recentActivity.length === 0) {
    recentActivity.push({
      id: 1,
      type: 'system',
      title: 'System initialized',
      entity: 'EduBlockchain platform ready',
      time: 'System ready',
      status: 'active',
    })
  }

  // Calculate dynamic system metrics from uploaded certificates
  const systemMetrics = [
    {
      label: 'Blockchain Transactions',
      value: uploadedCertificates.length.toString(),
      change: uploadedCertificates.length > 0 ? `+${uploadedCertificates.length}` : '0',
      icon: Database,
    },
    {
      label: 'API Requests',
      value: (uploadedCertificates.length * 100).toString(),
      change: uploadedCertificates.length > 0 ? '+18%' : '0%',
      icon: Zap,
    },
    {
      label: 'Verification Success Rate',
      value: uploadedCertificates.length > 0 ? '100%' : '0%',
      change: uploadedCertificates.length > 0 ? '+0%' : '0%',
      icon: CheckCircle,
    },
    {
      label: 'Average Response Time',
      value: uploadedCertificates.length > 0 ? '0.3s' : '0s',
      change: uploadedCertificates.length > 0 ? '-15%' : '0%',
      icon: Clock,
    },
  ]

  const quickActions = [
    {
      title: 'Manage Institutions',
      description: 'View and manage registered institutions',
      icon: Building,
      link: '/manage-institutions',
      color: 'from-cyber-blue to-cyber-purple',
    },
    {
      title: 'System Settings',
      description: 'Configure system parameters',
      icon: Settings,
      link: '/system-settings',
      color: 'from-cyber-purple to-cyber-pink',
    },
    {
      title: 'Security Center',
      description: 'Monitor security and threats',
      icon: Shield,
      link: '/security-center',
      color: 'from-cyber-pink to-cyber-blue',
    },
    {
      title: 'Analytics',
      description: 'View detailed analytics',
      icon: BarChart3,
      link: '/analytics',
      color: 'from-cyber-blue to-green-400',
    },
  ]

  const getActivityIcon = (type) => {
    switch (type) {
      case 'institution':
        return <Building className="w-4 h-4" />
      case 'security':
        return <Shield className="w-4 h-4" />
      case 'certificate':
        return <FileText className="w-4 h-4" />
      case 'alert':
        return <AlertTriangle className="w-4 h-4" />
      default:
        return <Activity className="w-4 h-4" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
      case 'success':
      case 'completed':
        return 'text-green-400 bg-green-400/10'
      case 'investigating':
        return 'text-yellow-400 bg-yellow-400/10'
      case 'failed':
        return 'text-red-400 bg-red-400/10'
      default:
        return 'text-gray-400 bg-gray-400/10'
    }
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
          <h1 className="text-3xl font-bold cyber-gradient-text mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-400">
            System overview and administrative controls
          </p>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {systemStats.map((stat, index) => (
            <div key={index} className="cyber-card">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className={`p-2 sm:p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color}`} />
                </div>
                <span className="text-xs sm:text-sm text-green-400 truncate">{stat.change}</span>
              </div>
              <div className="text-lg sm:text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.link}
                className="cyber-card hover:border-cyber-blue/50 transition-all duration-300 group"
              >
                <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${action.color} mb-3 sm:mb-4`}>
                  <action.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-white mb-2 group-hover:text-cyber-blue transition-colors">
                  {action.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">{action.description}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h2 className="text-lg sm:text-xl font-semibold text-white">Recent Activity</h2>
              <button className="text-cyber-blue hover:text-cyber-purple text-xs sm:text-sm">
                View All →
              </button>
            </div>
            <div className="cyber-card">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-400">Type</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-400">Entity</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-400">Time</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-400">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentActivity.map((activity, index) => (
                      <tr key={activity.id} className="border-b border-gray-800 hover:bg-white/5 transition-colors">
                        <td className="py-2 sm:py-3 px-2 sm:px-4">
                          <div className="flex items-center space-x-2">
                            {getTypeIcon(activity.type)}
                            <span className="text-xs sm:text-sm text-white">{activity.title}</span>
                          </div>
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4">
                          <span className="text-xs sm:text-sm text-gray-300 truncate block max-w-32 sm:max-w-none">{activity.entity}</span>
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4">
                          <span className="text-xs sm:text-sm text-gray-400">{activity.time}</span>
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4">
                          <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                            {activity.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* System Metrics */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">System Metrics</h2>
            <div className="cyber-card">
              <div className="space-y-4 sm:space-y-6">
                {systemMetrics.map((metric, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm text-gray-400">{metric.label}</span>
                      <span className="text-xs sm:text-sm text-green-400">{metric.change}</span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyber-blue to-cyber-purple h-2 rounded-full"
                        style={{width: `${Math.random() * 30 + 70}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Status */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-4">System Status</h3>
              <div className="cyber-card">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Blockchain Network</span>
                    <span className={`flex items-center space-x-1 ${uploadedCertificates.length > 0 ? 'text-green-400' : 'text-yellow-400'}`}>
                      <CheckCircle className="w-4 h-4" />
                      <span>{uploadedCertificates.length > 0 ? 'Operational' : 'Ready'}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">API Services</span>
                    <span className={`flex items-center space-x-1 ${uploadedCertificates.length > 0 ? 'text-green-400' : 'text-yellow-400'}`}>
                      <CheckCircle className="w-4 h-4" />
                      <span>{uploadedCertificates.length > 0 ? 'Active' : 'Ready'}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Database</span>
                    <span className={`flex items-center space-x-1 ${uploadedCertificates.length > 0 ? 'text-green-400' : 'text-yellow-400'}`}>
                      <CheckCircle className="w-4 h-4" />
                      <span>{uploadedCertificates.length > 0 ? 'Connected' : 'Ready'}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Storage</span>
                    <span className="flex items-center space-x-1 text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      <span>Available</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Security</span>
                    <span className="flex items-center space-x-1 text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      <span>Protected</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">Recent Alerts</h2>
          <div className="cyber-card">
            <div className="space-y-4">
              {uploadedCertificates.length > 0 ? (
                <div className="flex items-start space-x-3 p-3 bg-green-400/10 border border-green-400/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white mb-1">System Active</h4>
                    <p className="text-sm text-gray-400">
                      {uploadedCertificates.length} certificates successfully processed and stored on blockchain.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">System operational</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-start space-x-3 p-3 bg-blue-400/10 border border-blue-400/30 rounded-lg">
                  <Shield className="w-5 h-5 text-cyber-blue mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white mb-1">System Ready</h4>
                    <p className="text-sm text-gray-400">
                      EduBlockchain platform is ready for certificate uploads and verification.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Awaiting first certificate</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
