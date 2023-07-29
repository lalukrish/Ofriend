import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  Grid,
  CardHeader,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "/home/lalkrishna/personalProjects/backend_node/b_psql/client/vite-project/src/redux/slices/userSlice.jsx";

const Signup = () => {
  let dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    dispatch(signupUser(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Card
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardContent>
            <CardHeader title="Signup" sx={{ alignItems: "center" }} />

            <Box sx={{ alignItems: "center", md: "8" }}>
              <Grid item md={6} xs={12}>
                <TextField
                  placeholder="Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </Grid>
              <Button type="submit">Submit</Button>
            </Box>
          </CardContent>
        </Card>
      </form>
    </>
  );
};

export default Signup;
