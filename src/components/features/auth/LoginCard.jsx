import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  useTheme,
  CircularProgress,
} from "@mui/material";

const LoginCard = () => {
  const theme = useTheme();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // start as false

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("Login link requested for:", email);

    // simulate async request
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <Box
      sx={{
        p: 4,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: theme.palette.background.paper,
        width: "100%",
        maxWidth: 400,
      }}
    >
      <Typography variant="h5" mb={3} align="center">
        Login
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
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
          color="primary"
          fullWidth
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Send Login Link"}
        </Button>
      </form>
    </Box>
  );
};

export default LoginCard;
