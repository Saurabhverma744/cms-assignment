import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPage } from "../services/pageService";

function CreatePage() {
  const navigate = useNavigate();

  const [page, setPage] = useState({
    title: "",
    slug: "",
    content: "",
  });

  const handleChange = (e) => {
    setPage({
      ...page,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createPage(page);
      alert("Page Created Successfully");
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to create page");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Create Page</h1>

      <form onSubmit={handleSubmit}>
        <br />

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={page.title}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="slug"
          placeholder="Slug"
          value={page.slug}
          onChange={handleChange}
        />

        <br />
        <br />

        <textarea
          name="content"
          placeholder="Content"
          rows="8"
          cols="50"
          value={page.content}
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">Create Page</button>
      </form>
    </div>
  );
}

export default CreatePage;