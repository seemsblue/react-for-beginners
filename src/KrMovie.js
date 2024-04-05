import { useEffect, useState } from "react"; //react에서 useState만 사용하겠다는 뜻임

function KrMovie() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=3a89fc3e2119b7b7d32ee174f98e0001&targetDt=20240401`
      )
    ).json();

    setMovies(json.boxOfficeResult.dailyBoxOfficeList);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.rnum}>
              <h2>{movie.movieNm}</h2>
              <p>개봉일 : {movie.openDt}</p>
              <br />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default KrMovie;
