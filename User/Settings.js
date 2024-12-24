import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";

const UserSettings = () => {
  const [userDetails, setUserDetails] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field, value) => {
    setUserDetails({ ...userDetails, [field]: value });
  };

  const handleSave = () => {
    if (userDetails.password && userDetails.password !== userDetails.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Add logic to update user details
    alert("Settings saved successfully!");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #f0f2f5, #d9e3f0)",
        padding: "2rem",
      }}
    >
      <Paper
        elevation={12}
        sx={{
          width: "100%",
          maxWidth: "600px",
          padding: "2rem",
          borderRadius: "15px",
          background: "#fff",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", marginBottom: "1.5rem" }}
        >
          User Settings
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={userDetails.name}
          onChange={(e) => handleChange("name", e.target.value)}
          sx={{ borderRadius: "10px" }}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={userDetails.email}
          onChange={(e) => handleChange("email", e.target.value)}
          sx={{ borderRadius: "10px" }}
        />
        <TextField
          label="Phone"
          variant="outlined"
          fullWidth
          margin="normal"
          value={userDetails.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          sx={{ borderRadius: "10px" }}
        />
        <TextField
          label="New Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={userDetails.password}
          onChange={(e) => handleChange("password", e.target.value)}
          sx={{ borderRadius: "10px" }}
        />
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={userDetails.confirmPassword}
          onChange={(e) => handleChange("confirmPassword", e.target.value)}
          sx={{ borderRadius: "10px" }}
        />
        <Button
          variant="contained"
          fullWidth
          onClick={handleSave}
          sx={{
            marginTop: "1.5rem",
            padding: "0.75rem",
            background: "linear-gradient(145deg, #5d34ac, #9e54ff)",
            color: "#fff",
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s",
            "&:hover": {
              background: "linear-gradient(145deg, #5d34ac, #7438f5)",
              transform: "translateY(-3px)",
              boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
            },
          }}
        >
          Save Changes
        </Button>
      </Paper>
    </Box>
  );
};

export default UserSettings;
