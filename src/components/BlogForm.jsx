const BlogForm = ({
    addBlog,
    handleBlogChange,
    handleUrlChange,
    handleAuthorChange,
    newBlog,
    newAuthor,
    newUrl
}) => {
    return (
    <div>
        <h2>create new</h2>
          <form onSubmit={addBlog}>
            <div>
              <label>
                Title:
                <input value={newBlog} onChange={handleBlogChange} />
              </label>
            </div>
            <div>
              <label>
                Author:
                <input value={newAuthor} onChange={handleAuthorChange} />
              </label>
            </div>
            <div>
              <label>
                Url:
                <input value={newUrl} onChange={handleUrlChange} />
              </label>
            </div>
            <button type="submit">save</button>
          </form>
    </div>

    )
}

export default BlogForm