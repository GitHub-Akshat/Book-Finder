import { useEffect, useState } from "react";
import BookCard from "./BookCard";

export default function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(favs);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6 text-center text-yellow-600">
                ⭐ Your Favorites
            </h1>

            {favorites.length === 0 ? (
                <p className="text-center text-gray-600">No favorites yet!</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {favorites.map((book) => (
                        <BookCard key={book.key} book={book} />
                    ))}
                </div>
            )}
        </div>
    );
}
