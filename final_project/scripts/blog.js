// blog.js
export function initBlog() {
  const blogForm = document.getElementById('blogForm');
  const postsContainer = document.getElementById('postsContainer');
  const savedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

  // Render saved posts
  savedPosts.forEach(post => {
    postsContainer.insertAdjacentHTML('afterbegin', createPostHTML(post));
  });

  // Handle new post submission
  blogForm?.addEventListener('submit', function (e) {
    e.preventDefault();

    const author = document.getElementById('author').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    if (!author || !title || !content) return;

    const newPost = { author, title, content };
    postsContainer.insertAdjacentHTML('afterbegin', createPostHTML(newPost));

    savedPosts.push(newPost);
    localStorage.setItem('blogPosts', JSON.stringify(savedPosts));

    blogForm.reset();
  });
}

function createPostHTML({ author, title, content }) {
  return `
    <div class="post">
      <h4>${title}</h4>
      <p><em>Posted by ${author}</em></p>
      <p>${content}</p>
    </div>
  `;
}
