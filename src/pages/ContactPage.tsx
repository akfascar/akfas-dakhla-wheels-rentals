
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real implementation, you would handle form submission here
    alert('Message sent! We will get back to you soon.');
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-12 bg-akfas-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-akfas-blue mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Have questions or need assistance? We're here to help you with all your car rental needs in Dakhla.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-akfas-blue mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help you?" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Write your message here..." 
                      rows={5} 
                      required 
                      className="resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-akfas-accent hover:bg-akfas-accent/90"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
              
              <div>
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                  <h2 className="text-2xl font-semibold text-akfas-blue mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-akfas-accent shrink-0 mt-1 mr-4" />
                      <div>
                        <h3 className="font-semibold text-akfas-blue mb-1">Address</h3>
                        <p className="text-gray-700">
                          Main Street, Dakhla City Center<br />
                          Dakhla, Morocco
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-akfas-accent shrink-0 mt-1 mr-4" />
                      <div>
                        <h3 className="font-semibold text-akfas-blue mb-1">Phone</h3>
                        <p className="text-gray-700">
                          +212 612-345-678<br />
                          +212 687-654-321
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-akfas-accent shrink-0 mt-1 mr-4" />
                      <div>
                        <h3 className="font-semibold text-akfas-blue mb-1">Email</h3>
                        <p className="text-gray-700">
                          info@akfascarrental.com<br />
                          reservations@akfascarrental.com
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-akfas-accent shrink-0 mt-1 mr-4" />
                      <div>
                        <h3 className="font-semibold text-akfas-blue mb-1">Working Hours</h3>
                        <p className="text-gray-700">
                          Monday - Saturday: 8:00 AM - 8:00 PM<br />
                          Sunday: 9:00 AM - 5:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-semibold text-akfas-blue mb-6">Connect With Us</h2>
                  
                  <div className="flex space-x-6 mb-6">
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-akfas-light hover:bg-akfas-accent hover:text-white transition-colors p-3 rounded-full"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-6 w-6" />
                    </a>
                    
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-akfas-light hover:bg-akfas-accent hover:text-white transition-colors p-3 rounded-full"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-akfas-light hover:bg-akfas-accent hover:text-white transition-colors p-3 rounded-full"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                  </div>
                  
                  <p className="text-gray-700">
                    Follow us on social media to stay updated with our latest offers, promotions, and travel tips for exploring Dakhla.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-akfas-blue mb-4">
                Our Location
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Find us in the heart of Dakhla, conveniently located for easy access from anywhere in the city.
              </p>
            </div>
            
            <div className="bg-gray-200 rounded-lg overflow-hidden h-96 shadow-lg">
              {/* This would be a real Google Map in a live implementation */}
              <div className="w-full h-full flex items-center justify-center bg-akfas-light">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-akfas-accent mx-auto mb-4" />
                  <p className="text-lg font-semibold text-akfas-blue">Map of Dakhla</p>
                  <p className="text-gray-700">Interactive map would be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-12 bg-akfas-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-akfas-blue mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Find answers to common questions about our car rental services in Dakhla.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-akfas-blue mb-2">
                    What documents do I need to rent a car?
                  </h3>
                  <p className="text-gray-700">
                    You'll need a valid driver's license, passport or ID card, and a credit card for the security deposit. The driver must be at least 21 years old and have held a license for at least 1 year.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-akfas-blue mb-2">
                    Is insurance included in the rental price?
                  </h3>
                  <p className="text-gray-700">
                    Yes, basic insurance is included in all our rental prices. Additional comprehensive insurance options are available for a small extra fee for complete peace of mind.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-akfas-blue mb-2">
                    Can I pick up the car at the airport?
                  </h3>
                  <p className="text-gray-700">
                    Yes, we offer car pickup and drop-off services at Dakhla Airport. Please let us know your flight details when making your reservation.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-akfas-blue mb-2">
                    What is your cancellation policy?
                  </h3>
                  <p className="text-gray-700">
                    Free cancellation up to 48 hours before your scheduled pickup. Cancellations within 48 hours may incur a fee of one day's rental charge.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-akfas-blue mb-2">
                    Do you offer long-term rentals?
                  </h3>
                  <p className="text-gray-700">
                    Yes, we offer special rates for long-term rentals (7+ days). Please contact us directly for a personalized quote based on your specific needs.
                  </p>
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

export default ContactPage;
