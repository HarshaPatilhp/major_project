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
        <div className="max-w-4xl w-full">
          {/* Enhanced Glass Card */}
          <div className="relative group">
            {/* Animated border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink rounded-3xl opacity-75 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyber-blue/20 via-cyber-purple/20 to-cyber-pink/20 rounded-3xl animate-pulse"></div>
            
            {/* Main card */}
            <div className="relative bg-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              {/* Animated corner accents */}
              <div className="absolute top-2 left-2 w-2 h-2 bg-cyber-blue rounded-full animate-pulse"></div>
              <div className="absolute top-2 right-2 w-2 h-2 bg-cyber-purple rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 bg-cyber-pink rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-2 right-2 w-2 h-2 bg-cyber-blue rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              
              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Profile Photo */}
                <div className="flex flex-col items-center justify-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full blur-xl opacity-50 animate-pulse"></div>
                    <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-black-800">
                      <img 
                        src="/public/Profile.png"
                        alt="Student Profile"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80"
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h2 className="text-2xl font-bold cyber-gradient-text mb-2">Welcome Back</h2>
                    <p className="text-gray-400 text-sm font-medium">
                      Access your secure blockchain credentials
                    </p>
                  </div>
                </div>

                {/* Right Column - Login Form */}
                <div className="w-full max-w-md">
                  {/* Role Selection */}
                  <div className="space-y-3 mb-6">
                    <label htmlFor="role" className="block text-sm font-semibold text-gray-200 tracking-wide">
                      SELECT YOUR ROLE
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Settings className="h-4 w-4 text-gray-400 group-focus-within:text-cyber-blue transition-colors duration-200" />
                      </div>
                      <select
                        id="role"
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
className="cyber-input pl-10 pr-10 w-full bg-black/60 backdrop-blur-md border border-gray-500/70 focus:border-cyber-blue focus:ring-2 focus:ring-cyber-blue/30 transition-all duration-300 text-white font-medium placeholder-gray-300 py-2.5 appearance-none cursor-pointer text-sm text-center"                      >
                        {roles.map((role) => (
                          <option 
                            key={role.id} 
                            value={role.id}
                            className="bg-gray-800 text-white"
                          >
                            {role.name}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Login Form */}
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-3">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-200 tracking-wide">
                          EMAIL ADDRESS
                        </label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Mail className="h-4 w-4 text-gray-400 group-focus-within:text-cyber-blue transition-colors duration-200" />
                          </div>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="cyber-input pl-10 w-full bg-black/40 backdrop-blur-md border-gray-600/50 focus:border-cyber-blue focus:ring-2 focus:ring-cyber-blue/20 transition-all duration-300 text-white placeholder-gray-500 h-10 text-sm"
                            placeholder="Enter your email address"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-200 tracking-wide">
                          PASSWORD
                        </label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <LockIcon className="h-4 w-4 text-gray-400 group-focus-within:text-cyber-blue transition-colors duration-200" />
                          </div>
                          <input
                            id="password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            required
                            value={formData.password}
                            onChange={handleInputChange}
                            className="cyber-input pl-10 pr-10 w-full bg-black/40 backdrop-blur-md border-gray-600/50 focus:border-cyber-blue focus:ring-2 focus:ring-cyber-blue/20 transition-all duration-300 text-white placeholder-gray-500 h-10 text-sm"
                            placeholder="Enter your password"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-cyber-blue transition-colors duration-200"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                    </div>

                    {error && (
                      <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium backdrop-blur-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          {error}
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="cyber-button w-full py-3 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group text-sm font-bold tracking-wide rounded-xl h-10"
                    >
                      <span className="relative z-10 flex items-center justify-center space-x-2">
                        {isLoading ? (
                          <>
                            <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Authenticating...</span>
                          </>
                        ) : (
                          <>
                            <Shield className="w-3 h-3" />
                            <span>SIGN IN SECURELY</span>
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
                    </button>
                  </form>

                  {/* Demo Accounts */}
                  <div className="mt-6 p-4 bg-black/30 backdrop-blur-md border border-gray-700/50 rounded-xl">
                    <h3 className="text-sm font-bold text-gray-200 mb-3 tracking-wide">DEMO ACCOUNTS</h3>
                    <div className="space-y-2">
                      {Object.entries(mockUsers).map(([role, user]) => (
                        <button
                          key={role}
                          onClick={() => handleDemoLogin(role)}
                          className="w-full text-left p-2 rounded-lg hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-gray-600/50 group"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{role}</div>
                              <div className="text-sm text-gray-300 font-mono">{user.email}</div>
                            </div>
                            <div className="text-xs text-cyber-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              QUICK ACCESS →
                            </div>
                          </div>
                        </button>
                      ))}
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
