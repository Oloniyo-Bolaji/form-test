import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { FaQuestion } from "react-icons/fa6";


const InputTooltip = ({title}) => {
  return (
    <Tooltip title={title} sx={{ fontSize: "10px", color: "black" }}>
      <IconButton>
        <FaQuestion />
      </IconButton>
    </Tooltip>
  );
};

export default InputTooltip;
