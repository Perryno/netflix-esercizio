import { Button } from "react-bootstrap";

const NotFound = () => (
  <div className="text-center white">
    <h1>404 - Not Found</h1>
    <p>the requested resource did not exist</p>
    <Button variant="info">Comeback to the home page</Button>
  </div>
);

export default NotFound;
