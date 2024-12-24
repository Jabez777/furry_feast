import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ViewVaccination = () => {
  const navigate = useNavigate();

  const vaccinationData = [
    { id: 1, petName: "Buddy", vaccine: "Rabies", date: "2023-11-15", veterinarian: "Dr. Smith" },
    { id: 2, petName: "Milo", vaccine: "Distemper", date: "2023-11-20", veterinarian: "Dr. Brown" },
    { id: 3, petName: "Luna", vaccine: "Parvovirus", date: "2023-12-01", veterinarian: "Dr. Green" },
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
        padding: "2rem",
      }}
    >
      {/* Navigation Bar */}
      <AppBar position="static" sx={{ background: "#5d34ac" }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: "bold", textTransform: "uppercase" }}
          >
            View Vaccination Records
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
      <Box sx={{ maxWidth: "1200px", margin: "2rem auto", textAlign: "center" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#333", marginBottom: "1rem" }}
        >
          Vaccination Records
        </Typography>

        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Pet Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Vaccine</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Veterinarian</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vaccinationData.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>{record.petName}</TableCell>
                  <TableCell>{record.vaccine}</TableCell>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>{record.veterinarian}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Button
          variant="contained"
          onClick={() => navigate("/dashboard")}
          sx={{
            marginTop: "2rem",
            background: "linear-gradient(145deg, #5d34ac, #9e54ff)",
            color: "#fff",
            padding: "0.75rem 2rem",
            borderRadius: "10px",
            fontWeight: "bold",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            textTransform: "none",
            "&:hover": {
              background: "linear-gradient(145deg, #5d34ac, #7438f5)",
              boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
            },
          }}
        >
          Back to Dashboard
        </Button>
      </Box>
    </Box>
  );
};

export default ViewVaccination;
