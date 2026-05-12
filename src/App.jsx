import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from 'react-router-dom'

import Home from './components/home'
import Cloths, { ClothsIndex, ClothsDetails } from './components/cloths'
import Makeup, { MakeupIndex, MakeupDetails } from './components/Makeup'
import Jewellery, { JewelleryIndex, JewelleryDetails } from './components/Jewellery'
import Shoes, { ShoesIndex, ShoesDetails } from './components/shoes'

function App() {

  const links = [
    { path: '/', name: '🏠', label: 'Home' },
    { path: '/cloths', name: '👕', label: 'Cloths' },
    { path: '/makeup', name: '💄', label: 'Makeup' },
    { path: '/jewellery', name: '💍', label: 'Jewellery' },
    { path: '/shoes', name: '👟', label: 'Shoes' }
  ]

  return (
    <Router>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* Navbar container */
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Logo */
        .logo {
          margin: 0;
          color: white;
          font-size: 36px;
          font-weight: bold;
          white-space: nowrap;
        }

        /* Nav links container - FIX: prevents breaking */
        .nav-links {
          display: flex;
          gap: 8px;
          flex-wrap: nowrap;
          white-space: nowrap;
        }

        /* Individual nav link */
        .nav-link {
          padding: 8px 14px;
          color: white;
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          border-radius: 8px;
          transition: 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          white-space: nowrap;
        }

        /* ========== RESPONSIVE BREAKPOINTS ========== */

        /* Tablet (768px - 1024px) */
        @media (max-width: 1024px) {
          .logo {
            font-size: 28px;
          }
          .nav-link {
            padding: 6px 12px;
            font-size: 14px;
          }
        }

        /* Mobile (max-width: 768px) - Links become icons only */
        @media (max-width: 768px) {
          .navbar {
            flex-direction: column;
            gap: 10px;
            padding: 8px 0;
          }
          
          .logo {
            font-size: 20px;
            white-space: nowrap;
          }
          
          .nav-links {
            gap: 6px;
            flex-wrap: wrap;
            justify-content: center;
          }
          
          /* Hide text labels on mobile, show only icons */
          .nav-link span.label {
            display: none;
          }
          
          .nav-link {
            padding: 8px 12px;
            font-size: 20px;
            gap: 0;
          }
          
          .main {
            margin-top: 110px !important;
            padding: 12px !important;
          }
        }

        /* Small mobile (max-width: 480px) */
        @media (max-width: 480px) {
          .logo {
            font-size: 18px;
          }
          
          .nav-link {
            padding: 6px 10px;
            font-size: 18px;
          }
          
          .main {
            margin-top: 115px !important;
            padding: 10px !important;
          }
        }

        /* Very small (max-width: 360px) */
        @media (max-width: 360px) {
          .logo {
            font-size: 16px;
          }
          
          .nav-link {
            padding: 5px 8px;
            font-size: 16px;
          }
          
          .nav-links {
            gap: 4px;
          }
        }

        /* Landscape mode */
        @media (max-width: 768px) and (orientation: landscape) {
          .navbar {
            flex-direction: row;
            justify-content: space-between;
          }
          
          .logo {
            font-size: 18px;
          }
          
          .main {
            margin-top: 80px;
          }
        }

        /* Main content area */
        .main {
          margin-top: 90px;
          padding: 20px;
          min-height: 100vh;
        }
      `}</style>

      <div>

        {/* Navbar */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            zIndex: 1000,
            padding: '10px 20px'
          }}
        >

          <nav className="navbar">

            {/* Logo */}
            <h1 className="logo">
              🛍️ All-In-One Store
            </h1>

            {/* Links - on mobile only icons show */}
            <div className="nav-links">

              {links.map((item, index) => (

                <Link
                  key={index}
                  to={item.path}
                  className="nav-link"
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent'
                  }}
                >
                  <span>{item.name}</span>
                  <span className="label">{item.label}</span>
                </Link>

              ))}

            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="main">

          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/cloths" element={<Cloths />}>
              <Route index element={<ClothsIndex />} />
              <Route path=":id" element={<ClothsDetails />} />
            </Route>

            <Route path="/makeup" element={<Makeup />}>
              <Route index element={<MakeupIndex />} />
              <Route path=":id" element={<MakeupDetails />} />
            </Route>

            <Route path="/jewellery" element={<Jewellery />}>
              <Route index element={<JewelleryIndex />} />
              <Route path=":id" element={<JewelleryDetails />} />
            </Route>

            <Route path="/shoes" element={<Shoes />}>
              <Route index element={<ShoesIndex />} />
              <Route path=":id" element={<ShoesDetails />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />

          </Routes>

        </div>

      </div>

    </Router>
  )
}

export default App