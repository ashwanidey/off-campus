import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Dialog, DialogClose, DialogContent,DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';


const BuyNowButton = () => {
  const navigate = useNavigate();
  const location = useLocation();  // Get the current page location
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleNavigation = () => {
    const currentPath = location.pathname;  // Get the current URL path
    navigate(`${currentPath}/pay`);  // Append `/pay` to the current URL
  }

  return (
    <>
    {isLoggedIn ? <button
      onClick={handleNavigation}  
      className="px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200"
    >
      BUY NOW
    </button>: <Dialog>
      <DialogTrigger>
      <button
      
      className="px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200"
    >
      BUY NOW
    </button>
      </DialogTrigger>
      
      <DialogContent className = "border-none bg-inherit" closeButton = "right-7 top-7 text-white">
      <div className='p-6 bg-secondary-300 rounded-lg'>
      <div className="flex items-center justify-center mb-4">
          <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-2">
            <span className="text-lg font-bold">OC</span>
          </div>
          <h2 className="text-white text-2xl font-bold">OFF CAMPUS</h2>
        </div>
      <Button
      variant="outline"
      className="w-full bg-gray-900 text-white hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 focus:ring-offset-gray-900 "
     
    >
      <svg
        className="w-5 h-5 mr-2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          fill="#4285F4"
        />
        <path
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          fill="#34A853"
        />
        <path
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          fill="#FBBC05"
        />
        <path
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          fill="#EA4335"
        />
      </svg>
      Sign in with Google
    </Button>
    </div>
      </DialogContent>
      </Dialog>}
    
    </>
  )
}

export default BuyNowButton;
