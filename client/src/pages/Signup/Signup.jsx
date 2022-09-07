import React from "react";
import { useRef } from "react";
import s from "./signup.module.css";
import { useDispatch, useSelector } from "react-redux";
import { checkMe, registerSlice } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    dispatch(
      registerSlice({
        gender: data.get("gender"),
        username: data.get("firstname"),
        surname: data.get("lastname"),
        name_of_father: data.get("middlename"),
        password: data.get("password"),
        passwordConfirm: data.get("passwordConfirm"),
      })
    );
  };

  const isAuth = useSelector((store) => store.auth.isAuth);
  useEffect(() => {
    if (isAuth) {
      dispatch(checkMe());
      navigate("/");
    }
  }, [isAuth]);
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={registerHandler}
            noValidate
            sx={{ mt: 1 }}
          >
            <Grid container columnSpacing={{ justifyContent: "space-between" }}>
              <Grid item>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="firstname"
                  label="First Name"
                  name="firstname"
                  autoComplete="firstname"
                  autoFocus
                />
              </Grid>
              <Grid item>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  name="lastname"
                  autoComplete="Lastname"
                  autoFocus
                />
              </Grid>
            </Grid>
            <TextField
              margin="normal"
              required
              fullWidth
              id="middlename"
              label="Middle Name"
              name="middlename"
              autoComplete="middlename"
              autoFocus
            />
            <FormControl>
              <FormLabel id="gender">Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="gender"
                defaultValue="male"
                name="gender"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                  id="male"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            <Grid container columnSpacing={{ justifyContent: "space-between" }}>
              <Grid item>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="passwordConfirm"
                  label="Password Confirm"
                  type="passwordConfirm"
                  id="passwordConfirm"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
