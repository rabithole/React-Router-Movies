import React from 'react';

const MovieCard = props => {
	const { title, director, metascore, stars, id } = movie;
  return(
	<div className="movie-card">

    	<h2>{title}</h2>
    	<div className="movie-director">
      		Director: <em>{director}</em>
    	</div>
    	<div className="movie-metascore">
      		Metascore: <strong>{metascore}</strong>
    	</div>

    	<h3>Actors</h3>
    	<p>{id}</p>
    	{stars.map(star => (
      	<div key={star} className="movie-star">
        	{star}
      	</div>
    ))}
  </div>
  	);
};

export default MovieCard;
