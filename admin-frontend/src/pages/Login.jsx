import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { saveToken, isAuthenticated } from "../utils/auth";
import "../styles/login.css";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    const response = await login(credentials);

    localStorage.setItem("token", response.token);

    navigate("/dashboard");
  } catch (error) {
    alert("Invalid credentials");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="login-container">
  <div className="login-card">
    <h1>CMS Admin</h1>

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={credentials.username}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
      />

     <button type="submit" disabled={loading}>
  {loading ? "Logging in..." : "Login"}
</button>
    </form>
  </div>
</div>
  );
}

export default Login;