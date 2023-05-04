import * as React from "react";
import Style from "../Styles/Home.module.scss";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import About from "./About";
import Trainners from "./Trainners";
import Pricing from "./Pricing";
import { Sub } from "../App";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const value = React.useContext(Sub);
  return (
    <>
      <div className={Style.root}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: "orange",
            width: { xs: "15rem", sm: "50rem" },
            fontSize: { xs: "1.5rem", sm: "2rem" },
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ullam
          unde autem! Quibusdam odit, ab quis distinctio quae delectus magni
          iste fugiat ea tempora. Eius eos assumenda quae rem natus!
          <Button
            variant="contained"
            sx={{
              marginTop: "0.5rem",
              padding: "0.5rem 1.5rem",
              display: "block",
              bgcolor: "red",
              "&:hover": {
                bgcolor: "red",
              },
            }}
            onClick={() => {
              if (value.setter[0] === "JOIN US") {
                navigate("/register");
              } else if (value.setter[0] === "SUBSCRIBED") {
                navigate("/pricing");
              } else if (value.setter[0] === "GET STARTED") {
                navigate("/training");
              }
            }}
          >
            {value.setter[0]}
          </Button>
        </Typography>
      </div>
      <Trainners />
      <Pricing />
      <About />
    </>
  );
};

export default Home;
