import React, { useState } from 'react'
import { 
  Building, 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  FileText,
  Shield,
  Download
} from 'lucide-react'

export const ManageInstitutions = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [selectedInstitution, setSelectedInstitution] = useState(null)

  const institutions = [
    {
      id: 1,
      name: 'Stanford University',
      email: 'admin@stanford.edu',
      phone: '+1 (650) 723-2300',
      location: 'Stanford, CA',
      type: 'University',
      status: 'active',
      studentsCount: '17,000',
      certificatesIssued: '45,234',
      joinedDate: '2023-01-15',
      accreditation: 'WASC Senior College and University Commission',
      website: 'https://stanford.edu'
    },
    {
      id: 2,
      name: 'MIT',
      email: 'admin@mit.edu',
      phone: '+1 (617) 253-1000',
      location: 'Cambridge, MA',
      type: 'University',
      status: 'active',
      studentsCount: '11,500',
      certificatesIssued: '32,156',
      joinedDate: '2023-02-20',
      accreditation: 'New England Commission of Higher Education',
      website: 'https://mit.edu'
    },
    {
      id: 3,
      name: 'Tech Training Center',
      email: 'info@techtraining.com',
      phone: '+1 (555) 123-4567',
      location: 'Austin, TX',
      type: 'Training Center',
      status: 'pending',
      studentsCount: '500',
      certificatesIssued: '1,234',
      joinedDate: '2024-01-10',
      accreditation: 'Pending',
      website: 'https://techtraining.com'
    },
    {
      id: 4,
      name: 'Community College',
      email: 'admin@communitycollege.edu',
      phone: '+1 (555) 987-6543',
      location: 'Portland, OR',
      type: 'College',
      status: 'suspended',
      studentsCount: '2,500',
      certificatesIssued: '5,678',
      joinedDate: '2023-06-15',
      accreditation: 'Northwest Commission on Colleges and Universities',
      website: 'https://communitycollege.edu'
    }
  ]

  const filteredInstitutions = institutions.filter(institution => {
    const matchesSearch = institution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         institution.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || institution.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'text-green-400 bg-green-400/10'
      case 'pending':
        return 'text-yellow-400 bg-yellow-400/10'
      case 'suspended':
        return 'text-red-400 bg-red-400/10'
      default:
        return 'text-gray-400 bg-gray-400/10'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-4 h-4" />
      case 'pending':
        return <AlertTriangle className="w-4 h-4" />
      case 'suspended':
        return <XCircle className="w-4 h-4" />
      default:
        return <Shield className="w-4 h-4" />
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold cyber-gradient-text mb-2">Manage Institutions</h1>
          <p className="text-gray-400">View and manage registered institutions</p>
        </div>
        <button className="cyber-button flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Institution</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search institutions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="cyber-input pl-10 w-full"
          />
        </div>
        <div className="flex gap-2">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="cyber-input"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="suspended">Suspended</option>
          </select>
          <button className="cyber-button flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Institutions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredInstitutions.map((institution) => (
          <div key={institution.id} className="cyber-card hover:border-cyber-blue/50 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{institution.name}</h3>
                  <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs ${getStatusColor(institution.status)}`}>
                    {getStatusIcon(institution.status)}
                    <span>{institution.status}</span>
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-cyber-blue">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-cyber-blue">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-400">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <span>{institution.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="w-4 h-4" />
                <span>{institution.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>{institution.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Building className="w-4 h-4" />
                <span>{institution.type}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-700">
              <div>
                <div className="text-2xl font-bold text-white">{institution.studentsCount}</div>
                <div className="text-sm text-gray-400">Students</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{institution.certificatesIssued}</div>
                <div className="text-sm text-gray-400">Certificates</div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {institution.joinedDate}</span>
                </div>
                <button className="text-cyber-blue hover:text-cyber-purple text-sm">
                  View Details →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Overview */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="cyber-card">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-white">{institutions.length}</div>
              <div className="text-sm text-gray-400">Total Institutions</div>
            </div>
            <Building className="w-8 h-8 text-cyber-blue" />
          </div>
        </div>
        <div className="cyber-card">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-green-400">
                {institutions.filter(i => i.status === 'active').length}
              </div>
              <div className="text-sm text-gray-400">Active</div>
            </div>
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
        </div>
        <div className="cyber-card">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-yellow-400">
                {institutions.filter(i => i.status === 'pending').length}
              </div>
              <div className="text-sm text-gray-400">Pending</div>
            </div>
            <AlertTriangle className="w-8 h-8 text-yellow-400" />
          </div>
        </div>
        <div className="cyber-card">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-red-400">
                {institutions.filter(i => i.status === 'suspended').length}
              </div>
              <div className="text-sm text-gray-400">Suspended</div>
            </div>
            <XCircle className="w-8 h-8 text-red-400" />
          </div>
        </div>
      </div>
    </div>
  )
}
