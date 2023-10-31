import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

// const CustomComponent = () => {
//   const useStyles = makeStyles({
//     root: {
//       background: "#FFF",
//       border: "2px solid #7DF9FF",
//       borderRadius: 10,
//       boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//       color: "white",
//       height: 48,
//       padding: "0 30px",
//     },
//   });

//   const classes = useStyles();
//   return (
//     <>
//       <TextField
//         id="outlined-search"
//         // color="warning"
//         placeholder="Hello"
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <FmdGoodIcon style={{ color: "cyan" }} />
//             </InputAdornment>
//           ),
//         }}
//         variant="outlined"
//       />
//     </>
//   );
// };
// export default CustomComponent;

// const styles = {
//   root: {
//     background: "#FFF",
//     border: "2px solid #7DF9FF",
//     borderRadius: 10,
//     boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//     color: "white",
//     height: 48,
//     padding: "0 30px",
//   },
// };

const CustomComponent = () => {
  return (
    <>
      <TextField
        style={{
          border: "2px solid #7DF9FF",
          backgroundColor: "white",
          borderRadius: "20px",
          width: "410px",
        }}
        id="outlined-search"
        placeholder="Enter Zip Code"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FmdGoodIcon style={{ color: "cyan" }} />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};
export default CustomComponent;
