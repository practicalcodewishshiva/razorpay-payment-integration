import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const minDistance = 100;

export default function RangeSlider() {
  const [value, setValue] = React.useState([0, 5000]);

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) return;

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  return (
    <Box sx={{ py: 2, px: "28px", borderBottom: "1px solid #edebef" }}>
      <h4 className="!text-[14px]! text-[#282c3f] !font-[700]! mb-[8px]">
        PRICE
      </h4>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={5000}
        step={50}
        disableSwap
        sx={{
          color: "#FF3F6C",
          height: 3,
          "&.MuiSlider-root": {
            padding: "0px",
          },
          "& .MuiSlider-thumb": {
            width: 12,
            height: 12,
          },
          "& .MuiSlider-rail": {
            color: "#ccc",
            opacity: 1,
            height: 4,
          },
        }}
      />
      <p className="text-[12px] mt-[8px]">
        <strong>₹{value[0]}</strong> - <strong>₹{value[1]}</strong>
      </p>
    </Box>
  );
}
