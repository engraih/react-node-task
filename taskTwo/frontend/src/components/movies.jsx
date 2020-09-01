import React, { Component } from "react";
import Pagination from "./pagination";
import {paginate} from '../utils/paginate'
import axios from 'axios'

const  api = axios.create({
  baseURL: `http://localhost:3300/api`
})

class Movies extends Component {

  state = {
    movies: [],
    currentPage: 1,
    pageSize: 3
  };

  constructor(){
    super()
    api.get('/').then(res => {
      console.log(res.data)
      this.setState({ movies: res.data})
    })
  }

  handleEdit = movie => {
    console.log(movie)

  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page })
  };

  render() {
    const { length: count } = this.state.movies;
    const {pageSize, currentPage, movies: alMovies} = this.state

    if (count === 0) return <p>There are no movies in the database.</p>;
     
    const movies = paginate(alMovies, currentPage, pageSize)

    return (
      <React.Fragment>
        <p>Showing {count} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>IDMbRating</th>
              <th>PersonalRating</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            { movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.imdbRating}</td>
                <td>{movie.personalRating}</td>
                <td>
                  <button
                    onClick={() => this.handleEdit(movie)}
                    className="btn btn-primary btn-sm"
                  >
                    Edit
                  </button>
                </td>
                </tr>
            ))}     
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
