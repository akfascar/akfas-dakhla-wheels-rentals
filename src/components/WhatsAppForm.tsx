
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(5, 'Phone number is required'),
  carType: z.string().min(1, 'Please select a car'),
  pickupDate: z.date({required_error: 'Pickup date is required'}),
  returnDate: z.date({required_error: 'Return date is required'}),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface WhatsAppFormProps {
  selectedCar?: string;
  cars: Array<{id: string, name: string}>;
}

const WhatsAppForm: React.FC<WhatsAppFormProps> = ({ selectedCar, cars }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      carType: selectedCar || '',
      message: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Format the dates
    const formattedPickupDate = format(data.pickupDate, 'MMM dd, yyyy');
    const formattedReturnDate = format(data.returnDate, 'MMM dd, yyyy');
    
    // Construct the WhatsApp message
    const message = encodeURIComponent(
      `*New Car Reservation Request*\n
*Name:* ${data.fullName}\n
*Email:* ${data.email}\n
*Phone:* ${data.phone}\n
*Car:* ${data.carType}\n
*Pickup Date:* ${formattedPickupDate}\n
*Return Date:* ${formattedReturnDate}\n
*Message:* ${data.message || 'None'}`
    );
    
    // Construct the WhatsApp URL with the Moroccan country code
    const whatsappUrl = `https://wa.me/212612345678?text=${message}`;
    
    // Show success message
    toast({
      title: "Reservation Submitted",
      description: "You'll be redirected to WhatsApp to complete your booking.",
    });
    
    // Redirect to WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      form.reset();
    }, 1000);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+212 612 345 678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="carType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Car Type</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a car" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {cars.map(car => (
                      <SelectItem key={car.id} value={car.name}>
                        {car.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="pickupDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Pickup Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="returnDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Return Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => {
                        const pickupDate = form.getValues('pickupDate');
                        return pickupDate ? date < pickupDate : date < new Date();
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Notes (Optional)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Any specific requirements or questions..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full bg-akfas-accent hover:bg-akfas-accent/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Reserve via WhatsApp"}
        </Button>
      </form>
    </Form>
  );
};

export default WhatsAppForm;
