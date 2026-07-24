import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPage } from "../services/pageService";
import "../styles/form.css";

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

  if (!title.trim()) {
    alert("Title is required.");
    return;
  }

  if (!slug.trim()) {
    alert("Slug is required.");
    return;
  }

  if (!content.trim()) {
    alert("Content is required.");
    return;
  }

  try {
    await createPage({
      title,
      slug,
      content,
    });

    navigate("/dashboard");
  } catch (error) {
    alert("Failed to create page");
  }
};

  return (
    
    <div  className="form-container">
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