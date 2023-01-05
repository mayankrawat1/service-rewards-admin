const port =
  process.env.REACT_APP_STAGE === "development"
    ? "http://localhost:5000"
    : "http://13.211.126.67:5000";

export default port;
