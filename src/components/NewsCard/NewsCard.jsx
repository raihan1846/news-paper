import { FaEye, FaStar, FaRegStar, FaBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
  } = news;

  // Generate stars dynamically
  const renderStars = (ratingNumber) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= ratingNumber ? (
          <FaStar key={i} className="text-yellow-500" />
        ) : (
          <FaRegStar key={i} className="text-yellow-400" />
        )
      );
    }
    return stars;
  };

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200 relative overflow-hidden">
      {/* Header Section (Author + Icons) */}
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center space-x-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toDateString()}
            </p>
          </div>
        </div>

        {/* Top Right Corner Icons */}
        <div className="flex items-center gap-3 text-gray-500">
          <button className="hover:text-blue-600 transition">
            <FaShareAlt size={16} />
          </button>
          <button className="hover:text-rose-600 transition">
            <FaBookmark size={16} />
          </button>
        </div>
      </div>

      {/* News Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>

        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-70 object-cover rounded-lg mb-3"
        />

        <p className="text-gray-700 text-sm leading-relaxed mb-3">
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
          <Link to={`/news-details/${id}`} className="text-primary font-semibold custor-pointer hover:underline">Read More</Link>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span key={index} className="badge badge-outline text-xs">
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer Section (Rating + Views) */}
        <div className="flex justify-between items-center border-t pt-3 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            {renderStars(rating.number)}
            <span className="ml-1 font-medium text-gray-700">
              ({rating.number.toFixed(1)})
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
