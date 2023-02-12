import React from 'react'
import { Link } from 'react-router-dom'

export const Repos = ({item}) => {
  const [stars, setStart] = React.useState(false)

  return (
      
    <li id={item.id} className='allRepos_item'>
          <div className='repos_line-up'></div>
          <div className='d_flex'>
          <div>
          <div className='allRepos_boxTitle d-flex'>
          <Link to={item.html_url}><h3>{item.name}</h3></Link>
          <button>{item.visibility}</button>
          </div>
          <div className='allRepos_boxJs d-flex'>
            <div className='d-flex'>
            <span className={`p ${
              item.language === "JavaScript"
                ? "JavaScript"
                : "" || item.language === "HTML"
                ? "HTML"
                : "" || item.language === "CSS"
                ? "CSS "
                : ""
            }`}></span>
            <h4>{item.language}</h4>
            </div>
            <p>{item.created_at.slice(0,10)}</p>
          </div>
          </div>
          <div className='green_block'>
            <button className='star-1' onClick={()=> setStart(!stars)}><span className={`star-2 ${stars ? 'star4' : ''}`}></span>{stars ? 'Starred' : 'Stars'}</button>
              <div className='green_line'></div>
          </div>
          </div>
          <div className='repos_line-down'></div>
        </li>
  )
}
