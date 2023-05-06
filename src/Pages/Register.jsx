import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
export default function Register() {
  const nav = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [err, setErr] = React.useState({ message: "", type: "" });
  const [details, setDetails] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const fields = ["Name", "Email", "Password"];
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Box
      sx={{
        height: "100vh",
        maxHeight: "fit-content",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">SIGN UP</Typography>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          border: "2px solid green",
          boxSizing: "border-box",
          padding: "5rem",
          gap: "2rem",
          borderRadius: "0% 10%",
        }}
        onSubmit={async (e) => {
          e.preventDefault();
          await axios
            .post("https://gym-server-yi13.onrender.com/api/register", details)
            .then(() => localStorage.setItem("users", JSON.stringify(details)))
            .then(() => {
              nav("/");
            })
            .catch((err) => {
              setErr({ message: err.response.data, type: "error" });
              handleClick(true);
            });
        }}
      >
        {fields.map((ele, ind) => {
          return (
            <TextField
              label={ele.toUpperCase()}
              name={ele.toLowerCase()}
              variant="outlined"
              key={ind}
              placeholder={ele.toUpperCase()}
              type={ele}
              onChange={(e) => {
                setDetails({ ...details, [e.target.name]: e.target.value });
              }}
            />
          );
        })}
        <Button
          variant="contained"
          sx={{
            color: "black",
            backgroundColor: "red",
            border: "none",
            outline: "none",
            borderRadius: "10px",
            padding: "0.5rem 1.5rem",
            "&:hover": {
              backgroundColor: "red",
              color: "grey",
              boxShadow: "0 0 10px grey",
              outline: "none",
              border: "none",
            },
          }}
          type="submit"
        >
          SignUp
        </Button>
        <Typography>
          Already have an Account?
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Log In
          </Link>
        </Typography>
      </form>

      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={err.type} sx={{ width: "100%" }}>
          {err.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
