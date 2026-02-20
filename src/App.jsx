import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom'
import Home from './components/home'
import Cloths, { ClothsIndex, ClothsDetails } from './components/cloths' 
import Makeup, { MakeupIndex, MakeupDetails } from './components/Makeup'  
import Jewellery, { JewelleryIndex, JewelleryDetails } from './components/Jewellery'  
import Shoes, { ShoesIndex, ShoesDetails } from './components/shoes'  

function App() {
  
  const [activeLink, setActiveLink] = React.useState('/');

  return (
    <Router>
      <div>
        {/* Fixed Navigation Bar - Enhanced Colors */}
        <div style={{ 
          position: 'fixed',        
          top: 0,                   
          left: 0,                 
          right: 0,                
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Gradient background
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)', 
          zIndex: 1000,              
          padding: '8px 30px'
        }}>
          
          <nav style={{
            display: 'flex',           
            alignItems: 'center',       
            justifyContent: 'space-between',
            maxWidth: '1400px',         
            margin: '0 auto'
          }}>
            
            {/* Store Heading - White color */}
            <h1 style={{ 
              margin: '0',              
              color: 'white', 
              fontSize: '36px',
              whiteSpace: 'nowrap',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)', 
              fontWeight: 'bold'
            }}>
              🛍️ All-In-One Store
            </h1>

            {/* Navigation Links*/}
            <div style={{ 
              display: 'flex', 
              gap: '12px',
              flexWrap: 'wrap',         
              justifyContent: 'flex-end'
            }}>
              
              <Link to="/" style={{ 
                padding: "10px 22px", 
                color: "#2C3E50",  

                textDecoration:'none',
                whiteSpace: 'nowrap',
                fontWeight: '500',
                fontSize: '16px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }} 
              onMouseEnter={(e) =>{ e.target.style.transform = 'translateY(-2px)';
                  e.target.style.color = 'white';
              }}
              onMouseLeave={(e) =>{ e.target.style.transform = 'translateY(0)';     e.target.style.color = 'white';}}
              > 
                🏠 Home
              </Link>

              <Link to="/cloths" style={{ 
                padding: "10px 22px", 
                color: "white",  
                textDecoration:'none',
                fontWeight: '500',
                fontSize: '16px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) =>{ e.target.style.transform = 'translateY(-2px)';
                  e.target.style.color = 'white';

              }}
              onMouseLeave={(e) => {e.target.style.transform = 'translateY(0)';     e.target.style.color = 'white';}}
              >  
                👕 Cloths
              </Link>

              <Link to="/makeup" style={{ 
                padding: "10px 22px", 
                color: "white",  
                textDecoration:'none',
                whiteSpace: 'nowrap',
                fontWeight: '500',
                fontSize: '16px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) =>{ e.target.style.transform = 'translateY(-2px)';
                  e.target.style.color = 'white';

              }}
              onMouseLeave={(e) =>{ e.target.style.transform = 'translateY(0)';     e.target.style.color = 'white';}}
              >
                💄 Makeup
              </Link>
              
              <Link to="/jewellery" style={{ 
                padding: "10px 22px", 
               
                color: "white",
              
                textDecoration:'none',
                whiteSpace: 'nowrap',
                fontWeight: '500',
                fontSize: '16px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) =>{ e.target.style.transform = 'translateY(-2px)';
                  e.target.style.color = 'white';

              }}
              onMouseLeave={(e) =>{ e.target.style.transform = 'translateY(0)';     e.target.style.color = 'white';}}
              >
                💍 Jewellery
              </Link>
              
              <Link to="/shoes" style={{ 
                padding: "10px 22px", 
                color: "white",
                textDecoration:'none',
                whiteSpace: 'nowrap',
                fontWeight: '500',
                fontSize: '16px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) =>{ e.target.style.transform = 'translateY(-2px)';
                  e.target.style.color = 'white';

              }}
              onMouseLeave={(e) => {e.target.style.transform = 'translateY(0)';     e.target.style.color = 'white';}}
              > 
                👟 Shoes
              </Link>
            </div>
          </nav>
        </div>
        
        {/* Content with top margin for fixed navbar */}
        <div style={{ marginTop: '90px', padding: '20px' }}>
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
  );
}

export default App;