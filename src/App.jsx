import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom'
import './index.css'
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
            <div className="navbar">
                <div className="nav-container">
                    <Link to="/" className="logo">🛍️ All-In-One Store</Link>
                    <div className="nav-links">
                        {links.map((link, i) => (
                            <Link key={i} to={link.path} className="nav-link">{link.name}</Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="main-content">
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
        </Router>
    )
}

export default App