
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MapPin, Wind, Waves, Sun, Compass, Utensils, Hotel, Fish } from 'lucide-react';

const DakhlaPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        title="Discover Dakhla"
        subtitle="A paradise between desert and ocean in the Western Sahara of Morocco"
        backgroundImage="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=2070&auto=format&fit=crop"
        buttonText="Reserve a Car to Explore"
        buttonLink="/reserve"
      />
      
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="section-title text-center mb-8">The Pearl of Southern Morocco</h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl mb-6">
                Dakhla is a coastal city located on a narrow peninsula on Morocco's Atlantic coast, about 1,500 kilometers south of Marrakech in the Western Sahara region. This sun-soaked paradise offers a unique blend of desert landscapes and ocean vistas, making it one of North Africa's most extraordinary destinations.
              </p>
              
              <p className="mb-6">
                With its year-round sunshine, consistent winds, and pristine lagoon, Dakhla has emerged as a world-class destination for kite surfing, windsurfing, and other water sports. Beyond the water, the region offers breathtaking natural beauty with its white sand dunes, diverse wildlife, and stunning sunsets over the Atlantic Ocean.
              </p>
              
              <p className="mb-6">
                The city combines traditional Moroccan and Sahrawi cultures, creating a unique atmosphere reflected in its architecture, cuisine, and local traditions. Visitors to Dakhla can experience the warm hospitality of the local people while exploring this remote and picturesque corner of Morocco.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Climate & Geography Section */}
      <section className="py-16 bg-akfas-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Climate & Geography</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
              <Wind className="h-12 w-12 text-akfas-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-akfas-blue">Consistent Winds</h3>
              <p className="text-gray-700">
                Dakhla enjoys steady trade winds throughout the year, making it perfect for kite sports and providing a pleasant cooling effect even on the hottest days.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
              <Sun className="h-12 w-12 text-akfas-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-akfas-blue">Mild Climate</h3>
              <p className="text-gray-700">
                With temperatures ranging from 18°C to a comfortable 28°C year-round, Dakhla offers an ideal escape from extreme heat or cold.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
              <Waves className="h-12 w-12 text-akfas-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-akfas-blue">Protected Lagoon</h3>
              <p className="text-gray-700">
                The 40km-long Dakhla Bay creates a massive, shallow lagoon with flat water conditions, perfect for water sports beginners and professionals alike.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
              <Compass className="h-12 w-12 text-akfas-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-akfas-blue">Unique Peninsula</h3>
              <p className="text-gray-700">
                The distinctive narrow peninsula creates a diverse landscape where the Sahara Desert meets the Atlantic Ocean, offering spectacular scenic views.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-akfas-blue">Best Time to Visit</h3>
            <p className="text-gray-700 mb-6">
              Dakhla is a year-round destination thanks to its mild climate. However, each season offers a slightly different experience:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-akfas-accent">April to November</h4>
                <p className="text-gray-700">
                  Peak season for water sports with the strongest and most consistent winds. Perfect for kitesurfing and windsurfing enthusiasts.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-akfas-accent">December to March</h4>
                <p className="text-gray-700">
                  Slightly cooler temperatures and milder winds. Ideal for those looking to explore the area with fewer tourists and still enjoy pleasant weather.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Top Attractions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Top Attractions in Dakhla</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-akfas-light p-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=1000&auto=format&fit=crop" 
                alt="Dakhla Bay" 
                className="w-full h-60 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold mb-3 text-akfas-blue">Dakhla Bay</h3>
              <p className="text-gray-700 mb-4">
                The stunning bay is the centerpiece of Dakhla's natural beauty. With its shallow, turquoise waters and white sand beaches, it's perfect for swimming, kitesurfing, and windsurfing. The contrast between the azure waters and the desert backdrop creates a mesmerizing landscape.
              </p>
              <div className="flex items-center text-akfas-blue">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Western side of the Dakhla Peninsula</span>
              </div>
            </div>
            
            <div className="bg-akfas-light p-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?q=80&w=1000&auto=format&fit=crop" 
                alt="White Dunes" 
                className="w-full h-60 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold mb-3 text-akfas-blue">White Dunes (Dragon Island)</h3>
              <p className="text-gray-700 mb-4">
                This unique formation of white sand dunes emerges during low tide in the middle of the lagoon. Its otherworldly landscape makes it one of the most photogenic spots in Dakhla and a popular destination for day trips.
              </p>
              <div className="flex items-center text-akfas-blue">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Dakhla Lagoon, accessible by boat</span>
              </div>
            </div>
            
            <div className="bg-akfas-light p-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=1000&auto=format&fit=crop" 
                alt="Sahara Desert" 
                className="w-full h-60 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold mb-3 text-akfas-blue">Sahara Desert Excursions</h3>
              <p className="text-gray-700 mb-4">
                Venture beyond the peninsula to experience the vastness of the Sahara Desert. Whether by 4x4 vehicles or camel treks, exploring the golden dunes and attending a traditional desert camp provides an authentic taste of Saharan life.
              </p>
              <div className="flex items-center text-akfas-blue">
                <MapPin className="h-5 w-5 mr-2" />
                <span>East of Dakhla City</span>
              </div>
            </div>
            
            <div className="bg-akfas-light p-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?q=80&w=1000&auto=format&fit=crop" 
                alt="Oyster Farms" 
                className="w-full h-60 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold mb-3 text-akfas-blue">Oyster Farms</h3>
              <p className="text-gray-700 mb-4">
                Dakhla's protected waters have made it famous for oyster farming. Visit the farms to learn about the cultivation process and enjoy freshly harvested oysters with a glass of wine—a surprising delicacy in this remote corner of Morocco.
              </p>
              <div className="flex items-center text-akfas-blue">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Various locations along Dakhla Bay</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Activities & Experiences Section */}
      <section className="py-16 bg-akfas-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Activities & Experiences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-akfas-blue">Water Sports Paradise</h3>
              <p className="text-gray-700 mb-4">
                Dakhla is internationally renowned for kitesurfing and windsurfing due to its consistent winds and flat-water lagoon. The peninsula hosts several professional competitions each year and offers facilities for beginners and pros alike.
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-akfas-accent">Don't miss:</span> Taking a lesson at one of the many kite schools or watching the professionals perform impressive jumps and tricks.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-akfas-blue">Desert Adventures</h3>
              <p className="text-gray-700 mb-4">
                Beyond the water, Dakhla offers exciting desert experiences. Take a 4x4 tour to explore remote landscapes, enjoy camel rides along the coast, or spend a night under the stars in a traditional desert camp.
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-akfas-accent">Don't miss:</span> Watching the sunset over the Sahara while enjoying traditional mint tea served by local guides.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-akfas-blue">Wildlife Observation</h3>
              <p className="text-gray-700 mb-4">
                The region is a biodiversity hotspot, particularly for bird watching. The Dakhla Bay is an important stopover for migratory birds, and you might spot flamingos, herons, and various seabirds. The waters are also home to dolphins and occasionally whales.
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-akfas-accent">Don't miss:</span> A boat tour to observe marine life in their natural habitat or visiting bird-watching spots during migration seasons.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Accommodation & Dining Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Where to Stay & Eat</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Hotel className="h-8 w-8 text-akfas-accent mr-3" />
                <h3 className="text-2xl font-semibold text-akfas-blue">Accommodation</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                Dakhla offers a range of accommodation options to suit different preferences and budgets. From luxury eco-resorts overlooking the lagoon to cozy guesthouses in the city center, there's something for every traveler.
              </p>
              
              <h4 className="text-lg font-semibold mb-3 text-akfas-blue">Popular Options:</h4>
              <ul className="space-y-4 mb-6">
                <li className="bg-akfas-light p-4 rounded">
                  <p className="font-semibold text-akfas-blue">Luxury Eco-Resorts</p>
                  <p className="text-gray-700">Located along the lagoon, offering direct access to the water, comfortable accommodation, and often on-site kitesurfing schools.</p>
                </li>
                <li className="bg-akfas-light p-4 rounded">
                  <p className="font-semibold text-akfas-blue">Boutique Hotels</p>
                  <p className="text-gray-700">In and around Dakhla city, providing a more authentic local experience with Moroccan hospitality.</p>
                </li>
                <li className="bg-akfas-light p-4 rounded">
                  <p className="font-semibold text-akfas-blue">Desert Camps</p>
                  <p className="text-gray-700">For the adventurous, spend a night under the stars in traditional Sahrawi-style desert camps.</p>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <Utensils className="h-8 w-8 text-akfas-accent mr-3" />
                <h3 className="text-2xl font-semibold text-akfas-blue">Dining</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                Dakhla's cuisine combines traditional Moroccan flavors with Sahrawi influences and an abundance of fresh seafood. The result is a unique culinary experience that shouldn't be missed.
              </p>
              
              <h4 className="text-lg font-semibold mb-3 text-akfas-blue">Must-Try Dishes:</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Fish className="h-5 w-5 text-akfas-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-akfas-blue">Fresh Seafood</p>
                    <p className="text-gray-700">From grilled fish and seafood tajines to the region's famous oysters, seafood is a highlight of Dakhla's cuisine.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Utensils className="h-5 w-5 text-akfas-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-akfas-blue">Camel Meat Dishes</p>
                    <p className="text-gray-700">A specialty in the Western Sahara region, often slow-cooked with spices for tenderness and flavor.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Utensils className="h-5 w-5 text-akfas-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-akfas-blue">Traditional Couscous</p>
                    <p className="text-gray-700">Often served on Fridays, this Moroccan staple takes on local flavors in Dakhla.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Getting Around Section */}
      <section className="py-16 bg-akfas-light">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="section-title text-center mb-8">Getting Around Dakhla</h2>
          
          <p className="text-gray-700 text-center mb-12">
            While Dakhla has some public transportation options, having your own vehicle offers the freedom to explore this expansive region at your own pace and discover hidden gems off the beaten path.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-akfas-blue">Why Rent a Car in Dakhla?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-akfas-accent rounded-full w-10 h-10 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-akfas-blue mb-2">Freedom to Explore</h4>
                  <p className="text-gray-700">
                    Visit remote beaches, desert locations, and attractions at your own schedule without waiting for tours or transportation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-akfas-accent rounded-full w-10 h-10 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-akfas-blue mb-2">Convenience</h4>
                  <p className="text-gray-700">
                    Easily transport your kitesurfing or windsurfing equipment between different spots along the bay.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-akfas-accent rounded-full w-10 h-10 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-akfas-blue mb-2">Comfort</h4>
                  <p className="text-gray-700">
                    Travel in air-conditioned comfort, especially important during warmer days in this desert region.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-akfas-accent rounded-full w-10 h-10 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-akfas-blue mb-2">Access</h4>
                  <p className="text-gray-700">
                    Reach areas not serviced by public transportation, including desert viewpoints and secluded beaches.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="bg-akfas-accent hover:bg-akfas-accent/90">
              <Link to="/reserve">Rent a Car with AKFAS Car Rental</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Travel Tips Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="section-title text-center mb-12">Travel Tips for Dakhla</h2>
          
          <div className="bg-akfas-light p-8 rounded-lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-akfas-blue">Best Time to Visit</h3>
                <p className="text-gray-700">
                  While Dakhla is a year-round destination, April to November offers the best conditions for kitesurfing. If you prefer milder conditions and fewer crowds, consider visiting from December to March.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 text-akfas-blue">What to Pack</h3>
                <p className="text-gray-700">
                  Light clothing, sunscreen, sunglasses, and a hat are essential due to the strong sun. Bring a light jacket or sweater for cooler evenings, especially during winter months.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 text-akfas-blue">Language</h3>
                <p className="text-gray-700">
                  Arabic is the official language, but French is widely spoken. In tourist areas, you'll find some English speakers, especially in hotels and kitesurfing schools.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 text-akfas-blue">Currency</h3>
                <p className="text-gray-700">
                  The Moroccan Dirham (MAD) is the local currency. While larger establishments may accept credit cards, it's advisable to carry cash, especially when visiting smaller shops or remote areas.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 text-akfas-blue">Internet & Communication</h3>
                <p className="text-gray-700">
                  Most hotels and restaurants offer WiFi. For mobile connectivity, purchase a local SIM card upon arrival for affordable data and calling options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-akfas-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Magic of Dakhla</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Rent a car with AKFAS Car Rental and explore Dakhla's stunning landscapes at your own pace.
          </p>
          <Button asChild size="lg" className="bg-akfas-accent hover:bg-akfas-accent/90 text-white font-semibold px-8 text-lg">
            <Link to="/reserve">Reserve Your Car Today</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DakhlaPage;
