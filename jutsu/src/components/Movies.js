import React, { useState, useEffect} from 'react'
import '../style/movies.css'
import movie from '../data/temp.json';

const Movies = () => {

    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/movie_data')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            setMovieData(data);
          })
          .catch(error => console.log(error));
      }, []);

  return (
    <div>
      <div className="content">
        <div className="welcomesenpai">
            Senpai says watch these
        </div>
        <div className="movierecommendation">
        {Array.isArray(movieData.top_suggestions) && movieData.top_suggestions.length > 0 && 
            movieData.top_suggestions.map((movie, index) => (
            <div className="m_movie_info" key={index}>
                <img className="m_movie_img" src={movie.image} alt={movie.title} />
                <div className="m_movie_name">{movie.title}</div>
                <div className="m_rat">
                <div className="m_icons"><i className='bx bxs-star-half'></i></div>
                <div className="m_movie_rating">{movie.rating}</div>
                </div>
                <div className="m_movie_year">{movie.year}</div>
                <div className="m_movie_year">{movie.genere}</div>
                <div className="m_movie_description">{movie.description}</div>
            </div>
            ))
        }
        </div>
        </div>

        <footer>
        <div className="footer-content">
            <div className="foot-head">SenpaiSays</div>
            <p>A one stop solution to all your problems related to movie and music suggestions...
            Don't know what to watch or listen to ?
        <br/>Ask Senpai</p>
        </div>
        <ul className="socials">
            <li><a href="#"><i className='bx bxl-facebook-circle'></i></a></li>
            <li><a href="#"><i className='bx bxl-twitter' ></i></a></li>
            <li><a href="#"><i className='bx bxl-youtube' ></i></a></li>
            <li><a href="#"><i className='bx bxl-linkedin-square' ></i></a></li>
            <li><a href="#"><i className='bx bxl-github' ></i></a></li>
        </ul>
        <div className="footer-bottom">
            <p>copyright &copy;2021 <a href="#">foolishdeveloper</a></p>
        </div>
        </footer>
    </div>
  )
}

export default Movies;
