
import React from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CarCard from '@/components/CarCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, MapPin, ThumbsUp, Car, CreditCard, Clock } from 'lucide-react';

// Mock data for cars
const featuredCars = [
  {
    id: 'car1',
    name: 'Toyota RAV4',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop',
    price: 45,
    seats: 5,
    fuel: 'Gasoline',
    transmission: 'Automatic',
    year: 2023
  },
  {
    id: 'car2',
    name: 'Dacia Duster',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop',
    price: 35,
    seats: 5,
    fuel: 'Diesel',
    transmission: 'Manual',
    year: 2022
  },
  {
    id: 'car3',
    name: 'Hyundai Tucson',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop',
    price: 50,
    seats: 5,
    fuel: 'Hybrid',
    transmission: 'Automatic',
    year: 2023
  }
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        title="Explore Dakhla with Comfort and Style"
        subtitle="Discover the beauty of Dakhla with our premium car rental service at affordable prices"
        backgroundImage="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=2070&auto=format&fit=crop"
        buttonText="Reserve Now"
        buttonLink="/reserve"
      />
      
      {/* About Section */}
      <section className="py-16 bg-white" id="about">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Welcome to AKFAS Car Rental</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Your trusted partner for exploring the stunning landscapes of Dakhla, Morocco. We provide reliable, comfortable vehicles with exceptional service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-akfas-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-akfas-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-akfas-blue">Modern Fleet</h3>
              <p className="text-gray-700">
                Our vehicles are regularly maintained and offer the perfect balance of comfort, safety, and efficiency.
              </p>
            </div>
            
            <div className="bg-akfas-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-akfas-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-akfas-blue">Best Value</h3>
              <p className="text-gray-700">
                Competitive prices with no hidden fees. We offer the best value for your money with all-inclusive rates.
              </p>
            </div>
            
            <div className="bg-akfas-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-akfas-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-akfas-blue">24/7 Support</h3>
              <p className="text-gray-700">
                Our customer service team is available 24/7 to assist you with any questions or needs during your rental.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Cars Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Featured Vehicles</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Choose from our selection of reliable and comfortable vehicles perfect for exploring Dakhla and its surroundings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map(car => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-akfas-blue hover:bg-akfas-blue/90">
              <Link to="/fleet">View All Vehicles</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Dakhla Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="section-title">Discover the Magic of Dakhla</h2>
              <p className="text-gray-700 mb-4">
                Located on a narrow peninsula along Morocco's Atlantic coast, Dakhla is a hidden gem known for its stunning landscapes, pristine beaches, and perfect conditions for water sports.
              </p>
              <p className="text-gray-700 mb-6">
                With AKFAS Car Rental, you have the freedom to explore this beautiful region at your own pace, from the dramatic dunes of the Sahara to the crystal-clear waters of the Atlantic.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-akfas-accent shrink-0 mt-1" />
                  <span className="text-gray-700">Visit the stunning white sand dunes of Dakhla Bay</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-akfas-accent shrink-0 mt-1" />
                  <span className="text-gray-700">Explore the rich marine life in the Dakhla Peninsula</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-akfas-accent shrink-0 mt-1" />
                  <span className="text-gray-700">Experience the vibrant local culture and delicious cuisine</span>
                </li>
              </ul>
              
              <Button asChild className="bg-akfas-accent hover:bg-akfas-accent/90">
                <Link to="/dakhla">Learn More About Dakhla</Link>
              </Button>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=1000&auto=format&fit=crop" 
                  alt="Dakhla Peninsula" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg flex items-center space-x-3">
                  <MapPin className="h-10 w-10 text-akfas-accent" />
                  <div>
                    <p className="font-bold text-akfas-blue">Dakhla, Morocco</p>
                    <p className="text-sm text-gray-600">Western Sahara</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-akfas-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Don't just take our word for it. See what our satisfied customers have to say about their experience with AKFAS Car Rental.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <ThumbsUp className="h-12 w-12 text-akfas-accent" />
              </div>
              <p className="text-gray-700 italic mb-4">
                "Great service! The car was in perfect condition and the pickup process was smooth. Highly recommend for exploring Dakhla."
              </p>
              <div className="text-center">
                <p className="font-semibold text-akfas-blue">Ahmed K.</p>
                <p className="text-sm text-gray-600">Casablanca, Morocco</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <ThumbsUp className="h-12 w-12 text-akfas-accent" />
              </div>
              <p className="text-gray-700 italic mb-4">
                "AKFAS provided us with a reliable car for our week-long stay in Dakhla. Their staff was friendly and the prices were very reasonable."
              </p>
              <div className="text-center">
                <p className="font-semibold text-akfas-blue">Sophie M.</p>
                <p className="text-sm text-gray-600">Paris, France</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <ThumbsUp className="h-12 w-12 text-akfas-accent" />
              </div>
              <p className="text-gray-700 italic mb-4">
                "The WhatsApp reservation process was super easy, and the car was exactly what we needed for our desert adventures. Will use again!"
              </p>
              <div className="text-center">
                <p className="font-semibold text-akfas-blue">Carlos R.</p>
                <p className="text-sm text-gray-600">Madrid, Spain</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-akfas-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Explore Dakhla?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book your car now and start your adventure in one of Morocco's most beautiful destinations.
          </p>
          <Button asChild size="lg" className="bg-akfas-accent hover:bg-akfas-accent/90 text-white font-semibold px-8 text-lg">
            <Link to="/reserve">Reserve Your Car</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
