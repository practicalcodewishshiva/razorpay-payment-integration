import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const brandList = [
  {
    id: 1,
    name: "WOOSTRO",
  },
  {
    id: 2,
    name: "Greylongg",
  },
  {
    id: 3,
    name: "Roadster",
  },
  {
    id: 4,
    name: "HRX by Hrithik Roshan",
  },
  {
    id: 5,
    name: "Tommy Hilfiger",
  },
  {
    id: 6,
    name: "Friskers",
  },
  {
    id: 7,
    name: "SZN",
  },
  {
    id: 8,
    name: "U.S. Polo Assn",
  },
];

const Brand = () => {
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
            {brandList.map((item) => (
              <li className="list-none flex items-center gap-4 mb-[5px]">
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

export default Brand;
