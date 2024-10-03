
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Registration from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext';
// import ProtectedRoute from './components/ProtectedRoute';
// import Dashboard from './pages/Dashboard';

// Pages - student
import StOverview from './pages/StOverviewPage';
import StApplication from './pages/stApplicationPage';
import StFunding from './pages/stFundingPage';
import StRepayment from './pages/stRepaymentPage';
import StLiteracy from './pages/stLiteracyPage';
import StProfile from './pages/stProfilePage';
import StDocuments from './pages/stDocumentsPage';
import StNotification from './pages/stNotificationPage';
import StSupport from './pages/stSupportPage';
import StSettings from './pages/stSettingsPage';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* Landing Routes */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="register" element={<Registration />} />
                    <Route path="login" element={<LoginPage />} />
                    {/* <Route
                        path="/dashboard"
                        element={
                            // <ProtectedRoute>
                            <Dashboard />
                            // </ProtectedRoute>
                        }
                    /> */}
                    {/* Student Dashboaard */}
                    <Route path="student">
                        <Route path="overview" element={<StOverview />} />
                        <Route path="apply" element={<StApplication />} />
                        <Route path="funding" element={<StFunding />} />
                        <Route path="repayment" element={<StRepayment />} />
                        <Route path="learn" element={<StLiteracy />} />
                        <Route path="profile" element={<StProfile />} />
                        <Route path="docs" element={<StDocuments />} />
                        <Route path="support" element={<StSupport />} />
                        <Route path="notifications" element={<StNotification />} />
                        <Route path="settings" element={<StSettings />} />
                    </Route>
                    {/* Sponsor Dashboard */}
                    <Route path="sponsor">
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



