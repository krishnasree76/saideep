import { useState } from 'react';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

interface ProductVariant {
  size: string;
  price?: number | 'TBD'; // ✅ supports TBD
}

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  variants: ProductVariant[];
  badge?: string;
  customWeight?: boolean;
}

const ProductCard = ({
  id,
  name,
  description,
  image,
  variants,
  badge,
  customWeight = false,
}: ProductCardProps) => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [customGrams, setCustomGrams] = useState('');
  const { addItem } = useCart();

  const handleAddToCart = () => {
    const variant = variants[selectedVariant];

    addItem({
      id,
      name,
      variant:
        customWeight && customGrams
          ? `${customGrams}g`
          : variant.size,
      price: variant.price ?? 'TBD',
      quantity,
      image,
      customWeight: customWeight && customGrams ? customGrams : undefined,
    });

    toast.success(`${name} added to cart!`, {
      description: `${quantity} × ${
        customWeight && customGrams ? `${customGrams}g` : variant.size
      }`,
    });

    setQuantity(1);
    setCustomGrams('');
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden group hover:shadow-elevated transition-all duration-500">
      
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {badge && (
          <span className="absolute top-3 left-3 badge-fresh">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-display font-semibold text-foreground mb-2">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {description}
        </p>

        {/* Variants */}
        {/* Variants */}
<div className="flex flex-wrap gap-2 mb-4">
  {variants.map((variant, index) => (
    <button
      key={index}
      onClick={() => setSelectedVariant(index)}
      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
        selectedVariant === index
          ? 'bg-primary text-primary-foreground'
          : 'bg-muted text-muted-foreground hover:bg-primary/10'
      }`}
    >
      {variant.size}
      {variant.price !== undefined &&
        (variant.price === 'TBD'
          ? ' – TBD'
          : ` – ₹${variant.price}`)}
    </button>
  ))}
</div>


        {/* Custom Weight */}
        {customWeight && (
          <div className="mb-4">
            <input
              type="number"
              placeholder="Enter weight in grams"
              value={customGrams}
              onChange={(e) => setCustomGrams(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        )}

        {/* Quantity & Add to Cart */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 rounded-md hover:bg-primary/10 transition-colors"
            >
              <Minus className="w-4 h-4 text-foreground" />
            </button>

            <span className="w-8 text-center font-medium text-foreground">
              {quantity}
            </span>

            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 rounded-md hover:bg-primary/10 transition-colors"
            >
              <Plus className="w-4 h-4 text-foreground" />
            </button>
          </div>

          <Button
            onClick={handleAddToCart}
            className="flex-1 btn-primary-gradient"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
