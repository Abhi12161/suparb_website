import React, { useState } from "react";
import {
  Twitter,
  Facebook,
  Google,
  Linkedin,
  Whatsapp,
  Telegram,
} from "react-social-sharing";
import { FaLink } from "react-icons/fa";
import {InputLabel, MenuItem, FormControl, Select} from '@mui/material';
import { IoShareOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { Box, Typography, Fab } from "@mui/material";


const Stories = () => {
  const [copied, setCopied] = useState(false);
  function copy() {
    const url = document.createElement("input");
    url.value = window.location.href;
    document.body.appendChild(url);
    url.select();
    document.execCommand("copy");
    document.body.removeChild(url);
    setCopied(true);
  }
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>

    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <Select
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
        >
          
          <MenuItem>
         <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <button onClick={copy}>
          <FaLink />
          {!copied ? "Copy link" : "Copied!"}
        </button>

        <Whatsapp
          solid
          small
          message="Share on Whatsapp"
          link="http://sharingbuttons.io"
        />
        <Facebook solidcircle small link="http://sharingbuttons.io" />
        <Google solidcircle small link="http://sharingbuttons.io" />
        <Twitter
          solidcircle
          small
          message="I am so cool"
          link="http://sharingbuttons.io"
        />
        <Linkedin
          solid
          small
          message="I am so cool"
          link="http://sharingbuttons.io"
        />
        <Telegram
          solid
          small
          message="Share on Telegram"
          link="http://sharingbuttons.io"
        />
      </div>
          </MenuItem>
          
        </Select>
      </FormControl>
    </div>

    {/* <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              position: "relative",
            }}
          >
            <Fab>
              <IoShareOutline />
            </Fab>
            <Typography
              className="fav-button-text"
              sx={{
                display: "flex",
                position: "relative",
                mt: 1,
                ml: 1.5,
                textDecoration: "underline",
              }}
            >
              Share
            </Typography>
    </Box> */}

  {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
          marginLeft: "52px",
          marginTop: "52px"
        }}
      >
        <button onClick={copy}>
          <FaLink />
          {!copied ? "Copy link" : "Copied!"}
        </button>

        <Whatsapp
          solid
          small
          message="Share on Whatsapp"
          link="http://sharingbuttons.io"
        />
        <Facebook solidcircle small link="http://sharingbuttons.io" />
        <Google solidcircle small link="http://sharingbuttons.io" />
        <Twitter
          solidcircle
          small
          message="I am so cool"
          link="http://sharingbuttons.io"
        />
        <Linkedin
          solid
          small
          message="I am so cool"
          link="http://sharingbuttons.io"
        />
        <Telegram
          solid
          small
          message="Share on Telegram"
          link="http://sharingbuttons.io"
        />
      </div> */}
    </>
  );
};

export default Stories;
