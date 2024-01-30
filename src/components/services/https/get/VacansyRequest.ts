import requestApiGet from "../api/RequestApi-get";

const vacancyRequest = async (setArr: Function) => {
  const currentUrl = window.location.href;
  const searchParams = new URLSearchParams(currentUrl.split("?")[1]);
  const searchValue = searchParams.get("search");
  const searchValueArea = searchParams.get("searchArea");
  const searchValueRequset = searchValueArea ? searchValue + "" + searchValueArea : searchValue;

  const pathRequest = `text=${searchValueRequset}&per_page=100`;

  const response = await requestApiGet(pathRequest);

  await setArr(response.items);
  localStorage.setItem("vacansys", JSON.stringify(response.items));
  localStorage.setItem("request", JSON.stringify(searchValue));
  if (searchValueArea) {
    localStorage.setItem("requestArea", JSON.stringify(searchValueArea));
  }

  console.log(`request to api successful: Value[${searchValue}]`);
};

export default vacancyRequest;
