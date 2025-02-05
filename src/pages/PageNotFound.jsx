import { LuGhost } from "react-icons/lu";
import {useNavigate } from "react-router";


const NotFound = () => {

  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        <div className="relative">
          <h1 className="text-9xl font-bold text-gray-200">404</h1>
          <LuGhost  
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400" 
            size={120}
          />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">Page not found</h2>
          <p className="text-gray-600">The page you{"'"}re looking for doesn{"'"}t exist or has been moved.</p>
        </div>

        <button 
          onClick={() => navigate(-1, { 
            preventScrollReset: true,
            replace: true 
          })} 
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;