import React from 'react'
import '../style/formstyles.css';

const Form = () => {
    
  return (
    <div className="top">
        <div className="content1">
            <div className="container1">
                <div className="title">Tell Us More</div>
                <div className="content">
                    <form action="#">
                        <div className="user-details">
                            <div className="type-title">
                                Enter The Movies You Like
                            </div>
                            <div className="input-box">
                                <span className="details">The movie you like the most</span>
                                <input type="text" placeholder="Enter name of the movie" required/>
                            </div>
                            <div className="input-box">
                                <span className="details">Your second favourite movie</span>
                                <input type="text" placeholder="Enter name of the movie" required/>
                            </div>
                            <div className="input-box">
                                <span className="details">Your third favourite</span>
                                <input type="text" placeholder="Enter name of the movie" required/>
                            </div>
                            <div className="new-title">
                                Choose A New Genre You'd Like To Try
                            </div>
                            <div className="movie-genere">
                                <div className="new-option">
                                    <input type="radio" id="html" name="movie_genere" value="HTML"/>
                                    <label for="html">Adventure</label>
                                </div>
                                <div className="new-option">
                                    <input type="radio" id="html" name="movie_genere" value="HTML"/>
                                    <label for="html">Romance</label>
                                </div>
                                <div className="new-option">
                                    <input type="radio" id="html" name="movie_genere" value="HTML"/>
                                    <label for="html">Thriller</label>
                                </div>
                                <div className="new-option">
                                    <input type="radio" id="html" name="movie_genere" value="HTML"/>
                                    <label for="html">Horror</label>
                                </div>
                                <div className="new-option">
                                    <input type="radio" id="html" name="movie_genere" value="HTML"/>
                                    <label for="html">Fiction</label>
                                </div>
                            </div>
                            <div className="type-title">
                                Enter The Songs You Like
                            </div>
                            <div className="input-box">
                                <span className="details">The song you like the most</span>
                                <input type="text" placeholder="Enter name of the song" required/>
                            </div>
                            <div className="input-box">
                                <span className="details">Your second favourite song</span>
                                <input type="text" placeholder="Enter name of the song" required/>
                            </div>
                            <div className="input-box">
                                <span className="details">Your third favourite</span>
                                <input type="text" placeholder="Enter name of the song" required/>
                            </div>
                            <div className="new-title">
                                Choose A New Genre You'd Like To Try
                            </div>
                            <div className="movie-genere">
                                <div className="new-option">
                                    <input type="radio" id="html" name="song_genere" value="HTML"/>
                                    <label for="html">Adventure</label>
                                </div>
                                <div className="new-option">
                                    <input type="radio" id="html" name="song_genere" value="HTML"/>
                                    <label for="html">Romance</label>
                                </div>
                                <div className="new-option">
                                    <input type="radio" id="html" name="song_genere" value="HTML"/>
                                    <label for="html">Thriller</label>
                                </div>
                                <div className="new-option">
                                    <input type="radio" id="html" name="song_genere" value="HTML"/>
                                    <label for="html">Horror</label>
                                </div>
                                <div className="new-option">
                                    <input type="radio" id="html" name="song_genere" value="HTML"/>
                                    <label for="html">Fiction</label>
                                </div>
                            </div>
                            <div className="type-title">
                                Enter The Books You Like
                            </div>
                            <div className="input-box">
                                <span className="details">The book you like the most</span>
                                <input type="text" placeholder="Enter name of the book" required/>
                            </div>
                            <div className="input-box">
                                <span className="details">Your second favourite book</span>
                                <input type="text" placeholder="Enter name of the book" required/>
                            </div>
                            <div className="input-box">
                                <span className="details">Your third favourite</span>
                                <input type="text" placeholder="Enter name of the book" required/>
                            </div>
                        </div>
                        <div className="new-title">
                            Choose A New Genre You'd Like To Try
                        </div>
                        <div className="movie-genere">
                            <div className="new-option">
                                <input type="radio" id="html" name="book_genere" value="HTML"/>
                                <label for="html">Adventure</label>
                            </div>
                            <div className="new-option">
                                <input type="radio" id="html" name="book_genere" value="HTML"/>
                                <label for="html">Romance</label>
                            </div>
                            <div className="new-option">
                                <input type="radio" id="html" name="book_genere" value="HTML"/>
                                <label for="html">Thriller</label>
                            </div>
                            <div className="new-option">
                                <input type="radio" id="html" name="book_genere" value="HTML"/>
                                <label for="html">Horror</label>
                            </div>
                            <div className="new-option">
                                <input type="radio" id="html" name="book_genere" value="HTML"/>
                                <label for="html">Fiction</label>
                            </div>
                        </div>
                        <div className="button">
                        <input type="submit" value="Submit"/>
                        </div>
                        <div className="button">
                            <a href="profile.html"><input type="button" value="Go Back To Profile"/></a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form
