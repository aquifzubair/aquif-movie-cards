import React, { Component } from 'react';

class Cards extends Component {
    constructor(props){
        super(props)
        this.state = {
            movieList : [],
            headerName:'Top Rated Movies'
        }
    }

    componentDidMount(){        
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_AUTH_KEY}&language=en-US&page=1`)
        .then(data => data.json())
        .then(data => this.setState({movieList:data.results}))        
    }    

    renderTopRatedMovies = () => {        
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_AUTH_KEY}&language=en-US&page=1`)
        .then(data => data.json())
        .then(data => this.setState({movieList:data.results, headerName:'Top Rated Movies'}))        
    } 
    
    renderNowPlayingMovies = () => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_AUTH_KEY}&language=en-US&page=1`)
        .then(data => data.json())
        .then(data => this.setState({movieList:data.results,headerName:'Now playing Movies'}))
    }

    renderUpcomingMovies = () => {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_AUTH_KEY}&language=en-US&page=1`)
        .then(data => data.json())
        .then(data => this.setState({movieList:data.results,headerName:'Upcoming Movies'}))
    }

    render() {
        const renderList = this.state.movieList.map(movie => {
            return (
                <div key={movie.id}>
                <img src = {`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt= 'poster'/>
                <p className='title'>{movie.title}</p>
                <p className='original-title'>{movie.original_title}</p>
                <p className='overview'>{movie.overview}</p>
                <p className='rating'>Rating:{movie.vote_average}/10</p>
            </div>
            )
        })

        return(
            <div>
                <h1>{this.state.headerName}</h1>

                <div className='navigation'>
                    <button onClick={this.renderNowPlayingMovies} className='btn'>Now Playing</button>
                    <button onClick={this.renderTopRatedMovies} className='btn'>Top rated</button>
                    <button onClick={this.renderUpcomingMovies} className='btn'>Upcoming</button>
                </div>
                <div className="movie-container">
                    {renderList}
                </div>
            </div>
            
        )
    }      
    
}

export default Cards;