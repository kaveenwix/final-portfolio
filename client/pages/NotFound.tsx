import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Kaveen Wickramasinghe Portfolio</title>
        <meta
          name="description"
          content="Oops! The page you're looking for doesn't exist. Return to my portfolio to explore my UI/UX and graphic design work."
        />
        <meta
          name="keywords"
          content="404, page not found, Kaveen Wickramasinghe, portfolio error"
        />
        <meta name="author" content="Kaveen Wickramasinghe" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="404 - Page Not Found | Kaveen Wickramasinghe Portfolio"
        />
        <meta
          property="og:description"
          content="Oops! The page you're looking for doesn't exist. Return to my portfolio to explore my UI/UX and graphic design work."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kaveenwickramasinghe.ca/404" />
        <meta property="og:image" content="/images/kaveen/kaveen.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="404 - Page Not Found | Kaveen Wickramasinghe Portfolio"
        />
        <meta
          name="twitter:description"
          content="Oops! The page you're looking for doesn't exist. Return to my portfolio to explore my UI/UX and graphic design work."
        />

        {/* Additional SEO */}
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
