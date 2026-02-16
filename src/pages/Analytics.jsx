import React, { useState } from 'react'
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  FileText, 
  Building, 
  Activity, 
  Calendar, 
  Download, 
  Filter, 
  RefreshCw,
  ArrowUp,
  ArrowDown,
  DollarSign,
  Clock,
  Eye,
  Share2,
  Shield,
  Zap,
  Database,
  Globe,
  CheckCircle,
  AlertTriangle
} from 'lucide-react'

export const Analytics = () => {
  const [timeRange, setTimeRange] = useState('7d')
  const [activeChart, setActiveChart] = useState('overview')

  const overviewStats = [
    {
      label: 'Total Users',
      value: '45,678',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'text-cyber-blue'
    },
    {
      label: 'Certificates Issued',
      value: '124,567',
      change: '+18.2%',
      trend: 'up',
      icon: FileText,
      color: 'text-green-400'
    },
    {
      label: 'Active Institutions',
      value: '247',
      change: '+5.3%',
      trend: 'up',
      icon: Building,
      color: 'text-purple-400'
    },
    {
      label: 'Verification Rate',
      value: '98.7%',
      change: '-0.3%',
      trend: 'down',
      icon: CheckCircle,
      color: 'text-yellow-400'
    }
  ]

  const chartData = {
    overview: [
      { month: 'Jan', users: 3200, certificates: 1200, institutions: 45 },
      { month: 'Feb', users: 3800, certificates: 1400, institutions: 52 },
      { month: 'Mar', users: 4200, certificates: 1600, institutions: 58 },
      { month: 'Apr', users: 4800, certificates: 1800, institutions: 65 },
      { month: 'May', users: 5200, certificates: 2000, institutions: 72 },
      { month: 'Jun', users: 5800, certificates: 2200, institutions: 78 }
    ],
    users: [
      { month: 'Jan', students: 2800, institutions: 400 },
      { month: 'Feb', students: 3200, institutions: 600 },
      { month: 'Mar', students: 3600, institutions: 600 },
      { month: 'Apr', students: 4100, institutions: 700 },
      { month: 'May', students: 4500, institutions: 700 },
      { month: 'Jun', students: 5000, institutions: 800 }
    ],
    certificates: [
      { month: 'Jan', issued: 1200, verified: 1150, pending: 50 },
      { month: 'Feb', issued: 1400, verified: 1350, pending: 50 },
      { month: 'Mar', issued: 1600, verified: 1550, pending: 50 },
      { month: 'Apr', issued: 1800, verified: 1750, pending: 50 },
      { month: 'May', issued: 2000, verified: 1950, pending: 50 },
      { month: 'Jun', issued: 2200, verified: 2150, pending: 50 }
    ]
  }

  const topInstitutions = [
    {
      name: 'Stanford University',
      certificates: 15420,
      students: 3200,
      growth: '+15%',
      status: 'active'
    },
    {
      name: 'MIT',
      certificates: 12350,
      students: 2800,
      growth: '+12%',
      status: 'active'
    },
    {
      name: 'Harvard University',
      certificates: 10890,
      students: 2500,
      growth: '+8%',
      status: 'active'
    },
    {
      name: 'Tech Training Center',
      certificates: 8760,
      students: 1800,
      growth: '+25%',
      status: 'active'
    },
    {
      name: 'Community College',
      certificates: 6540,
      students: 1500,
      growth: '+5%',
      status: 'active'
    }
  ]

  const recentActivity = [
    {
      type: 'certificate',
      title: 'Certificate issued',
      description: 'Computer Science Degree - Stanford University',
      timestamp: '2 minutes ago',
      icon: FileText
    },
    {
      type: 'verification',
      title: 'Certificate verified',
      description: 'Business Administration - MIT',
      timestamp: '5 minutes ago',
      icon: CheckCircle
    },
    {
      type: 'institution',
      title: 'New institution registered',
      description: 'Tech Training Center joined the platform',
      timestamp: '15 minutes ago',
      icon: Building
    },
    {
      type: 'user',
      title: 'New user registered',
      description: 'Student account created',
      timestamp: '30 minutes ago',
      icon: Users
    }
  ]

  const chartTypes = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'users', label: 'User Growth', icon: Users },
    { id: 'certificates', label: 'Certificates', icon: FileText }
  ]

  const renderChart = () => {
    const data = chartData[activeChart] || chartData.overview
    
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-64">
          {data.map((item, index) => (
            <div key={index} className="cyber-card p-4">
              <div className="text-sm text-gray-400 mb-2">{item.month}</div>
              <div className="space-y-2">
                {Object.entries(item).filter(([key]) => key !== 'month').map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 capitalize">{key}</span>
                    <span className="text-sm font-medium text-white">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 space-y-1">
                {Object.entries(item).filter(([key]) => key !== 'month').map(([key], idx) => (
                  <div key={key} className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyber-blue to-cyber-purple h-2 rounded-full"
                      style={{width: `${(item[key] / 6000) * 100}%`}}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
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
          <h1 className="text-3xl font-bold cyber-gradient-text mb-2">Analytics Dashboard</h1>
          <p className="text-gray-400">View detailed analytics and insights</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="cyber-input"
          >
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
            <option value="1y">Last Year</option>
          </select>
          <button className="cyber-button flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {overviewStats.map((stat, index) => (
          <div key={index} className="cyber-card">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-cyber-blue/10 rounded-lg">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className={`flex items-center space-x-1 text-sm ${
                stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
              }`}>
                {stat.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                <span>{stat.change}</span>
              </div>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Area */}
        <div className="lg:col-span-2">
          <div className="cyber-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Growth Analytics</h2>
              <div className="flex space-x-2">
                {chartTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setActiveChart(type.id)}
                    className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                      activeChart === type.id
                        ? 'bg-cyber-blue text-white'
                        : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                    }`}
                  >
                    <type.icon className="w-4 h-4 inline mr-1" />
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
            {renderChart()}
          </div>

          {/* Top Institutions */}
          <div className="cyber-card mt-8">
            <h2 className="text-xl font-semibold text-white mb-6">Top Institutions</h2>
            <div className="space-y-4">
              {topInstitutions.map((institution, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-black/30 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-white">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-white">{institution.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>{institution.certificates} certificates</span>
                        <span>{institution.students} students</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`text-sm font-medium ${
                      institution.growth.startsWith('+') ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {institution.growth}
                    </span>
                    <span className="px-2 py-1 text-xs bg-green-400/20 text-green-400 rounded">
                      {institution.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Recent Activity */}
          <div className="cyber-card">
            <h2 className="text-xl font-semibold text-white mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="p-2 bg-cyber-blue/10 rounded-lg">
                    <activity.icon className="w-4 h-4 text-cyber-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white text-sm">{activity.title}</h3>
                    <p className="text-xs text-gray-400 mb-1">{activity.description}</p>
                    <span className="text-xs text-gray-500">{activity.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="cyber-card">
            <h2 className="text-xl font-semibold text-white mb-6">Performance Metrics</h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">API Response Time</span>
                  <span className="text-sm text-green-400">0.3s</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Server Uptime</span>
                  <span className="text-sm text-green-400">99.9%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{width: '99.9%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Database Performance</span>
                  <span className="text-sm text-yellow-400">87%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{width: '87%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Cache Hit Rate</span>
                  <span className="text-sm text-cyber-blue">92%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-cyber-blue h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="cyber-card">
            <h2 className="text-xl font-semibold text-white mb-6">Quick Stats</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-blue">2.3M</div>
                <div className="text-xs text-gray-400">API Calls</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">45K</div>
                <div className="text-xs text-gray-400">Daily Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">1.2K</div>
                <div className="text-xs text-gray-400">New Certificates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">98.7%</div>
                <div className="text-xs text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
