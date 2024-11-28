'use client'

import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export default function LoginForm() {
  const [isActive, setIsActive] = useState(false)

  const handleRegister = () => setIsActive(true)
  const handleLogin = () => setIsActive(false)

  return (
    <div className={`container bg-white rounded-[30px] shadow-[0_5px_15px_rgba(0,0,0,0.35)] relative overflow-hidden w-[768px] max-w-full min-h-[480px] ${isActive ? 'active' : ''}`} id="container">
      <div className="form-container sign-up absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-1/2 opacity-0 z-1">
        <form className="bg-white flex flex-col items-center justify-center h-full px-10">
          <h1 className="text-3xl font-bold mb-4">Create Account</h1>
          <div className="social-icons flex mt-5 mb-5">
            <SocialIcon icon={faGooglePlusG} />
            <SocialIcon icon={faFacebookF} />
            <SocialIcon icon={faGithub} />
            <SocialIcon icon={faLinkedinIn} />
          </div>
          <span className="text-xs mb-4">or use your email for registration</span>
          <input type="text" placeholder="Name" className="bg-[#eee] border-none my-2 px-4 py-2 text-sm rounded-lg w-full outline-none" />
          <input type="email" placeholder="Email" className="bg-[#eee] border-none my-2 px-4 py-2 text-sm rounded-lg w-full outline-none" />
          <input type="password" placeholder="Password" className="bg-[#eee] border-none my-2 px-4 py-2 text-sm rounded-lg w-full outline-none" />
          <button className="bg-black text-white text-xs py-2 px-11 border border-transparent rounded-lg font-semibold uppercase tracking-wider mt-4 cursor-pointer">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-1/2 z-2">
        <form className="bg-white flex flex-col items-center justify-center h-full px-10">
          <h1 className="text-3xl font-bold mb-4">Sign In</h1>
          <div className="social-icons flex mt-5 mb-5">
            <SocialIcon icon={faGooglePlusG} />
            <SocialIcon icon={faFacebookF} />
            <SocialIcon icon={faGithub} />
            <SocialIcon icon={faLinkedinIn} />
          </div>
          <span className="text-xs mb-4">or use your email password</span>
          <input type="email" placeholder="Email" className="bg-[#eee] border-none my-2 px-4 py-2 text-sm rounded-lg w-full outline-none" />
          <input type="password" placeholder="Password" className="bg-[#eee] border-none my-2 px-4 py-2 text-sm rounded-lg w-full outline-none" />
          <a href="#" className="text-sm text-gray-600 no-underline my-4">Forget Your Password?</a>
          <button className="bg-black text-white text-xs py-2 px-11 border border-transparent rounded-lg font-semibold uppercase tracking-wider mt-2 cursor-pointer">Sign In</button>
        </form>
      </div>
      <div className="toggle-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-600 ease-in-out rounded-l-[150px] z-[1000]">
        <div className="toggle bg-black h-full bg-gradient-to-r from-black to-black text-white relative -left-full w-[200%] transform transition-all duration-600 ease-in-out">
          <div className="toggle-panel toggle-left absolute w-1/2 h-full flex flex-col items-center justify-center px-8 text-center top-0 transform transition-all duration-600 ease-in-out -translate-x-[200%]">
            <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
            <p className="text-sm leading-5 tracking-wide mb-5">Enter your personal details to use all of site features</p>
            <button className="hidden bg-transparent border border-white text-white text-xs py-2 px-11 rounded-lg font-semibold uppercase tracking-wider mt-2 cursor-pointer" onClick={handleLogin}>Sign In</button>
          </div>
          <div className="toggle-panel toggle-right absolute w-1/2 h-full flex flex-col items-center justify-center px-8 text-center top-0 transform transition-all duration-600 ease-in-out right-0">
            <h1 className="text-3xl font-bold mb-4">Hello, Friend!</h1>
            <p className="text-sm leading-5 tracking-wide mb-5">Register with your personal details to use all of site features</p>
            <button className="hidden bg-transparent border border-white text-white text-xs py-2 px-11 rounded-lg font-semibold uppercase tracking-wider mt-2 cursor-pointer" onClick={handleRegister}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function SocialIcon({ icon }: { icon: IconDefinition }) {
  return (
    <a href="#" className="border border-[#ccc] rounded-[20%] inline-flex justify-center items-center m-[0_3px] w-10 h-10">
      <FontAwesomeIcon icon={icon} />
    </a>
  )
}
