const SERVER_URL =
  process.env.NODE_ENV === "production"
    ? window.location.host
    : "http://localhost:8080";

export default SERVER_URL;
