// Mock data for blog posts
const blogPosts = [
    { title: 'First Post', content: 'This is the content of the first post.' },
    { title: 'Second Post', content: 'This is the content of the second post.' }
];

// Function to load blog posts
function loadBlogPosts() {
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        blogPostsContainer.appendChild(postElement);
    });
}

// Load blog posts when the page loads
window.onload = function () {
    loadBlogPosts();
};
