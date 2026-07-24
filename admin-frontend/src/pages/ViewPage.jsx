import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPageBySlug } from "../services/pageService";

function ViewPage() {
  const { slug } = useParams();

  const [page, setPage] = useState(null);

  useEffect(() => {
    fetchPage();
  }, [slug]);

  const fetchPage = async () => {
    try {
      const data = await getPageBySlug(slug);
      setPage(data.data);
    } catch (error) {
      setPage(false);
    }
  };

  if (page === null) {
    return (
      <div style={{ padding: "30px" }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (page === false) {
    return (
      <div style={{ padding: "30px" }}>
        <h2>Page Not Found</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>{page.title}</h1>

      <br />

      <p>{page.content}</p>
    </div>
  );
}

export default ViewPage;