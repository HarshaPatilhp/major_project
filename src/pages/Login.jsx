import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shield, User, Building, Settings, Eye, EyeOff, Mail, Lock as LockIcon } from 'lucide-react'

export const Login = ({ setUser, setUserRole }) => {
  const [selectedRole, setSelectedRole] = useState('student')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const roles = [
    {
      id: 'student',
      name: 'Student',
      icon: User,
      description: 'Access your certificates and verify credentials',
      color: 'from-cyber-blue to-cyber-purple',
    },
    {
      id: 'institution',
      name: 'Institution',
      icon: Building,
      description: 'Issue and manage student certificates',
      color: 'from-cyber-purple to-cyber-pink',
    },
    {
      id: 'admin',
      name: 'Administrator',
      icon: Settings,
      description: 'System oversight and management',
      color: 'from-cyber-pink to-cyber-blue',
    },
  ]

  const mockUsers = {
    student: {
      email: 'student@example.com',
      password: 'student123',
      name: 'John Doe',
    },
    institution: {
      email: 'institution@example.com',
      password: 'institution123',
      name: 'Tech University',
    },
    admin: {
      email: 'admin@example.com',
      password: 'admin123',
      name: 'System Admin',
    },
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Simulate API call
    setTimeout(() => {
      const mockUser = mockUsers[selectedRole]
      
      if (formData.email === mockUser.email && formData.password === mockUser.password) {
        setUser({
          email: formData.email,
          name: mockUser.name,
          role: selectedRole,
        })
        setUserRole(selectedRole)
        
        // Redirect based on role
        switch (selectedRole) {
          case 'student':
            navigate('/student-dashboard')
            break
          case 'institution':
            navigate('/institution-dashboard')
            break
          case 'admin':
            navigate('/admin-dashboard')
            break
          default:
            navigate('/')
        }
      } else {
        setError('Invalid email or password')
      }
      setIsLoading(false)
    }, 1000)
  }

  const handleDemoLogin = (role) => {
    setSelectedRole(role)
    setFormData({
      email: mockUsers[role].email,
      password: mockUsers[role].password,
    })
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

      {/* Login Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Glass card container */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-black/40 backdrop-blur-xl border border-cyber-blue/20 rounded-2xl p-8">
              {/* Header */}
              <div className="text-center">
                <div className="relative inline-block">
                  <Shield className="mx-auto h-12 w-12 text-cyber-blue" />
                  <div className="absolute inset-0 bg-cyber-blue/20 rounded-full blur-xl animate-pulse"></div>
                </div>
                <h2 className="mt-6 text-3xl font-bold cyber-gradient-text">Welcome Back</h2>
                <p className="mt-2 text-sm text-gray-400">
                  Sign in to your EduBlockchain account
                </p>
              </div>

              {/* Role Selection */}
              <div className="space-y-4 mt-8">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Select Your Role
                </label>
                <div className="space-y-3">
                  {roles.map((role) => (
                    <button
                      key={role.id}
                      onClick={() => setSelectedRole(role.id)}
                      className={`w-full p-4 rounded-lg border transition-all duration-300 ${
                        selectedRole === role.id
                          ? 'border-cyber-blue bg-gradient-to-r ' + role.color + ' bg-opacity-20 shadow-lg shadow-cyber-blue/25'
                          : 'border-gray-600 hover:border-gray-500 bg-black/20 backdrop-blur-sm hover:bg-black/30'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${selectedRole === role.id ? 'bg-white/20' : 'bg-gray-800'}`}>
                          <role.icon className={`w-6 h-6 ${
                            selectedRole === role.id ? 'text-white' : 'text-gray-400'
                          }`} />
                        </div>
                        <div className="text-left">
                          <div className={`font-medium ${
                            selectedRole === role.id ? 'text-white' : 'text-gray-300'
                          }`}>
                            {role.name}
                          </div>
                          <div className={`text-sm ${
                            selectedRole === role.id ? 'text-gray-200' : 'text-gray-500'
                          }`}>
                            {role.description}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Login Form */}
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="cyber-input pl-10 w-full bg-black/30 backdrop-blur-sm border-gray-600 focus:border-cyber-blue"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={formData.password}
                        onChange={handleInputChange}
                        className="cyber-input pl-10 pr-10 w-full bg-black/30 backdrop-blur-sm border-gray-600 focus:border-cyber-blue"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="cyber-button w-full py-3 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                >
                  <span className="relative z-10">{isLoading ? 'Signing in...' : 'Sign In'}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>

              {/* Demo Accounts */}
              <div className="mt-8 p-4 bg-black/30 backdrop-blur-sm border border-gray-700 rounded-lg">
                <h3 className="text-sm font-medium text-gray-300 mb-3">Demo Accounts</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleDemoLogin('student')}
                    className="w-full text-left p-2 rounded hover:bg-white/5 transition-colors duration-200"
                  >
                    <div className="text-xs text-gray-400">Student:</div>
                    <div className="text-sm text-gray-300">student@example.com / student123</div>
                  </button>
                  <button
                    onClick={() => handleDemoLogin('institution')}
                    className="w-full text-left p-2 rounded hover:bg-white/5 transition-colors duration-200"
                  >
                    <div className="text-xs text-gray-400">Institution:</div>
                    <div className="text-sm text-gray-300">institution@example.com / institution123</div>
                  </button>
                  <button
                    onClick={() => handleDemoLogin('admin')}
                    className="w-full text-left p-2 rounded hover:bg-white/5 transition-colors duration-200"
                  >
                    <div className="text-xs text-gray-400">Admin:</div>
                    <div className="text-sm text-gray-300">admin@example.com / admin123</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
