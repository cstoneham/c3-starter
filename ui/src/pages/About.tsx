import { Link } from "react-router-dom";

export function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page of the Rainmaker application.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}