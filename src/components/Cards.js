import React, { Component } from 'react';

class Cards extends Component {
    constructor(props){
        super(props)
        this.state = {
            movieList : []
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_AUTH_KEY}&language=en-US&page=10`)
        .then(data => data.json())
        .then(data => this.setState({movieList:data.results}))
    }

    render() {
        let renderList = this.state.movieList.map(movie => {
            return (
                <div key={movie.id}>
                <img src = {`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt= 'poster'/>
                <p className='title'>{movie.title}</p>
                <p className='original-title'>{movie.original_title}</p>
                <p className='overview'>{movie.overview}</p>
                <p className='rating'>{movie.vote_average}</p>
            </div>
            )
        })

        return(
            <React.Fragment>
                {renderList}
            </React.Fragment>
        )
    }      
    
}

export default Cards;