import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const colorList = [
  { id: 1, colour: "Black", colourCode: "#edebef" },
  { id: 2, colour: "Coral", colourCode: "#FF7F50" },
  { id: 3, colour: "Blue", colourCode: "#0074D9" },
  { id: 4, colour: "Green", colourCode: "#5EB160" },
  { id: 5, colour: "Gold", colourCode: "#E5C74A" },
  { id: 6, colour: "Grey", colourCode: "#9FA8AB" },
  { id: 7, colour: "Red", colourCode: "#D34B56" },
  { id: 8, colour: "Beige", colourCode: "#E8E6CF" },
  { id: 9, colour: "Maroon", colourCode: "#B03060" },
  { id: 10, colour: "Yellow", colourCode: "#EADC32" },
  { id: 11, colour: "Olive", colourCode: "#3D9970" },
  { id: 12, colour: "Brown", colourCode: "#915039" },
  { id: 13, colour: "Pink", colourCode: "#F1A9C4" },
  { id: 14, colour: "Orange", colourCode: "#F28D20" },
  { id: 15, colour: "Purple", colourCode: "#800080" },
];

const ColorsSection = () => {
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
            BRAND
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="!pt-0!">
          <ul>
            {colorList.map((item) => (
              <li className="list-none flex items-center gap-4 mb-[5px]">
                <input
                  type="checkbox"
                  id={item.id}
                  className="h-[16px] w-[16px] accent-[#FF3F6C]"
                />
                <span
                  className="h-[15px] w-[14px] rounded-full"
                  style={{
                    backgroundColor: item.colour,
                  }}
                ></span>
                <label htmlFor={item.id} className="text-[14px] text-[#282c3f]">
                  {item.colour}
                </label>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ColorsSection;
