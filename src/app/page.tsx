"use client"

import Layout from "../components/layout"
// import { useEffect, useState } from "react"
// import type { ContentInterface } from "../types/content"

// interface PostsResponse {
//   posts: ContentInterface[]
//   total: number
// }

const HomePage = () => {
  // const [posts, setPosts] = useState<ContentInterface[]>([]);
  
  // useEffect(() => {
  //   fetch("/api/posts")
  //     .then(response => response.json() as Promise<PostsResponse>)
  //     .then(data => console.log(data.posts));
  // }, []);

  return (
    <Layout>
      Your solution goes here
    </Layout>
  )
}

export default HomePage
