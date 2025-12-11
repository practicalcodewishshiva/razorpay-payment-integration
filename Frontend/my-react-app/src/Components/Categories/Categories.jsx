import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const categorieList = [
  {
    id: 1,
    name: "Tshirts",
  },
  {
    id: 2,
    name: "Lounge Tshirts",
  },
];

const Categories = () => {
  return (
    <>
      <Accordion
        square
        elevation={0}
        className="!border-b! !border-[#edebef]! pl-[12px] pr-[12px]"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="!text-[14px]! text-[#282c3f] !font-[700]!">
            CATEGORIES
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="!pt-0!">
          <ul>
            {categorieList.map((item) => (
              <li key={item.id} className="list-none flex items-center gap-4 mb-[5px]">
                <input
                  type="checkbox"
                  id={item.id}
                  className="h-[16px] w-[16px] accent-[#FF3F6C]"
                />
                <label htmlFor={item.id} className="text-[14px] text-[#282c3f]">
                  {item.name}
                </label>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Categories;
