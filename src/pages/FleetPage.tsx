import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import CarCard from '@/components/CarCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, Check, Shield, Settings, RefreshCw } from 'lucide-react';

const cars = {
  all: [
    {
      id: 'car1',
      name: 'Renault Clio 5',
      image: 'https://akfascar.com/clio.jpg',
      seats: 5,
      fuel: 'Gasoline',
      transmission: 'Manual',
      year: 2023
    },
    {
      id: 'car2',
      name: 'Dacia Stepway',
      image: 'https://akfascar.com/stepway.jpg',
      seats: 5,
      fuel: 'Gasoline',
      transmission: 'Automatic',
      year: 2022
    },
    {
      id: 'car3',
      name: 'Dacia Sandero',
      image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=800&auto=format&fit=crop',
      seats: 5,
      fuel: 'Gasoline',
      transmission: 'Manual',
      year: 2023
    },
    {
      id: 'car4',
      name: 'Dacia Duster',
      image: 'https://images.unsplash.com/photo-1594013786645-1ea41dfdd173?q=80&w=800&auto=format&fit=crop',
      seats: 5,
      fuel: 'Diesel',
      transmission: 'Automatic',
      year: 2022
    },
    {
      id: 'car5',
      name: 'Dacia Logan',
      image: 'https://images.unsplash.com/photo-1515569067071-ec3b51335dd0?q=80&w=800&auto=format&fit=crop',
      seats: 5,
      fuel: 'Gasoline',
      transmission: 'Manual',
      year: 2021,
      color: 'Grey'
    },
    {
      id: 'car6',
      name: 'Skoda Fabia',
      image: 'https://images.unsplash.com/photo-1617624085810-3df2165bd11b?q=80&w=800&auto=format&fit=crop',
      seats: 5,
      fuel: 'Gasoline',
      transmission: 'Manual',
      year: 2022
    }
  ],
  automatic: [
    {
      id: 'car2',
      name: 'Dacia Stepway',
      image: 'https://akfascar.com/stepway.jpg',
      seats: 5,
      fuel: 'Gasoline',
      transmission: 'Automatic',
      year: 2022
    },
    {
      id: 'car4',
      name: 'Dacia Duster',
      image: 'https://images.unsplash.com/photo-1594013786645-1ea41dfdd173?q=80&w=800&auto=format&fit=crop',
      seats: 5,
      fuel: 'Diesel',
      transmission: 'Automatic',
      year: 2022
    }
  ],
  manual: [
    {
      id: 'car1',
      name: 'Renault Clio 5',
      image: 'https://akfascar.com/clio.jpg',
      seats: 5,
      fuel: 'Gasoline',
      transmission: 'Manual',
      year: 2023
    },
    {
      id: 'car3',
      name: 'Dacia Sandero',
      image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=800&auto=format&fit=crop',
      seats: 5,
      fuel: 'Gasoline',
      transmission: 'Manual',
      year: 2023
    },
    {
      id: 'car5',
      name: 'Dacia Logan',
      image: 'https://images.unsplash.com/photo-1515569067071-ec3b51335dd0?q=80&w=800&auto=format&fit=crop',
      seats: 5,
      fuel: 'Gasoline',
      transmission: 'Manual',
      year: 2021,
      color: 'Grey'
    },
    {
      id: 'car6',
      name: 'Skoda Fabia',
      image: 'https://images.unsplash.com/photo-1617624085810-3df2165bd11b?q=80&w=800&auto=format&fit=crop',
      seats: 5,
      fuel: 'Gasoline',
      transmission: 'Manual',
      year: 2022
    }
  ],
  economy: [
    {
      id: 'car1',
      name: 'Renault Clio 5',
      image: 'https://akfascar.com/clio.jpg',
      seats: 5,
      fuel: 'Gasoline',
      transmission: 'Manual',
      year: 2023
    },
    {
      id: 'car3',
      name: 'Dacia Sandero',
      image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=800&auto=format&fit=crop',
      seats: 5,
      fuel: 'Gasoline',
      transmission: 'Manual',
      year: 2023
    },
    {
      id: 'car5',
      name: 'Dacia Logan',
      image: 'https://images.unsplash.com/photo-1515569067071-ec3b51335dd0?q=80&w=800&auto=format&fit=crop',
      seats: 5,
      fuel: 'Gasoline',
      transmission: 'Manual',
      year: 2021,
      color: 'Grey'
    },
    {
      id: 'car6',
      name: 'Skoda Fabia',
      image: 'https://images.unsplash.com/photo-1617624085810-3df2165bd11b?q=80&w=800&auto=format&fit=crop',
      seats: 5,
      fuel: 'Gasoline',
      transmission: 'Manual',
      year: 2022
    }
  ],
  suv: [
    {
      id: 'car4',
      name: 'Dacia Duster',
      image: 'https://images.unsplash.com/photo-1594013786645-1ea41dfdd173?q=80&w=800&auto=format&fit=crop',
      seats: 5,
      fuel: 'Diesel',
      transmission: 'Automatic',
      year: 2022
    }
  ]
};

const FleetPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <Hero
        title="Our Fleet"
        subtitle="Choose from our selection of well-maintained vehicles perfect for exploring Dakhla"
        backgroundImage="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=2070&auto=format&fit=crop"
        buttonText="Reserve Now"
        buttonLink="/reserve"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="section-title">Choose Your Perfect Vehicle</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We offer a diverse fleet of well-maintained vehicles to suit every need, whether you're exploring the city or venturing into the desert landscapes of Dakhla.
            </p>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Vehicles</TabsTrigger>
                <TabsTrigger value="automatic">Automatic</TabsTrigger>
                <TabsTrigger value="manual">Manual</TabsTrigger>
                <TabsTrigger value="economy">Economy</TabsTrigger>
                <TabsTrigger value="suv">SUV</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cars.all.map((car) => (
                  <CarCard key={car.id} {...car} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="automatic">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cars.automatic.map((car) => (
                  <CarCard key={car.id} {...car} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="manual">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cars.manual.map((car) => (
                  <CarCard key={car.id} {...car} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="economy">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cars.economy.map((car) => (
                  <CarCard key={car.id} {...car} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="suv">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cars.suv.map((car) => (
                  <CarCard key={car.id} {...car} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <section className="py-16 bg-akfas-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Our Fleet</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              All our vehicles are maintained to the highest standards to ensure your safety and comfort during your stay in Dakhla.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
              <Car className="h-12 w-12 text-akfas-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-akfas-blue">Modern Fleet</h3>
              <p className="text-gray-700">
                Our vehicles are recent models, offering the latest comfort and safety features for a pleasant driving experience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
              <Settings className="h-12 w-12 text-akfas-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-akfas-blue">Well-Maintained</h3>
              <p className="text-gray-700">
                Each vehicle undergoes thorough inspection and maintenance before each rental to ensure reliability.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
              <Shield className="h-12 w-12 text-akfas-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-akfas-blue">Fully Insured</h3>
              <p className="text-gray-700">
                All our vehicles come with comprehensive insurance for your peace of mind while exploring Dakhla.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
              <RefreshCw className="h-12 w-12 text-akfas-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-akfas-blue">Flexible Rentals</h3>
              <p className="text-gray-700">
                From daily to monthly rentals, we offer flexible options to accommodate your travel plans.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">All-Inclusive Rental Packages</h2>
              <p className="text-gray-700 mb-6">
                Our rental packages are designed to provide you with a hassle-free experience. Each rental includes:
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-akfas-accent shrink-0 mt-1 mr-3" />
                  <div>
                    <p className="font-semibold text-akfas-blue">Comprehensive Insurance</p>
                    <p className="text-gray-700">
                      Basic insurance coverage is included in all rentals, with options for additional coverage.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-akfas-accent shrink-0 mt-1 mr-3" />
                  <div>
                    <p className="font-semibold text-akfas-blue">24/7 Roadside Assistance</p>
                    <p className="text-gray-700">
                      Help is just a phone call away if you encounter any issues during your rental period.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-akfas-accent shrink-0 mt-1 mr-3" />
                  <div>
                    <p className="font-semibold text-akfas-blue">Unlimited Mileage</p>
                    <p className="text-gray-700">
                      Drive as much as you want without worrying about extra charges for mileage.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-akfas-accent shrink-0 mt-1 mr-3" />
                  <div>
                    <p className="font-semibold text-akfas-blue">Free Cancellation</p>
                    <p className="text-gray-700">
                      Cancel up to 48 hours before pickup with no penalty.
                    </p>
                  </div>
                </li>
              </ul>
              
              <Button asChild className="bg-akfas-accent hover:bg-akfas-accent/90">
                <Link to="/reserve">Book Your Car Now</Link>
              </Button>
            </div>
            
            <div className="space-y-6">
              <div className="bg-akfas-light p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-akfas-blue">Rental Requirements</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-akfas-accent shrink-0 mt-1 mr-2" />
                    <span className="text-gray-700">Valid driver's license (International license recommended for non-Moroccan residents)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-akfas-accent shrink-0 mt-1 mr-2" />
                    <span className="text-gray-700">Minimum age of 21 years (25 years for luxury vehicles)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-akfas-accent shrink-0 mt-1 mr-2" />
                    <span className="text-gray-700">Valid passport or ID card</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-akfas-accent shrink-0 mt-1 mr-2" />
                    <span className="text-gray-700">Credit card for security deposit (returned upon vehicle return in good condition)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-akfas-light p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-akfas-blue">Additional Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-akfas-accent shrink-0 mt-1 mr-2" />
                    <span className="text-gray-700">Airport pickup and drop-off</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-akfas-accent shrink-0 mt-1 mr-2" />
                    <span className="text-gray-700">Child seats and boosters</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-akfas-accent shrink-0 mt-1 mr-2" />
                    <span className="text-gray-700">GPS navigation system</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-akfas-accent shrink-0 mt-1 mr-2" />
                    <span className="text-gray-700">Additional driver option</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-akfas-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Hit the Road?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book your car now and start your adventure in Dakhla with a reliable and comfortable vehicle from AKFAS Car Rental.
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

export default FleetPage;
