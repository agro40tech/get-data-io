import { FC } from "react";

import "./index.css";

const HomePage: FC = () => {
  return (
    <section className="main__home-page">
      <form action="" className="main__search-form">
        <p className="search-form__wrapper">
          <label className="search-form__label" htmlFor="search">
            Какое направление вас интересует?
          </label>
          <input
            className="search-form__input"
            type="search"
            name="search"
            id="search"
            autoComplete="off"
            placeholder="Какова ваша профессия?"
            required
          />
        </p>
        <button className="search-form__button-submit" type="submit">
          Найти
        </button>
      </form>
    </section>
  );
};

export default HomePage;
