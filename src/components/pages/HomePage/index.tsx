import { FC } from "react";

import "./index.css";
import SubmitButton from "@/components/UI/buttons/SubmitButton";

const onHandlerSubmit = () => {
  const vacansys: any[] = [];
  localStorage.setItem("vacansys", JSON.stringify(vacansys));
  localStorage.setItem("request", JSON.stringify(""));
};

const HomePage: FC = () => {
  const redirectPage: string = "/viewjob";

  return (
    <section className="main__home-page">
      <form action={redirectPage} className="main__search-form">
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
            minLength={5}
            maxLength={40}
            required
          />
        </p>
        <SubmitButton
          buttonText="Найти"
          className="search-form__button-submit"
          padding="10px 20px"
          maxHeight="45px"
          minWidth="155px"
          onClick={onHandlerSubmit}
        />
      </form>
    </section>
  );
};

export default HomePage;
