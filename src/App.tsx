// src/App.tsx
import { useState } from "react";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";
// <

function App() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* LEFT */}
      <div style={{ width: "40%" }}>
        <BlogList onSelect={setSelectedBlogId} />
      </div>

      {/* RIGHT */}
      <div style={{ width: "60%" }}>
        <BlogDetail blogId={selectedBlogId} />
      </div>
    </div>
  );
}

export default App;
