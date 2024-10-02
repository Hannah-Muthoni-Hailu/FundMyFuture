import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Registration from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext';
// import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import StudentDashboard from './components/dashboard/student/StudentDashboard';
import SponsorDashboard from './components/dashboard/sponsor/SponsorDashboard';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="register" element={<Registration />} />
          <Route path="login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              // <ProtectedRoute>
                <Dashboard />
              // </ProtectedRoute>
            }
          />
          <Route path="student" element={<StudentDashboard />}>
            <Route path="overview" />
            <Route path="apply" />
            <Route path="funding" />
            <Route path="status" />
            <Route path="tools" />
          </Route>
          <Route path="sponsor" element={<SponsorDashboard />}>
            <Route path="overview" />
            <Route path="applications" />
            <Route path="contributions" />
            <Route path="profile" />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;



