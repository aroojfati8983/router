import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  // All products data
  const allProducts = [
    // Cloths
    { id: "T-Shirt", name: "Cotton T-Shirt", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400", category: "cloths" },
    { id: "Jeans", name: "Denim Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400", category: "cloths" },
    { id: "Jacket", name: "Winter Jacket", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400", category: "cloths" },
    
    // Makeup
    { id: "Lipstick", name: "Matte Lipstick", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400", category: "makeup" },
    { id: "Foundation", name: "Liquid Foundation", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400", category: "makeup" },
    { id: "Eyeshadow", name: "Eyeshadow Palette", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400", category: "makeup" },
    
    // Jewellery
    { id: "Diamond-Ring", name: "Diamond Ring", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400", category: "jewellery" },
    { id: "Gold-Necklace", name: "Gold Necklace", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400", category: "jewellery" },
    { id: "Pearl-Earrings", name: "Pearl Earrings", image: "https://i.pinimg.com/736x/53/5f/d5/535fd5a2d88ec84eeb7cc99ac4b5125d.jpg", category: "jewellery" },
    
    // Shoes
    { id: "Sneakers", name: "Running Sneakers", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400", category: "shoes" },
    { id: "Formal-Shoes", name: "Formal Shoes", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400", category: "shoes" },
    { id: "Sandals", name: "Summer Sandals", image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400", category: "shoes" }
  ]

  // Category colors
  const categoryColors = {
    cloths: "green",
    makeup: "#e91e63",
    jewellery: "gold",
    shoes: "purple"
  }

  return (
    <div style={{ padding: "20px" }}>
      
      {/* Simple Buttons */}
      
      {/* Products Grid - Simple */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        {allProducts.map((product) => (
          <div key={product.id} style={{
            border: "1px solid #ddd",
            padding: "15px",
            borderRadius: "8px",
            textAlign: "center",
            backgroundColor: "white"
          }}>
            <h4>{product.name}</h4>
            <img 
              src={product.image} 
              alt={product.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "5px"
              }}
            />
            
            {/* Simple Category Badge */}
            <div style={{
              margin: "10px 0",
              padding: "3px 10px",
              backgroundColor: categoryColors[product.category],
              color: product.category === "jewellery" ? "black" : "white",
              borderRadius: "15px",
              fontSize: "12px",
              display: "inline-block"
            }}>
              {product.category}
            </div>

            {/* Simple Button - Category section mein le jayega */}
            <Link to={`/${product.category}`}>
              <button style={{
                padding: "8px 20px",
                background: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                width: "100%",
                cursor: "pointer",
                marginTop: "5px"
              }}>
                View in {product.category}
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Simple Footer */}
      <div style={{ marginTop: "30px", textAlign: "center", padding: "20px", borderTop: "1px solid #ddd" }}>
        © 2024 All Products Store
      </div>
    </div>
  )
}

export default Home