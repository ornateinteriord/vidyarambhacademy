import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./NotFound.css"; // Custom styles

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box className="not-found-container">
      <Typography variant="h1" className="error-code">
        404
      </Typography>
      <Typography variant="h4" className="error-text">
        Oops! Looks like you're lost in a magical world. 🏰
      </Typography>
      {/* <img src="/images/kids-error.png" alt="Lost Kids" className="error-image" /> */}
      <Button variant="contained" className="home-button" onClick={() => navigate("/")}>
        Go Home 
      </Button>
    </Box>
  );
};

export default NotFound;
