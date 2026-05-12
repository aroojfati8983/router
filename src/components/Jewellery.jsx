import React from 'react'
import { Outlet, Link, useParams } from 'react-router-dom'

// Jewellery data (yeh sahi hai - c hata diya)
const jewelleryData = {
    "Diamond-Ring": {
        name: "Bridle Bangles",
        image: "https://5.imimg.com/data5/SELLER/Default/2022/12/YO/SG/EK/180395657/thread-bangles-set-500x500.webp"
    },
    "Silver-Bracelet": {
        name: "Elegant Silver Bracelet",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400"
    },
    "Nickles": {
        name: "Elegant Silver Neckles",
        image: "https://sairanoor.com/cdn/shop/files/CF7DD09A-C5DE-4C16-8E2E-62DE947FE83D_1_105_c.jpg?v=1694710947"
    },
    "Dimand": {
        name: "Dimand Neckles",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxipH60xUeHFfn5L0mBAdpOz6TeMZ3JbDhqg&s"
    },
    "Temple-Jewellery": {
        name: "Traditional Temple Jewellery",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400"
    },
    "Anklet": {
        name: "Foot Chain",
        image: "https://tribalornaments.com/cdn/shop/files/tribal-ornaments-default-title-10-925-sterling-silver-white-stone-flower-design-anklets-foot-bracelet-ank722-ank722-52601418481911.jpg?v=1768696418&width=533"
    },
    "Choker-Necklace": {
        name: "Diamond Choker Necklace",
        image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400"
    },
    "Ruby-rings": {
        name: "Diamond rings",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400"
    },
    "Ruby-Earrings": {
        name: "Earrings",
        image: "https://i.pinimg.com/736x/53/5f/d5/535fd5a2d88ec84eeb7cc99ac4b5125d.jpg"
    },
    "Jewllery-": {
        name: "Diamond Neckles",
        image: "https://www.anantexports.in/cdn/shop/files/IMG-20231224-WA0142.jpg?v=1703433147&width=1946"
    },
    "Pendant": {
        name: "Diamond pendant",
        image: "https://www.patialadiamonds.com/cdn/shop/products/P132_15A.jpg?v=1731569915&width=2048"
    },
    "Bangles": {
        name: "Bangles",
        image: "https://ourcrystalblooms.com/cdn/shop/files/78DAF143-8C9F-4B30-B4DB-EBDE4C591E8B.jpg?v=1717503131"
    }
}

function Jewellery() {
    return <Outlet />
}

function JewelleryIndex() {
    return (
        <div className="products-grid">
            {Object.keys(jewelleryData).map(key => {
                const item = jewelleryData[key]
                return (
                    <div key={key} className="product-card">
                        <h3>{item.name}</h3>
                        <img src={item.image} alt={item.name} />
                        <Link to={`/jewellery/${key}`}>
                            <button className="view-btn jewellery-btn">💍 View Details</button>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

function JewelleryDetails() {
    const { id } = useParams()
    const item = jewelleryData[id]
    
    if (!item) {
        return <h2 style={{ textAlign: 'center', padding: 50 }}>❌ Not Found!</h2>
    }

    return (
        <div className="detail-container">
            <div className="detail-card">
                <h2>💎 {item.name}</h2>
                <img src={item.image} alt={item.name} />
                <div className="about-section">
                    <h3>✨ About This Product</h3>
                    <p>Premium quality {item.name} - Handcrafted with precision</p>
                    <div className="info-badges">
                        <div className="info-badge">📏 Size: 6-12</div>
                        <div className="info-badge">🎨 Multiple Options</div>
                        <div className="info-badge">💰 $49 - $499</div>
                    </div>
                </div>
                <Link to="/jewellery">
                    <button className="back-btn">← Back to Collection</button>
                </Link>
            </div>
        </div>
    )
}

export default Jewellery
export { JewelleryIndex, JewelleryDetails }