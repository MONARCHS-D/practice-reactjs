import { useState } from 'react'
import './App.css'

function EyeIcon({ open }) {
  return open ? <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.9 5.1A10.8 10.8 0 0 1 12 5c5.2 0 8.8 5.1 9.6 7-.5 1.1-1.6 2.7-3.2 4.1M6.2 6.2C3.8 7.8 2.5 10.3 2.4 12c1 2.2 4.2 7 9.6 7 1.3 0 2.5-.3 3.6-.8" /></svg> : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.4 12S5.7 5 12 5s9.6 7 9.6 7-3.3 7-9.6 7S2.4 12 2.4 12Z" /><circle cx="12" cy="12" r="2.7" /></svg>
}

function App() {
  const [mode, setMode] = useState('login')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')
  const signingUp = mode === 'signup'
  const switchMode = (nextMode) => { setMode(nextMode); setMessage('') }
  const handleSubmit = (event) => { event.preventDefault(); setMessage(signingUp ? 'Your student account is ready to go.' : 'Welcome back! You’re signed in.') }

  return <main className="auth-page">
    <section className="welcome-panel">
      <div className="brand"><span className="brand-mark">S</span><span>studiora</span></div>
      <div className="welcome-copy"><p className="eyebrow">STUDENT PORTAL</p><h1>Learn today,<br /><em>lead tomorrow.</em></h1><p className="intro">Your all-in-one space to keep learning, stay organized, and make meaningful progress.</p></div>
      <div className="study-card" aria-hidden="true"><div className="lamp"><span></span></div><div className="desk"><div className="notebook"></div><div className="plant">✦</div><div className="book-stack"><i></i><i></i><i></i></div></div></div>
      <p className="quote">“The beautiful thing about learning is that no one can take it away from you.”</p>
    </section>
    <section className="form-panel"><div className="form-wrap">
      <div className="mobile-brand"><span className="brand-mark">S</span>studiora</div>
      <div className="form-heading"><p className="eyebrow">{signingUp ? 'START YOUR JOURNEY' : 'WELCOME BACK'}</p><h2>{signingUp ? 'Create your account' : 'Sign in to your account'}</h2><p>{signingUp ? 'Join your learning community today.' : 'Enter your details to access your learning space.'}</p></div>
      <div className="tabs" role="tablist" aria-label="Account options"><button className={!signingUp ? 'active' : ''} onClick={() => switchMode('login')} role="tab" aria-selected={!signingUp}>Sign in</button><button className={signingUp ? 'active' : ''} onClick={() => switchMode('signup')} role="tab" aria-selected={signingUp}>Sign up</button></div>
      <form onSubmit={handleSubmit}>
        {signingUp && <label>Full name<input type="text" placeholder="Alex Morgan" required /></label>}
        <label>Student email<input type="email" placeholder="you@university.edu" required /></label>
        <label>Password<span className="password-field"><input type={showPassword ? 'text' : 'password'} placeholder="Enter your password" minLength="6" required /><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Hide password' : 'Show password'}><EyeIcon open={showPassword} /></button></span></label>
        {!signingUp && <div className="form-options"><label className="checkbox"><input type="checkbox" /> <span>Remember me</span></label><button type="button" className="text-button">Forgot password?</button></div>}
        {signingUp && <label className="checkbox terms"><input type="checkbox" required /> <span>I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>.</span></label>}
        <button className="submit-button" type="submit">{signingUp ? 'Create account' : 'Sign in'} <span>→</span></button>{message && <p className="success-message" role="status">{message}</p>}
      </form>
      <div className="divider"><span>OR CONTINUE WITH</span></div><button className="google-button" type="button" onClick={() => setMessage('Google sign-in would open here.')}><b>G</b> Continue with Google</button>
      <p className="switch-copy">{signingUp ? 'Already have an account?' : 'New to Studiora?'} <button type="button" onClick={() => switchMode(signingUp ? 'login' : 'signup')}>{signingUp ? 'Sign in' : 'Create an account'}</button></p>
    </div></section>
  </main>
}
export default App
