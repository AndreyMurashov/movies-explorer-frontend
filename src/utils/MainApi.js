class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _parseResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  // Действия с фильмами
  // Получение фильмов локальное
  getMoviesLocal() {
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: this._headers
    }).then(this._parseResponse);
  }

  // Сохранение фильма в избранное
  addLikedMovies(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId: data.id.toString(),
        nameRU: data.nameRU,
        nameEN: data.nameEN
      })
    }).then(this._parseResponse);
  }

  // Удаление фильма из избранного
  deleteLikedMovies(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: this._headers
    }).then(this._parseResponse);
  }

  // Действия с пользователем
  // Регистрация нового пользователя
  registerNewUser(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    }).then(this._parseResponse);
  }

  // Авторизация пользователя
  loginExistingUser(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    }).then(this._parseResponse);
  }

  // Получение информации о пользователе
  getCurrentUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers
    }).then(this._parseResponse);
  }

  // Изменение информации о пользователе
  updateCurrentUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    }).then(this._parseResponse);
  }
}

const mainApi = new MainApi({
  baseUrl: "https://api.murashoff.nomoredomains.icu",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    "Content-Type": "application/json"
  }
});

export default mainApi;
