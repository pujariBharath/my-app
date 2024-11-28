'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function Home() {
  useEffect(() => {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    const handleRegisterClick = () => container?.classList.add("active");
    const handleLoginClick = () => container?.classList.remove("active");

    registerBtn?.addEventListener('click', handleRegisterClick);
    loginBtn?.addEventListener('click', handleLoginClick);

    return () => {
      registerBtn?.removeEventListener('click', handleRegisterClick);
      loginBtn?.removeEventListener('click', handleLoginClick);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="py-4 px-6 border-b">
        <nav className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">LOGO</a>
          <ul className="hidden md:flex space-x-6">
            <li><a href="app/Home.tsx" className="hover:text-primary">Home</a></li>
            <li><a href="app/casestudies.tsx" className="hover:text-primary">Case Studies</a></li>
            <li><a href="app/pricing.tsx" className="hover:text-primary">Pricing</a></li>
            <li><a href="app/featured.tsx" className="hover:text-primary">Featured</a></li>
            <li><a href="app/contact.tsx" className="hover:text-primary">Contact</a></li>
          </ul>
          <div className="space-x-2">
            <a href="https://my-rh6hebxpb-pujaribharaths-projects.vercel.app">
              <button className="btn btn-outline">Sign in</button>
            </a>
            <button className="btn">Get Started</button>
          </div>
        </nav>
      </header>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/js/all.min.js" />
      <div className="container" id="container">
        <div className="form-container sign-up">
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forget Your Password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all site features</p>
              <button id="login">Sign In</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all site features</p>
              <button id="register">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
