
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

// Pages - student
import StOverview from './pages/stOverviewPage';
import StApplication from './pages/stApplicationPage';
import StFunding from './pages/stFundingPage';
import StRepayment from './pages/stRepaymentPage';
import StLiteracy from './pages/stLiteracyPage';
import StProfile from './pages/stProfilePage';
import StDocuments from './pages/stDocumentsPage';
import StNotification from './pages/stNotificationPage';
import StSupport from './pages/stSupportPage';
import StSettings from './pages/stSettingsPage';

// Pages - sponsor
import SpOverview from './pages/spOverviewPage';
import SpApplications from './pages/spApplicationsPage';
import SpMessages from './pages/spMessagesPage';
import SpProfile from './pages/spProfilePage';
import SpSettings from './pages/spSettingsPage';
import SpReports from './pages/spReportsPage';

// Auth Pages
import StepOneForm from './components/Auth/UserDetails';
import Approval from './components/Auth/Approval';
import ResetPassword from './components/Auth/ResetPassword';
import FinalStepForm from './components/Auth/FinalStepForm';
import StepThreeForm from './components/Auth/FinancialDetails';
import StepTwoForm from './components/Auth/UserProfile';

// Context
import { AuthProvider } from './context/AuthContext';
import { FormProvider } from './context/FormContext';

const App = () => {
    return (
        <AuthProvider>
            <FormProvider>
                <Router>
                    <Routes>
                        {/* Landing Routes */}
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/reset" element={<ResetPassword />} />
                        <Route path="/signup/step-one" element={<StepOneForm />} />
                        <Route path="/signup/step-two" element={<StepTwoForm />} />
                        <Route path="/signup/step-three" element={<StepThreeForm />} />
                        <Route path="/signup/final-step" element={<FinalStepForm />} />
                        <Route path="/signup/approve" element={<Approval />} />

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
                            <Route path="overview" element={<SpOverview />} />
                            <Route path="applications" element={<SpApplications />} />
                            <Route path="messages" element={<SpMessages />} />
                            <Route path="profile" element={<SpProfile />} />
                            <Route path="settings" element={<SpSettings />} />
                            <Route path="reports" element={<SpReports />} />
                        </Route>
                    </Routes>
                </Router>
            </FormProvider>
        </AuthProvider>
    );
};

export default App;



