import React from 'react'
import { Outlet, Link, useParams } from 'react-router-dom'

// Jewellery data
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
     image:"https://sairanoor.com/cdn/shop/files/CF7DD09A-C5DE-4C16-8E2E-62DE947FE83D_1_105_c.jpg?v=1694710947"
    },
     "Dimand": {
        name: "Dimand Neckles",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxipH60xUeHFfn5L0mBAdpOz6TeMZ3JbDhqg&s"
    },
  
    
    // Traditional Collection
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
        name: " Diamond rings",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400"
    },
        
     "Ruby-Earrings": {
        name: " Earrings",
        image: "https://i.pinimg.com/736x/53/5f/d5/535fd5a2d88ec84eeb7cc99ac4b5125d.jpg"
    },
     " Jewllery-": {
        name: " Diamond Neckles",
        image: "https://www.anantexports.in/cdn/shop/files/IMG-20231224-WA0142.jpg?v=1703433147&width=1946"
    },
         " Pendant": {
        name: " Diamond pendant",
        image: "https://www.patialadiamonds.com/cdn/shop/products/P132_15A.jpg?v=1731569915&width=2048"
    },
        
     " Bangles": {
        name: "Bangles",
        image: "https://ourcrystalblooms.com/cdn/shop/files/78DAF143-8C9F-4B30-B4DB-EBDE4C591E8B.jpg?v=1717503131"
    },
   
};

// Main Jewellery Component
function Jewellery() {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

// Jewellery List Component
function JewelleryIndex() {
    return (
        <div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '20px',
                padding: '20px'
            }}>
                {Object.keys(jewelleryData).map((jewelleryKey) => {
                    const jewellery = jewelleryData[jewelleryKey];
                    return (
                        <div key={jewelleryKey} style={{
                            border: '1px solid #ddd',
                            padding: '15px',
                            borderRadius: '8px',
                            textAlign: 'center',
                            backgroundColor: '#f8f9fa'
                        }}>
                            <h3>{jewellery.name}</h3>
                            <img 
                                src={jewellery.image} 
                                alt={jewellery.name}
                                style={{
                                    width: '100%',
                                    height: '200px',
                                    objectFit: 'cover',
                                    borderRadius: '5px',
                                    marginBottom: '10px'
                                }}
                            />
                            <Link to={`/jewellery/${jewelleryKey}`}>
                                <button style={{
                                    padding: '8px 16px',
                                    background: '#d4af37',
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

// Jewellery Details Component
function JewelleryDetails() {
    const { id } = useParams();
    const jewellery = jewelleryData[id];
    
    if (!jewellery) {
        return <h2>Jewellery Not Found!</h2>;
    }
    
    return (
        //*details
       
              <div style={{ 
            textAlign: 'center', 
            padding: '40px',
            maxWidth: '800px',
            margin: '0 auto'
        }}>
            <h2>Jewellery Details</h2>
             <div style={{ textAlign: 'center',  background: 'white',
                borderRadius: '15px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.1)',padding: '30px' }}>
            <h3 style={{ color: '#d4af37' }}>{jewellery.name}</h3>
            <img 
                src={jewellery.image} 
                alt={jewellery.name}
                style={{
                    width: '400px',
                    maxWidth: '90%',
                    height: 'auto',
                    borderRadius: '10px',
                    margin: '20px auto',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    border: '3px solid #f0f0f0'
                }}
            />
            <div style={{
                        justifyContent: 'center',
                        gap: '20px',
                        marginTop: '20px',
                      background: '#f8f9fa',
                      padding:'20px'
                    }}>
                      
            <h3 style={{ color: '#495057' }}>About This Product</h3>
            <p>Premium quality {jewellery.name} - Handcrafted with precision</p>
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
                          </div>
            <Link to="/jewellery">
                <button style={{
                    padding: '10px 20px',
                    background: '#d4af37',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginTop: '20px',
                    fontWeight: 'bold'
                }}>
                    ← Back to Jewellery
                </button>
            </Link>
        </div>
    )
}

export default Jewellery
export { JewelleryIndex, JewelleryDetails }