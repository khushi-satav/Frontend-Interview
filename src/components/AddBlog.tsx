import { useMutation, useQueryClient } from "@tanstack/react-query"
import { api } from "../api"
import { useState } from "react"

export default function AddBlog() {
  const qc = useQueryClient()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const mutation = useMutation({
    mutationFn: () =>
      api.post("/blogs", {
        title,
        content,
        description: content.slice(0, 50),
        date: new Date().toISOString(),
      }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["blogs"] })
      setTitle("")
      setContent("")
    },
  })

  return (
    <div className="space-y-2">
      <input
        className="border p-2 w-full"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="border p-2 w-full"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        className="bg-black text-white px-4 py-2"
        onClick={() => mutation.mutate()}
      >
        Add Blog
      </button>
    </div>
  )
}
