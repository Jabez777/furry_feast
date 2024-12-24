import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  TextField,
  Paper,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddRescue = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the submission logic here, such as making an API call.
    console.log("Rescue data submitted:", formData);
    // Redirecting back to dashboard or success page after submission.
    navigate("/user-dashboard");
  };

  const handleLogout = () => {
    localStorage.removeItem("userSession");
    navigate("/login");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #e6e9f0, #eef1f5)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navigation Bar */}
      <AppBar position="static" sx={{ background: "#5d34ac" }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: "bold", textTransform: "uppercase" }}
          >
            Add Rescue
          </Typography>
          <Button
            color="inherit"
            onClick={handleLogout}
            sx={{ fontWeight: "bold", textTransform: "none" }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Content */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Paper
          elevation={10}
          sx={{
            padding: "2rem",
            borderRadius: "15px",
            maxWidth: "600px",
            width: "100%",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Add Rescue Details
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  name="name"
                  variant="outlined"
                  fullWidth
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Location"
                  name="location"
                  variant="outlined"
                  fullWidth
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Description"
                  name="description"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Contact"
                  name="contact"
                  variant="outlined"
                  fullWidth
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    textTransform: "none",
                    background: "linear-gradient(145deg, #5d34ac, #9e54ff)",
                    color: "#fff",
                    fontWeight: "bold",
                    padding: "0.75rem",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    "&:hover": {
                      background: "linear-gradient(145deg, #5d34ac, #7438f5)",
                    },
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </Box>
  );
};

export default AddRescue;
