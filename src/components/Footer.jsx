import React from 'react';
import { MdFastfood } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-100 px-4 sm:px-6 md:px-20 py-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <MdFastfood className="w-10 h-10 text-orange-500" />
          <p className="text-2xl font-bold text-orange-500">Foodie Hub</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <IoLogoYoutube className="w-6 h-6 text-orange-500" />
          <FaFacebook className="w-6 h-6 text-orange-500" />
          <FaInstagram className="w-6 h-6 text-orange-500" />
          <FaTwitter className="w-6 h-6 text-orange-500" />
        </div>
      </div>

      {/* Links Section */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-orange-400">
        <ul>
          <li className="font-bold text-lg text-orange-500 pb-2">Company</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Careers</li>
          <li className="cursor-pointer">Team</li>
          <li className="cursor-pointer">Minis</li>
          <li className="cursor-pointer">Pyng</li>
        </ul>
        <ul>
          <li className="font-bold text-lg text-orange-500 pb-2">Contact Us</li>
          <li className="cursor-pointer">Help & Support</li>
          <li className="cursor-pointer">Partner With Us</li>
          <li className="cursor-pointer">Ride With Us</li>
        </ul>
        <ul>
          <li className="font-bold text-lg text-orange-500 pb-2">Legal</li>
          <li className="cursor-pointer">Terms & Conditions</li>
          <li className="cursor-pointer">Cookie Policy</li>
          <li className="cursor-pointer">Privacy Policy</li>
        </ul>
        <ul>
          <li className="font-bold text-lg text-orange-500 pb-2">Life at Foodie Hub</li>
          <li className="cursor-pointer">Explore With Foodie Hub</li>
          <li className="cursor-pointer">Foodie Hub News</li>
          <li className="cursor-pointer">Snackables</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
