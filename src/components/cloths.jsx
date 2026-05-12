import React from 'react'
import { Outlet, Link, useParams } from 'react-router-dom'

const clothsData = {
    "T-Shirt": {
        name: "Cotton T-Shirt",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"
    },
    "Jeans": {
        name: "Denim Jeans", 
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400"
    },
    "Jacket": {
        name: "Winter Jacket",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400"
    },
    "Casual-Shirt": {
        name: "Casual Cotton Shirt",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400"
    },
    "Hoodie": {
        name: "Pullover Hoodie",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400"
    },
    "Formal-Shirt": {
        name: "Office Formal Shirt",
        image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400"
    },
    "Trousers": {
        name: "Formal Trousers",
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400"
    },
    "Sweater": {
        name: "Woolen Sweater",
        image: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622?w=400"
    },
    "Coat": {
        name: "Winter Overcoat",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400"
    },
    "Dress": {
        name: "Summer Dress",
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400"
    },
    "Skirt": {
        name: "A-Line Skirt",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400"
    },
    "Top": {
        name: "T-shirt",
        image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400"
    },
    "Track-Suit": {
        name: "Sports Track Suit",
        image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400"
    },
    "Bridal-Gown-Ivory": {
        name: "Ivory Lace Gown",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400"
    },
    "Silk-Bridal-Saree": {
        name: "Dress",
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400"
    },
    "Sheath-Gown": {
        name: "Sheath Wedding Gown",
        image: "https://images.unsplash.com/photo-1519657337289-077653f724ed?w=400"
    },
}

// Main Cloths Component - Sirf EK baar likho!
function Cloths() {
    return <Outlet />
}

function ClothsIndex() {
    return (
        <div className="products-grid">
            {Object.keys(clothsData).map(key => {
                const item = clothsData[key]
                return (
                    <div key={key} className="product-card">
                        <h3>{item.name}</h3>
                        <img src={item.image} alt={item.name} />
                        <Link to={`/cloths/${key}`}>
                            <button className="view-btn cloths-btn">👁️ View Details</button>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

function ClothsDetails() {
    const { id } = useParams()
    const item = clothsData[id]
    
    if (!item) {
        return <h2 style={{ textAlign: 'center', padding: 50 }}>❌ Not Found!</h2>
    }

    return (
        <div className="detail-container">
            <div className="detail-card">
                <h2>📋 {item.name}</h2>
                <img src={item.image} alt={item.name} />
                <div className="about-section">
                    <h3>✨ About This Product</h3>
                    <p>Premium quality {item.name} - Comfortable & Stylish</p>
                    <div className="info-badges">
                        <div className="info-badge">📏 S, M, L, XL</div>
                        <div className="info-badge">🎨 Multiple Colors</div>
                        <div className="info-badge">💰 $49 - $199</div>
                    </div>
                </div>
                <Link to="/cloths">
                    <button className="back-btn">← Back to Collection</button>
                </Link>
            </div>
        </div>
    )
}

export default Cloths
export { ClothsIndex, ClothsDetails }