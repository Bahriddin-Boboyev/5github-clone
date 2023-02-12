import React from "react";
import "../main.scss";

import { Link } from "react-router-dom";

export const Home = () => {
  const [data, setData] = React.useState([]);
  const [click, setClick] = React.useState(false);

  React.useEffect(() => {
    fetch("https://api.github.com/users/bahriddin-boboyev")
      .then((res) => res.json())
      .then((data) => {
        setData([data]);
      });
  }, []);

  return (

    <div className="home">
      {data.map((item) => (
        <div key={"home"} className="home_box">
          <div className="home_box1">
            <div className="avatar_box">
              <img src={item.avatar_url} alt="img" />
              <div className="smile">
                😇 <span>Alhamdulillah</span>
              </div>
            </div>
            <div className="home_box1-title">
              <p>{item.login}</p>
            </div>
            <button onClick={() => setClick(!click)} className="box_btn">
              {click ? "Unfollow" : "Follow"}
            </button>
            <div className="home_box-people_block d-flex">
              <Link to={"followers"}>
                <p className="followers">
                  <span>{item.followers}</span> followers
                </p>
              </Link>

              <div>
                {" "}
                <p className="home_dot">·</p>
              </div>
              <Link to={"following"}>
                <p className="following">
                  <span>{item.following}</span> following
                </p>
              </Link>
            </div>
            <div className="report">
              <p>Block Report</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
