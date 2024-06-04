import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

function App() {
  const { user, loginWithRedirect, isAuthenticated, logout, isLoading } =
    useAuth0();

  return (
    <div className="app-container">
      {isLoading ? (
        <div className="loading-container">Loading ...</div>
      ) : (
        isAuthenticated && (
          <div className="profile-card">
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        )
      )}
      {isAuthenticated ? (
        <button
          className="auth-button"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Logout
        </button>
      ) : (
        <button className="auth-button" onClick={() => loginWithRedirect()}>
          Login
        </button>
      )}
    </div>
  );
}

export default App;
