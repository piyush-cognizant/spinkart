import { useState } from "react";
import {
  Box,
  useTheme,
  Paper,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";

const LoginPage = () => {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Login link requested for:", email);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: theme.palette.primary.main, // base theme color
        backgroundImage: `url("https://www.toptal.com/designers/subtlepatterns/uploads/doodles.png")`,
        backgroundRepeat: "repeat",
        backgroundSize: "200px",
        position: "relative",
      }}
    >
      {/* White login card */}
      <Paper
        elevation={8}
        sx={{
          p: 4,
          borderRadius: 4,
          width: "100%",
          maxWidth: 400,
          textAlign: "center",
          backgroundColor: "white", // solid white card
          color: theme.palette.text.primary,
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={1}>
          SUPPLY SYNC
        </Typography>
        <Typography variant="body2" mb={3} color="text.secondary">
          Sign in to continue
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email Address"
            type="email"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            sx={{
              py: 1.2,
              borderRadius: 3,
              fontWeight: "bold",
              textTransform: "none",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
              },
            }}
          >
            {loading ? <CircularProgress size={24} /> : "Send Login Link"}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginPage;
