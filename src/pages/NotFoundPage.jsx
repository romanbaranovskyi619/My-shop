import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage({
    title = "404",
    message = "Page not found",
}) {
    return (
        <div className="not-found">
            <h1>{title}</h1>

            <p>{message}</p>

            <Link to="/">
                Back to Shop
            </Link>
        </div>
    );
}

export default NotFoundPage;