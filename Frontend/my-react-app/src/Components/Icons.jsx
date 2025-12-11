import React from 'react'
import { Search, Heart, User, ShoppingBag, Menu, X } from "lucide-react";
import { PiHeartThin } from "react-icons/pi";
import { PiHandbag } from "react-icons/pi";

const Icons = () => {
  return (
    <div>
      <div className="sm:hidden flex space-x-4 md:space-x-8 text-center text-gray-700">
          <div className="hidden sm:block">
            <User className="mx-auto" />
            <p className="text-xs font-bold">Profile</p>
          </div>
          <div className="hidden sm:block">
            <PiHeartThin className="mx-auto text-2xl font-extrabold" />
            <p className="text-xs font-bold">Wishlist</p>
          </div>
          <div>
            <PiHandbag className="mx-auto text-2xl" />
            <p className="text-xs font-bold hidden sm:block">Bag</p>
          </div>
          <button
            
          >
           
          </button>
        </div>
    </div>
  )
}

export default Icons
