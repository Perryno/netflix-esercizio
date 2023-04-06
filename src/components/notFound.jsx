import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const NotFound = () => (
  <div className="text-center white">
    <h1>404 - Not Found</h1>
    <p>the requested resource did not exist</p>
    <Link to="/">
      <Button variant="info">Comeback to the home page</Button>
    </Link>
  </div>
);

export default NotFound;
