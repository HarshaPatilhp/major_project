import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Shield, User, LogOut, Menu, X, ChevronDown, GraduationCap, Building, Settings, BookOpen, Home, Info } from 'lucide-react'

export const Navbar = ({ user, setUser, setUserRole, userRole }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = () => {
    setUser(null)
    setUserRole(null)
    navigate('/')
  }

  const getNavItems = () => {
    // Always show these main navigation items as shown in the reference image
    const mainNavItems = [
      { name: 'Home', path: '/' },
      { name: 'Features', path: '/features' },
      { name: 'How it Works', path: '/how-it-works' },
      { name: 'About', path: '/about' },
    ]

    // If user is logged in, add role-specific items
    if (user) {
      if (userRole === 'student') {
        return [
          ...mainNavItems,
          { name: 'Dashboard', path: '/student-dashboard' },
          { name: 'My Records', path: '/my-records' },
          { name: 'Share & Verify', path: '/share-verify' },
        ]
      } else if (userRole === 'institution') {
        return [
          ...mainNavItems,
          { name: 'Dashboard', path: '/institution-dashboard' },
          { name: 'Upload Record', path: '/upload-record' },
        ]
      } else if (userRole === 'admin') {
        return [
          ...mainNavItems,
          { name: 'Dashboard', path: '/admin-dashboard' },
        ]
      }
    }

    return mainNavItems
  }

  const getRoleIcon = () => {
    switch (userRole) {
      case 'student':
        return <GraduationCap className="w-4 h-4" />
      case 'institution':
        return <Building className="w-4 h-4" />
      case 'admin':
        return <Settings className="w-4 h-4" />
      default:
        return <User className="w-4 h-4" />
    }
  }

  return (
    <nav className="glass sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">EduBlockchain</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {getNavItems().map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-cyber-blue'
                    : 'text-gray-300 hover:text-cyber-blue'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-cyber-blue/30 hover:border-cyber-blue/50 transition-all duration-300"
                >
                  {getRoleIcon()}
                  <span className="text-sm font-medium text-white">{user.name || user.email}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 glass-dark border border-cyber-blue/30 rounded-lg shadow-lg">
                    <div className="py-1">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-cyber-blue hover:bg-white/5"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-white/5"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="cyber-button">
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-cyber-blue"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {getNavItems().map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-cyber-blue bg-white/5'
                      : 'text-gray-300 hover:text-cyber-blue hover:bg-white/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {user && (
                <>
                  <Link
                    to="/profile"
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyber-blue hover:bg-white/5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="w-4 h-4" />
                    <span>Profile</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium text-red-400 hover:text-red-300 hover:bg-white/5"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                  </button>
                </>
              )}
              
              {!user && (
                <Link
                  to="/login"
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-cyber-blue bg-white/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
