import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FileText, 
  Share2, 
  Download, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  AlertCircle,
  Calendar,
  Award,
  BookOpen,
  Target
} from 'lucide-react'

export const StudentDashboard = () => {
  const stats = [
    {
      label: 'Total Certificates',
      value: '12',
      icon: FileText,
      color: 'text-cyber-blue',
      bgColor: 'bg-cyber-blue/10',
      change: '+2 this month',
    },
    {
      label: 'Verified',
      value: '8',
      icon: CheckCircle,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      change: '+3 this week',
    },
    {
      label: 'Shared',
      value: '15',
      icon: Share2,
      color: 'text-cyber-purple',
      bgColor: 'bg-cyber-purple/10',
      change: '+5 this week',
    },
    {
      label: 'Downloads',
      value: '23',
      icon: Download,
      color: 'text-cyber-pink',
      bgColor: 'bg-cyber-pink/10',
      change: '+8 this month',
    },
  ]

  const recentCertificates = [
    {
      id: 1,
      title: 'Bachelor of Computer Science',
      issuer: 'Tech University',
      date: '2024-01-15',
      status: 'verified',
      type: 'degree',
    },
    {
      id: 2,
      title: 'Web Development Certification',
      issuer: 'Code Academy',
      date: '2024-01-10',
      status: 'verified',
      type: 'certificate',
    },
    {
      id: 3,
      title: 'Data Science Specialization',
      issuer: 'Tech University',
      date: '2024-01-05',
      status: 'pending',
      type: 'specialization',
    },
    {
      id: 4,
      title: 'Machine Learning Course',
      issuer: 'AI Institute',
      date: '2023-12-28',
      status: 'verified',
      type: 'course',
    },
  ]

  const quickActions = [
    {
      title: 'View All Records',
      description: 'Browse and manage your certificates',
      icon: FileText,
      link: '/my-records',
      color: 'from-cyber-blue to-cyber-purple',
    },
    {
      title: 'Share Certificate',
      description: 'Generate QR codes or share links',
      icon: Share2,
      link: '/share-verify',
      color: 'from-cyber-purple to-cyber-pink',
    },
    {
      title: 'Request Verification',
      description: 'Get your certificates verified',
      icon: CheckCircle,
      link: '/my-records',
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

  const getTypeIcon = (type) => {
    switch (type) {
      case 'degree':
        return <Award className="w-4 h-4" />
      case 'certificate':
        return <FileText className="w-4 h-4" />
      case 'specialization':
        return <Target className="w-4 h-4" />
      case 'course':
        return <BookOpen className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold cyber-gradient-text mb-2">
          Welcome back, John!
        </h1>
        <p className="text-gray-400">
          Manage your academic certificates and track their verification status
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

      {/* Recent Certificates */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Recent Certificates</h2>
          <div className="space-y-4">
            {recentCertificates.map((cert) => (
              <div key={cert.id} className="cyber-card hover:border-cyber-blue/50 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-cyber-blue/10">
                      {getTypeIcon(cert.type)}
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">{cert.title}</h3>
                      <p className="text-sm text-gray-400 mb-2">{cert.issuer}</p>
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
                    <Link
                      to={`/record-details/${cert.id}`}
                      className="text-cyber-blue hover:text-cyber-purple text-sm"
                    >
                      View →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Timeline */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
          <div className="cyber-card">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-full bg-green-400/10">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white">Certificate verified</p>
                  <p className="text-xs text-gray-400">Web Development Certification - 2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-full bg-cyber-blue/10">
                  <Share2 className="w-4 h-4 text-cyber-blue" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white">Certificate shared</p>
                  <p className="text-xs text-gray-400">Bachelor Degree shared with Tech Corp - 5 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-full bg-cyber-purple/10">
                  <Download className="w-4 h-4 text-cyber-purple" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white">Certificate downloaded</p>
                  <p className="text-xs text-gray-400">Data Science Specialization PDF - 1 day ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-full bg-yellow-400/10">
                  <AlertCircle className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white">Verification pending</p>
                  <p className="text-xs text-gray-400">Machine Learning Course - 2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
