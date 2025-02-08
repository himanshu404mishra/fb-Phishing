import { useState } from "react";
import users from "../services/appwrite"
import { useEffect } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import { LuRefreshCw } from "react-icons/lu";

export default function Admin() {
    const [copied, setCopied] = useState(null);
    const [refresh, setRefresh] = useState(false)
    const [userData, setUserData] = useState({
        total:0,
        documents:[]
    })
    const [loading, setLoading] = useState(true)

    const handleCopy = (text, field) => {
      navigator.clipboard.writeText(text);
      setCopied(`${field}-${text}`);
      setTimeout(() => setCopied(null), 1000);
    };

    useEffect(() => {
        users.getData()
        .then((res)=>{
            setUserData(res)
            
            setLoading(false)          
            setRefresh(false)  
        })
    }, [refresh])
    

    return (
        <div className="min-h-screen bg-blue-100 flex flex-col items-center p-6">
          <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-bold text-blue-600 mb-4">Admin Dashboard</h1>
            <div className="flex justify-between items-center mx-4">
            <p className="text-lg font-medium mb-4">Total Users: {userData.total}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-400 transition active:scale-95 flex items-center gap-3" onClick={()=>{setRefresh(true); setLoading(true)}}><LuRefreshCw /> Refresh</button>
            </div>
            <br />
            <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
              <thead className="bg-blue-600 text-white w-full">
                <tr>
                  <th className="p-3 text-center w-1/3">Username</th>
                  <th className="p-3 text-center w-1/3">Password</th>
                  <th className="p-3 text-center w-1/3">Logged In</th>
                </tr>
              </thead>
              
              {!loading && <tbody>
                {userData.documents.length<=0 ?  <tr className="border-b border-gray-200 hover:bg-blue-50">
                    <td colSpan={3} className="border border-blue-200 p-3 text-center cursor-pointer">
                            <h1 className="text-2xl py-4 hover:underline font-bold text-red-500" style={{fontFamily: "'Pacifico', serif",fontWeight: 400,fontStyle: "normal"}}>No User Data Available! 😓</h1>
                    </td>
                </tr>: 
                    userData.documents?.map((user, index) => (
                        <tr key={index} className="border-b border-gray-200 hover:bg-blue-50">
                          <td className="border border-blue-200 p-3 text-center">
                            {user.username}
                            <button
                              className="cursor-pointer ml-2 text-blue-600 hover:text-blue-800"
                              onClick={() => handleCopy(user.username, "username")}
                            >
                              📋
                            </button>
                            {copied === `username-${user.username}` && <span className="text-green-600 ml-2">✔ Copied</span>}
                          </td>
                          <td className="border border-blue-200 p-3 text-center">
                            {user.password}
                            <button
                              className="cursor-pointer ml-2 text-blue-600 hover:text-blue-800"
                              onClick={() => handleCopy(user.password, "password")}
                            >
                              📋
                            </button>
                            {copied === `password-${user.password}` && <span className="text-green-600 ml-2">✔ Copied</span>}
                          </td>
                          <td className="border border-blue-200 p-3 text-center">
                            {new Date(user.loggedInDate).toLocaleString()}
                            <button
                              className="cursor-pointer ml-2 text-blue-600 hover:text-blue-800"
                              onClick={() => handleCopy(new Date(user.loggedInDate).toLocaleString(), "loggedIn")}
                            >
                              📋
                            </button>
                            {copied === `loggedIn-${new Date(user.loggedInDate).toLocaleString()}` && <span className="text-green-600 ml-2">✔ Copied</span>}
                          </td>
                        </tr>
                      ))
                }
              </tbody>}
            </table>
            <br />
            {loading?(
                <div className="flex items-center justify-center">
                    <CirclesWithBar
                height="100"
                width="100"
                color="#155DFC"
                outerCircleColor="#155DFC"
                innerCircleColor="#155DFC"
                barColor="#155DFC"
                ariaLabel="circles-with-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />
                </div>
              ):""}
          </div>
        </div>
      );
}

