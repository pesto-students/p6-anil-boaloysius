const url = require("url");
const api = require("../api");
const cityCollection = require("./cityCollection.json");

const handleError = (res, { message }) => {
  res.writeHead(500);
  res.end(message);
};

const respondSuccess = (res, data) => {
  res.writeHead(200, {
    "Content-type": "application/json",
  });
  res.end(JSON.stringify(data));
};

const respondFail = (res, data) => {
  res.writeHead(200, {
    "Content-type": "application/json",
  });
  res.end(JSON.stringify(data));
};

exports.getCurrent = async (req, res) => {
  const requiredParameters = ["city"];
  const { query } = url.parse(req.url, true);

  for (param of requiredParameters) {
    if (!Object.keys(query).includes(param))
      return handleError(res, { message: `${param} required` });
  }

  const { city } = query;

  const { status, data } = await api.city(city);
  if (status == "success") {
    respondSuccess(res, data);
  } else {
    respondFail(res, data);
  }
};

exports.getForecast = async (req, res) => {
  const requiredParameters = ["city", "days"];
  const { query } = url.parse(req.url, true);

  for (param of requiredParameters) {
    if (!Object.keys(query).includes(param))
      return handleError(res, { message: `${param} required` });
  }

  const { city, days } = query;
  const cityDetails = cityCollection.find(
    (item) => item.city.name.toLowerCase() == city.toLowerCase()
  );

  if (!cityDetails) {
    return handleError(`city: ${city} not found`);
  }
  const { lat, lon } = cityDetails.city.coord;

  const { status, data } = await api.forcast(lat, lon, days);
  if (status == "success") {
    respondSuccess(res, data);
  } else {
    respondFail(res, data);
  }
};

exports.filter = async (req, res) => {
  const requiredParameters = ["page", "limit"];
  const { query } = url.parse(req.url, true);

  for (param of requiredParameters) {
    if (!Object.keys(query).includes(param))
      return handleError(res, { message: `${param} required` });
  }

  const { page, limit, name } = query;
  const pageStart = (page - 1) * limit;
  const pageEnd = page * limit;
  let cityDetails = [...cityCollection];
  if (name) {
    cityDetails = cityCollection.filter(
      (item) => item.city.name.toLowerCase() == name.toLocaleLowerCase()
    );
  }
  cityDetails = cityDetails.slice(pageStart, pageEnd);

  respondSuccess(res, cityDetails);
};
