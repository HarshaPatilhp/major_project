import React, { useState } from 'react'
import { 
  FileText, 
  Search, 
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  Calendar,
  Users,
  CheckCircle,
  Clock,
  AlertCircle,
  ExternalLink,
  MoreVertical
} from 'lucide-react'

export const ManageRecords = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [selectedRecords, setSelectedRecords] = useState([])

  const records = [
    {
      id: 1,
      studentName: 'John Doe',
      studentEmail: 'john.doe@example.com',
      studentId: 'STU2024001',
      title: 'Bachelor of Computer Science',
      issuer: 'Tech University',
      issueDate: '2024-01-15',
      status: 'verified',
      type: 'degree',
      grade: 'First Class Honors',
      credits: '120',
      duration: '4 Years',
      hash: '0x7f9a8b3c4d5e6f1a2b3c4d5e6f7a8b9c',
      transactionId: 'tx_123456789',
      blockchainUrl: 'https://etherscan.io/tx/0x123456789',
      description: 'Completed comprehensive computer science program with specialization in artificial intelligence and machine learning.',
      skills: ['JavaScript', 'Python', 'React', 'Node.js', 'Machine Learning', 'Data Structures', 'Algorithms']
    },
    {
      id: 2,
      studentName: 'Jane Smith',
      studentEmail: 'jane.smith@example.com',
      studentId: 'STU2024002',
      title: 'Web Development Certification',
      issuer: 'Code Academy',
      issueDate: '2024-01-10',
      status: 'verified',
      type: 'certificate',
      grade: 'A+',
      credits: '45',
      duration: '6 Months',
      hash: '0x8b7f9a3c4d5e6f1a2b3c4d5e6f7a8b9c',
      transactionId: 'tx_234567890',
      blockchainUrl: 'https://etherscan.io/tx/0x234567890',
      description: 'Intensive web development program covering modern frontend and backend technologies.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Express', 'Git']
    },
    {
      id: 3,
      studentName: 'Mike Johnson',
      studentEmail: 'mike.johnson@example.com',
      studentId: 'STU2024003',
      title: 'Data Science Specialization',
      issuer: 'Tech University',
      issueDate: '2024-01-05',
      status: 'verified',
      type: 'specialization',
      grade: 'A',
      credits: '30',
      duration: '9 Months',
      hash: '0x9c8b7f3a4d5e6f1a2b3c4d5e6f7a8b9c',
      transactionId: 'tx_345678901',
      blockchainUrl: 'https://etherscan.io/tx/0x345678901',
      description: 'Advanced data science program with focus on statistical analysis, machine learning, and data visualization.',
      skills: ['Python', 'R', 'SQL', 'Tableau', 'Machine Learning', 'Statistics', 'Data Visualization']
    },
    {
      id: 4,
      studentName: 'Sarah Wilson',
      studentEmail: 'sarah.wilson@example.com',
      studentId: 'STU2024004',
      title: 'Machine Learning Course',
      issuer: 'AI Institute',
      issueDate: '2023-12-28',
      status: 'verified',
      type: 'course',
      grade: 'A',
      credits: '15',
      duration: '3 Months',
      hash: '0xa9c8b7f4d5e6f1a2b3c4d5e6f7a8b9c',
      transactionId: 'tx_456789012',
      blockchainUrl: 'https://etherscan.io/tx/0x456789012',
      description: 'Introduction to machine learning fundamentals and practical applications.',
      skills: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Deep Learning']
    },
    {
      id: 5,
      studentName: 'Robert Brown',
      studentEmail: 'robert.brown@example.com',
      studentId: 'STU2024005',
      title: 'Cloud Architecture Certificate',
      issuer: 'Cloud Academy',
      issueDate: '2023-12-20',
      status: 'expired',
      type: 'certificate',
      grade: 'B',
      credits: '20',
      duration: '4 Months',
      hash: '0xb9a8c7f5d6e7f1a2b3c4d5e6f7a8b9c',
      transactionId: 'tx_567890123',
      blockchainUrl: 'https://etherscan.io/tx/0x567890123',
      description: 'Cloud computing fundamentals and architecture design principles.',
      skills: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'DevOps']
    },
    {
      id: 6,
      studentName: 'Emily Davis',
      studentEmail: 'emily.davis@example.com',
      studentId: 'STU2024006',
      title: 'Mobile App Development',
      issuer: 'Dev Institute',
      issueDate: '2023-12-15',
      status: 'pending',
      type: 'course',
      grade: 'In Progress',
      credits: '25',
      duration: '6 Months',
      hash: '0xc9b8a7f6d7e8f1a2b3c4d5e6f7a8b9c',
      transactionId: 'tx_678901234',
      blockchainUrl: 'https://etherscan.io/tx/0x678901234',
      description: 'Mobile application development using React Native and cross-platform technologies.',
      skills: ['React Native', 'JavaScript', 'TypeScript', 'iOS', 'Android', 'Firebase', 'Redux']
    },
    {
      id: 7,
      studentName: 'David Martinez',
      studentEmail: 'david.martinez@example.com',
      studentId: 'STU2024007',
      title: 'Blockchain Development',
      issuer: 'Tech University',
      issueDate: '2023-11-30',
      status: 'verified',
      type: 'specialization',
      grade: 'A',
      credits: '35',
      duration: '12 Months',
      hash: '0xd9a8b7f6d7e8f1a2b3c4d5e6f7a8b9c',
      transactionId: 'tx_789012345',
      blockchainUrl: 'https://etherscan.io/tx/0x789012345',
      description: 'Comprehensive blockchain development program covering smart contracts, DApps, and decentralized applications.',
      skills: ['Solidity', 'Web3.js', 'Ethereum', 'IPFS', 'Truffle', 'Hardhat', 'React']
    },
    {
      id: 8,
      studentName: 'Lisa Anderson',
      studentEmail: 'lisa.anderson@example.com',
      studentId: 'STU2024008',
      title: 'UI/UX Design Certificate',
      issuer: 'Design Institute',
      issueDate: '2023-10-25',
      status: 'verified',
      type: 'certificate',
      grade: 'A',
      credits: '15',
      duration: '3 Months',
      hash: '0xe9a8b7f6d7e8f1a2b3c4d5e6f7a8b9c',
      transactionId: 'tx_890123456',
      blockchainUrl: 'https://etherscan.io/tx/0x890123456',
      description: 'User interface design and user experience principles for modern web applications.',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'CSS', 'JavaScript', 'Prototyping', 'User Research']
    }
  ]

  const filteredRecords = records.filter(record => {
    const matchesSearch = record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.studentId.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || record.status === filterStatus
    return matchesSearch && matchesFilter
  })

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
        return <FileText className="w-4 h-4" />
      case 'certificate':
        return <FileText className="w-4 h-4" />
      case 'specialization':
        return <FileText className="w-4 h-4" />
      case 'course':
        return <FileText className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  const handleSelectRecord = (recordId) => {
    setSelectedRecords(prev => 
      prev.includes(recordId) 
        ? prev.filter(id => id !== recordId)
        : [...prev, recordId]
    )
  }

  const handleSelectAll = () => {
    if (selectedRecords.length === filteredRecords.length) {
      setSelectedRecords([])
    } else {
      setSelectedRecords(filteredRecords.map(record => record.id))
    }
  }

  const viewOnBlockchain = (record) => {
    window.open(record.blockchainUrl, '_blank')
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
          <h1 className="text-3xl font-bold cyber-gradient-text mb-2">Manage Records</h1>
          <p className="text-gray-400">View and manage all issued certificates</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="cyber-button flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
          <button className="cyber-button flex items-center space-x-2">
            <FileText className="w-4 h-4" />
            <span>Generate Report</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="cyber-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-cyber-blue/10">
              <FileText className="w-6 h-6 text-cyber-blue" />
            </div>
            <span className="text-sm text-green-400">+12%</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">1,247</div>
          <div className="text-sm text-gray-400">Total Records</div>
        </div>
        <div className="cyber-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-green-400/10">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
            <span className="text-sm text-green-400">+8%</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">1,156</div>
          <div className="text-sm text-gray-400">Verified</div>
        </div>
        <div className="cyber-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-yellow-400/10">
              <Clock className="w-6 h-6 text-yellow-400" />
            </div>
            <span className="text-sm text-red-400">-2%</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">67</div>
          <div className="text-sm text-gray-400">Pending</div>
        </div>
        <div className="cyber-card">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-cyber-purple/10">
              <Users className="w-6 h-6 text-cyber-purple" />
            </div>
            <span className="text-sm text-green-400">+15%</span>
          </div>
          <div className="text-2xl font-bold text-white mb-1">24</div>
          <div className="text-sm text-gray-400">Expired</div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="cyber-card mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by title, student name, or ID..."
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
              <option value="verified">Verified</option>
              <option value="pending">Pending</option>
              <option value="expired">Expired</option>
            </select>
            <button className="cyber-button flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>More Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Records Table */}
      <div className="cyber-card">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2 text-gray-300">
              <input
                type="checkbox"
                checked={selectedRecords.length === filteredRecords.length}
                onChange={handleSelectAll}
                className="w-4 h-4 text-cyber-blue bg-gray-700 border-gray-600 rounded focus:ring-cyber-blue"
              />
              <span>Select All</span>
            </label>
            {selectedRecords.length > 0 && (
              <span className="text-sm text-cyber-blue">
                {selectedRecords.length} selected
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-cyber-blue">
              <Download className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-cyber-blue">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 text-gray-400 font-medium">
                  <input
                    type="checkbox"
                    checked={selectedRecords.length === filteredRecords.length}
                    onChange={handleSelectAll}
                    className="w-4 h-4 text-cyber-blue bg-gray-700 border-gray-600 rounded focus:ring-cyber-blue"
                  />
                </th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Student</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Certificate</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Issuer</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Issue Date</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Grade</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.map((record) => (
                <tr key={record.id} className="border-b border-gray-800 hover:bg-gray-800/50">
                  <td className="py-3 px-4">
                    <input
                      type="checkbox"
                      checked={selectedRecords.includes(record.id)}
                      onChange={() => handleSelectRecord(record.id)}
                      className="w-4 h-4 text-cyber-blue bg-gray-700 border-gray-600 rounded focus:ring-cyber-blue"
                    />
                  </td>
                  <td className="py-3 px-4">
                    <div>
                      <div className="text-white font-medium">{record.studentName}</div>
                      <div className="text-xs text-gray-500">{record.studentId}</div>
                      <div className="text-xs text-gray-500">{record.studentEmail}</div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded bg-cyber-blue/10">
                        {getTypeIcon(record.type)}
                      </div>
                      <div>
                        <div className="text-white font-medium">{record.title}</div>
                        <div className="text-xs text-gray-500">{record.type}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-300">{record.issuer}</td>
                  <td className="py-3 px-4 text-gray-300">{record.issueDate}</td>
                  <td className="py-3 px-4 text-gray-300">{record.grade || 'N/A'}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(record.status)}`}>
                      {record.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-400 hover:text-cyber-blue">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-cyber-blue">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-400">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectedRecords.length > 0 && (
          <div className="mt-4 p-4 bg-cyber-blue/10 border border-cyber-blue/30 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-cyber-blue">
                {selectedRecords.length} records selected
              </span>
              <div className="flex items-center space-x-2">
                <button className="cyber-button flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download Selected</span>
                </button>
                <button className="px-4 py-2 border border-red-400 rounded-lg text-red-400 hover:bg-red-400/10 flex items-center space-x-2">
                  <Trash2 className="w-4 h-4" />
                  <span>Delete Selected</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  )
}
