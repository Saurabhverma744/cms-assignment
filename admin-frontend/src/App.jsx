import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ViewPage from "./pages/ViewPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
  <Routes>

    <Route path="/" element={<Home />} />

    <Route path="/page/:slug" element={<ViewPage />} />

    <Route
      path="/admin"
      element={<Login />}
    />

    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />

    <Route
      path="/create-page"
      element={
        <ProtectedRoute>
          <CreatePage />
        </ProtectedRoute>
      }
    />

    <Route
      path="/edit-page/:id"
      element={
        <ProtectedRoute>
          <EditPage />
        </ProtectedRoute>
      }
    />
    <Route path="*" element={<NotFound />} />

  </Routes>
</BrowserRouter>
  );
}

export default App;