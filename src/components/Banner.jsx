import { useEffect, useState } from "react";
import axios from "../axios";
import "./Banner.css";

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const getBannerMovie = async () => {
      const request = await axios.get(fetchUrl);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    getBannerMovie();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__btn">Play</button>
          <button className="banner__btn">My List</button>
        </div>
        <p className="banner__description">{truncate(movie?.overview, 150)}</p>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
