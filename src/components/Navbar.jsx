import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {
  Shield,
  User,
  LogOut,
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  Building,
  Settings
} from 'lucide-react'

export const Navbar = ({ user, setUser, setUserRole, userRole }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLogout = () => {
    setUser(null)
    setUserRole(null)
    navigate('/')
  }

  const getNavItems = () => {
    if (user) {
      if (userRole === 'student') {
        return [
          { name: 'Dashboard', path: '/student-dashboard' },
          { name: 'My Records', path: '/my-records' },
          { name: 'Share & Verify', path: '/share-verify' },
        ]
      } else if (userRole === 'institution') {
        return [
          { name: 'Dashboard', path: '/institution-dashboard' },
          { name: 'Upload Record', path: '/upload-record' },
          { name: 'Manage Records', path: '/manage-records' },
          { name: 'Analytics', path: '/institution-analytics' },
          { name: 'Profile', path: '/profile' },
        ]
      } else if (userRole === 'admin') {
        return [
          { name: 'Dashboard', path: '/admin-dashboard' },
          { name: 'Manage Institutions', path: '/manage-institutions' },
          { name: 'System Settings', path: '/system-settings' },
          { name: 'Security Center', path: '/security-center' },
          { name: 'Analytics', path: '/analytics' },
          { name: 'Profile', path: '/profile' },
        ]
      }
    }

    return [
      { name: 'Home', path: '/' },
      { name: 'Features', path: '/features' },
      { name: 'How it Works', path: '/how-it-works' },
      { name: 'About', path: '/about' },
    ]
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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">EduBlockchain</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {getNavItems().map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors
                  ${location.pathname === item.path
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
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-cyber-blue/30 hover:border-cyber-blue/50"
                >
                  {getRoleIcon()}
                  <span className="text-sm text-white">{user.name || user.email}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-md border border-cyber-blue/30 rounded-lg">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-cyber-blue"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-400 hover:text-red-300"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="cyber-button">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md">
            {getNavItems().map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-gray-300 hover:text-cyber-blue"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
