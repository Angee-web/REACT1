import { Card, Button } from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

// Define a variable for the first name
const firstName = "Ada";

const App = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }} 
    >
      {/* Card containing all components */}
      <Card style={{ width: "28rem", border: "solid green", padding: "10px", borderRadius: "12px" }}>
        {firstName && <Image />}

        <Card.Body >
          <div style={{ display: "flex", gap: "5px"}}>
            {/* Names */}
          <div>
            <h2>Name:</h2>
            <h2>Price:</h2>
            <h2>Description:</h2>
          </div>

          {/* Components */}
          <div>
            <Name />
            <Price />
            <Description />
          </div>
          
          </div>
          <Button variant="primary" type="submit" style={{ backgroundColor: "green", color: "white", padding: "8px", fontWeight: "bold", borderRadius: "8px", cursor: "pointer"}}>Buy Now</Button>
        </Card.Body>

        {/* Conditional greeting message below the card */}
        <div style={{ fontSize: "20px"}}>
          {firstName ? <h5>Hello, {firstName}!</h5> : <h5>Hello, there!</h5>}
        </div>
      </Card>
    </div>
  );
};

export default App;
