import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: "View Work", path: "/view-work" },
    { label: "Add Rescue", path: "/add-rescue" },
    { label: "View Gallery", path: "/view-gallery" },
    { label: "Add Donation", path: "/add-donation" },
    { label: "View Adopt Pet", path: "/view-adopt-pet" },
    { label: "Manage Pet Request", path: "/manage-pet-request" },
    { label: "View Vaccination", path: "/view-vaccination" },
    { label: "View Veterinary", path: "/view-veterinary" },
    { label: "Settings", path: "/settings" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("userSession");
    navigate("/login");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0eafc, #cfdef3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Navigation Bar */}
      <AppBar position="static" sx={{ background: "#5d34ac", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: "bold", textTransform: "uppercase" }}
          >
            User Dashboard
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

      {/* Dashboard Content */}
      <Box
        component={Paper}
        elevation={10}
        sx={{
          padding: "2rem",
          maxWidth: "900px",
          margin: "2rem auto",
          borderRadius: "20px",
          background: "linear-gradient(135deg, #ffffff, #f8f9fa)",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#444" }}
        >
          Welcome to Your Dashboard
        </Typography>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          sx={{ color: "#666", marginBottom: "2rem" }}
        >
          Navigate through the menu below to manage your activities effectively.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {menuItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => navigate(item.path)}
                sx={{
                  textTransform: "none",
                  background: "linear-gradient(145deg, #5d34ac, #9e54ff)",
                  color: "#fff",
                  padding: "1rem",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    background: "linear-gradient(145deg, #5d34ac, #7438f5)",
                    transform: "translateY(-5px)",
                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                {item.label}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default UserDashboard;
