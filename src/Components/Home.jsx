import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        if (!title.trim() && !author.trim()) {
            navigate("/wrong");
            return;
        }

        setLoading(true);

        try {
            let url = "";
            if (title && !author) url = `https://openlibrary.org/search.json?title=${title}`;
            if (!title && author) url = `https://openlibrary.org/search.json?author=${author}`;
            if (title && author) url = `https://openlibrary.org/search.json?title=${title}&author=${author}`;

            const response = await fetch(url);
            if (!response.ok) throw new Error("Network error");

            const data = await response.json();
            const topBooks = data.docs.slice(0, 20);

            if (topBooks.length === 0) {
                navigate("/wrong");
            } else {
                navigate("/20books", { state: { books: topBooks } });
            }
        } catch (error) {
            console.error("Error fetching books:", error);
            navigate("/wrong");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center flex flex-col items-center justify-center p-6">
            <form
                onSubmit={handleSubmit}
                className="backdrop-blur-md bg-white/30 p-8 rounded-2xl shadow-lg w-full max-w-md flex flex-col gap-6 mb-8 items-center justify-center"
            >
                <h1 className="text-3xl font-bold text-yellow-400 drop-shadow-lg">
                    📚 Search for Books
                </h1>

                <input
                    className="w-full px-4 py-2 border border-white rounded-lg bg-white/20 text-black placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    type="text"
                    placeholder="Enter book title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    className="w-full px-4 py-2 border border-white rounded-lg bg-white/20 text-black placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    type="text"
                    placeholder="Enter book author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-70"
                >
                    {loading ? (
                        <>
                            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            Searching...
                        </>
                    ) : (
                        "Search"
                    )}
                </button>
            </form>
        </div>
    );
}

export default Home;
