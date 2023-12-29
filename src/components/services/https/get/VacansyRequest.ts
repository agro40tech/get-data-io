import requestApiGet from "../api/RequestApi-get";

const vacancyRequest = async (setArr: Function) => {
  const currentUrl = window.location.href;
  const searchParams = new URLSearchParams(currentUrl.split("?")[1]);
  const searchValue = searchParams.get("search");

  const pathRequest = `text=${searchValue}&per_page=100`;

  const response = await requestApiGet(pathRequest);

  await setArr(response.items);
  localStorage.setItem("vacansys", JSON.stringify(response.items));

  console.log(`request to api successful: Value[${searchValue}]`);
};

export default vacancyRequest;
