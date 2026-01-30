import { useState } from 'react';
import { X, Minus, Plus, Trash2, MapPin, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
}

const Checkout = ({ isOpen, onClose }: CheckoutProps) => {
  const { items, updateQuantity, removeItem, clearCart, totalPrice } = useCart();
  const [step, setStep] = useState<'cart' | 'details'>('cart');
  const [isLocating, setIsLocating] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    landmark: '',
    latitude: '',
    longitude: '',
  });

  const hasTBD = items.some(item => item.price === 'TBD');

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      toast.error('Geolocation is not supported by your browser');
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setFormData((prev) => ({
          ...prev,
          latitude: position.coords.latitude.toString(),
          longitude: position.coords.longitude.toString(),
        }));
        toast.success('Location captured successfully!');
        setIsLocating(false);
      },
      () => {
        toast.error('Unable to get your location. You can still place the order.');
        setIsLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const handlePlaceOrder = () => {
    if (!formData.name || !formData.phone || !formData.address) {
      toast.error('Please fill in all required fields');
      return;
    }

    const orderItems = items
      .map((item) => {
        if (item.price === 'TBD') {
          return `• ${item.name} (${item.variant}) × ${item.quantity} = TBD`;
        }
        return `• ${item.name} (${item.variant}) × ${item.quantity} = ₹${item.price * item.quantity}`;
      })
      .join('\n');

    const locationLink =
      formData.latitude && formData.longitude
        ? `https://www.google.com/maps/search/?api=1&query=${formData.latitude},${formData.longitude}`
        : 'Location not shared';

    const message = `Hello Saideep Ecobites, I would like to place an order.

🧑 Name: ${formData.name}
📞 Phone: ${formData.phone}

🛒 Order Details:
${orderItems}

💰 Total: ${hasTBD ? 'TBD' : `₹${totalPrice}`}

🏠 Delivery Address:
${formData.address}
${formData.landmark ? `Landmark: ${formData.landmark}` : ''}

📍 My Current Location:
${locationLink}

Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919705287966?text=${encodedMessage}`, '_blank');

    clearCart();
    setFormData({ name: '', phone: '', address: '', landmark: '', latitude: '', longitude: '' });
    setStep('cart');
    onClose();
    toast.success('Order sent to WhatsApp! We will contact you shortly.');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-lg max-h-[90vh] overflow-auto glass-card-elevated rounded-2xl animate-scale-in">
        <div className="sticky top-0 z-10 flex items-center justify-between p-5 border-b border-border bg-card/95 backdrop-blur-sm rounded-t-2xl">
          <h2 className="text-xl font-display font-bold text-foreground">
            {step === 'cart' ? 'Your Cart' : 'Delivery Details'}
          </h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-muted transition-colors">
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        <div className="p-5">
          {step === 'cart' ? (
            <>
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🛒</div>
                  <p className="text-muted-foreground">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={`${item.id}-${item.variant}`} className="flex gap-3 p-3 rounded-xl bg-muted/50 items-center">
                        
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                        />

                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground text-sm truncate">
                            {item.name}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {item.variant} • {item.price === 'TBD' ? 'TBD' : `₹${item.price}`}
                          </p>
                        </div>

                        <div className="flex items-center gap-1">
                          <button onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)} className="p-1.5 rounded-md hover:bg-primary/10">
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-5 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)} className="p-1.5 rounded-md hover:bg-primary/10">
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <button onClick={() => removeItem(item.id, item.variant)} className="p-2 text-destructive hover:bg-destructive/10 rounded-md">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between py-4 border-t border-border">
                    <span className="text-lg font-semibold text-foreground">Total</span>
                    <span className="text-xl md:text-2xl font-bold text-primary">
                      {hasTBD ? 'TBD' : `₹${totalPrice}`}
                    </span>
                  </div>

                  <Button onClick={() => setStep('details')} className="w-full btn-primary-gradient py-6 text-lg">
                    Proceed to Checkout
                  </Button>
                </>
              )}
            </>
          ) : (
            <div className="space-y-4">
              <Input placeholder="Your Name *" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              <Input placeholder="Phone Number *" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              <Textarea placeholder="Delivery Address *" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
              <Input placeholder="Landmark (Optional)" value={formData.landmark} onChange={(e) => setFormData({ ...formData, landmark: e.target.value })} />

              <Button type="button" variant="outline" onClick={handleGetLocation} disabled={isLocating} className="w-full">
                {isLocating ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <MapPin className="w-4 h-4 mr-2" />}
                {formData.latitude ? '✓ Location Captured' : 'Share My Live Location'}
              </Button>

              <div className="flex gap-3 pt-2">
                <Button variant="outline" onClick={() => setStep('cart')} className="flex-1">Back</Button>
                <Button onClick={handlePlaceOrder} className="flex-1 btn-primary-gradient">Place Order via WhatsApp</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
