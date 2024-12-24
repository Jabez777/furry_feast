import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, CardMedia, Grid, CircularProgress } from "@mui/material";
import axios from "axios";

const ViewVeterinary = () => {
  const [veterinaryList, setVeterinaryList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVeterinaryData = async () => {
      try {
        const response = await axios.get("http://localhost:3003/veterinary"); // Replace with your API endpoint
        setVeterinaryList(response.data);
      } catch (error) {
        console.error("Error fetching veterinary data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVeterinaryData();
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #e6e9f0, #eef1f5)",
        padding: "2rem",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", marginBottom: "2rem" }}
      >
        Veterinary Services
      </Typography>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh" }}>
          <CircularProgress />
        </Box>
      ) : veterinaryList.length === 0 ? (
        <Typography align="center" sx={{ color: "#555", fontSize: "1.2rem" }}>
          No veterinary services found.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {veterinaryList.map((vet, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                {vet.image && (
                  <CardMedia
                    component="img"
                    height="140"
                    image={vet.image}
                    alt={vet.name}
                  />
                )}
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                    {vet.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555" }}>
                    {vet.address}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555", marginTop: "0.5rem" }}>
                    Contact: {vet.contact}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#555", marginTop: "0.5rem", fontStyle: "italic" }}
                  >
                    Specialization: {vet.specialization}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default ViewVeterinary;
