// import React from 'react';
// import Link from 'next/link';
// import { Facebook, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import Image from 'next/image';

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-b from-purple-50 to-pink-100">
//       {/* Newsletter Section */}
//       <div className="border-b border-pink-200">
//         <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//             <div className="text-center md:text-left">
//               <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
//                 Join the Gleam Community
//               </h3>
//               <p className="mt-2 text-gray-600">Get beauty tips and exclusive offers straight to your inbox</p>
//             </div>
//             <div className="w-full md:w-96">
//               <form className="flex gap-3">
//                 <Input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="flex-1 px-4 py-3 rounded-full border-pink-200 focus:border-pink-500 focus:ring-pink-500 bg-white/90"
//                 />
//                 <Button
//                   type="submit"
//                   className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-pink-600 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
//                 >
//                   Subscribe
//                 </Button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {/* Company Info */}
//           <div>
//             <div className="flex items-center space-x-2 mb-6">
//               <div className="relative w-10 h-10 bg-white rounded-full shadow-md overflow-hidden">
//                 <Image src="/logo.avif" alt="Gleam Beauty" layout="fill" objectFit="cover" />
//               </div>
//               <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
//                 Gleam
//               </span>
//             </div>
//             <p className="text-gray-600 mb-6">
//               Discover your natural radiance with our curated collection of beauty essentials.
//             </p>
//             <div className="flex space-x-4">
//               <Link href="https://www.facebook.com/RiazSaifiDeveloper" className="text-gray-400 hover:text-pink-500 transition-colors">
//                 <Facebook className="w-6 h-6" />
//               </Link>
//               <Link href="https://www.linkedin.com/in/riaz-hussain-saifi" className="text-gray-400 hover:text-pink-500 transition-colors">
//                 <Linkedin className="w-6 h-6" />
//               </Link>
//               <Link href="https://www.instagram.com/saifi_developer/" className="text-gray-400 hover:text-pink-500 transition-colors">
//                 <Instagram className="w-6 h-6" />
//               </Link>
//               <Link href="https://www.youtube.com/@Saifi_Developer" className="text-gray-400 hover:text-pink-500 transition-colors">
//                 <Youtube className="w-6 h-6" />
//               </Link>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800 mb-6">Quick Links</h3>
//             <ul className="space-y-4">
//               {['Shop', 'New In', 'Brands', 'Beauty Tips', 'Gift Cards'].map((item) => (
//                 <li key={item}>
//                   <Link 
//                     href={`/${item.toLowerCase().replace('/', '')}`}
//                     className="text-gray-600 hover:text-pink-500 transition-colors"
//                   >
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Customer Care */}
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800 mb-6">Customer Care</h3>
//             <ul className="space-y-4">
//               {[
//                 'Contact Us',
//                 'Shipping & Returns',
//                 'Order Tracking',
//                 'Beauty Rewards',
//                 'Privacy Policy'
//               ].map((item) => (
//                 <li key={item}>
//                   <Link 
//                     href={`/${item.toLowerCase().replace(' & ', '-').replace(' ', '-')}`}
//                     className="text-gray-600 hover:text-pink-500 transition-colors"
//                   >
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800 mb-6">Get in Touch</h3>
//             <ul className="space-y-4">
//               <li className="flex items-center space-x-3">
//                 <MapPin className="w-5 h-5 text-pink-500" />
//                 <span className="text-gray-600">123 Beauty Lane, Glamour City</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <Phone className="w-5 h-5 text-pink-500" />
//                 <span className="text-gray-600">+1 (234) 567-8900</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <Mail className="w-5 h-5 text-pink-500" />
//                 <span className="text-gray-600">hello@gleambeauty.com</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-16 pt-8 border-t border-pink-200">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-600 text-sm flex items-center gap-1">
//               © {new Date().getFullYear()} Gleam Beauty. Made with <Heart className="w-4 h-4 text-pink-500" /> in NYC
//             </p>
//             <div className="mt-6 md:mt-0 flex space-x-6">
//               <Image src="/visa.png" width={40} height={24} alt="Visa" className="h-8 w-auto" />
//               <Image src="/mastercard.png" width={40} height={24} alt="Mastercard" className="h-8 w-auto" />
//               <Image src="/paypal.png" width={40} height={24} alt="PayPal" className="h-8 w-auto" />
//               <Image src="/amex.png" width={40} height={24} alt="American Express" className="h-8 w-auto" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;






"use client"

import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

// Define route configurations
const ROUTES = {
  shop: {
    main: '/shop',
    categories: [
      { name: 'Skincare', path: '/shop/skincare' },
      { name: 'Makeup', path: '/shop/makeup' },
      { name: 'Haircare', path: '/shop/haircare' },
      { name: 'Fragrance', path: '/shop/fragrance' },
      { name: 'Tools', path: '/shop/tools' }
    ]
  },
  quickLinks: [
    { name: 'New In', path: '/new-arrivals' },
    { name: 'Brands', path: '/brands' },
    { name: 'Beauty Tips', path: '/beauty-tips' },
    { name: 'Gift Cards', path: '/gift-cards' },
  ],
  customerCare: [
    { name: 'Contact Us', path: '/contact' },
    { name: 'Shipping & Returns', path: '/shipment' },
    { name: 'Order Tracking', path: '/order-tracking' },
    { name: 'Beauty Rewards', path: '/rewards' },
    { name: 'Privacy Policy', path: '/privacy-policy' }
  ],
  social: [
    { name: 'Facebook', icon: Facebook, path: 'https://www.facebook.com/RiazSaifiDeveloper' },
    { name: 'LinkedIn', icon: Linkedin, path: 'https://www.linkedin.com/in/riaz-hussain-saifi' },
    { name: 'Instagram', icon: Instagram, path: 'https://www.instagram.com/saifi_developer/' },
    { name: 'Youtube', icon: Youtube, path: 'https://www.youtube.com/@Saifi_Developer' }
  ]
};

const Footer = () => {
  const handleNewsletterSubmit = (e: any) => {
    e.preventDefault();
    // Add newsletter subscription logic here
  };

  return (
    <footer className="bg-gradient-to-b from-purple-50 to-pink-100">
      {/* Newsletter Section */}
      <div className="border-b border-pink-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Join the Gleam Community
              </h3>
              <p className="mt-2 text-gray-600">Get beauty tips and exclusive offers straight to your inbox</p>
            </div>
            <div className="w-full md:w-96">
              <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full border-pink-200 focus:border-pink-500 focus:ring-pink-500 bg-white/90"
                />
                <Button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:from-pink-600 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="relative w-10 h-10 bg-white rounded-full shadow-md overflow-hidden">
                <Image src="/logo.avif" alt="Gleam Beauty" layout="fill" objectFit="cover" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Gleam
              </span>
            </Link>
            <p className="text-gray-600 mb-6">
              Discover your natural radiance with our curated collection of beauty essentials.
            </p>
            <div className="flex space-x-4">
              {ROUTES.social.map(({ name, icon: Icon, path }) => (
                <Link 
                  key={name}
                  href={path}
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href={ROUTES.shop.main} className="text-gray-600 hover:text-pink-500 transition-colors">
                  Shop All
                </Link>
              </li>
              {ROUTES.quickLinks.map(({ name, path }) => (
                <li key={name}>
                  <Link href={path} className="text-gray-600 hover:text-pink-500 transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Customer Care</h3>
            <ul className="space-y-4">
              {ROUTES.customerCare.map(({ name, path }) => (
                <li key={name}>
                  <Link href={path} className="text-gray-600 hover:text-pink-500 transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-pink-500" />
                <span className="text-gray-600">Gulshion-e-Hadeed, Karachi</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pink-500" />
                <Link href="tel:+12345678900" className="text-gray-600 hover:text-pink-500">
                  +92 3000321640
                </Link>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pink-500" />
                <Link href="mailto:hello@gleambeauty.com" className="text-gray-600 hover:text-pink-500">
                 infosaifideveloper@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-pink-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm flex items-center gap-1">
              © {new Date().getFullYear()} Gleam Beauty. Made with <Heart className="w-4 h-4 text-pink-500" /> in NYC
            </p>
            <div className="mt-6 md:mt-0 flex space-x-6">
              <Image src="/payment/visa.png" width={40} height={24} alt="Visa" className="h-8 w-auto" />
              <Image src="/payment/mastercard.png" width={40} height={24} alt="Mastercard" className="h-8 w-auto" />
              <Image src="/payment/paypal.png" width={40} height={24} alt="PayPal" className="h-8 w-auto" />
              <Image src="/payment/amex.png" width={40} height={24} alt="American Express" className="h-8 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
