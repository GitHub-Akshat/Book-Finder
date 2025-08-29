import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Star as StarFilled } from "lucide-react";

export default function BookCard({ book }) {
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem("favorites")) || [];
        const exists = favs.some((b) => b.key === book.key); // book.key is unique in OpenLibrary
        setIsFav(exists);
    }, [book]);

    const toggleFavorite = () => {
        let favs = JSON.parse(localStorage.getItem("favorites")) || [];

        if (isFav) {
            // remove
            favs = favs.filter((b) => b.key !== book.key);
        } else {
            // add
            favs.push(book);
        }

        localStorage.setItem("favorites", JSON.stringify(favs));
        setIsFav(!isFav);
    };

    const coverUrl = book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        : "https://via.placeholder.com/150x200?text=No+Cover";

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
            <img
                src={coverUrl}
                alt={book.title}
                className="w-full h-48 object-cover"
            />

            <div className="p-3 flex justify-between items-start">
                <div className="flex-1">
                    <h2 className="font-semibold text-lg truncate">{book.title}</h2>
                    <p className="text-sm text-gray-600">
                        {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
                    </p>
                    <p className="text-xs text-gray-500">
                        {book.first_publish_year || "N/A"}
                    </p>
                </div>

                <button
                    onClick={toggleFavorite}
                    className="ml-2 text-yellow-500 hover:scale-110 transition"
                    aria-label="Add to Favorite"
                >
                    {isFav ? (
                        <StarFilled fill="gold" stroke="gold" size={28} />
                    ) : (
                        <Star size={28} />
                    )}
                </button>
            </div>
        </div>
    );
}
