import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import * as React from "react";
import Footer from '../Footer/index';
import "./style.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Login() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [age, setAge] = React.useState("");

  const handleChange2 = (event) => {
    setAge(event.target.value);
  };

  const [value2, setValue2] = React.useState(dayjs());

  const handleChange3 = (newValue2) => {
    setValue2(newValue2);
  };
  return (
    <div>
      <img
        className="bck-logo"
        src="https://www.seedwill.co/assets/img/home-slider/broker-banner.png"
        alt="bck-logo"
      />
      <div className="form-box">
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Broker" {...a11yProps(0)} />
            <Tab label="Owner" {...a11yProps(1)} />
            <Tab label="Builder " {...a11yProps(2)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="City"
              onChange={handleChange2}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            style={{ marginTop: "10px" }}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            style={{ marginTop: "10px" }}
          />
          <TextField
            id="outlined-basic"
            label="Mobile No."
            variant="outlined"
            style={{ marginTop: "10px" }}
          />
          <TextField
            id="outlined-basic"
            label="Firm Name"
            variant="outlined"
            style={{ marginTop: "10px" }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack style={{ marginTop: "10px" }}>
              <DesktopDatePicker
                label="MM/DD/YYYY"
                inputFormat="MM/DD/YYYY"
                value={value2}
                onChange={handleChange3}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
          <Button variant="outlined" style={{ marginTop: "10px" }}>
            submit
          </Button>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="City"
              onChange={handleChange2}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            style={{ marginTop: "10px" }}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            style={{ marginTop: "10px" }}
          />
          <TextField
            id="outlined-basic"
            label="Mobile No."
            variant="outlined"
            style={{ marginTop: "10px" }}
          />

          <Button variant="outlined" style={{ marginTop: "10px" }}>
            submit
          </Button>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="City"
              onChange={handleChange2}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            style={{ marginTop: "10px" }}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            style={{ marginTop: "10px" }}
          />
          <TextField
            id="outlined-basic"
            label="Mobile No."
            variant="outlined"
            style={{ marginTop: "10px" }}
          />
          <TextField
            id="outlined-basic"
            label="Firm Name"
            variant="outlined"
            style={{ marginTop: "10px" }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack style={{ marginTop: "10px" }}>
              <DesktopDatePicker
                label="MM/DD/YYYY"
                inputFormat="MM/DD/YYYY"
                value={value2}
                onChange={handleChange3}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
          <Button variant="outlined" style={{ marginTop: "10px" }}>
            submit
          </Button>
        </TabPanel>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
