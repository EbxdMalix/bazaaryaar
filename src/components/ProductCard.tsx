import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { Product } from '../types';
import { formatPrice } from '../utils/utils';
import { useStore } from '../hooks/useStore';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addToCart = useStore((state) => state.addToCart);

  const handleAddToCart = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart`, {
      description: 'You can view your cart to checkout.',
      style: { background: '#0A1533', color: '#fff' }
    });
  };

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl p-5 shadow-premium border border-gray-100 relative group transition-all hover:shadow-hover flex flex-col h-full"
    >
      <Link to={`/product/${product.id}`} className="relative block h-48 bg-brand-light rounded-2xl mb-5 overflow-hidden">
        <motion.img
          layoutId={`prod-img-${product.id}`}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
        />
        {product.discount && (
          <div className="absolute top-4 left-4 bg-brand-blue text-brand-gold text-[10px] font-black px-2.5 py-1 rounded-lg uppercase tracking-wider">
            -{product.discount}% OFF
          </div>
        )}
        <button className="absolute top-4 right-4 p-2.5 bg-white/60 backdrop-blur-md rounded-xl text-gray-400 hover:text-red-500 transition-all transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
          <Heart size={18} />
        </button>
      </Link>

      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
           <span className="text-[10px] font-black text-brand-gold uppercase tracking-widest">{product.brand}</span>
           <div className="flex items-center gap-1">
              <Star size={10} fill="currentColor" className="text-brand-gold" />
              <span className="text-[10px] font-bold">{product.rating}</span>
           </div>
        </div>
        <h3 className="font-display font-bold text-base text-brand-blue mb-3 line-clamp-2 leading-snug group-hover:text-brand-gold transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
          <div className="flex flex-col">
            <span className="text-lg font-black text-brand-blue">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-[10px] text-gray-300 line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          <button 
            onClick={handleAddToCart}
            className="w-12 h-12 bg-brand-blue text-white rounded-2xl flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue transition-all active:scale-90 shadow-lg shadow-brand-blue/5"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
