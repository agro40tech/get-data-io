import { FC, useState } from "react";

import "./index.css";
import SubmitButton from "@/components/UI/buttons/SubmitButton";

const onHandlerSubmit = (searchValueArea: string) => {
  const vacansys: any[] = [];
  localStorage.setItem("vacansys", JSON.stringify(vacansys));
  localStorage.setItem("request", JSON.stringify(""));

  if (localStorage.getItem("requestArea")) {
    localStorage.removeItem("requestArea");
  } else if (searchValueArea.length > 0) {
    localStorage.setItem("requestArea", JSON.stringify(""));
  }
};

const HomePage: FC = () => {
  const redirectPage: string = "/viewjob";
  const [searchValue, setSearchValue] = useState("");
  const [searchValueArea, setSearchValueArea] = useState("");

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
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          {searchValue.length > 2 ? (
            <input
              className="search-form__input"
              type="search"
              name="searchArea"
              id="searchArea"
              autoComplete="off"
              placeholder="Какой город вас интересует"
              minLength={5}
              maxLength={40}
              onChange={(e) => {
                setSearchValueArea(e.target.value);
              }}
            />
          ) : null}
        </p>
        <SubmitButton
          buttonText="Найти"
          className="search-form__button-submit"
          padding="10px 20px"
          maxHeight="45px"
          minWidth="155px"
          onClick={() => {
            onHandlerSubmit(searchValueArea);
          }}
        />
      </form>
    </section>
  );
};

export default HomePage;
