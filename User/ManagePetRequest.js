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
  CardActions,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const PetRequest = () => {
  const navigate = useNavigate();

  const mockRequests = [
    {
      id: 1,
      name: "Charlie",
      type: "Dog",
      status: "Pending",
    },
    {
      id: 2,
      name: "Mittens",
      type: "Cat",
      status: "Approved",
    },
    {
      id: 3,
      name: "Goldie",
      type: "Fish",
      status: "Rejected",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("userSession");
    navigate("/login");
  };

  const handleAction = (id, action) => {
    console.log(`Request ${id} has been ${action}`);
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
            Manage Pet Requests
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

      {/* Page Content */}
      <Box
        sx={{
          padding: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ color: "#555", marginBottom: "2rem" }}
        >
          Review and Manage Pet Adoption Requests
        </Typography>

        <Grid container spacing={3}>
          {mockRequests.map((request) => (
            <Grid item xs={12} sm={6} md={4} key={request.id}>
              <Card
                sx={{
                  background: "#fff",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  borderRadius: "10px",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {request.name}
                  </Typography>
                  <Divider sx={{ marginY: 1 }} />
                  <Typography variant="body2" color="textSecondary">
                    Type: {request.type}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={
                      request.status === "Pending"
                        ? "orange"
                        : request.status === "Approved"
                        ? "green"
                        : "red"
                    }
                  >
                    Status: {request.status}
                  </Typography>
                </CardContent>
                <CardActions>
                  {request.status === "Pending" && (
                    <>
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => handleAction(request.id, "approved")}
                      >
                        Approve
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleAction(request.id, "rejected")}
                      >
                        Reject
                      </Button>
                    </>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PetRequest;
