import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Categories from "../Categories/Categories";
import Brand from "../Brands/Brand";
import RangeSlider from "../RangeSlider/RangeSlider";
import ColorsSection from "../colorsection/ColorSection";
import DiscountRange from "../Discount/DiscountRange";

const Sidebar = () => {
  return (
    <div className="min-h-screen bg-white border-r border-[#edebef] w-[280px] mt-15">
      <Categories />
      <Brand />
      <RangeSlider />
      <ColorsSection />
      <DiscountRange />
    </div>
  );
};

export default Sidebar;
