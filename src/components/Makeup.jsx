import React from 'react'
import { Outlet, Link, useParams } from 'react-router-dom'
// Makeup products data
const makeupData = {
    "Foundation": {
        name: "Liquid Foundation",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400"
    },
    "Lipstick": {
        name: "Matte Lipstick", 
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400"
    },
    
    "Eyeshadow-Palette": {
        name: "12-Color Eyeshadow Palette",
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400"
    },

    "Blusher": {
        name: "Blusher Product",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400"
    },       
    "Cosmetics": {
        name: "Cosmetics in everyday life",
        image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*OQI4sJ5sDjeVRN4oU1e3Fg.jpeg"
    },  
    "Muskara": {
        name: "Muskara",
        image: "https://static-01.daraz.pk/p/83e65c2be0a3074103413c58cfc119a2.jpg"
    },       
    "Nail plush": {
        name: "NailPolish Stock",
        image: "https://www.shutterstock.com/shutterstock/photos/390773254/display_1500/stock-vector-hand-drawn-cosmetics-set-nail-polish-mascara-lipstick-eye-shadows-brush-powder-lip-gloss-390773254.jpg"
    },  
    "Skin":{
        name:"Skin Care product",
        image:" https://beautycharms.pk/cdn/shop/files/IMG-20221111-WA0004.jpg?v=1703183852"
    },
    "Makeup":{
        name:"Makeup product",
        image:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ckXYE1oZfN2WV_ZYZnSdRocvVDGwlg0xPg&s"
    },
    "Tint":{
        name:"Lip tint",
        image:" https://i.pinimg.com/564x/6b/80/9c/6b809c9751d21b3444739285517a18e4.jpg"
    },
    "Face":{
        name:"Face Wash",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xpKMta81zSQiLyGKvFwY8vFU2PJiTemsIw&s"
    },
    "loose poder":{
        name:"Loose setting powder",
        image:"https://hips.hearstapps.com/hmg-prod/images/best-setting-powders-2024-1-6606cdab2ca52.jpg?crop=0.941xw:0.660xh;0.0212xw,0.201xh&resize=1200:*"
    }
};
function Makeup() {
    return <Outlet />
}

function MakeupIndex() {
    return (
        <div className="products-grid">
            {Object.keys(makeupData).map(key => {
                const item = makeupData[key];
                return (
                    <div key={key} className="product-card">
                        <h3>{item.name}</h3>
                        <img src={item.image} alt={item.name} />
                        <Link to={`/makeup/${key}`}>
                            <button className="view-btn makeup-btn">💄 View Details</button>
                        </Link>
                    </div>
                );
            })}
        </div>
    )
}

function MakeupDetails() {
    const { id } = useParams();
    const item = makeupData[id];
    if (!item) return <h2 style={{ textAlign: 'center', padding: 50 }}>❌ Not Found!</h2>;

    return (
        <div className="detail-container">
            <div className="detail-card">
                <h2>💄 {item.name}</h2>
                <img src={item.image} alt={item.name} />
                <div className="about-section">
                    <h3>✨ About This Product</h3>
                    <p>Premium quality {item.name} - Perfect for your beauty routine</p>
                    <div className="info-badges">
                        <div className="info-badge">🎨 Multiple Shades</div>
                        <div className="info-badge">💖 Cruelty-Free</div>
                        <div className="info-badge">💰 $19 - $89</div>
                    </div>
                </div>
                <Link to="/makeup">
                    <button className="back-btn">← Back to Collection</button>
                </Link>
            </div>
        </div>
    )
}

export default Makeup
export { MakeupIndex, MakeupDetails }