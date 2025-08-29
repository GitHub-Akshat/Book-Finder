import { useLocation } from "react-router-dom";
import BookCard from "./BookCard.jsx";

export default function BookList() {
    const location = useLocation();
    const books = location.state?.books || [];

    if (!books.length) {
        return <p className="text-center text-gray-500">No books found.</p>;
    }
    return (
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10">
            {books.map((book) => (
                <BookCard key={book.key} book={book} />
            ))}
        </div>
    );
}
