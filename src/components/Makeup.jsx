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
        name: " NailPolish Stock",
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
       image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xpKMta81zSQiLyGKvFwY8vFU2PJiTemsIw&s "

    },
    "loose poder":{
        name:"Loose  setting powder",
       image:"https://hips.hearstapps.com/hmg-prod/images/best-setting-powders-2024-1-6606cdab2ca52.jpg?crop=0.941xw:0.660xh;0.0212xw,0.201xh&resize=1200:* "

    }
    
};

// Main Makeup Component
function Makeup() {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

// Makeup List Component
function MakeupIndex() {
    return (
        <div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '20px',
                padding: '20px'
            }}>
                {Object.keys(makeupData).map((makeupKey) => {
                    const makeup = makeupData[makeupKey];
                    return (
                        <div key={makeupKey} style={{
                            border: '1px solid #ddd',
                            padding: '15px',
                            borderRadius: '8px',
                            textAlign: 'center',
                            backgroundColor: '#fff5f7'
                        }}>
                            <h3>{makeup.name}</h3>
                            <img 
                                src={makeup.image} 
                                alt={makeup.name}
                                style={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover',
                                    borderRadius: '5px',
                                    marginBottom: '10px'
                                }}
                            />
                            <Link to={`/makeup/${makeupKey}`}>
                                <button style={{
                                    padding: '8px 16px',
                                    background: '#e91e63',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontWeight: 'bold'
                                }}>
                                    View Details
                                </button>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

// Makeup Details Component
function MakeupDetails() {
    const { id } = useParams();
    const makeup = makeupData[id];
    
    if (!makeup) {
        return <h2>Makeup Product Not Found!</h2>;
    }
    
    return (
         <div style={{ 
            textAlign: 'center', 
            padding: '40px',
            maxWidth: '800px',
            margin: '0 auto'
        }}>
            <h2>Makeup Product Details</h2>

        <div style={{ textAlign: 'center', padding: '40px',maxWidth: '800px',
            margin: '0 auto', background: 'white',
                borderRadius: '15px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.1)'}}>
            <h3 style={{ 
                textAlign: 'center', 
                color: '#e91e63' }}>{makeup.name}</h3>
            <img 
                src={makeup.image} 
                alt={makeup.name}
                style={{
                    width: '400px',
                    maxWidth: '90%',
                    height: 'auto',
                    borderRadius: '10px',
                    margin: '20px auto',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    border: '3px solid #ffe4ec'
                }}
            />
             
                          <div style={{
                    margin: '25px 0',
                    padding: '20px',
                    background: '#f8f9fa',
                    borderRadius: '8px'
                }}>
                    <h3 style={{ color: '#495057' }}>About This Product</h3>
                    <p style={{
                        fontSize: '18px',
                        lineHeight: '1.6',
                        color: '#666'
                    }}></p>
            <p>Premium quality {makeup.name} - Perfect for your beauty routine</p>
            <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '20px',
                        marginTop: '20px'
                    }}>
                        
                        <div style={{ padding: '10px 15px', background: '#e9ecef', borderRadius: '5px' }}>
                            <strong>Color:</strong> Multiple
                        </div>
                        <div style={{ padding: '10px 15px', background: '#e9ecef', borderRadius: '5px' }}>
                            <strong>Price:</strong> $49.99 - $199.99
                        </div>
                    </div>
        </div>

            <Link to="/makeup">
                <button style={{
                    padding: '10px 20px',
                    background: '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginTop: '20px',
                    fontWeight: 'bold'
                }}>
                    ← Back to Makeup Collection
                </button>
            </Link>
        </div>
        </div>
    )
}

export default Makeup
export { MakeupIndex, MakeupDetails }