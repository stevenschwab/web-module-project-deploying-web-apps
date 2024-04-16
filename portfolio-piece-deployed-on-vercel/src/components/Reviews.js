import React from 'react';
import '../styles/Reviews.css';

const reviews = [
    {
      id: 1,
      author: 'Jane Doe',
      content: 'These chairs are not just furniture, they are a part of our home. The attention to detail and the comfort they provide is unmatched.',
      rating: 5,
    },
    {
      id: 2,
      author: 'John Smith',
      content: 'The craftsmanship is top-notch. The wood feels sturdy and the finish is beautiful. Definitely worth the investment.',
      rating: 5,
    },
    {
      id: 3,
      author: 'Emily Johnson',
      content: 'I am in love with my Adirondack chair! Sitting in it by the fireplace has become my new favorite pastime.',
      rating: 5,
    },
];

function StarRating({ rating }) {
    return (
      <div className="star-rating">
        {'★'.repeat(rating)}
        {'☆'.repeat(5 - rating)}
      </div>
    );
}

export default function Reviews() {
    return (
        <div className="reviews-page">
            <h1>Customer Reviews</h1>
            {reviews.map(review => (
                <div key={review.id} className="review">
                    <StarRating rating={review.rating} />
                    <p className="review-content">{review.content}</p>
                    <p className="review-author">- {review.author}</p>
                </div>
            ))}
        </div>
    );
}