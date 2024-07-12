import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './App.css'
import ToastNotification from './ToastNotification';

const products = [
    {
        name: 'Ecortie',
        sizes: ['S', 'M', 'L'],
        description: 'Nettles mixed with used coffee grounds',
        img: '/ecortie-product.png',
        price: 19
    },
    {
        name: 'Ortea powder',
        sizes: ['S', 'M', 'L'],
        description: 'Nettles mixed with used tea leftovers',
        img: '/orti-product.png',
        price: 15
    },
    {
        name: 'Ortea compost',
        sizes: ['S', 'M', 'L'],
        description: 'Nettles mixed with used tea leftovers',
        img: '/orti-product.png',
        price: 12
    },
    {
        name: 'Ecortea',
        sizes: ['S', 'M', 'L'],
        description: 'Nettles mixed with used tea leftovers',
        img: '/ecortea-product.png',
        price: 21.5
    }
];

const Products = () => {
    const [cart, setCart] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState('');


    const addToCart = (product, size, quantity) => {
        if (quantity > 0) {
            const item = { product, size, quantity: parseInt(quantity), price: product.price };
            setCart([...cart, item]);
            setToastMessage(`${product.name} (${size}) added to cart`);
        }
    };

    const removeFromCart = (index) => {
        const newCart = cart.filter((_, i) => i !== index);
        setCart(newCart);
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.quantity * item.price, 0);
    };

    return (
        <div id="products-page">
            <h1>Our products</h1>
            <ProductList products={products} addToCart={addToCart} />
            <div id="cart-button" onClick={() => setIsCartVisible(!isCartVisible)}>
                <ShoppingCartIcon />
            </div>
            <div id="cart-content" className={isCartVisible ? "visible" : ""}>
                <Cart cart={cart} removeFromCart={removeFromCart} calculateTotal={calculateTotal} />
            </div>
            {toastMessage && <ToastNotification message={toastMessage} onClose={() => setToastMessage('')} />}
        </div>
    );
};

const ProductList = ({ products, addToCart }) => {
    return (
        <div className="products-list">
            {products.map((product) => (
                <ProductCard key={product.name} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
};

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="product-card">
            <h2>{product.name}</h2>
            <h4>{product.description}</h4>
            <div className="sub-card">
                <div className="card-text">
                    <div className="background">
                        <h3>{product.price} dt</h3>
                        <p>organic fertilizer</p>
                    </div>
                </div>
                <img src={product.img} alt={product.name} />
                <div className="card-text">
                    <div className="background">
                        <h5>Contains</h5>
                        <ul>
                            <li>Potassium</li>
                            <li>Iron</li>
                            <li>...</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="sizes">
                <h5>Sizes</h5>
                {product.sizes.map((size) => (
                    <div key={size} className="size-subset">
                        <label>{size}</label>
                        <input
                            type="number"
                            min="0"
                            id={`${product.name}-${size}-quantity`}
                            placeholder="Enter quantity"
                        />
                        <button
                            onClick={() => {
                                const quantity = document.getElementById(`${product.name}-${size}-quantity`).value;
                                addToCart(product, size, quantity);
                            }}
                        >
                            <AddIcon />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Cart = ({ cart, removeFromCart, calculateTotal }) => {
    return (
        <div id="cart">
            <h2>Cart</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.quantity} x {item.product.name} ({item.size}) - {item.quantity * item.price} dt
                        <button onClick={() => removeFromCart(index)}><DeleteIcon /></button>
                    </li>
                ))}
            </ul>
            <h3>Total: {calculateTotal()} dt</h3>
        </div>
    );
};

export default Products;