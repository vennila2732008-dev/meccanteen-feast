import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Clock, ShieldCheck, Utensils } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Madras Engineering College Canteen
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Fresh, delicious meals delivered fast to your doorstep at Madras Engineering College
            </p>
            <div className="flex gap-4">
              <Link to="/menu">
                <Button size="lg" className="text-lg px-8">
                  Order Now
                </Button>
              </Link>
              <Link to="/auth">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose MEC Canteen?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Get your food delivered within 15-20 minutes
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Authentic Taste</h3>
              <p className="text-muted-foreground">
                Traditional South Indian recipes made with care
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Safe & Hygienic</h3>
              <p className="text-muted-foreground">
                Maintaining highest standards of food safety
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Order?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse our menu of delicious South Indian dishes and place your order today!
          </p>
          <Link to="/menu">
            <Button size="lg" className="text-lg px-12">
              View Menu
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;