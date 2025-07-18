import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function ApiData() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setPosts(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts
    .filter(post => post.title.toLowerCase().includes(search.toLowerCase()))
    .slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card title="JSONPlaceholder Posts">
        <div className="mb-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search posts..."
            className="p-2 border rounded w-full"
          />
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <div className="text-red-500">Error: {error}</div>
        ) : (
          <div>
            {currentPosts.map((post) => (
              <div key={post.id} className="p-4 border-b">
                <h3 className="font-bold">{post.title}</h3>
                <p className="text-gray-600">{post.body}</p>
              </div>
            ))}

            <div className="flex justify-center mt-4">
              {Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map((_, i) => (
                <Button
                  key={i}
                  variant={currentPage === i + 1 ? 'primary' : 'secondary'}
                  onClick={() => paginate(i + 1)}
                  className="mx-1"
                >
                  {i + 1}
                </Button>
              ))}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
