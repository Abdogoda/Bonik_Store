import React from "react";
import { useGlobalContext } from "../../functions/Context";
import "./profile.css";
import { Link } from "react-router-dom";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
function Profile() {
  const { haveAcount, user, logoutHandle } = useGlobalContext();
  return (
    <section>
      {haveAcount ? (
        <>
          <h1
            style={{
              textAlign: "center",
              color: "var(--red)",
              marginBottom: "2rem",
            }}
          >
            Your Profile
          </h1>
          <div className="container profile-container bg-section">
            <div className="left">
              <FaUser className="profile-img" />
              <div className="profile-info">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.phone}</p>
              </div>
            </div>
            <div className="right">
              <Link to="/login" onClick={logoutHandle} className="btn red">
                Signout <FaSignOutAlt />
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1
            style={{
              textAlign: "center",
              color: "var(--red)",
              marginBottom: "2rem",
            }}
          >
            You Don't Have An Account!
          </h1>
          <div className="container profile-container">
            <div className="sign-links">
              <Link to="/login" className="btn">
                Sign In
              </Link>
              <Link to="/register" className="btn outline">
                Sign Up
              </Link>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Profile;
