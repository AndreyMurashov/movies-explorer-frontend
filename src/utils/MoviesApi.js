class MoviesApi {
  constructor(options) {
    this._BASEURL = options.BASEURL;
    this._headers = options.headers;
  }

  _parseResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMoviesInfo() {
    return fetch(this._BASEURL, {
      headers: this._headers
    }).then((res) => this._parseResponse(res));
  }
}

const moviesApi = new MoviesApi({
  BASEURL: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-Type": "application/json"
  }
});

export default moviesApi;
