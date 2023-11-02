import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Grid from "@mui/material/Grid";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
  },
  "& .MuiInputBase-root": {
    border: "2px solid #7DF9FF",
    backgroundColor: "white",
    borderRadius: "20px",
    width: "100%",
    "@media (min-width:600px)": {
      width: "410px",
    },
  },
});

const CustomComponent = () => {
  return (
    <Grid container justifyContent="start">
      <Grid
        item
        xs={12}
        sm={10}
        md={8}
        lg={6}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <CustomTextField
          id="outlined-search"
          placeholder="Hello"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FmdGoodIcon style={{ color: "cyan" }} />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
};

export default CustomComponent;

// -------------------------------------------------------------------------

// import React from "react";
// import { makeStyles } from "@mui/styles";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import Input from "@mui/material/Input";
// import InputLabel from "@mui/material/InputLabel";
// import InputAdornment from "@mui/material/InputAdornment";
// import FormControl from "@mui/material/FormControl";
// import TextField from "@mui/material/TextField";
// import FmdGoodIcon from "@mui/icons-material/FmdGood";

// const CustomComponent = () => {
//   const useStyles = makeStyles({
//     root: {
//       border: "2px solid #7DF9FF",
//       backgroundColor: "white",
//       borderRadius: "20px",
//       width: "410px",
//     },
//   });

//   const classes = useStyles();
//   return (
//     <>
//       <TextField
//         id="outlined-search"
//         classes={{ root: classes.root }}
//         sx={{ border: "none", "& fieldset": { border: "none" } }}
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

// -------------------------------------------------------------------------

// import React from "react";
// import { makeStyles } from "@mui/styles";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import Input from "@mui/material/Input";
// import InputLabel from "@mui/material/InputLabel";
// import InputAdornment from "@mui/material/InputAdornment";
// import FormControl from "@mui/material/FormControl";
// import TextField from "@mui/material/TextField";
// import FmdGoodIcon from "@mui/icons-material/FmdGood";

// const CustomComponent = () => {
//   return (
//     <>
//       <TextField
//         style={{
//           border: "2px solid #7DF9FF",
//           backgroundColor: "white",
//           borderRadius: "20px",
//           width: "410px",
//         }}
//         id="outlined-search"
//         placeholder="Enter Zip Code"
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <FmdGoodIcon style={{ color: "cyan" }} />
//             </InputAdornment>
//           ),
//         }}
//         variant="standard"
//       />
//     </>
//   );
// };
// export default CustomComponent;
