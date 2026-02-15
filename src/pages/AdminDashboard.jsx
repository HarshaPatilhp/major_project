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
  const systemStats = [
    {
      label: 'Total Institutions',
      value: '247',
      icon: Building,
      color: 'text-cyber-blue',
      bgColor: 'bg-cyber-blue/10',
      change: '+15% this month',
    },
    {
      label: 'Total Students',
      value: '45,678',
      icon: Users,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      change: '+23% this month',
    },
    {
      label: 'Certificates Issued',
      value: '124,567',
      icon: FileText,
      color: 'text-cyber-purple',
      bgColor: 'bg-cyber-purple/10',
      change: '+18% this month',
    },
    {
      label: 'System Health',
      value: '99.9%',
      icon: Shield,
      color: 'text-cyber-pink',
      bgColor: 'bg-cyber-pink/10',
      change: 'Optimal',
    },
  ]

  const recentActivity = [
    {
      id: 1,
      type: 'institution',
      title: 'New institution registered',
      entity: 'Stanford University',
      time: '5 minutes ago',
      status: 'approved',
    },
    {
      id: 2,
      type: 'security',
      title: 'Security scan completed',
      entity: 'System-wide scan',
      time: '1 hour ago',
      status: 'success',
    },
    {
      id: 3,
      type: 'certificate',
      title: 'Bulk certificate issuance',
      entity: 'MIT - 500 certificates',
      time: '2 hours ago',
      status: 'completed',
    },
    {
      id: 4,
      type: 'alert',
      title: 'Unusual activity detected',
      entity: 'Multiple verification requests',
      time: '3 hours ago',
      status: 'investigating',
    },
  ]

  const systemMetrics = [
    {
      label: 'Blockchain Transactions',
      value: '1.2M',
      change: '+25%',
      icon: Database,
    },
    {
      label: 'API Requests',
      value: '5.6M',
      change: '+18%',
      icon: Zap,
    },
    {
      label: 'Verification Success Rate',
      value: '99.8%',
      change: '+0.2%',
      icon: CheckCircle,
    },
    {
      label: 'Average Response Time',
      value: '0.3s',
      change: '-15%',
      icon: Clock,
    },
  ]

  const quickActions = [
    {
      title: 'Manage Institutions',
      description: 'View and manage registered institutions',
      icon: Building,
      link: '#',
      color: 'from-cyber-blue to-cyber-purple',
    },
    {
      title: 'System Settings',
      description: 'Configure system parameters',
      icon: Settings,
      link: '#',
      color: 'from-cyber-purple to-cyber-pink',
    },
    {
      title: 'Security Center',
      description: 'Monitor security and threats',
      icon: Shield,
      link: '#',
      color: 'from-cyber-pink to-cyber-blue',
    },
    {
      title: 'Analytics',
      description: 'View detailed analytics',
      icon: BarChart3,
      link: '#',
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {systemStats.map((stat, index) => (
          <div key={index} className="cyber-card">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <span className="text-sm text-green-400">{stat.change}</span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.link}
              className="cyber-card hover:scale-105 transition-transform duration-300 group"
            >
              <div className={`p-3 rounded-lg bg-gradient-to-r ${action.color} w-fit mb-4`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyber-blue transition-colors">
                {action.title}
              </h3>
              <p className="text-gray-400 text-sm">{action.description}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Recent Activity</h2>
            <button className="text-cyber-blue hover:text-cyber-purple text-sm">
              View All →
            </button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="cyber-card hover:border-cyber-blue/50 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${
                      activity.type === 'alert' ? 'bg-red-400/10' : 'bg-cyber-blue/10'
                    }`}>
                      {getActivityIcon(activity.type)}
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">{activity.title}</h3>
                      <p className="text-sm text-gray-400 mb-2">{activity.entity}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{activity.time}</span>
                        </span>
                        <span className={`px-2 py-1 rounded-full ${getStatusColor(activity.status)}`}>
                          {activity.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="text-cyber-blue hover:text-cyber-purple">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Metrics */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">System Metrics</h2>
          <div className="cyber-card">
            <div className="space-y-6">
              {systemMetrics.map((metric, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <metric.icon className="w-4 h-4 text-cyber-blue" />
                      <span className="text-sm text-gray-400">{metric.label}</span>
                    </div>
                    <span className={`text-sm ${
                      metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {metric.change}
                    </span>
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
                  <span className="flex items-center space-x-1 text-green-400">
                    <CheckCircle className="w-4 h-4" />
                    <span>Operational</span>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">API Services</span>
                  <span className="flex items-center space-x-1 text-green-400">
                    <CheckCircle className="w-4 h-4" />
                    <span>Operational</span>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Database</span>
                  <span className="flex items-center space-x-1 text-green-400">
                    <CheckCircle className="w-4 h-4" />
                    <span>Operational</span>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Security Systems</span>
                  <span className="flex items-center space-x-1 text-yellow-400">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Maintenance</span>
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
            <div className="flex items-start space-x-3 p-3 bg-yellow-400/10 border border-yellow-400/30 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
              <div>
                <h4 className="font-medium text-white mb-1">Scheduled Maintenance</h4>
                <p className="text-sm text-gray-400">
                  System maintenance scheduled for tonight at 2:00 AM UTC. Expected downtime: 30 minutes.
                </p>
                <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-blue-400/10 border border-blue-400/30 rounded-lg">
              <Shield className="w-5 h-5 text-cyber-blue mt-0.5" />
              <div>
                <h4 className="font-medium text-white mb-1">Security Update</h4>
                <p className="text-sm text-gray-400">
                  New security patches have been applied to all system components.
                </p>
                <p className="text-xs text-gray-500 mt-1">6 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
