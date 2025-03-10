import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState(null);

    // ตรวจสอบว่ามีค่า product หรือไม่
    if (!product) {
        return <p>Loading...</p>;
    }

    // ฟังก์ชันสำหรับสร้างดาวตามค่า rating
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <img key={i} src={i <= rating ? star_icon : star_dull_icon} alt="star" />
            );
        }
        return stars;
    };

    // ฟังก์ชันเพิ่มสินค้าในตะกร้า พร้อมตรวจสอบไซส์ที่เลือก
    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size before adding to cart');
            return;
        }
        addToCart(product.id, 1); // ส่ง product.id และจำนวนสินค้าไปยัง context
    };

    return (
        <div className='product-display'>
            <div className="productdisplay-left">
                <div className="productdisplay-img">
                    <img className='productdisplay-img-main' src={product.image} alt={product.name} />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    {renderStars(product.rating)}
                    <p>({product.reviews})</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic velit excepturi earum eveniet, ullam blanditiis provident voluptatem architecto voluptates maxime.
                </div>
                <div className="productdisplay-right-size">
                    <h2>Select Size</h2>
                    <div className="productdisplay-right-sizes">
                        {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                            <div 
                                key={size} 
                                className={selectedSize === size ? 'selected' : ''} 
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={handleAddToCart}>Add To Cart</button>
                <p className="productdisplay-right-category">
                    <span>Category :</span> Women, T-Shirts, Crop Top
                </p>
                <p className="productdisplay-right-category">
                    <span>Tags :</span> Modern, Minimal
                </p> 
            </div>
        </div>
    );
};

export default ProductDisplay;
