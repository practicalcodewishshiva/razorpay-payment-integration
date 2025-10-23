import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";
import { Search, Heart, User, ShoppingBag, Menu, X } from "lucide-react";

const Searchbar = () => {
  return (
    
     <div className="hidden md:flex items-center bg-gray-100 rounded-md px-3 py-2 sm:w-1/2 lg:w-3/4 xl:w-38/40">
          <Search className="text-gray-500 mr-2" size={18} />
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

    
  )
}

export default Searchbar
