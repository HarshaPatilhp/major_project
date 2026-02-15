import React, { useState } from 'react'
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Eye, 
  Lock, 
  Key, 
  Users, 
  Activity, 
  Clock, 
  MapPin, 
  Monitor, 
  Database, 
  Globe, 
  FileText, 
  Search, 
  Filter, 
  Download, 
  RefreshCw,
  Ban,
  UserX,
  ShieldOff,
  Wifi,
  WifiOff
} from 'lucide-react'

export const SecurityCenter = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [searchTerm, setSearchTerm] = useState('')
  const [filterLevel, setFilterLevel] = useState('all')

  const securityStats = [
    {
      label: 'Security Score',
      value: '94%',
      icon: Shield,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      status: 'excellent'
    },
    {
      label: 'Active Threats',
      value: '3',
      icon: AlertTriangle,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      status: 'warning'
    },
    {
      label: 'Blocked Attacks',
      value: '1,247',
      icon: Ban,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      status: 'good'
    },
    {
      label: 'Security Events',
      value: '89',
      icon: Activity,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      status: 'normal'
    }
  ]

  const securityEvents = [
    {
      id: 1,
      type: 'threat',
      title: 'Suspicious Login Attempt',
      description: 'Multiple failed login attempts from unknown IP',
      severity: 'high',
      status: 'investigating',
      timestamp: '2 minutes ago',
      ip: '192.168.1.100',
      user: 'john.doe@example.com',
      action: 'Account locked'
    },
    {
      id: 2,
      type: 'attack',
      title: 'DDoS Attack Detected',
      description: 'Unusual traffic spike detected on API endpoints',
      severity: 'critical',
      status: 'mitigated',
      timestamp: '15 minutes ago',
      ip: '10.0.0.1',
      user: 'System',
      action: 'Rate limiting enabled'
    },
    {
      id: 3,
      type: 'breach',
      title: 'Data Access Anomaly',
      description: 'Unusual data access pattern detected',
      severity: 'medium',
      status: 'monitoring',
      timestamp: '1 hour ago',
      ip: '172.16.0.1',
      user: 'admin@institution.edu',
      action: 'Access logged'
    },
    {
      id: 4,
      type: 'malware',
      title: 'Malware Upload Attempt',
      description: 'Malicious file upload blocked',
      severity: 'high',
      status: 'blocked',
      timestamp: '2 hours ago',
      ip: '203.0.113.1',
      user: 'unknown',
      action: 'File quarantined'
    },
    {
      id: 5,
      type: 'phishing',
      title: 'Phishing Attempt',
      description: 'Suspicious email reported by user',
      severity: 'low',
      status: 'resolved',
      timestamp: '3 hours ago',
      ip: '198.51.100.1',
      user: 'jane.smith@example.com',
      action: 'Email blocked'
    }
  ]

  const blockedIPs = [
    {
      ip: '192.168.1.100',
      reason: 'Multiple failed login attempts',
      attempts: 15,
      blockedAt: '2024-01-15 14:30:00',
      duration: '24 hours'
    },
    {
      ip: '10.0.0.1',
      reason: 'DDoS attack',
      attempts: 5000,
      blockedAt: '2024-01-15 13:45:00',
      duration: 'Permanent'
    },
    {
      ip: '203.0.113.1',
      reason: 'Malware upload',
      attempts: 3,
      blockedAt: '2024-01-15 12:00:00',
      duration: '7 days'
    }
  ]

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Shield },
    { id: 'events', label: 'Security Events', icon: Activity },
    { id: 'threats', label: 'Threats', icon: AlertTriangle },
    { id: 'blocked', label: 'Blocked IPs', icon: Ban },
    { id: 'firewall', label: 'Firewall', icon: ShieldOff }
  ]

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical':
        return 'text-red-400 bg-red-400/10 border-red-400/30'
      case 'high':
        return 'text-orange-400 bg-orange-400/10 border-orange-400/30'
      case 'medium':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30'
      case 'low':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/30'
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/30'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'investigating':
        return 'text-yellow-400 bg-yellow-400/10'
      case 'mitigated':
      case 'blocked':
      case 'resolved':
        return 'text-green-400 bg-green-400/10'
      case 'monitoring':
        return 'text-blue-400 bg-blue-400/10'
      default:
        return 'text-gray-400 bg-gray-400/10'
    }
  }

  const getEventIcon = (type) => {
    switch (type) {
      case 'threat':
        return <AlertTriangle className="w-4 h-4" />
      case 'attack':
        return <Ban className="w-4 h-4" />
      case 'breach':
        return <ShieldOff className="w-4 h-4" />
      case 'malware':
        return <XCircle className="w-4 h-4" />
      case 'phishing':
        return <FileText className="w-4 h-4" />
      default:
        return <Activity className="w-4 h-4" />
    }
  }

  const filteredEvents = securityEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterLevel === 'all' || event.severity === filterLevel
    return matchesSearch && matchesFilter
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold cyber-gradient-text mb-2">Security Center</h1>
          <p className="text-gray-400">Monitor security and threats</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="cyber-button flex items-center space-x-2">
            <RefreshCw className="w-4 h-4" />
            <span>Refresh</span>
          </button>
          <button className="cyber-button flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Security Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {securityStats.map((stat, index) => (
          <div key={index} className="cyber-card">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className={`text-sm font-medium ${stat.color}`}>
                {stat.status}
              </div>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

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
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6">Security Overview</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Security Events */}
              <div>
                <h4 className="text-lg font-medium text-white mb-4">Recent Security Events</h4>
                <div className="space-y-3">
                  {securityEvents.slice(0, 3).map((event) => (
                    <div key={event.id} className="p-4 bg-black/30 rounded-lg border border-gray-700">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div className={`p-2 rounded-lg ${getSeverityColor(event.severity)}`}>
                            {getEventIcon(event.type)}
                          </div>
                          <div>
                            <h5 className="font-medium text-white mb-1">{event.title}</h5>
                            <p className="text-sm text-gray-400 mb-2">{event.description}</p>
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <span className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>{event.timestamp}</span>
                              </span>
                              <span className={`px-2 py-1 rounded-full ${getStatusColor(event.status)}`}>
                                {event.status}
                              </span>
                            </div>
                          </div>
                        </div>
                        <button className="text-cyber-blue hover:text-cyber-purple">
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Recommendations */}
              <div>
                <h4 className="text-lg font-medium text-white mb-4">Security Recommendations</h4>
                <div className="space-y-3">
                  <div className="p-4 bg-green-400/10 border border-green-400/30 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <h5 className="font-medium text-white mb-1">System Updated</h5>
                        <p className="text-sm text-gray-400">All security patches are up to date</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-yellow-400/10 border border-yellow-400/30 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
                      <div>
                        <h5 className="font-medium text-white mb-1">Review Access Logs</h5>
                        <p className="text-sm text-gray-400">Unusual activity detected in admin access</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-blue-400/10 border border-blue-400/30 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-cyber-blue mt-0.5" />
                      <div>
                        <h5 className="font-medium text-white mb-1">Enable 2FA</h5>
                        <p className="text-sm text-gray-400">Consider enabling two-factor authentication</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* System Security Status */}
            <div className="mt-6">
              <h4 className="text-lg font-medium text-white mb-4">System Security Status</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-black/30 rounded-lg border border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Firewall</span>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="text-lg font-medium text-white">Active</div>
                  <div className="text-xs text-gray-500">Blocking 1,247 attacks</div>
                </div>
                <div className="p-4 bg-black/30 rounded-lg border border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Antivirus</span>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="text-lg font-medium text-white">Updated</div>
                  <div className="text-xs text-gray-500">Last scan: 2 hours ago</div>
                </div>
                <div className="p-4 bg-black/30 rounded-lg border border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">SSL Certificate</span>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="text-lg font-medium text-white">Valid</div>
                  <div className="text-xs text-gray-500">Expires in 89 days</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Security Events Tab */}
        {activeTab === 'events' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Security Events</h3>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="cyber-input pl-10 w-64"
                  />
                </div>
                <select
                  value={filterLevel}
                  onChange={(e) => setFilterLevel(e.target.value)}
                  className="cyber-input"
                >
                  <option value="all">All Severities</option>
                  <option value="critical">Critical</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {filteredEvents.map((event) => (
                <div key={event.id} className="p-4 bg-black/30 rounded-lg border border-gray-700 hover:border-cyber-blue/50 transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${getSeverityColor(event.severity)}`}>
                        {getEventIcon(event.type)}
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1">{event.title}</h4>
                        <p className="text-sm text-gray-400 mb-2">{event.description}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{event.timestamp}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3" />
                            <span>{event.ip}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-3 h-3" />
                            <span>{event.user}</span>
                          </div>
                          <div className={`px-2 py-1 rounded-full ${getStatusColor(event.status)}`}>
                            {event.status}
                          </div>
                        </div>
                        <div className="mt-2 text-sm text-cyber-blue">
                          Action: {event.action}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-cyber-blue">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-cyber-blue">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other tabs */}
        {activeTab === 'threats' && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Threat Detection</h3>
            <p className="text-gray-400">Advanced threat monitoring coming soon</p>
          </div>
        )}

        {activeTab === 'blocked' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6">Blocked IP Addresses</h3>
            
            <div className="space-y-4">
              {blockedIPs.map((blocked, index) => (
                <div key={index} className="p-4 bg-black/30 rounded-lg border border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <Ban className="w-5 h-5 text-red-400" />
                        <span className="font-medium text-white">{blocked.ip}</span>
                        <span className="px-2 py-1 text-xs bg-red-400/20 text-red-400 rounded">Blocked</span>
                      </div>
                      <p className="text-sm text-gray-400 mb-2">{blocked.reason}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>Attempts: {blocked.attempts}</span>
                        <span>Blocked: {blocked.blockedAt}</span>
                        <span>Duration: {blocked.duration}</span>
                      </div>
                    </div>
                    <button className="px-3 py-1 text-sm bg-cyber-blue text-white rounded hover:bg-cyber-purple transition-colors">
                      Unblock
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'firewall' && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldOff className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Firewall Configuration</h3>
            <p className="text-gray-400">Firewall management interface coming soon</p>
          </div>
        )}
      </div>
    </div>
  )
}
