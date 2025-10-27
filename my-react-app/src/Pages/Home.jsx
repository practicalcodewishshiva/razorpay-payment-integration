import React from 'react'
import Sponsors from './Sponsors'
import Sponsors_card from './Sponsors_card'
import Prices_img from './Prices_img'

const Home = () => {
  return (
    <>
    <div className="flex px-10 mt-2">
      <img src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/11/0eBLUDW2_3a1df837d6ec494cbc36242bdeded136.jpg" alt="" className="w-1/2"/>
      <img src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/OCTOBER/11/XYhEeJkE_8723f25238b24c3f8869d8d8645400ef.jpg" alt="" className="w-1/2" />
    </div>
    <div>
        <Sponsors />
    </div>
    <div>
        <Sponsors_card />
    </div>
    {/* <div>
    <Prices_img />
    </div> */}
</>
  )
}

export default Home
