import React from "react";
import { AppBar, Toolbar, Typography, Box, Grid, Card, CardMedia, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const petsData = [
  {
    id: 1,
    name: "Buddy",
    breed: "Golden Retriever",
    age: "2 years",
    image: "https://via.placeholder.com/300",
    description: "A friendly and energetic dog, great with families.",
  },
  {
    id: 2,
    name: "Mittens",
    breed: "Persian Cat",
    age: "1 year",
    image: "https://via.placeholder.com/300",
    description: "A calm and affectionate cat, loves cuddles.",
  },
  {
    id: 3,
    name: "Max",
    breed: "Beagle",
    age: "3 years",
    image: "https://via.placeholder.com/300",
    description: "An intelligent and curious dog, great for active owners.",
  },
];

const ViewAdoptPet = () => {
  const navigate = useNavigate();

  const handleAdopt = (petId) => {
    // Logic for handling pet adoption, such as navigation or API calls
    console.log(`Adopting pet with ID: ${petId}`);
    navigate(`/adopt-pet/${petId}`);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #f3f4f6, #e3e5e8)",
        padding: "2rem",
      }}
    >
      <AppBar position="static" sx={{ background: "#5d34ac" }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: "bold", textTransform: "uppercase" }}
          >
            View Adopt Pet
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          paddingTop: "2rem",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#333" }}
        >
          Find Your Perfect Companion
        </Typography>
        <Grid container spacing={4} sx={{ marginTop: "1rem" }}>
          {petsData.map((pet) => (
            <Grid item xs={12} sm={6} md={4} key={pet.id}>
              <Card
                sx={{
                  borderRadius: "15px",
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={pet.image}
                  alt={pet.name}
                  sx={{ borderRadius: "15px 15px 0 0" }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold", color: "#5d34ac" }}
                  >
                    {pet.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Breed: {pet.breed}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Age: {pet.age}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginTop: "1rem" }}
                  >
                    {pet.description}
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleAdopt(pet.id)}
                    sx={{
                      marginTop: "1rem",
                      background: "linear-gradient(145deg, #5d34ac, #9e54ff)",
                      color: "#fff",
                      fontWeight: "bold",
                      textTransform: "none",
                      borderRadius: "10px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        background: "linear-gradient(145deg, #5d34ac, #7438f5)",
                        transform: "translateY(-5px)",
                        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
                      },
                    }}
                  >
                    Adopt Me
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ViewAdoptPet;
