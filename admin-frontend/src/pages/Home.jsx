import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPages } from "../services/pageService";

function Home() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    const data = await getPages();
    setPages(data.data);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>CMS Website</h1>

      <ul>
        {pages.map((page) => (
          <li key={page._id}>
            <Link to={`/page/${page.slug}`}>
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;