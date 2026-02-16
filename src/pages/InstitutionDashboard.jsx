import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Users, 
  FileText, 
  TrendingUp, 
  CheckCircle,
  Clock,
  AlertCircle,
  Plus,
  Search,
  Filter,
  Download,
  Eye,
  Calendar,
  Award,
  Building,
  BarChart3,
  Activity
} from 'lucide-react'

export const InstitutionDashboard = () => {
  const stats = [
    {
      label: 'Total Issued',
      value: '1,247',
      icon: FileText,
      color: 'text-cyber-blue',
      bgColor: 'bg-cyber-blue/10',
      change: '+12% this month',
    },
    {
      label: 'Active Students',
      value: '3,456',
      icon: Users,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      change: '+8% this month',
    },
    {
      label: 'Verification Rate',
      value: '98.5%',
      icon: CheckCircle,
      color: 'text-cyber-purple',
      bgColor: 'bg-cyber-purple/10',
      change: '+2% this month',
    },
    {
      label: 'Pending Requests',
      value: '23',
      icon: Clock,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      change: '-5% this month',
    },
  ]

  const recentCertificates = [
    {
      id: 1,
      studentName: 'John Doe',
      title: 'Bachelor of Computer Science',
      date: '2024-01-15',
      status: 'verified',
      hash: '0x7f9a8b3c4d5e6f1a2b3c4d5e6f7a8b9c',
    },
    {
      id: 2,
      studentName: 'Jane Smith',
      title: 'Web Development Certification',
      date: '2024-01-14',
      status: 'pending',
      hash: '0x8b7f9a3c4d5e6f1a2b3c4d5e6f7a8b9c',
    },
    {
      id: 3,
      studentName: 'Mike Johnson',
      title: 'Data Science Specialization',
      date: '2024-01-13',
      status: 'verified',
      hash: '0x9c8b7f3a4d5e6f1a2b3c4d5e6f7a8b9c',
    },
    {
      id: 4,
      studentName: 'Sarah Williams',
      title: 'Machine Learning Course',
      date: '2024-01-12',
      status: 'verified',
      hash: '0xa9c8b7f4d5e6f1a2b3c4d5e6f7a8b9c3',
    },
  ]

  const quickActions = [
    {
      title: 'Issue Certificate',
      description: 'Create and issue new certificates',
      icon: Plus,
      link: '/upload-record',
      color: 'from-cyber-blue to-cyber-purple',
    },
    {
      title: 'View All Records',
      description: 'Browse all issued certificates',
      icon: FileText,
      link: '/upload-record',
      color: 'from-cyber-purple to-cyber-pink',
    },
    {
      title: 'Student Management',
      description: 'Manage student records',
      icon: Users,
      link: '/upload-record',
      color: 'from-cyber-pink to-cyber-blue',
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'verified':
        return 'text-green-400 bg-green-400/10'
      case 'pending':
        return 'text-yellow-400 bg-yellow-400/10'
      case 'expired':
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
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold cyber-gradient-text mb-2">
          Welcome back, Tech University!
        </h1>
        <p className="text-gray-400">
          Manage your institution's certificate issuance and verification system
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Certificates */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Recently Issued</h2>
            <Link
              to="/upload-record"
              className="text-cyber-blue hover:text-cyber-purple text-sm"
            >
              View All →
            </Link>
          </div>
          <div className="space-y-4">
            {recentCertificates.map((cert) => (
              <div key={cert.id} className="cyber-card hover:border-cyber-blue/50 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-cyber-blue/10">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">{cert.title}</h3>
                      <p className="text-sm text-gray-400 mb-2">{cert.studentName}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{cert.date}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(cert.status)}`}>
                      {cert.status}
                    </span>
                    <button className="text-cyber-blue hover:text-cyber-purple text-sm">
                      View →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Analytics Overview */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Analytics Overview</h2>
          <div className="cyber-card">
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Monthly Issuance</span>
                  <span className="text-sm text-green-400">+12%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyber-blue to-cyber-purple h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">0</span>
                  <span className="text-xs text-gray-500">150</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Verification Success</span>
                  <span className="text-sm text-green-400">98.5%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{width: '98.5%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Student Engagement</span>
                  <span className="text-sm text-cyber-purple">+8%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-cyber-purple h-2 rounded-full" style={{width: '82%'}}></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyber-blue">24/7</div>
                  <div className="text-xs text-gray-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">0.3s</div>
                  <div className="text-xs text-gray-400">Avg Response</div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
            <div className="cyber-card">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-green-400/10">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white">Certificate issued to John Doe</p>
                    <p className="text-xs text-gray-400">Bachelor of Computer Science - 2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-cyber-blue/10">
                    <Users className="w-4 h-4 text-cyber-blue" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white">New student registration</p>
                    <p className="text-xs text-gray-400">45 new students this week - 5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-cyber-purple/10">
                    <Activity className="w-4 h-4 text-cyber-purple" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white">System update completed</p>
                    <p className="text-xs text-gray-400">Version 2.1.0 deployed - 1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
