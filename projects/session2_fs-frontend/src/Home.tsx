// src/components/Home.tsx
import { useWallet } from '@txnlab/use-wallet-react'
import React, { useState } from 'react'
import ConnectWallet from './components/ConnectWallet'
import Transact from './components/Transact'
import AppCalls from './components/AppCalls'
import Account from './components/Account'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
  const [openDemoModal, setOpenDemoModal] = useState<boolean>(false)
  const [appCallsDemoModal, setAppCallsDemoModal] = useState<boolean>(false)
  const { activeAddress } = useWallet()

  const toggleWalletModal = () => {
    setOpenWalletModal(!openWalletModal)
  }

  const toggleDemoModal = () => {
    setOpenDemoModal(!openDemoModal)
  }

  const toggleAppCallsModal = () => {
    setAppCallsDemoModal(!appCallsDemoModal)
  }

  return (
    <div className="website-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <span className="logo-icon">🌳</span>
            <span className="logo-text">Treeken</span>
          </div>
          <div className="nav-actions">
            {activeAddress ? (
              <div className="account-info">
                <Account />
              </div>
            ) : (
              <button data-test-id="connect-wallet" className="btn btn-nav" onClick={toggleWalletModal}>
                🔗 Hubungkan Wallet
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to  <span className="">Treeken</span>
          </h1>
          <p className="hero-subtitle">
            An eco-friendly blockchain platform that links every token to a real-world tree.
            Let’s plant a greener future together!
          </p>
          <div className="hero-actions">
            <button data-test-id="connect-wallet-hero" className="btn btn-primary btn-large" onClick={toggleWalletModal}>
              🌲Start Now
            </button>
            <a
              data-test-id="getting-started"
              className="btn btn-secondary btn-large"
              target="_blank"
              href="https://github.com/ipangyuwono/"
            >
              🌿 See The Source Code
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Feature</h2>
            <div className="section-divider"></div>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔗</div>
              <h3>Transparency</h3>
              <p>
               All transactions are recorded on the Algorand blockchain, ensuring transparency and security for every Treeken token you own.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔐</div>
              <h3>Secure & reliable </h3>
              <p>
                Using audited smart contracts and Algorand blockchain technology that has proven security.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>Easy to use</h3>
              <p>
                A user-friendly interface allows anyone to start using Treeken without in-depth technical knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <span className="logo-icon">🌳</span>
                <span className="logo-text">Treeken</span>
              </div>
            </div>
            <div className="footer-section">
              <h4>Links</h4>
              <ul>
                <li><a href="https://github.com/ipangyuwono/" target="_blank">GitHub</a></li>
                <li><a href="https://www.algorand.com/" target="_blank">Algorand</a></li>
                <li><a href="https://www.instagram.com/ipangyuwono70" target="_blank">Instagram</a></li>
                <li><a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">Gmail</a></li>
              </ul>
            </div>
            <div className="footer-section">
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025. Treeken all right reserved</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />
      <Transact openModal={openDemoModal} setModalState={setOpenDemoModal} />
      <AppCalls openModal={appCallsDemoModal} setModalState={setAppCallsDemoModal} />
    </div>
  )
}

export default Home
