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
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Shield className="mx-auto h-12 w-12 text-cyber-blue" />
          <h2 className="mt-6 text-3xl font-bold cyber-gradient-text">Welcome Back</h2>
          <p className="mt-2 text-sm text-gray-400">
            Sign in to your CertChain account
          </p>
        </div>

        {/* Role Selection */}
        <div className="space-y-4">
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
                    ? 'border-cyber-blue bg-gradient-to-r ' + role.color + ' bg-opacity-20'
                    : 'border-gray-600 hover:border-gray-500 glass-dark'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <role.icon className={`w-6 h-6 ${
                    selectedRole === role.id ? 'text-white' : 'text-gray-400'
                  }`} />
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
                  className="cyber-input pl-10 w-full"
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
                  className="cyber-input pl-10 pr-10 w-full"
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
            className="cyber-button w-full py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        {/* Demo Accounts */}
        <div className="mt-8 p-4 glass-dark rounded-lg">
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
  )
}
