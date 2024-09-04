// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogData} = props

  return (
    <ul className="blog-list-container">
      {blogData.map(eachData => (
        <BlogItem key={eachData.id} blogDetails={eachData} />
      ))}
    </ul>
  )
}

export default BlogList