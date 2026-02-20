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
    
    // Formal Wear
    "Formal-Shirt": {
        name: "Office Formal Shirt",
        image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400"
    },
    
    
    "Trousers": {
        name: "Formal Trousers",
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400"
    },
    
    // Winter Wear
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
//
    "Bridal-Gown-Ivory": {
        name: "Ivory Lace Gown",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400"
    },
        
    "Silk-Bridal-Saree": {
        name:"Dress ",
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400"
    },
    
    
    "Sheath-Gown": {
        name: "Sheath Wedding Gown",
        image: "https://images.unsplash.com/photo-1519657337289-077653f724ed?w=400"
    },
};

// Main Cloths Component
function Cloths() {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

// Cloths List Component
function ClothsIndex() {
    return (
        <div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '20px',
                padding: '20px'
            }}>
                {Object.keys(clothsData).map((clothKey) => {
                    const cloth = clothsData[clothKey];
                    return (
                        <div key={clothKey} style={{
                            border: '1px solid #ddd',
                            padding: '15px',
                            borderRadius: '8px',
                            textAlign: 'center'
                        }}>
                            <h3>{cloth.name}</h3>
                            <img 
                                src={cloth.image} 
                                alt={cloth.name}
                                style={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover',
                                    borderRadius: '5px',
                                    marginBottom: '10px'
                                }}
                            />
                            <Link to={`/cloths/${clothKey}`}>
                                <button style={{
                                    padding: '8px 16px',
                                    background: '#28a745',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
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

// Cloth Details Component
function ClothsDetails() {
    const { id } = useParams();
    const cloth = clothsData[id];
    
    if (!cloth) {
        return <h2>Cloth Not Found!</h2>;
    }
    
    return (
             <div style={{ 
            textAlign: 'center', 
            padding: '40px',
            maxWidth: '800px',
            margin: '0 auto'
        }}>
            <h2>Cloth Details</h2>
             <div style={{
                background: 'white',
                borderRadius: '15px',
                padding: '30px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.1)'
            }}>
            <h3>{cloth.name}</h3>
            <img 
                src={cloth.image} 
                alt={cloth.name}
                style={{
                    width: '400px',
                    maxWidth: '90%',
                    height: 'auto',
                    borderRadius: '10px',
                    margin: '20px auto',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
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
                    }}>
            This is details for {cloth.name}</p>
            <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '20px',
                        marginTop: '20px'
                    }}>
                        <div style={{ padding: '10px 15px', background: '#e9ecef', borderRadius: '5px' }}>
                            <strong>Size:</strong>  small madium large
                        </div>
                        <div style={{ padding: '10px 15px', background: '#e9ecef', borderRadius: '5px' }}>
                            <strong>Color:</strong> Multiple
                        </div>
                        <div style={{ padding: '10px 15px', background: '#e9ecef', borderRadius: '5px' }}>
                            <strong>Price:</strong> $49.99 - $199.99
                        </div>
                    </div>
                    </div>
            <Link to="/cloths">
                <button style={{
                    padding: '10px 20px',
                    background: '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginTop: '20px'
                }}>
                    ← Back to Cloths Collection 
                </button>
            </Link>
 </div>
 </div>
    )
}
export default Cloths
export { ClothsIndex, ClothsDetails }