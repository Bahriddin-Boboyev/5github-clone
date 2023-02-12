import React from "react";
import { Link } from "react-router-dom";
import panel from "../../../img/panel.png";

export const RepositoriesCard = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.github.com/users/Bahriddin-Boboyev/repos")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  
    }, []);



  return (

    <>
      <div>
        <h3 className="popular_repos_title">Popular repositories</h3>
        <ul className="main_repos_list d_flex">
          {data?.slice(0, 6).map((item) => (
            <li key={item.id + 22} className="popular_repos">
              <div className="main_repo-box">
                <div className="main_repo_box1 d_flex">
                  <Link to={item.html_url}><h4>{item.name}</h4></Link>
                  <p>{item.visibility}</p>
                </div>
                <div className="main_repo_box2 d_flex">
                  <p>
                    <span
                      className={`p ${
                        item.language === "JavaScript"
                          ? "JavaScript"
                          : "" || item.language === "HTML"
                          ? "HTML"
                          : "" || item.language === "CSS"
                          ? "CSS "
                          : ""
                      }`}
                    ></span>{" "}
                    {item.language}
                  </p>
                  {item.stargazers_count !== 0 ? (
                    <span className="span_item">{item.stargazers_count}</span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="contributions">
          <div className="dj-flex">
            <h3>180 contributions in the last year</h3>
            <div className="year_block">
              <button className="y-2023">2023</button>
              <button className="y-2022">2022</button>
            </div>
          </div>
          <div className="img_panel">
            <img src={panel} alt="img" />
          </div>
          <div className="repo_active">
            <p>Show more activity</p>
          </div>
        </div>
      </div>
    </>
  );
};
