
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Fuel, GaugeCircle, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface CarCardProps {
  id: string;
  name: string;
  image: string;
  seats: number;
  fuel: string;
  transmission: string;
  airCondition: string;
}

const CarCard: React.FC<CarCardProps> = ({
  id,
  name,
  image,
  seats,
  fuel,
  transmission,
  airCondition
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="pt-6">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-akfas-blue">{name}</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-3 text-gray-600">
          <div className="flex items-center gap-2">
            <Users size={16} className="text-akfas-accent" />
            <span>{seats} Seats</span>
          </div>
          <div className="flex items-center gap-2">
            <Fuel size={16} className="text-akfas-accent" />
            <span>{fuel}</span>
          </div>
          <div className="flex items-center gap-2">
            <GaugeCircle size={16} className="text-akfas-accent" />
            <span>{transmission}</span>
          </div>
          <div className="flex items-center gap-2">
            <Wind size={16} className="text-akfas-accent" />
            <span>{airCondition}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button asChild className="w-full bg-akfas-blue hover:bg-akfas-blue/90">
          <Link to={`/reserve?car=${id}`}>Book Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
