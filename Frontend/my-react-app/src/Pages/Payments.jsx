import React from "react";
import img from "../assets/Images/Mynta_logo.png";
import { FaMoneyCheckAlt } from "react-icons/fa";
import upi from "../assets/Images/Upi_logo.png";
import { CiCreditCard1 } from "react-icons/ci";
import { BsCashCoin } from "react-icons/bs";
 import { TfiWallet } from "react-icons/tfi";
 import { FaMoneyBillTrendUp } from "react-icons/fa6";
 import { CiBank } from "react-icons/ci";

const Payments = () => {
  return (
    <>
      <div className="flex min-h-[7vh] border-b border-gray-200  font-extralight">
        <div className="w-[15%]  items-center flex justify-center">
          <div className="w-[50%]  ">
            <img className="h-10" src={img} alt="" />
          </div>
        </div>

        <div className="w-[70%]">
          <div class="flex justify-center  p-4">
            <div className="text-gray-500 font-medium text-xs">BAG</div>

            <div className="text-gray-400 text-xs mx-2">----------</div>

            <div className="text-gray-500 font-medium text-xs">ADDRESS</div>

            <div className="text-gray-400 text-xs mx-2">----------</div>

            <div className="text-teal-500 font-medium border-b-2 border-teal-500 pb-1 text-xs">
              PAYMENT
            </div>
          </div>
        </div>
        <div className="w-[15%]  items-center flex ">
          <div class="flex items-end ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-9 text-[#61cfb3]"
            >
              <path
                fillRule="evenodd"
                d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>

            <div class="text-gray-500 font-medium tracking-wider text-xs absolute top-9 right-[112px] ">
              100% SECURE
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  flex justify-center gap-8   min-h-[80vh]">
        <div className="flex flex-col w-[700px] h-[550px] bg-white  border-r border-gray-200 ">
          <div className="  p-3">
            <div class="p-3 border border-gray-200 font-extralight">
              <div class="flex items-center mb-2 gap-2">
                <span class="text-xl mr-2 text-gray-700 gap-2 font-extrabold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.99 14.993 6-6m6 3.001c0 1.268-.63 2.39-1.593 3.069a3.746 3.746 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043 3.745 3.745 0 0 1-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.297 3.746 3.746 0 0 1-1.593-3.068c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.297 3.745 3.745 0 0 1 3.296-1.042 3.745 3.745 0 0 1 3.068-1.594c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.297 3.746 3.746 0 0 1 1.593 3.068ZM9.74 9.743h.008v.007H9.74v-.007Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </span>
                <span class="font-semibold text-[#454957] text-xs">
                  Bank Offer
                </span>
              </div>
              <div className="flex-col mx-2">
                <div class="ml-6 text-gray-700 text-xs ">
                  10% Instant Discount on PNB Credit Card on a min spend of
                  ₹3,000.TCA
                </div>

                <div class="">
                  <a
                    href="#"
                    className="text-[#ff4772]! font-semibold text-xs flex items-center mt-2 no-underline!"
                  >
                    Show More
                    <span class="ml-1 text-sm"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

            <div className="px-4 font-semibold text-[#434654] text-xs">
               Choose Payment Method
            </div>
            
             <div className=" p-3">
            <div class=" border border-gray-200">
              

                <div className="flex gap-2">
                  <ul className="list-none p-0 min-w-[30%] border border-gray-900 font-semibold bg-[#f4f4f5] m-0">
                    <li className="flex items-center gap-2  border-l-4 border-[#ff4772] p-3 text-xs text-[#ff4772]! font-semibold bg-white">
                      <FaMoneyCheckAlt className="size-4 text-gray-700! font-semibold  " />
                      Cash on Delivery
                    </li>
                    <li className="flex items-center gap-2  border border-gray-900 p-3 text-xs">
                      <span class="text-xl mr-2 text-gray-700 gap-2 font-extrabold">
                         <img className="h-3 " src={upi} alt="hi" />
                </span>
                      UPI</li>
                    <li className="flex items-center gap-2 border border-gray-900 p-3 text-xs ">
                      <CiCreditCard1 />
                      Credit/Debit Card</li>
                    <li className="flex items-center gap-2 border border-gray-900 p-3 text-xs">
                      <BsCashCoin />
                      Pay Later</li>
                    <li className="flex items-center gap-2 border border-gray-900 p-3 text-xs">
                     
                      <TfiWallet />
                      Wallets</li>
                    <li className="flex items-center gap-2 border border-gray-900 p-3 text-xs">
                      
                      <FaMoneyBillTrendUp />
                      
                      EMI</li>
                    <li className="flex items-center gap-2 border border-gray-900 p-3 text-xs">
                      
                      
                      <CiBank />
                      Net Banking</li>
                  </ul>

                  <ul className="list-none p-3  min-w-[70%] m-0">
                    <li className="flex items-center gap-2 p-3 font-semibold text-sm text-[#464956]! ">
                      
                      Cash on Delivery  
                    </li>
                    <li className="flex items-center gap-2 " p-3>
                      <input type="radio"  className="flex items-center  justify-between gap-2" name="Cash on Delivery (Cash/UPI)" id="q" />
                        
                        <div className="text-[#464956]! font-semibold text-sm"> Cash on Delivery (Cash/UPI)</div> 
                        <div className="absolute left-220" ><FaMoneyCheckAlt className="size-4" /></div>

                         
                      </li>
                  </ul>
                </div>

                




              
              


            </div>
          </div>
          

         
          





          <div className=" p-3">
            <div class="p-3 border border-gray-200 font-extralight">
              <div className="flex justify-between items-center">
                <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                  />
                </svg>

                <span class="font-semibold text-[#454957] text-xs">
                  Have a Gift Card?
                </span>
              </div>
              <div class="pb-2">
                  <a
                    href="#"
                    className="text-[#ff4772]! font-semibold text-xs flex items-center mt-2 no-underline!"
                  >
                    APPLY GIFT CARD
                    <span class="ml-1 text-sm"></span>
                  </a>
                </div>
              </div>
              


            </div>
          </div>
        </div>

        <div className="w-[300px] h-[300px] bg-white p-6 mt-3 px-2 ">
          <div className="font-semibold text-[#454957] text-xs">
            PRICE DETAILS(2 ITEMS)
          </div>
          <div className="border-b border-gray-200  font-extralight">
            <div className="flex justify-between text-gray-700 text-xs mt-2">
              <div>Total MRP</div>
              <div>₹3,498</div>
            </div>
            <div className="flex justify-between text-gray-700 text-xs mt-2">
              <div>Discount on MRP</div>
              <div className="text-teal-500">-₹700</div>
            </div>
            <div className="flex justify-between text-gray-700 text-xs items-center mb-2">
              <div className="flex justify-center items-end gap-1">
                Platform Fee
                <a
                  href="#"
                  className="text-[#ff4772]! font-semibold text-xs flex items-center mt-2 no-underline!"
                >
                  Know More
                </a>
              </div>
              <div className="text-teal-500">₹23</div>
            </div>
          </div>

          <div>
            <div className="flex justify-between font-semibold text-[#414454] text-sm mt-4">
              <div>Total Amount</div>
              <div>₹2,821</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payments;
