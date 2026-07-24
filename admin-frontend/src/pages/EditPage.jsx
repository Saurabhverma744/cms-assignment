import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPageById, updatePage } from "../services/pageService";

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [page, setPage] = useState({
    title: "",
    slug: "",
    content: "",
  });

  useEffect(() => {
    fetchPage();
  }, []);

  const fetchPage = async () => {
    try {
      const data = await getPageById(id);

      setPage({
        title: data.data.title,
        slug: data.data.slug,
        content: data.data.content,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setPage({
      ...page,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updatePage(id, page);
      alert("Page Updated Successfully");
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Update Failed");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Edit Page</h1>

      <form onSubmit={handleSubmit}>
        <br />

        <input
          type="text"
          name="title"
          value={page.title}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="slug"
          value={page.slug}
          onChange={handleChange}
        />

        <br />
        <br />

        <textarea
          name="content"
          rows="8"
          cols="50"
          value={page.content}
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">Update Page</button>
      </form>
    </div>
  );
}

export default EditPage;