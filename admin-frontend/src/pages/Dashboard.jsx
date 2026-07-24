import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { removeToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { getPages, deletePage } from "../services/pageService";

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
    if (!window.confirm("Delete this page?")) return;

    try {
      await deletePage(id);
      fetchPages();
    } catch (error) {
      alert("Delete failed");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>

      <br />
      <br />

      <br />

      <Link to="/create-page">
        <button>Create New Page</button>
      </Link>

      <br />
      <br />

      <table border="1" cellPadding="10">
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
                  <button>Edit</button>
                </Link>

                {"  "}

                <button onClick={() => handleDelete(page._id)}>
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