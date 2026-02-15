import React, { useState, useContext } from 'react'
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Shield,
  Settings,
  Bell,
  Lock,
  Eye,
  EyeOff,
  Save,
  Upload,
  Download,
  Award,
  Building,
  CheckCircle,
  Camera,
  Users,
  FileText,
  Globe,
  AlertCircle,
  RefreshCw,
  Database
} from 'lucide-react'

export const Profile = ({ userRole }) => {
  const [activeTab, setActiveTab] = useState('profile')
  const [showPassword, setShowPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState('')

  const [profileData, setProfileData] = useState(
    userRole === 'institution' ? {
      institutionName: 'Tech University',
      email: 'admin@techuniversity.edu',
      phone: '+1 (555) 987-6543',
      location: 'Boston, MA',
      website: 'https://techuniversity.edu',
      description: 'Leading institution in technology and innovation education.',
      accreditation: 'Regional Accreditation Board',
      foundedYear: '1965',
      type: 'University',
      studentsCount: '15,000+'
    } : userRole === 'admin' ? {
      firstName: 'System',
      lastName: 'Administrator',
      email: 'admin@edublockchain.com',
      phone: '+1 (555) 000-0000',
      location: 'Global',
      bio: 'System administrator responsible for managing the EduBlockchain platform.',
      website: 'https://edublockchain.com',
      adminLevel: 'Super Admin',
      department: 'System Administration',
      employeeId: 'ADMIN001'
    } : {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      bio: 'Computer Science graduate passionate about blockchain technology and academic innovation.',
      website: 'https://johndoe.dev',
      linkedin: 'https://linkedin.com/in/johndoe',
      studentId: 'STU2024001'
    }
  )

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    verificationAlerts: true,
    systemUpdates: true,
    marketingEmails: false,
  })

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  if (userRole === 'institution') {
    tabs.splice(1, 0, { id: 'records', label: 'Records', icon: FileText })
    tabs.splice(2, 0, { id: 'students', label: 'Students', icon: Users })
  } else if (userRole === 'admin') {
    tabs.splice(1, 0, { id: 'admin', label: 'Admin', icon: Shield })
    tabs.splice(2, 0, { id: 'system', label: 'System', icon: Settings })
  }

  const handleProfileChange = (e) => {
    const { name, value } = e.target
    setProfileData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePasswordChange = (e) => {
    const { name, value } = e.target
    setPasswordData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleNotificationChange = (setting) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev[setting],
    }))
  }

  const saveProfile = async () => {
    setIsSaving(true)
    setSaveStatus('')
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      setSaveStatus('success')
      setTimeout(() => setSaveStatus(''), 3000)
    }, 1500)
  }

  const changePassword = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setSaveStatus('password-mismatch')
      return
    }

    setIsSaving(true)
    setSaveStatus('')
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      setSaveStatus('password-success')
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      })
      setTimeout(() => setSaveStatus(''), 3000)
    }, 1500)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold cyber-gradient-text mb-2">Profile Settings</h1>
        <p className="text-gray-400">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Profile Header */}
      <div className="cyber-card mb-8">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-white">
                {userRole === 'institution' 
                  ? profileData.institutionName?.split(' ').map(word => word[0]).join('').slice(0, 2) || 'TU'
                  : userRole === 'admin'
                  ? `${profileData.firstName?.[0] || ''}${profileData.lastName?.[0] || ''}`.toUpperCase()
                  : `${profileData.firstName?.[0] || ''}${profileData.lastName?.[0] || ''}`.toUpperCase()
                }
              </span>
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-cyber-blue rounded-full hover:bg-cyber-purple transition-colors">
              <Camera className="w-4 h-4 text-white" />
            </button>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">
              {userRole === 'institution' ? profileData.institutionName : `${profileData.firstName} ${profileData.lastName}`}
            </h2>
            <p className="text-gray-400 mb-2">{profileData.email}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center space-x-1">
                {userRole === 'institution' ? <Building className="w-4 h-4" /> : userRole === 'admin' ? <Shield className="w-4 h-4" /> : <Award className="w-4 h-4" />}
                <span>{userRole === 'institution' ? 'Institution' : userRole === 'admin' ? 'Administrator' : 'Student'}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Joined January 2024</span>
              </span>
              <span className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Verified</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-8 border-b border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-3 border-b-2 transition-colors ${
              activeTab === tab.id
                ? 'border-cyber-blue text-cyber-blue'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="cyber-card">
        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              {userRole === 'institution' ? 'Institution Information' : 'Personal Information'}
            </h3>
            
            {saveStatus === 'success' && (
              <div className="mb-4 p-3 rounded-lg bg-green-400/10 border border-green-400/30">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400">Profile updated successfully!</span>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userRole === 'institution' ? (
                <>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Institution Name</label>
                    <input
                      type="text"
                      name="institutionName"
                      value={profileData.institutionName}
                      onChange={handleProfileChange}
                      className="cyber-input w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleProfileChange}
                      className="cyber-input w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleProfileChange}
                      className="cyber-input w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={profileData.location}
                      onChange={handleProfileChange}
                      className="cyber-input w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Website</label>
                    <input
                      type="url"
                      name="website"
                      value={profileData.website}
                      onChange={handleProfileChange}
                      className="cyber-input w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Type</label>
                    <select
                      name="type"
                      value={profileData.type}
                      onChange={handleProfileChange}
                      className="cyber-input w-full"
                    >
                      <option value="University">University</option>
                      <option value="College">College</option>
                      <option value="School">School</option>
                      <option value="Training Center">Training Center</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Founded Year</label>
                    <input
                      type="text"
                      name="foundedYear"
                      value={profileData.foundedYear}
                      onChange={handleProfileChange}
                      className="cyber-input w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Students Count</label>
                    <input
                      type="text"
                      name="studentsCount"
                      value={profileData.studentsCount}
                      onChange={handleProfileChange}
                      className="cyber-input w-full"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                    <textarea
                      name="description"
                      value={profileData.description}
                      onChange={handleProfileChange}
                      rows={4}
                      className="cyber-input w-full"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Accreditation</label>
                    <input
                      type="text"
                      name="accreditation"
                      value={profileData.accreditation}
                      onChange={handleProfileChange}
                      className="cyber-input w-full"
                    />
                  </div>
                </>
              ) : userRole === 'admin' ? (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={profileData.firstName}
                      onChange={handleProfileChange}
                      className="cyber-input w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={profileData.lastName}
                      onChange={handleProfileChange}
                      className="cyber-input w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleProfileChange}
                      className="cyber-input w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleProfileChange}
                      className="cyber-input w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Admin Level</label>
                    <select
                      name="adminLevel"
                      value={profileData.adminLevel}
                      onChange={handleProfileChange}
                      className="cyber-input w-full"
                    >
                      <option value="Super Admin">Super Admin</option>
                      <option value="Admin">Admin</option>
                      <option value="Moderator">Moderator</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Department</label>
                    <input
                      type="text"
                      name="department"
                      value={profileData.department}
                      onChange={handleProfileChange}
                      className="cyber-input w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Employee ID</label>
                    <input
                      type="text"
                      name="employeeId"
                      value={profileData.employeeId}
                      onChange={handleProfileChange}
                      className="cyber-input w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={profileData.location}
                      onChange={handleProfileChange}
                      className="cyber-input w-full"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Bio</label>
                    <textarea
                      name="bio"
                      value={profileData.bio}
                      onChange={handleProfileChange}
                      rows={4}
                      className="cyber-input w-full"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Website</label>
                    <input
                      type="url"
                      name="website"
                      value={profileData.website}
                      onChange={handleProfileChange}
                      className="cyber-input w-full"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={profileData.firstName}
                      onChange={handleProfileChange}
                      className="cyber-input w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={profileData.lastName}
                      onChange={handleProfileChange}
                      className="cyber-input w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleProfileChange}
                      className="cyber-input w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleProfileChange}
                      className="cyber-input w-full"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={profileData.location}
                      onChange={handleProfileChange}
                      className="cyber-input w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Student ID</label>
                    <input
                      type="text"
                      name="studentId"
                      value={profileData.studentId}
                      onChange={handleProfileChange}
                      className="cyber-input w-full"
                      readOnly
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Bio</label>
                    <textarea
                      name="bio"
                      value={profileData.bio}
                      onChange={handleProfileChange}
                      rows={4}
                      className="cyber-input w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Website</label>
                    <input
                      type="url"
                      name="website"
                      value={profileData.website}
                      onChange={handleProfileChange}
                      className="cyber-input w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">LinkedIn</label>
                    <input
                      type="url"
                      name="linkedin"
                      value={profileData.linkedin}
                      onChange={handleProfileChange}
                      className="cyber-input w-full"
                    />
                  </div>
                </>
              )}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={saveProfile}
                disabled={isSaving}
                className="cyber-button flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSaving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Saving...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Save Changes</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Institution Records Tab */}
        {activeTab === 'records' && userRole === 'institution' && (
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Uploaded Records</h3>
            <div className="space-y-4">
              <div className="p-4 bg-black/30 rounded-lg border border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-white">Computer Science Degree</h4>
                    <p className="text-sm text-gray-400">Issued to: John Doe • 2024</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 text-xs bg-green-400/20 text-green-400 rounded">Verified</span>
                    <button className="p-2 text-gray-400 hover:text-cyber-blue">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-black/30 rounded-lg border border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-white">Business Administration Certificate</h4>
                    <p className="text-sm text-gray-400">Issued to: Jane Smith • 2024</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 text-xs bg-green-400/20 text-green-400 rounded">Verified</span>
                    <button className="p-2 text-gray-400 hover:text-cyber-blue">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Institution Students Tab */}
        {activeTab === 'students' && userRole === 'institution' && (
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Registered Students</h3>
            <div className="space-y-4">
              <div className="p-4 bg-black/30 rounded-lg border border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-white">JD</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">John Doe</h4>
                      <p className="text-sm text-gray-400">john.doe@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 text-xs bg-cyber-blue/20 text-cyber-blue rounded">Active</span>
                    <span className="text-sm text-gray-400">5 certificates</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-black/30 rounded-lg border border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-white">JS</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Jane Smith</h4>
                      <p className="text-sm text-gray-400">jane.smith@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 text-xs bg-cyber-blue/20 text-cyber-blue rounded">Active</span>
                    <span className="text-sm text-gray-400">3 certificates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Admin Tab */}
        {activeTab === 'admin' && userRole === 'admin' && (
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Admin Settings</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-black/30 rounded-lg border border-gray-700">
                  <h4 className="font-medium text-white mb-3">User Management</h4>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        defaultChecked={true}
                        className="w-4 h-4 text-cyber-blue bg-gray-700 border-gray-600 rounded focus:ring-cyber-blue"
                      />
                      <span className="text-gray-300">Can manage users</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        defaultChecked={true}
                        className="w-4 h-4 text-cyber-blue bg-gray-700 border-gray-600 rounded focus:ring-cyber-blue"
                      />
                      <span className="text-gray-300">Can delete users</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        defaultChecked={false}
                        className="w-4 h-4 text-cyber-blue bg-gray-700 border-gray-600 rounded focus:ring-cyber-blue"
                      />
                      <span className="text-gray-300">Can ban users</span>
                    </label>
                  </div>
                </div>
                <div className="p-4 bg-black/30 rounded-lg border border-gray-700">
                  <h4 className="font-medium text-white mb-3">Content Management</h4>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        defaultChecked={true}
                        className="w-4 h-4 text-cyber-blue bg-gray-700 border-gray-600 rounded focus:ring-cyber-blue"
                      />
                      <span className="text-gray-300">Can approve institutions</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        defaultChecked={true}
                        className="w-4 h-4 text-cyber-blue bg-gray-700 border-gray-600 rounded focus:ring-cyber-blue"
                      />
                      <span className="text-gray-300">Can verify certificates</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        defaultChecked={false}
                        className="w-4 h-4 text-cyber-blue bg-gray-700 border-gray-600 rounded focus:ring-cyber-blue"
                      />
                      <span className="text-gray-300">Can moderate content</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-black/30 rounded-lg border border-gray-700">
                <h4 className="font-medium text-white mb-3">System Access</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        defaultChecked={true}
                        className="w-4 h-4 text-cyber-blue bg-gray-700 border-gray-600 rounded focus:ring-cyber-blue"
                      />
                      <span className="text-gray-300">System Settings</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        defaultChecked={true}
                        className="w-4 h-4 text-cyber-blue bg-gray-700 border-gray-600 rounded focus:ring-cyber-blue"
                      />
                      <span className="text-gray-300">Security Center</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        defaultChecked={true}
                        className="w-4 h-4 text-cyber-blue bg-gray-700 border-gray-600 rounded focus:ring-cyber-blue"
                      />
                      <span className="text-gray-300">Analytics Dashboard</span>
                    </label>
                  </div>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        defaultChecked={false}
                        className="w-4 h-4 text-cyber-blue bg-gray-700 border-gray-600 rounded focus:ring-cyber-blue"
                      />
                      <span className="text-gray-300">Database Access</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        defaultChecked={false}
                        className="w-4 h-4 text-cyber-blue bg-gray-700 border-gray-600 rounded focus:ring-cyber-blue"
                      />
                      <span className="text-gray-300">Server Management</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        defaultChecked={true}
                        className="w-4 h-4 text-cyber-blue bg-gray-700 border-gray-600 rounded focus:ring-cyber-blue"
                      />
                      <span className="text-gray-300">Audit Logs</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* System Tab */}
        {activeTab === 'system' && userRole === 'admin' && (
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">System Configuration</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-black/30 rounded-lg border border-gray-700">
                  <h4 className="font-medium text-white mb-3">System Status</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Database Status</span>
                      <span className="flex items-center space-x-1 text-green-400">
                        <CheckCircle className="w-4 h-4" />
                        <span>Connected</span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Blockchain Network</span>
                      <span className="flex items-center space-x-1 text-green-400">
                        <CheckCircle className="w-4 h-4" />
                        <span>Online</span>
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
                      <span className="text-sm text-gray-400">Email Service</span>
                      <span className="flex items-center space-x-1 text-yellow-400">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Maintenance</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-black/30 rounded-lg border border-gray-700">
                  <h4 className="font-medium text-white mb-3">Quick Actions</h4>
                  <div className="space-y-3">
                    <button className="w-full cyber-button flex items-center justify-center space-x-2">
                      <RefreshCw className="w-4 h-4" />
                      <span>Restart Services</span>
                    </button>
                    <button className="w-full cyber-button flex items-center justify-center space-x-2">
                      <Database className="w-4 h-4" />
                      <span>Backup Database</span>
                    </button>
                    <button className="w-full cyber-button flex items-center justify-center space-x-2">
                      <Shield className="w-4 h-4" />
                      <span>Security Scan</span>
                    </button>
                    <button className="w-full cyber-button flex items-center justify-center space-x-2 bg-red-400/20 text-red-400 hover:bg-red-400/30">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Emergency Mode</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-black/30 rounded-lg border border-gray-700">
                <h4 className="font-medium text-white mb-3">System Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Version:</span>
                    <span className="text-white ml-2">v2.1.0</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-white ml-2">99.9%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Last Backup:</span>
                    <span className="text-white ml-2">2 hours ago</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Active Users:</span>
                    <span className="text-white ml-2">1,247</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Security Settings</h3>
            
            {saveStatus === 'password-success' && (
              <div className="mb-4 p-3 rounded-lg bg-green-400/10 border border-green-400/30">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400">Password changed successfully!</span>
                </div>
              </div>
            )}

            {saveStatus === 'password-mismatch' && (
              <div className="mb-4 p-3 rounded-lg bg-red-400/10 border border-red-400/30">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 text-red-400" />
                  <span className="text-red-400">New passwords do not match!</span>
                </div>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Current Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="currentPassword"
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                    className="cyber-input pr-10 w-full"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">New Password</label>
                <div className="relative">
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    name="newPassword"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                    className="cyber-input pr-10 w-full"
                  />
                  <button
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Confirm New Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  className="cyber-input w-full"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={changePassword}
                disabled={isSaving}
                className="cyber-button flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSaving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Updating...</span>
                  </>
                ) : (
                  <>
                    <Shield className="w-4 h-4" />
                    <span>Change Password</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Notification Preferences</h3>
            <div className="space-y-4">
              {Object.entries(notificationSettings).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-4 bg-black/30 rounded-lg">
                  <div>
                    <h4 className="font-medium text-white capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {key === 'emailNotifications' && 'Receive notifications via email'}
                      {key === 'smsNotifications' && 'Receive notifications via SMS'}
                      {key === 'verificationAlerts' && 'Alerts when certificates are verified'}
                      {key === 'systemUpdates' && 'Important system updates and maintenance'}
                      {key === 'marketingEmails' && 'Promotional emails and new features'}
                    </p>
                  </div>
                  <button
                    onClick={() => handleNotificationChange(key)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      value ? 'bg-cyber-blue' : 'bg-gray-600'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        value ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Account Settings</h3>
            <div className="space-y-6">
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-medium text-white mb-2">Export Data</h4>
                <p className="text-sm text-gray-400 mb-4">
                  Download all your certificates and personal data
                </p>
                <button className="glass flex items-center space-x-2 px-4 py-2 hover:bg-white/20 transition-all duration-300">
                  <Download className="w-4 h-4" />
                  <span>Export All Data</span>
                </button>
              </div>
              
              <div className="p-4 bg-black/30 rounded-lg">
                <h4 className="font-medium text-white mb-2">Privacy Settings</h4>
                <p className="text-sm text-gray-400 mb-4">
                  Control who can see your certificates and profile information
                </p>
                <button className="glass flex items-center space-x-2 px-4 py-2 hover:bg-white/20 transition-all duration-300">
                  <Shield className="w-4 h-4" />
                  <span>Manage Privacy</span>
                </button>
              </div>

              <div className="p-4 bg-red-400/10 border border-red-400/30 rounded-lg">
                <h4 className="font-medium text-red-400 mb-2">Danger Zone</h4>
                <p className="text-sm text-gray-400 mb-4">
                  Permanently delete your account and all associated data
                </p>
                <button className="bg-red-400/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-400/30 transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
