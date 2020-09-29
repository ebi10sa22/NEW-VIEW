import React from "react";
import axios from "../../axios";
import requests from "../../requests-link";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import "./Upcoming.css";
import Movies from "./Movies";
import Result from "../../Result_Page/Result.js";
export default class Upcoming extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      pages: 0,
      movies: [],
      count_pages: 1,
      posterImg: "https://image.tmdb.org/t/p/original/",
      result_data: {},
    };
  }
  openPopup = (id) => {
    // https://api.themoviedb.org/3
    axios
      .get(`/movie/${id}?&api_key=cfe422613b250f702980a3bbf9e90716`)
      .then((data) => {
        let m = data.data;
        this.setState({ result_data: m });
      });
  };
  closePopup = () => {
    this.setState({ result_data: [] });
  };
  clicked = () => {
    this.setState({ show: true });
    this.fetchData();
  };
  fetchData = (page) => {
    this.setState({ count_pages: page });
    axios
      .get(
        requests.upComing +
          `&api_key=dbc0a6d62448554c27b6167ef7dabb1b` +
          `&page=${page}`
      )
      .then((data) =>
        this.setState({
          movies: data.data.results,
          pages: data.data.total_pages,
        })
      );
  };
  previous = () => {
    if (this.state.count_pages > 1 && this.state.count_pages !== 1) {
      let page = this.state.count_pages;
      this.fetchData(page - 1);
    }
  };
  next = () => {
    if (this.state.count_pages <= this.state.pages) {
      let page = this.state.count_pages;
      this.fetchData(page + 1);
    }
  };
  render() {
    return (
      <div className="upcoming">
        <header>
          {console.log(this.state.pages)}
          <Link to="/search">
            <ArrowBackIcon style={{ padding: "5px 10px" }} />
          </Link>
          {this.state.show && <p>You are on : {this.state.count_pages}</p>}
          {this.state.show && <p>Total Pages : {this.state.pages}</p>}
        </header>
        <div className="upcoming__button">
          <button
            onClick={this.clicked}
            style={{ visibility: `${this.state.show ? "hidden" : false}` }}
          >
            Click here to load movies
          </button>
        </div>
        {/* {console.log(this.state.movies)} */}
        <div className="upcoming__movies">
          {this.state.movies.map((movie) => (
            <Movies
              title={movie.original_title}
              poster={movie.poster_path}
              id={movie.id}
              openPopup={this.openPopup}
            />
          ))}
        </div>
        <div className="more__button">
          {this.state.show && (
            <footer>
              <button onClick={this.previous}>previous</button>
              <button onClick={this.next}>Next</button>
            </footer>
          )}
        </div>
        {typeof this.state.result_data.original_title !== "undefined" ? (
          <Result
            selected={this.state.result_data}
            closePopup={this.closePopup}
          />
        ) : (
          false
        )}
      </div>
    );
  }
}
