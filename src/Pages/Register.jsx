import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
export default function Register() {


  const nav=useNavigate();
  const [details, setDetails] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const fields = ["Name", "Email", "Password"];
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
            .then((res) => alert(res.data))
            .then(() => localStorage.setItem("users", JSON.stringify(details)))
            .then(()=>{
              nav("/")
            })
            .catch((err) => alert(err.response.data));

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
        <Button variant="contained" type="submit">
          Send
        </Button>
      </form>
    </Box>
  );
}
