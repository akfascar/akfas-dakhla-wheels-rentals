
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppForm from '@/components/WhatsAppForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, Check } from 'lucide-react';

const carData = [
  {
    id: 'car1',
    name: 'Toyota RAV4',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop',
    price: 45,
    seats: 5,
    fuel: 'Gasoline',
    transmission: 'Automatic',
    year: 2023,
    features: [
      '5 Seats',
      'Air Conditioning',
      'Bluetooth',
      'Backup Camera',
      'USB Charging Ports'
    ]
  },
  {
    id: 'car2',
    name: 'Dacia Duster',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop',
    price: 35,
    seats: 5,
    fuel: 'Diesel',
    transmission: 'Manual',
    year: 2022,
    features: [
      '5 Seats',
      'Air Conditioning',
      'Roof Rack',
      'Bluetooth',
      'Fuel Efficient'
    ]
  },
  {
    id: 'car3',
    name: 'Hyundai Tucson',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop',
    price: 50,
    seats: 5,
    fuel: 'Hybrid',
    transmission: 'Automatic',
    year: 2023,
    features: [
      '5 Seats',
      'Climate Control',
      'Navigation System',
      'Panoramic Sunroof',
      'Advanced Safety Features'
    ]
  },
  {
    id: 'car4',
    name: 'Renault Clio',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop',
    price: 25,
    seats: 5,
    fuel: 'Gasoline',
    transmission: 'Manual',
    year: 2021,
    features: [
      '5 Seats',
      'Air Conditioning',
      'Bluetooth',
      'Compact Size',
      'Fuel Efficient'
    ]
  },
  {
    id: 'car5',
    name: 'Ford Ranger',
    image: 'https://images.unsplash.com/photo-1551830820-330a71b99659?q=80&w=800&auto=format&fit=crop',
    price: 55,
    seats: 5,
    fuel: 'Diesel',
    transmission: 'Automatic',
    year: 2022,
    features: [
      '5 Seats',
      '4x4 Drive',
      'Towing Capability',
      'Cargo Bed',
      'Off-road Performance'
    ]
  }
];

const ReservePage = () => {
  const [searchParams] = useSearchParams();
  const [selectedCarId, setSelectedCarId] = useState<string | null>(null);
  const preSelectedCar = searchParams.get('car');
  
  useEffect(() => {
    if (preSelectedCar) {
      setSelectedCarId(preSelectedCar);
    }
  }, [preSelectedCar]);
  
  const selectedCar = selectedCarId ? 
    carData.find(car => car.id === selectedCarId) : 
    null;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-12 bg-akfas-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-akfas-blue mb-4">
                Reserve Your Car
              </h1>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Choose from our fleet of well-maintained vehicles and book directly via WhatsApp for a seamless experience.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Tabs defaultValue={selectedCarId || "form"} className="w-full">
                <div className="p-4 bg-gray-50 border-b">
                  <TabsList className="grid grid-cols-2 w-full">
                    <TabsTrigger value="form">Reservation Form</TabsTrigger>
                    <TabsTrigger value="cars">Our Fleet</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="form" className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <h2 className="text-2xl font-semibold text-akfas-blue mb-6">
                        Book Your Car
                      </h2>
                      
                      <WhatsAppForm 
                        selectedCar={selectedCar?.name} 
                        cars={carData.map(car => ({id: car.id, name: car.name}))} 
                      />
                    </div>
                    
                    {selectedCar ? (
                      <div className="bg-akfas-light p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-akfas-blue mb-4">
                          Selected Vehicle
                        </h3>
                        
                        <div className="bg-white rounded-lg overflow-hidden mb-4">
                          <img 
                            src={selectedCar.image} 
                            alt={selectedCar.name} 
                            className="w-full h-48 object-cover"
                          />
                          
                          <div className="p-4">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="text-lg font-bold text-akfas-blue">{selectedCar.name}</h4>
                              <div className="text-akfas-accent font-semibold">
                                ${selectedCar.price}<span className="text-sm">/day</span>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600 mb-4">
                              <div>Year: {selectedCar.year}</div>
                              <div>Transmission: {selectedCar.transmission}</div>
                              <div>Fuel: {selectedCar.fuel}</div>
                              <div>Seats: {selectedCar.seats}</div>
                            </div>
                            
                            <div>
                              <p className="font-semibold text-akfas-blue mb-2">Features:</p>
                              <ul className="space-y-1">
                                {selectedCar.features.map((feature, index) => (
                                  <li key={index} className="flex items-start text-sm">
                                    <Check className="h-4 w-4 text-akfas-accent shrink-0 mt-0.5 mr-2" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-akfas-light p-6 rounded-lg flex flex-col items-center justify-center text-center">
                        <Car className="h-16 w-16 text-akfas-blue opacity-60 mb-4" />
                        <h3 className="text-xl font-semibold text-akfas-blue mb-2">
                          No Car Selected
                        </h3>
                        <p className="text-gray-700 mb-4">
                          Please select a car from our fleet using the "Our Fleet" tab, or proceed with your reservation and select a car in the form.
                        </p>
                      </div>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="cars" className="p-6">
                  <h2 className="text-2xl font-semibold text-akfas-blue mb-6">
                    Choose from Our Fleet
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {carData.map((car) => (
                      <div 
                        key={car.id} 
                        className={`bg-white border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer ${selectedCarId === car.id ? 'ring-2 ring-akfas-accent' : ''}`}
                        onClick={() => setSelectedCarId(car.id)}
                      >
                        <div className="aspect-[16/9] overflow-hidden">
                          <img
                            src={car.image}
                            alt={car.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-bold text-akfas-blue">{car.name}</h3>
                            <div className="text-akfas-accent font-semibold">
                              ${car.price}<span className="text-sm">/day</span>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-y-1 text-sm text-gray-600">
                            <div>Year: {car.year}</div>
                            <div>Seats: {car.seats}</div>
                            <div>Fuel: {car.fuel}</div>
                            <div>Transmission: {car.transmission}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-akfas-blue text-center mb-8">
                Reservation Process
              </h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="bg-akfas-blue rounded-full w-10 h-10 flex items-center justify-center shrink-0 mt-1 mr-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-akfas-blue mb-2">Select Your Vehicle</h3>
                    <p className="text-gray-700">
                      Browse our fleet and choose the car that best suits your needs. We offer a range of vehicles from compact cars to SUVs.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-akfas-blue rounded-full w-10 h-10 flex items-center justify-center shrink-0 mt-1 mr-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-akfas-blue mb-2">Complete the Form</h3>
                    <p className="text-gray-700">
                      Fill out the reservation form with your details, including your name, contact information, and rental dates.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-akfas-blue rounded-full w-10 h-10 flex items-center justify-center shrink-0 mt-1 mr-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-akfas-blue mb-2">Connect via WhatsApp</h3>
                    <p className="text-gray-700">
                      After submitting the form, you'll be redirected to WhatsApp with a pre-filled message containing your reservation details.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-akfas-blue rounded-full w-10 h-10 flex items-center justify-center shrink-0 mt-1 mr-4">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-akfas-blue mb-2">Confirmation</h3>
                    <p className="text-gray-700">
                      Our team will respond to your WhatsApp message to confirm your reservation, provide additional information, and answer any questions.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-akfas-blue rounded-full w-10 h-10 flex items-center justify-center shrink-0 mt-1 mr-4">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-akfas-blue mb-2">Pickup & Enjoy</h3>
                    <p className="text-gray-700">
                      On the agreed date, collect your vehicle from our location in Dakhla and begin your adventure!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ReservePage;
