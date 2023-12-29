import axios from "axios";

const $apiUrl = "https://api.hh.ru/vacancies?";
const $userAgent = "Get-Data-io/1.0 (volkovvova67@gmail.com)";

const requestApiGet = async (pathRequest: string) => {
  const urlRequest = $apiUrl + pathRequest;

  try {
    const response = await axios.get(urlRequest, {
      headers: {
        "User-Agent": $userAgent,
      },
    });

    const result = response.data;
    return result;
  } catch (error) {
    console.error("Error making API request:", error);
    throw error;
  }
};

export default requestApiGet;
