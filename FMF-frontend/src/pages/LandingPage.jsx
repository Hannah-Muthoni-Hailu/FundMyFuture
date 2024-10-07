import Header from '../components/landing/Header';
import HeroSection from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Testimonials from '../components/landing/Testimonials';
import HowItWorks from '../components/landing/HowItWorks';
import Partners from '../components/landing/Partners';
import Faq from '../components/landing/Faq';
import NewsletterSignup from '../components/landing/NewsLetterSignup';
import Footer from '../components/landing/Footer'

const LandingPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <Testimonials />
      <HowItWorks />
      <Partners />
      <NewsletterSignup />
      <Faq />
      <Footer />
    </>
  );
};

export default LandingPage;






// function LandingPage() {
//   return (
//     <div className="bg-blue-50 min-h-screen">
//       {/* Hero Section */}
//       <header className="p-6 bg-white shadow-md flex justify-between items-center">
//         <div className="text-2xl font-bold">EduFinance</div>
//         <nav>
//           <ul className="flex space-x-6">
//             <li><a href="#features" className="hover:text-blue-600">Features</a></li>
//             <li><a href="#testimonials" className="hover:text-blue-600">Testimonials</a></li>
//             <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
//           </ul>
//         </nav>
//       </header>

//       {/* Hero Banner */}
//       <section className="flex flex-col items-center justify-center text-center py-20 bg-blue-200">
//         <h1 className="text-4xl font-extrabold text-blue-900 mb-4">Finance Your Education</h1>
//         <p className="text-lg text-blue-700 mb-6">Easy access to loans and financial advice for students.</p>
//         <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700">Get Started</button>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-16 bg-white">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-blue-900">Our Features</h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Feature 1 */}
//           <div className="text-center">
//             <div className="p-6 bg-blue-100 rounded-full mb-4 inline-block">
//               <i className="text-4xl text-blue-600">💼</i>
//             </div>
//             <h3 className="text-xl font-semibold">Loan Plans</h3>
//             <p className="text-blue-700">Flexible loan plans to support your education.</p>
//           </div>
//           {/* Feature 2 */}
//           <div className="text-center">
//             <div className="p-6 bg-blue-100 rounded-full mb-4 inline-block">
//               <i className="text-4xl text-blue-600">📊</i>
//             </div>
//             <h3 className="text-xl font-semibold">Financial Guidance</h3>
//             <p className="text-blue-700">Expert financial advice tailored to your needs.</p>
//           </div>
//           {/* Feature 3 */}
//           <div className="text-center">
//             <div className="p-6 bg-blue-100 rounded-full mb-4 inline-block">
//               <i className="text-4xl text-blue-600">📝</i>
//             </div>
//             <h3 className="text-xl font-semibold">Easy Application</h3>
//             <p className="text-blue-700">Simple and fast application process.</p>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section id="testimonials" className="py-16 bg-blue-50">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-blue-900">What Our Users Say</h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Testimonial 1 */}
//           <div className="p-8 bg-white shadow-lg rounded-lg">
//             <p className="text-blue-700 mb-4">"EduFinance helped me secure a loan quickly and with great rates!"</p>
//             <h4 className="text-blue-900 font-semibold">- John Doe</h4>
//           </div>
//           {/* Testimonial 2 */}
//           <div className="p-8 bg-white shadow-lg rounded-lg">
//             <p className="text-blue-700 mb-4">"Their financial advice was a game changer for me as a student."</p>
//             <h4 className="text-blue-900 font-semibold">- Jane Smith</h4>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer id="contact" className="bg-blue-900 text-white py-8">
//         <div className="flex justify-between items-center container mx-auto">
//           <p>&copy; 2024 EduFinance. All Rights Reserved.</p>
//           <div className="flex space-x-4">
//             <a href="#" className="hover:text-gray-400">Facebook</a>
//             <a href="#" className="hover:text-gray-400">Twitter</a>
//             <a href="#" className="hover:text-gray-400">LinkedIn</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default LandingPage;




// import React from 'react';
// import { ArrowRight, Book, DollarSign, GraduationCap } from 'lucide-react';

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
//       <header className="bg-white shadow-md">
//         <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
//           <div className="text-2xl font-bold text-blue-600">EduFinance</div>
//           <div className="space-x-4">
//             <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
//             <a href="#" className="text-gray-600 hover:text-blue-600">Services</a>
//             <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
//             <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Apply Now</button>
//           </div>
//         </nav>
//       </header>

//       <main className="container mx-auto px-6 py-12">
//         <section className="text-center mb-16">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">Invest in Your Future with EduFinance</h1>
//           <p className="text-xl text-gray-600 mb-8">Affordable education financing solutions to help you achieve your dreams</p>
//           <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition inline-flex items-center">
//             Get Started
//             <ArrowRight className="ml-2" size={20} />
//           </button>
//         </section>

//         <section className="grid md:grid-cols-3 gap-8 mb-16">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <Book className="text-blue-600 mb-4" size={48} />
//             <h2 className="text-xl font-semibold mb-2">Flexible Loan Options</h2>
//             <p className="text-gray-600">Tailored financing solutions to fit your educational needs and budget.</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <DollarSign className="text-blue-600 mb-4" size={48} />
//             <h2 className="text-xl font-semibold mb-2">Competitive Rates</h2>
//             <p className="text-gray-600">Low interest rates and favorable terms to make education more affordable.</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <GraduationCap className="text-blue-600 mb-4" size={48} />
//             <h2 className="text-xl font-semibold mb-2">Career Support</h2>
//             <p className="text-gray-600">Access to resources and mentorship to help you succeed after graduation.</p>
//           </div>
//         </section>

//         <section className="bg-blue-50 p-8 rounded-lg">
//           <h2 className="text-2xl font-bold text-center mb-6">Ready to Start Your Journey?</h2>
//           <div className="max-w-md mx-auto">
//             <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-md mb-4" />
//             <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Request Information</button>
//           </div>
//         </section>
//       </main>

//       <footer className="bg-gray-800 text-white py-8">
//         <div className="container mx-auto px-6 text-center">
//           <p>&copy; 2024 EduFinance. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;





// import React, { useState } from 'react';
// import { ArrowLeft, CheckCircle } from 'lucide-react';

// const ApplyNowPage = () => {
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically handle form submission, e.g., send data to a server
//     setFormSubmitted(true);
//   };

//   if (formSubmitted) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center">
//         <div className="bg-white p-8 rounded-lg shadow-md text-center">
//           <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
//           <h2 className="text-2xl font-bold mb-4">Application Submitted!</h2>
//           <p className="text-gray-600 mb-6">Thank you for applying. We'll review your application and get back to you soon.</p>
//           <button onClick={() => setFormSubmitted(false)} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
//             Back to Form
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
//       <header className="bg-white shadow-md">
//         <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
//           <div className="text-2xl font-bold text-blue-600">EduFinance</div>
//           <a href="#" className="text-gray-600 hover:text-blue-600 flex items-center">
//             <ArrowLeft className="mr-2" size={20} />
//             Back to Home
//           </a>
//         </nav>
//       </header>

//       <main className="container mx-auto px-6 py-12">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Apply for Education Financing</h1>
        
//         <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
//               <input type="text" id="firstName" name="firstName" required
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//             </div>
//             <div>
//               <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
//               <input type="text" id="lastName" name="lastName" required
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//               <input type="email" id="email" name="email" required
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//             </div>
//             <div>
//               <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
//               <input type="tel" id="phone" name="phone" required
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//             </div>
//             <div>
//               <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-1">School Name</label>
//               <input type="text" id="school" name="school" required
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//             </div>
//             <div>
//               <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">Program of Study</label>
//               <input type="text" id="program" name="program" required
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//             </div>
//             <div>
//               <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-1">Requested Loan Amount</label>
//               <input type="number" id="loanAmount" name="loanAmount" required min="0" step="100"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//             </div>
//             <div>
//               <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">Expected Start Date</label>
//               <input type="date" id="startDate" name="startDate" required
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//             </div>
//           </div>
          
//           <div className="mt-6">
//             <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
//             <textarea id="additionalInfo" name="additionalInfo" rows="4"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
//           </div>
          
//           <div className="mt-6">
//             <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition font-semibold">
//               Submit Application
//             </button>
//           </div>
//         </form>
//       </main>

//       <footer className="bg-gray-800 text-white py-8 mt-12">
//         <div className="container mx-auto px-6 text-center">
//           <p>&copy; 2024 EduFinance. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ApplyNowPage;





// import React from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/landing/ui/card';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { DollarSign, BookOpen, Calendar, FileText, Bell, User, LogOut } from 'lucide-react';

// const loanData = [
//   { name: 'Jan', amount: 500 },
//   { name: 'Feb', amount: 1000 },
//   { name: 'Mar', amount: 1500 },
//   { name: 'Apr', amount: 2000 },
//   { name: 'May', amount: 2500 },
//   { name: 'Jun', amount: 3000 },
// ];

// const StudentDashboard = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-white shadow-md">
//         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//           <div className="text-2xl font-bold text-blue-600">EduFinance</div>
//           <nav className="flex items-center space-x-4">
//             <a href="#" className="text-gray-600 hover:text-blue-600 flex items-center">
//               <Bell size={20} className="mr-1" />
//               <span className="hidden md:inline">Notifications</span>
//             </a>
//             <a href="#" className="text-gray-600 hover:text-blue-600 flex items-center">
//               <User size={20} className="mr-1" />
//               <span className="hidden md:inline">Profile</span>
//             </a>
//             <a href="#" className="text-gray-600 hover:text-blue-600 flex items-center">
//               <LogOut size={20} className="mr-1" />
//               <span className="hidden md:inline">Logout</span>
//             </a>
//           </nav>
//         </div>
//       </header>

//       <main className="container mx-auto px-6 py-8">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome back, Sarah!</h1>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">Total Loan Amount</CardTitle>
//               <DollarSign className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">$15,000</div>
//               <p className="text-xs text-muted-foreground">+2.1% from last month</p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">Current Semester</CardTitle>
//               <BookOpen className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">Fall 2024</div>
//               <p className="text-xs text-muted-foreground">2 months remaining</p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">Next Payment Due</CardTitle>
//               <Calendar className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">Oct 15, 2024</div>
//               <p className="text-xs text-muted-foreground">$250 monthly payment</p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">Documents</CardTitle>
//               <FileText className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">5 Pending</div>
//               <p className="text-xs text-muted-foreground">2 new this week</p>
//             </CardContent>
//           </Card>
//         </div>

//         <div className="grid md:grid-cols-2 gap-6">
//           <Card>
//             <CardHeader>
//               <CardTitle>Loan Disbursement Schedule</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <ResponsiveContainer width="100%" height={300}>
//                 <BarChart data={loanData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Bar dataKey="amount" fill="#3b82f6" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader>
//               <CardTitle>Recent Activity</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <ul className="space-y-4">
//                 <li className="bg-gray-50 p-3 rounded-md">
//                   <div className="font-semibold">Loan Disbursement</div>
//                   <div className="text-sm text-gray-600">$3,000 disbursed for Fall 2024</div>
//                   <div className="text-xs text-gray-500">September 1, 2024</div>
//                 </li>
//                 <li className="bg-gray-50 p-3 rounded-md">
//                   <div className="font-semibold">Document Uploaded</div>
//                   <div className="text-sm text-gray-600">Enrollment Verification Form</div>
//                   <div className="text-xs text-gray-500">August 25, 2024</div>
//                 </li>
//                 <li className="bg-gray-50 p-3 rounded-md">
//                   <div className="font-semibold">Payment Received</div>
//                   <div className="text-sm text-gray-600">$250 monthly payment</div>
//                   <div className="text-xs text-gray-500">August 15, 2024</div>
//                 </li>
//               </ul>
//             </CardContent>
//           </Card>
//         </div>
//       </main>

//       <footer className="bg-gray-800 text-white py-8 mt-12">
//         <div className="container mx-auto px-6 text-center">
//           <p>&copy; 2024 EduFinance. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default StudentDashboard;