// import React from "react";
// import { request } from "../config/request";

// export const UseAxios = ({ method = null, url = null, body = null }) => {
//   const [data, setData] = React.useState([]);
//   const [loading, setLoading] = React.useState(true);
//   const [error, setError] = React.useState([]);

//   const fetchData = () => {
//     request({ body, url, method })
//       .then((res) => {
//         setData(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.data);
//         setLoading(false);
//       });
//   };

//   React.useEffect(() => {
//     if (url && method) {
//       fetchData();
//     }
//   }, [url, method, body]);
  
//   return { url, method, body };
// };
