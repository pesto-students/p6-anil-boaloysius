const axios = require("axios");

const errorParser = ({ response, ...e }) => {
  const { cod, message } = response.data;
  return { status: "failed", statusCode: cod, data: message };
};

exports.city = async (city) => {
  const apiKey = `${process.env.API_KEY}`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log(url);
  try {
    const response = await axios.get(url);
    return { status: "success", data: response.data };
  } catch (e) {
    return errorParser(e);
  }
};

exports.forcast = async (lat, lon, cnt) => {
  const apiKey = `${process.env.API_KEY}`;
  const url = `api.openweathermap.org/data/2.5/forecast/climate?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${apiKey}`;
  try {
    const response = await axios.get(url);
    return { status: "success", data: response.data };
  } catch (e) {
    return errorParser(e);
  }
};
