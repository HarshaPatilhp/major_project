import React, { useState } from 'react'
import { 
  TrendingUp, 
  TrendingDown,
  Users, 
  FileText, 
  Calendar,
  Download,
  BarChart3,
  PieChart,
  Activity,
  Clock,
  CheckCircle,
  AlertTriangle,
  Eye
} from 'lucide-react'

export const InstitutionAnalytics = () => {
  const [timeRange, setTimeRange] = useState('30d')
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    {
      label: 'Total Certificates',
      value: '2,847',
      icon: FileText,
      color: 'text-cyber-blue',
      bgColor: 'bg-cyber-blue/10',
      change: '+18%',
      trend: 'up'
    },
    {
      label: 'Active Students',
      value: '1,523',
      icon: Users,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      change: '+12%',
      trend: 'up'
    },
    {
      label: 'Verification Rate',
      value: '94.2%',
      icon: CheckCircle,
      color: 'text-cyber-purple',
      bgColor: 'bg-cyber-purple/10',
      change: '+3%',
      trend: 'up'
    },
    {
      label: 'Avg Processing Time',
      value: '2.4 hrs',
      icon: Clock,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      change: '-15%',
      trend: 'down'
    }
  ]

  const monthlyData = [
    { month: 'Jan', certificates: 245, students: 128, verifications: 231 },
    { month: 'Feb', certificates: 312, students: 156, verifications: 298 },
    { month: 'Mar', certificates: 289, students: 178, verifications: 276 },
    { month: 'Apr', certificates: 356, students: 198, verifications: 342 },
    { month: 'May', certificates: 423, students: 234, verifications: 408 },
    { month: 'Jun', certificates: 387, students: 267, verifications: 378 }
  ]

  const topPrograms = [
    { name: 'Computer Science', certificates: 892, students: 445, growth: '+22%' },
    { name: 'Business Administration', certificates: 567, students: 298, growth: '+18%' },
    { name: 'Data Science', certificates: 423, students: 212, growth: '+35%' },
    { name: 'Web Development', certificates: 356, students: 178, growth: '+12%' }
  ]

  const recentActivity = [
    {
      type: 'certificate',
      title: 'Certificate issued',
      description: 'Computer Science Degree - John Doe',
      timestamp: '2 minutes ago',
      icon: FileText
    },
    {
      type: 'verification',
      title: 'Certificate verified',
      description: 'Business Administration - Jane Smith',
      timestamp: '5 minutes ago',
      icon: CheckCircle
    },
    {
      type: 'student',
      title: 'New student registered',
      description: '45 new students joined this month',
      timestamp: '1 hour ago',
      icon: Users
    },
    {
      type: 'alert',
      title: 'High verification volume',
      description: 'Unusual activity detected in verification requests',
      timestamp: '3 hours ago',
      icon: AlertTriangle
    }
  ]

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'programs', label: 'Programs', icon: FileText },
    { id: 'activity', label: 'Activity', icon: Activity }
  ]

  const certificateTypes = [
    { name: 'Degrees', value: 1247, color: 'bg-cyber-blue' },
    { name: 'Certificates', value: 892, color: 'bg-cyber-purple' },
    { name: 'Courses', value: 543, color: 'bg-cyber-pink' },
    { name: 'Specializations', value: 165, color: 'bg-green-400' }
  ]

  const renderChart = () => {
    const data = [
      { month: 'Jan', certificates: 245, students: 128, verifications: 231 },
      { month: 'Feb', certificates: 312, students: 156, verifications: 298 },
      { month: 'Mar', certificates: 289, students: 178, verifications: 276 },
      { month: 'Apr', certificates: 356, students: 198, verifications: 342 },
      { month: 'May', certificates: 423, students: 234, verifications: 408 },
      { month: 'Jun', certificates: 387, students: 267, verifications: 378 }
    ]
    const maxValue = Math.max(...data.map(d => Math.max(d.certificates, d.students, d.verifications)))
    
    return (
      <div className="space-y-6">
        {data.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between text-sm text-gray-400 mb-1">
              <span>{item.month}</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="relative">
                <div className="text-xs text-gray-500 mb-1">Certificates</div>
                <div className="w-full bg-gray-700 rounded-full h-6">
                  <div 
                    className="bg-cyber-blue h-6 rounded-full transition-all duration-500"
                    style={{ width: `${(item.certificates / maxValue) * 100}%` }}
                  />
                </div>
                <div className="text-xs text-white mt-1">{item.certificates}</div>
              </div>
              <div className="relative">
                <div className="text-xs text-gray-500 mb-1">Students</div>
                <div className="w-full bg-gray-700 rounded-full h-6">
                  <div 
                    className="bg-green-400 h-6 rounded-full transition-all duration-500"
                    style={{ width: `${(item.students / maxValue) * 100}%` }}
                  />
                </div>
                <div className="text-xs text-white mt-1">{item.students}</div>
              </div>
              <div className="relative">
                <div className="text-xs text-gray-500 mb-1">Verifications</div>
                <div className="w-full bg-gray-700 rounded-full h-6">
                  <div 
                    className="bg-cyber-purple h-6 rounded-full transition-all duration-500"
                    style={{ width: `${(item.verifications / maxValue) * 100}%` }}
                  />
                </div>
                <div className="text-xs text-white mt-1">{item.verifications}</div>
              </div>
            </div>
          </div>
        ))}
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
          <p className="text-gray-400">Track your institution's performance and insights</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="cyber-input"
          >
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
            <option value="1y">Last Year</option>
          </select>
          <button className="cyber-button flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="cyber-card">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="flex items-center space-x-1">
                {stat.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4 text-green-400" />
                ) : (
                  <TrendingUp className="w-4 h-4 text-red-400 rotate-180" />
                )}
                <span className={`text-sm ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.change}
                </span>
              </div>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="flex space-x-1 border-b border-gray-700">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'programs', label: 'Programs', icon: PieChart },
            { id: 'activity', label: 'Activity', icon: Activity }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'text-cyber-blue border-cyber-blue'
                  : 'text-gray-400 border-transparent hover:text-gray-300'
              }`}
            >
              <tab.icon className="w-4 h-4 inline mr-2" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certificate Types */}
          <div className="cyber-card">
            <h3 className="text-lg font-semibold text-white mb-6">Certificate Types</h3>
            <div className="space-y-4">
              {certificateTypes.map((type, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${type.color}`} />
                    <span className="text-gray-300">{type.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-white">{type.value}</div>
                    <div className="text-xs text-gray-500">certificates</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Chart */}
          <div className="cyber-card">
            <h3 className="text-lg font-semibold text-white mb-6">Monthly Performance</h3>
            {renderChart()}
          </div>
        </div>
      )}

      {activeTab === 'programs' && (
        <div className="cyber-card">
          <h3 className="text-lg font-semibold text-white mb-6">Top Programs</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Program</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Certificates</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Students</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Growth</th>
                </tr>
              </thead>
              <tbody>
                {topPrograms.map((program, index) => (
                  <tr key={index} className="border-b border-gray-800">
                    <td className="py-3 px-4 text-white">{program.name}</td>
                    <td className="py-3 px-4 text-white">{program.certificates}</td>
                    <td className="py-3 px-4 text-white">{program.students}</td>
                    <td className="py-3 px-4">
                      <span className="text-green-400">{program.growth}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'activity' && (
        <div className="cyber-card">
          <h3 className="text-lg font-semibold text-white mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-800/50">
                <div className={`p-2 rounded-lg ${
                  activity.type === 'certificate' ? 'bg-cyber-blue/10' :
                  activity.type === 'verification' ? 'bg-green-400/10' :
                  activity.type === 'student' ? 'bg-cyber-purple/10' :
                  'bg-yellow-400/10'
                }`}>
                  <activity.icon className={`w-4 h-4 ${
                    activity.type === 'certificate' ? 'text-cyber-blue' :
                    activity.type === 'verification' ? 'text-green-400' :
                    activity.type === 'student' ? 'text-cyber-purple' :
                    'text-yellow-400'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="text-white font-medium">{activity.title}</div>
                  <div className="text-sm text-gray-400">{activity.description}</div>
                  <div className="text-xs text-gray-500 mt-1">{activity.timestamp}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    </div>
  )
}
