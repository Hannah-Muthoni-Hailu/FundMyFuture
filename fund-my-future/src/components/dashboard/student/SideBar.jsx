
import { Link } from "react-router-dom";

// library icons
import { ChartCandlestick, Coins, EllipsisVertical, GraduationCap, HandCoins, LogOut, Receipt, User } from "lucide-react";


const SideBar = () => {

    return (
        <div className="relative w-64 h-screen">

            <div className="flex items-center p-4 fixed w-64 top-6">
                <GraduationCap className="text-orange-800" width={40} />
                <span className="font-bold text-xl text-orange-800 fixed left-14">Fund My Future</span>
            </div>

            <nav className="mt-6 fixed w-64 top-16">
                <Link to="/sponsor/overview" className="flex items-center py-2 px-4 text-indigo-700 bg-indigo-200 hover:bg-indigo-100">
                    <EllipsisVertical className="w-5 h-5 mr-3" />
                    Overview
                </Link>

                <Link to="/student/apply" className="flex items-center py-2 px-4 text-white hover:bg-indigo-100 hover:text-indigo-500">
                    <Coins className="w-5 h-5 mr-3" />
                    Apply Funding
                </Link>
                
                <Link to="/sponsor/progress" className="flex items-center py-2 px-4 text-white hover:bg-indigo-100 hover:text-indigo-500 ">
                    <ChartCandlestick className="w-5 h-5 mr-3" />
                    Funding Progress
                </Link>

                <Link to="/sponsor/status" className="flex items-center py-2 px-4 text-white hover:bg-indigo-100 hover:text-indigo-500 ">
                    <Receipt className="w-5 h-5 mr-3" />
                    Repayment Status
                </Link>
                
                <Link to="/sponsor/tools" className="flex items-center py-2 px-4 text-white hover:bg-indigo-100 hover:text-indigo-500 ">
                    <HandCoins className="w-5 h-5 mr-3" />
                    Financial Literacy
                </Link>
                
                <Link to="/sponsor/profile" className="flex items-center py-2 px-4 text-white hover:bg-indigo-100 hover:text-indigo-500 ">
                    <User className="w-5 h-5 mr-3" />
                    Profile
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