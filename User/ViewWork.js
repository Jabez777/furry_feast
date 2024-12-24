import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ViewWork = () => {
  const navigate = useNavigate();

  const workItems = [
    {
      title: "Project A",
      description: "A detailed description of Project A's objectives and achievements.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Project B",
      description: "Highlights of Project B showcasing innovative approaches.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Project C",
      description: "Summary of Project C and its contributions.",
      image: "https://via.placeholder.com/300",
    },
  ];

  const handleBack = () => {
    navigate("/user-dashboard");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #f0f4f8, #d9e4ec)",
        padding: "2rem",
      }}
    >
      {/* AppBar */}
      <AppBar position="static" sx={{ background: "#5d34ac" }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: "bold", textTransform: "uppercase" }}
          >
            View Work
          </Typography>
          <Button
            color="inherit"
            onClick={handleBack}
            sx={{ fontWeight: "bold", textTransform: "none" }}
          >
            Back to Dashboard
          </Button>
        </Toolbar>
      </AppBar>

      {/* Work Items */}
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "2rem auto",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ marginBottom: "2rem", fontWeight: "bold", color: "#444" }}
        >
          Our Work Portfolio
        </Typography>
        <Grid container spacing={4}>
          {workItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginBottom: "1rem" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
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

export default ViewWork;
