import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPages } from "../services/pageService";
import "../styles/home.css";

function Home() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const data = await getPages();
      setPages(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="home-container">
      <header className="hero">
        <h1>CMS Website</h1>
        <p>Simple Content Management System</p>
      </header>

      <h2>Available Pages</h2>

      <div className="page-grid">
        {pages.map((page) => (
          <Link
            key={page._id}
            to={`/page/${page.slug}`}
            className="page-card"
          >
            <h3>{page.title}</h3>
            <p>View Page →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;