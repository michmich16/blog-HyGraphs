export const MyBlogs = `query MyQuery {
  blogs {
    id
    author
    heading
    image {
      id
      url
    }
    article
    slug
    releasedDate
  }
}`