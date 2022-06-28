import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StartRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import IconButtom from "@mui/material/IconButton";
function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButtom className="swipeButtons__repeat">
        <ReplayIcon fontSize="large" />
      </IconButtom>
      <IconButtom className="swipeButtons__left">
        <CloseIcon fontSize="large" />
      </IconButtom>
      <IconButtom className="swipeButtons__star">
        <StartRateIcon fontSize="large" />
      </IconButtom>
      <IconButtom className="swipeButtons__right">
        <FavoriteIcon fontSize="large" />
      </IconButtom>
      <IconButtom className="swipeButtons__lightning">
        <FlashOnIcon fontSize="large" />
      </IconButtom>
    </div>
  );
}

export default SwipeButtons;
