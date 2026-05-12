import React from 'react'
import { Outlet, Link, useParams } from 'react-router-dom'

const shoesData = {
    "Bata": {
        name: "Bata Shoes",
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400"
    },
    "Nike": {
        name: "Nike Air Max", 
        image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400"
    },
    "Adidas": {
        name: "Adidas Ultraboost",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
    },
    "Puma": {
        name: "Puma Running Shoes",
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400"
    },
    "Reebok": {
        name: "Reebok Classic",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400"
    },
    "Converse": {
        name: "Converse Chuck Taylor",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400"
    },
    "Vans": {
        name: "Vans Old Skool",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400"
    },
    "Skechers": {
        name: "Skechers Go Walk",
        image: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=400"
    },
    "Gucci": {
        name: "Gucci Sneakers",
        image: "https://images.unsplash.com/photo-1549298916-f52d724204b4?w=400"
    },
    "Balenciaga": {
        name: "Balenciaga Triple S",
        image: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=400"
    },
    "Christian-Louboutin": {
        name: "Red Bottom Heels",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400"
    },
    "Loafers": {
        name: "Leather Loafers",
        image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=400"
    },
    "Oxford": {
        name: "Formal Oxford",
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400"
    },
    "Saucony": {
        name: "Saucony Running",
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400"
    },
    "New-Balance": {
        name: "New Balance 990",
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400"
    },
    "Asics": {
        name: "ASICS Gel-Kayano",
        image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=400"
    }
}

function Shoes() {
    return <Outlet />
}

function ShoesIndex() {
    return (
        <div className="products-grid">
            {Object.keys(shoesData).map((key) => {
                const item = shoesData[key]
                return (
                    <div key={key} className="product-card">
                        <h3>{item.name}</h3>
                        <img src={item.image} alt={item.name} />
                        <Link to={`/shoes/${key}`}>
                            <button className="view-btn shoes-btn">👟 View Details</button>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

function ShoesDetails() {
    const { id } = useParams()
    const item = shoesData[id]

    if (!item) {
        return (
            <div className="detail-container">
                <div className="detail-card">
                    <h2>❌ Shoe Not Found!</h2>
                    <Link to="/shoes">
                        <button className="back-btn">← Back to Collection</button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="detail-container">
            <div className="detail-card">
                <h2>👟 {item.name}</h2>
                <img src={item.image} alt={item.name} />
                <div className="about-section">
                    <h3>✨ About This Product</h3>
                    <p>
                        Premium quality {item.name}. Perfect for daily wear, sports, and special occasions.
                        Made with high-quality materials for maximum comfort and durability.
                    </p>
                    <div className="info-badges">
                        <div className="info-badge">📏 Size: 6-12</div>
                        <div className="info-badge">🎨 Multiple Colors</div>
                        <div className="info-badge">💰 $49 - $199</div>
                    </div>
                </div>
                <Link to="/shoes">
                    <button className="back-btn">← Back to Shoes Collection</button>
                </Link>
            </div>
        </div>
    )
}

export default Shoes
export { ShoesIndex, ShoesDetails }