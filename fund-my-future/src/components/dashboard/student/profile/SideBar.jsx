
import { Link } from "react-router-dom";

// library icons
import { Bell, BookOpen, DollarSign, EllipsisVertical, FileText, Folder, GraduationCap, HelpCircle, LogOut, Settings, TrendingUp, User } from "lucide-react";


const SideBar = () => {

    return (
        <div className="relative w-64 h-screen">

            <div className="flex items-center p-4 fixed w-64 top-6">
                <GraduationCap className="text-orange-800" width={40} />
                <span className="font-bold text-xl text-orange-800 fixed left-14">Fund My Future</span>
            </div>

            <nav className="mt-6 fixed w-64 top-16">
            <Link to="/student/overview" className="flex items-center py-2 px-4 text-white hover:bg-indigo-100 hover:text-indigo-500">
                    <EllipsisVertical className="w-5 h-5 mr-3" />
                    Overview
                </Link>

                <Link to="/student/apply" className="flex items-center py-2 px-4 text-white hover:bg-indigo-100 hover:text-indigo-500">
                    <DollarSign className="w-5 h-5 mr-3" />
                    Apply Funding
                </Link>
                
                <Link to="/student/funding" className="flex items-center py-2 px-4 text-white hover:bg-indigo-100 hover:text-indigo-500 ">
                    <TrendingUp className="w-5 h-5 mr-3" />
                    Funding Progress
                </Link>

                <Link to="/student/repayment" className="flex items-center py-2 px-4 text-white hover:bg-indigo-100 hover:text-indigo-500 ">
                    <FileText className="w-5 h-5 mr-3" />
                    Repayment Status
                </Link>
                
                <Link to="/student/learn" className="flex items-center py-2 px-4 text-white hover:bg-indigo-100 hover:text-indigo-500 ">
                    <BookOpen className="w-5 h-5 mr-3" />
                    Financial Literacy
                </Link>

                <Link to="/student/profile" className="flex items-center py-2 px-4 text-indigo-700 bg-indigo-200 hover:bg-indigo-100 ">
                    <User className="w-5 h-5 mr-3" />
                    Profile
                </Link>

                <Link to="/student/docs" className="flex items-center py-2 px-4 text-white hover:bg-indigo-100 hover:text-indigo-500 ">
                    <Folder className="w-5 h-5 mr-3" />
                    Documents
                </Link>

                <Link to="/student/support" className="flex items-center py-2 px-4 text-white hover:bg-indigo-100 hover:text-indigo-500 ">
                    <HelpCircle className="w-5 h-5 mr-3" />
                    Support
                </Link>

                <Link to="/student/notifications" className="flex items-center py-2 px-4 text-white hover:bg-indigo-100 hover:text-indigo-500 ">
                    <Bell className="w-5 h-5 mr-3" />
                    Notifications
                </Link>

                <Link to="/student/settings" className="flex items-center py-2 px-4 text-white hover:bg-indigo-100 hover:text-indigo-500 ">
                    <Settings className="w-5 h-5 mr-3" />
                    Settings
                </Link>
                
                

            </nav>

            <div className="absolute bottom-0 p-4">
                <button className="flex items-center text-white fixed bottom-4">
                    <LogOut className="w-5 h-5 mr-2" />
                    Logout
                </button>
            </div>
        </div>
    )
}



export default SideBar