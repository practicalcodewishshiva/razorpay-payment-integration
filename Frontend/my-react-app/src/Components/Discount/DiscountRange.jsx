import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const discountList = [
  { id: 1, name: "10% and above" },
  { id: 2, name: "20% and above" },
  { id: 3, name: "30% and above" },
  { id: 4, name: "40% and above" },
  { id: 5, name: "50% and above" },
  { id: 6, name: "60% and above" },
  { id: 7, name: "70% and above" },
];

const DiscountRange = () => {
  const [selected, setSelected] = useState(null);

  return (
    <Accordion square elevation={0} className="pl-[12px] pr-[12px]">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography className="!text-[14px]! text-[#282c3f] !font-[700]!">
          DISCOUNT RANGE
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="!pt-!">
        <ul>
          {discountList.map((item) => (
            <li
              key={item.id}
              className="list-none flex items-center gap-3 mb-2 cursor-pointer"
              onClick={() => setSelected(item.id)}
            >
              <input
                type="radio"
                id={`discount-${item.id}`}
                name="discount"
                checked={selected === item.id}
                onChange={() => setSelected(item.id)}
                className="h-4 w-4 accent-[#FF3F6C] cursor-pointer"
              />
              <label
                htmlFor={`discount-${item.id}`}
                className={`text-[14px] text-[#282c3f] ${
                  selected === item.id ? "font-bold" : "font-normal"
                }`}
              >
                {item.name}
              </label>
            </li>
          ))}
        </ul>
      </AccordionDetails>
    </Accordion>
  );
};

export default DiscountRange;
