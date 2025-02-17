
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
} from "@mui/material";

const AddDonation = () => {
  const [donorName, setDonorName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock submission logic
    console.log("Donation Submitted:", {
      donorName,
      email,
      amount,
      message,
    });

    // Clear form fields
    setDonorName("");
    setEmail("");
    setAmount("");
    setMessage("");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #e6e9f0, #eef1f5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <Paper
        elevation={12}
        sx={{
          padding: "2rem",
          borderRadius: "20px",
          maxWidth: "600px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.85)",
          boxShadow:
            "20px 20px 50px rgba(0, 0, 0, 0.2), -20px -20px 50px rgba(255, 255, 255, 0.5)",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", marginBottom: "1rem", color: "#5d34ac" }}
        >
          Add Donation
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ marginBottom: "2rem", color: "#555" }}
        >
          Thank you for your generous contribution. Please fill out the form below.
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Donor Name"
                variant="outlined"
                fullWidth
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "15px",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "15px",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Amount (₹)"
                variant="outlined"
                fullWidth
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "15px",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message (Optional)"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "15px",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  padding: "0.8rem",
                  background: "linear-gradient(145deg, #5d34ac, #9e54ff)",
                  color: "#fff",
                  borderRadius: "15px",
                  fontWeight: "bold",
                  textTransform: "none",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    background: "linear-gradient(145deg, #5d34ac, #7438f5)",
                    transform: "translateY(-3px)",
                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                Submit Donation
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default AddDonation;
