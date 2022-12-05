import FeedIcon from "@mui/icons-material/Feed";
import {
  AppBar,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { updateTheme } from "../action/theme";
const MyHeader = ({ updateTheme }) => {
  const [themeSelected, setThemeSelected] = useState("");
  const onSubmit = () => {
    updateTheme(themeSelected);
  };
  const handleChange = (e) => {
    const theme = e.target.value;
    setThemeSelected(theme);
  };
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <FeedIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Sapiens Assignment
        </Typography>
        <FormControl
          variant="outlined"
          sx={{
            width: "200px",
            margin: "5px",
            backgroundColor: "Menu",
            borderRadius: "5px",
          }}
        >
          <InputLabel id="demo-simple-select-label">
            Select Theme
          </InputLabel>
          <Select
            // sx={{ height: "50px" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="SelectTheme"
            value={themeSelected}
            onChange={handleChange}
          >
            <MenuItem value={"blue"}>Blue</MenuItem>
            <MenuItem value={"red"}>Red</MenuItem>
            <MenuItem value={"green"}>Green</MenuItem>
            <MenuItem value={"orange"}>Orange</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={onSubmit}
        >
          Update
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default connect(null, { updateTheme })(MyHeader);
