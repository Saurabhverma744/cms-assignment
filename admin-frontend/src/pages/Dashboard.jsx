import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { removeToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { getPages, deletePage } from "../services/pageService";
import "../styles/dashboard.css";

function Dashboard() {
  const [pages, setPages] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/admin");
  };

  const fetchPages = async () => {
    try {
      const data = await getPages();

      setPages(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this page?"
  );

  if (!confirmDelete) return;

  try {
    await deletePage(id);
    fetchPages();
  } catch (error) {
    alert("Failed to delete page.");
  }
};

  return (
  <div className="dashboard-container">
    <div className="dashboard-header">
      <div>
        <h1>CMS Dashboard</h1>
        <p>Total Pages: {pages.length}</p>
      </div>

      <div>
        <Link to="/create-page">
          <button className="create-btn">+ Create Page</button>
        </Link>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>

    <table className="page-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Slug</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {pages.map((page) => (
          <tr key={page._id}>
            <td>{page.title}</td>
            <td>{page.slug}</td>

            <td>
              <Link to={`/edit-page/${page._id}`}>
                <button className="edit-btn">Edit</button>
              </Link>

              <button
                className="delete-btn"
                onClick={() => handleDelete(page._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}

export default Dashboard;