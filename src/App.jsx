import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { StudentDashboard } from './pages/StudentDashboard'
import { StudentRecords } from './pages/StudentRecords'
import { RecordDetails } from './pages/RecordDetails'
import { ShareVerify } from './pages/ShareVerify'
import { InstitutionDashboard } from './pages/InstitutionDashboard'
import { UploadRecord } from './pages/UploadRecord'
import { ManageRecords } from './pages/ManageRecords'
import { InstitutionAnalytics } from './pages/InstitutionAnalytics'
import { AdminDashboard } from './pages/AdminDashboard'
import { Profile } from './pages/Profile'
import { ManageInstitutions } from './pages/ManageInstitutions'
import { SystemSettings } from './pages/SystemSettings'
import { SecurityCenter } from './pages/SecurityCenter'
import { Analytics } from './pages/Analytics'
import { PublicVerification } from './pages/PublicVerification'
import { Navbar } from './components/Navbar'
import { Features } from './pages/Features'
import { HowItWorks } from './pages/HowItWorks'
import { About } from './pages/About'
import './index.css'

function App() {
  const [user, setUser] = useState(null)
  const [userRole, setUserRole] = useState(null)

  return (
    <Router>
      <div className="min-h-screen bg-cyber-darker">
        <Navbar user={user} setUser={setUser} setUserRole={setUserRole} userRole={userRole} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/login" element={<Login setUser={setUser} setUserRole={setUserRole} />} />
          <Route path="/student-dashboard" element={userRole === 'student' ? <StudentDashboard /> : <Navigate to="/login" />} />
          <Route path="/my-records" element={userRole === 'student' ? <StudentRecords /> : <Navigate to="/login" />} />
          <Route path="/record-details/:id" element={userRole === 'student' ? <RecordDetails /> : <Navigate to="/login" />} />
          <Route path="/share-verify" element={userRole === 'student' ? <ShareVerify /> : <Navigate to="/login" />} />
          <Route path="/institution-dashboard" element={userRole === 'institution' ? <InstitutionDashboard /> : <Navigate to="/login" />} />
          <Route path="/upload-record" element={userRole === 'institution' ? <UploadRecord /> : <Navigate to="/login" />} />
          <Route path="/manage-records" element={userRole === 'institution' ? <ManageRecords /> : <Navigate to="/login" />} />
          <Route path="/institution-analytics" element={userRole === 'institution' ? <InstitutionAnalytics /> : <Navigate to="/login" />} />
          <Route path="/admin-dashboard" element={userRole === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />} />
          <Route path="/manage-institutions" element={userRole === 'admin' ? <ManageInstitutions /> : <Navigate to="/login" />} />
          <Route path="/system-settings" element={userRole === 'admin' ? <SystemSettings /> : <Navigate to="/login" />} />
          <Route path="/security-center" element={userRole === 'admin' ? <SecurityCenter /> : <Navigate to="/login" />} />
          <Route path="/analytics" element={userRole === 'admin' ? <Analytics /> : <Navigate to="/login" />} />
          <Route path="/public-verification" element={<PublicVerification />} />
          <Route path="/profile" element={user ? <Profile userRole={userRole} /> : <Navigate to="/login" />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
