import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ViewGallery = () => {
  const navigate = useNavigate();

  const images = [
    { id: 1, title: "Beautiful Sunset", url: "/images/sunset.jpg" },
    { id: 2, title: "Majestic Mountains", url: "/images/mountains.jpg" },
    { id: 3, title: "City Skyline", url: "/images/city.jpg" },
    { id: 4, title: "Serene Beach", url: "/images/beach.jpg" },
    { id: 5, title: "Forest Path", url: "/images/forest.jpg" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("userSession");
    navigate("/login");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #e6e9f0, #eef1f5)",
      }}
    >
      {/* Navigation Bar */}
      <AppBar position="static" sx={{ background: "#5d34ac" }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: "bold", textTransform: "uppercase" }}
          >
            View Gallery
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

      {/* Gallery Content */}
      <Box sx={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", marginBottom: "2rem" }}
        >
          Explore Our Gallery
        </Typography>
        <Grid container spacing={4}>
          {images.map((image) => (
            <Grid item xs={12} sm={6} md={4} key={image.id}>
              <Card
                sx={{
                  borderRadius: "15px",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={image.url}
                  alt={image.title}
                  sx={{ borderRadius: "15px 15px 0 0" }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "bold", color: "#333" }}
                  >
                    {image.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ViewGallery;
