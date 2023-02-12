import React from 'react'
import { Link } from 'react-router-dom';

const UniqueStar = ({item}) => {
  const [stars, setStart] = React.useState(true);
  return (
  
    <li key={item.name} className="allRepos_item">
    <div className="repos_line-up"></div>
    <div className="d_flex">
      <div>
        <div className="stars_boxTitle d-flex">
         <Link to={item.html_url}><div className="stars_repo-box d-flex underline">
          <h3>{item?.owner.login}</h3>
          <p>/</p>
          <p>{item.name}</p>
          </div></Link>
          <button>{item.visibility}</button>
        </div>
        <div className="stars_boxJs d-flex">
          <h4>
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
          ></span>{item.language}
          </h4>
          <div>
          <span className='span'></span>
          <span className='span_count'>{item.stargazers_count}</span>
          </div>
          <p>{item.created_at.slice(0,10)}</p>
        </div>
      </div>
      <div className="green_block">
        <button className="star-1 btnhover" onClick={() => setStart(!stars)}>
          <span className={`star-2 ${stars ? "star4" : ""}`}></span>
          {stars ? "Starred" : "Stars"}
        </button>
      </div>
    </div>
    <div className="repos_line-down"></div>
  </li>
    )
}

export default UniqueStar;