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
    { path: '/', name: '🏠 Home' },
    { path: '/cloths', name: '👕 Cloths' },
    { path: '/makeup', name: '💄 Makeup' },
    { path: '/jewellery', name: '💍 Jewellery' },
    { path: '/shoes', name: '👟 Shoes' }
  ]

  return (
    <Router>

      {/* Responsive CSS */}
      <style>{`

        *{
          box-sizing:border-box;
        }

        @media(max-width:768px){

          .navbar{
            flex-direction:column;
            gap:15px;
          }

          .logo{
            font-size:24px !important;
            text-align:center;
          }

          .nav-links{
            justify-content:center !important;
            gap:8px !important;
          }

          .nav-link{
            padding:8px 12px !important;
            font-size:13px !important;
          }

          .main{
            margin-top:130px !important;
            padding:15px !important;
          }
        }

        @media(max-width:480px){

          .logo{
            font-size:20px !important;
          }

          .nav-link{
            font-size:11px !important;
            padding:6px 10px !important;
          }

          .main{
            margin-top:140px !important;
          }
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

          <nav
            className="navbar"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              maxWidth: '1400px',
              margin: '0 auto'
            }}
          >

            {/* Logo */}
            <h1
              className="logo"
              style={{
                margin: 0,
                color: 'white',
                fontSize: '36px',
                fontWeight: 'bold'
              }}
            >
              🛍️ All-In-One Store
            </h1>

            {/* Links */}
            <div
              className="nav-links"
              style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap'
              }}
            >

              {links.map((item, index) => (

                <Link
                  key={index}
                  to={item.path}
                  className="nav-link"
                  style={{
                    padding: '10px 20px',
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: '500',
                    borderRadius: '8px',
                    transition: '0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent'
                  }}
                >
                  {item.name}
                </Link>

              ))}

            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div
          className="main"
          style={{
            marginTop: '90px',
            padding: '20px'
          }}
        >

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