import 'react';

function Card(props) {
    const { description,title,  price, image, rating, category } = props
    return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image}  />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {category}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          ${price.toFixed(2)}
        </span>
      </div>
      <div className="px-6 pt-2 pb-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          Rating: {rating.rate} ({rating.count} reviews)
        </span>
      </div>
    </div>
  );
}

export default Card;
