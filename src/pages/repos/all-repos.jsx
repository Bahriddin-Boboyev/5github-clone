import React from "react";
import "../pageStyle.scss";
import { Repos } from "./components/repos";

export const AllRepos = ({ value }) => {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(true);
  const [filterData, setFilterData] = React.useState([]);
  const [nextFilterData, setNextFilterData] = React.useState([]);
  const [loading, setLoading] =React.useState(true) 

  React.useEffect(() => {
    fetch("https://api.github.com/users/Bahriddin-Boboyev/repos")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        if(data){
          setLoading(false)
        }
        setFilterData(
          data.slice(0, 15).filter((item) => {
            return item.name.toLowerCase().includes(value.toLowerCase());
          })
        );
        setNextFilterData(
          data.slice(15).filter((item) => {
            return item.name.toLowerCase().includes(value.toLowerCase());
          })
        );
      });
  }, [value]);

  return (
    <div className="allRepos">
      <div className="allRepos_box">
        <ul className="allRepos_list">
          { loading ? <div className="relative"><div className="lds-dual-ring"></div></div> :
            page
            ? filterData.length
              ? filterData.map((item) => {
                  return <Repos key={item.id + 2} item={item} />;
                })
              : <h2 className="repos_not_found">Bahriddin-Boboyev doesn’t have any repositories that match.</h2>
            : nextFilterData.length
            ? nextFilterData.map((item) => {
                return <Repos key={item.id + 3} item={item} />;
              })
            : <h2 className="repos_not_found">Bahriddin-Boboyev doesn’t have any repositories that match.</h2>
          }
          
        </ul>
        <div className="next_block">
          <button
            className={`pervious ${page ? "button_bg" : ""}`}
            onClick={() => setPage(true)}
          >
            Pervious
          </button>
          <button
            className={`next ${page ? "" : "button_bg"}`}
            onClick={() => setPage(false)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
