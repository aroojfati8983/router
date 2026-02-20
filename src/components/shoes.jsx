import React from 'react'
import { Outlet, Link, useParams } from 'react-router-dom'

const shoes = {
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
};

function Shoes() {
  return (
    <div>
      <Outlet/>
    </div>
  )
}
function ShoesIndex() {
    return (
        <div>
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                gap: '20px',
                padding: '20px'
            }}>
                {Object.keys(shoes).map((shoeKey) => {
                    const shoe = shoes[shoeKey];
                    return (
                        <div key={shoeKey} style={{
                            border: '1px solid #ddd',
                            padding: '15px',
                            borderRadius: '8px',
                            textAlign: 'center',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                            transition: 'transform 0.3s ease',
                            background: 'white'
                        }}>
                            <h3>{shoe.name}</h3>
                            <img 
                                src={shoe.image} 
                                alt={shoe.name}
                                style={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover',
                                    borderRadius: '5px',
                                    marginBottom: '10px'
                                }}
                            />
                            <br/>
                            <Link to={`/shoes/${shoeKey}`}>
                                <button style={{
                                    padding: '10px 20px',
                                    background: 'purple',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontWeight: 'bold',
                                    fontSize: '16px',
                                    transition: 'background 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.background = '  #660066'}
                                onMouseLeave={(e) => e.target.style.background = 'purple'}
                                >
                                  
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

function ShoesDetails() {
    const { id } = useParams();
    const shoe = shoes[id];
    
    if (!shoe) {
        return (
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <h2 style={{ color: '#dc3545' }}>Shoe Not Found!</h2>
                <Link to="/shoes">
                    <button style={{
                        padding: '10px 20px',
                        background: '#6c757d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginTop: '20px'
                    }}>
                        ← Back to Shoes Collection
                    </button>
                </Link>
            </div>
        );
    }
    
    return (
        <div style={{ 
            textAlign: 'center', 
            padding: '40px',
            maxWidth: '800px',
            margin: '0 auto'
        }}>
            <h1 style={{ color: '#333', marginBottom: '30px' }}>Shoes Details</h1>
            <div style={{
                background: 'white',
                borderRadius: '15px',
                padding: '30px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.1)'
            }}>
                <h2 style={{ 
                    color: '#007bff', 
                    fontSize: '32px',
                    marginBottom: '20px'
                }}>
                    {shoe.name}
                </h2>
                <img 
                    src={shoe.image} 
                    alt={shoe.name}
                    style={{
                        width: '100%',
                        maxWidth: '500px',
                        height: '350px',
                        objectFit: 'cover',
                        borderRadius: '10px',
                        margin: '20px auto',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
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
                        Premium quality {shoe.name}. Perfect for daily wear, sports, and special occasions. 
                        Made with high-quality materials for maximum comfort and durability.
                    </p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '20px',
                        marginTop: '20px'
                    }}>
                        <div style={{ padding: '10px 15px', background: '#e9ecef', borderRadius: '5px' }}>
                            <strong>Size:</strong> 6-12
                        </div>
                        <div style={{ padding: '10px 15px', background: '#e9ecef', borderRadius: '5px' }}>
                            <strong>Color:</strong> Multiple
                        </div>
                        <div style={{ padding: '10px 15px', background: '#e9ecef', borderRadius: '5px' }}>
                            <strong>Price:</strong> $49.99 - $199.99
                        </div>
                    </div>
                </div>
                <Link to="/shoes">
                    <button style={{
                        padding: '12px 25px',
                        background: '#6c757d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = '#545b62';
                        e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = '#6c757d';
                        e.target.style.transform = 'translateY(0)';
                    }}
                    >
                        ← Back to Shoes Collection
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Shoes
export { ShoesIndex, ShoesDetails }