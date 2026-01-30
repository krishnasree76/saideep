import ProductCard from './ProductCard';
import buffaloMilk from '@/assets/buffalo-milk.jpg';
import cowMilk from '@/assets/cow-milk.jpg';
import potCurd from '@/assets/pot-curd.jpg';
import ghee from '@/assets/ghee.jpg';
import paneer from '@/assets/paneer.jpg';

const products = [
  {
    id: 'buffalo-milk',
    name: 'Buffalo Milk',
    description: 'Rich, creamy A1 Buffalo Milk delivered in glass bottles',
    image: buffaloMilk,
    variants: [
      { size: '500 ml', price: 50 },
      { size: '1000 ml', price: 100 },
    ],
    badge: 'Fresh Today',
  },
  {
    id: 'cow-milk',
    name: 'Cow Milk',
    description: 'Pure, nutritious Cow Milk delivered in glass bottles',
    image: cowMilk,
    variants: [
      { size: '500 ml', price: 70 },
      { size: '1000 ml', price: 120 },
    ],
    badge: 'Fresh Today',
  },
  {
    id: 'pot-curd',
    name: 'Pot Curd',
    description: 'Traditional pot curd made from pure milk, delivered in clay pots',
    image: potCurd,
    variants: [
      { size: '500 gm', price: 60 },
      { size: '1000 gm', price: 110 },
    ],
    badge: 'Fresh Today',
  },
  {
    id: 'ghee',
    name: 'Pure Cow & Buffalo Ghee',
    description: 'Premium quality ghee delivered in steel cans',
    image: ghee,
    variants: [
      { size: '250 gm', price: 'TBD' },
      { size: '500 gm', price: 'TBD' },
      { size: '1000 gm', price: 'TBD' },
    ],
    customWeight: true,
    badge: 'Fresh Today',
  },
  {
    id: 'paneer',
    name: 'Fresh Paneer',
    description: 'Soft, fresh paneer made from pure milk. Bulk orders available.',
    image: paneer,
    variants: [
      { size: '250 gm', price: 'TBD' },
      { size: '500 gm', price: 'TBD' },
      { size: '1000 gm', price: 'TBD' },
    ],
    customWeight: true,
    badge: 'Fresh Today',
  },
];


const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <span className="badge-fresh mb-4">Our Products</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-4">
            Farm Fresh Dairy Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pure, unadulterated dairy products from our farm to your doorstep. 
            Every product is carefully prepared and delivered fresh daily.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
