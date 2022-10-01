import React from "react";
import { Link } from "react-router-dom";
import "./error.css";
function Error() {
  return (
    <section>
      <div className="container error-container">
        <h1
          style={{
            textAlign: "center",
            color: "var(--red)",
            marginBottom: "2rem",
          }}
        >
          Nothing To See Here!!
        </h1>
        <Link to="/" className="btn">
          Go Home
        </Link>{" "}
      </div>
    </section>
  );
}

export default Error;
