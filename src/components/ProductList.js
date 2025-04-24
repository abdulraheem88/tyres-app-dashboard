import React, { useState } from 'react';
import './ProductList.css';

import t1 from '../assets/t1.jpeg';
import t2 from '../assets/t2.jpeg';
import t3 from '../assets/t3.jpeg';
import t4 from '../assets/t4.jpeg';


const products = [
    {
      id: 1,
      brand: 'AUTEL',
      name: 'AUTEL PRGMM UNIVERSAL TPMS SENSOR',
      description: 'Accessories | TPMS Sensors | MSRP: $157.00',
      image: t1,
      cost: '$59.99',
      loc: 32,
      locPlus: 0,
    },
    {
      id: 2,
      brand: 'NEXEN TIRE',
      name: 'NEXEN WINGUARD ICE 2 WINTER 225/45R19 M+S 96TXL',
      description: 'Tires | Winter | MSRP: $289.00',
      image: t2,
      cost: '$169.99',
      loc: 28,
      locPlus: 0,
    },
    {
      id: 3,
      brand: 'AUTEL',
      name: 'MAXITPMS TS508WF WIFI DIAGNOSTIC PROGRAMMING',
      description: 'Accessories | TPMS Sensors | MSRP: $438.00',
      image: t3,
      cost: '$349.99',
      loc: 8,
      locPlus: 0,
    },
    {
      id: 4,
      brand: 'NEXEN TIRE',
      name: 'NEXEN WINGUARD ICE 2 WINTER 255/40R19 M+S 100TXL',
      description: 'Tires | Winter | MSRP: $285.00',
      image: t4,
      cost: '$179.99',
      loc: 10,
      locPlus: 0,
    },
     {
      id: 5,
      brand: 'AUTEL',
      name: 'MAXITPMS TS508WF WIFI DIAGNOSTIC PROGRAMMING',
      description: 'Accessories | TPMS Sensors | MSRP: $438.00',
      image: t3,
      cost: '$349.99',
      loc: 8,
      locPlus: 0,
    }
  ];
  
const ProductList = () => {
  const [cart, setCart] = useState({});

  const handleAddToCart = (id, quantity) => {
    setCart({ ...cart, [id]: quantity });
  };

  return (
    <div className="product-container">
      <div className="product-header">
        <div className="col-description">DESCRIPTION</div>
        <div className="col-cost">COST</div>
        <div className="col-loc">LOC</div>
        <div className="col-locplus">LOC+</div>
        <div className="col-qty">QUANTITY</div>
      </div>

      <div className="product-list">
        {products.map((product) => (
          <div className="product-row" key={product.id}>
            <div className="col-description">
              <div className="product-detail">
                <img src={product.image} alt="product" className="product-img" />
                <div>
                  <div className="brand">{product.brand}</div>
                  <div className="name">{product.name}</div>
                  <div className="desc">{product.description}</div>
                </div>
              </div>
            </div>
            <div className="col-cost">{product.cost}</div>
            <div className="col-loc">{product.loc}</div>
            <div className="col-locplus">{product.locPlus}</div>
            <div className="col-qty">
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="qty-input"
                onChange={(e) =>
                  handleAddToCart(product.id, parseInt(e.target.value))
                }
              />
              <button
                className="add-btn"
                onClick={() =>
                  handleAddToCart(product.id, cart[product.id] || 1)
                }
              >
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
