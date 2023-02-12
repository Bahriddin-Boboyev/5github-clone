import React from 'react'
import { Link } from 'react-router-dom'

export const FollowersCom = ({item}) => {
  const [click, setClick] = React.useState(false)
  return (
  
    <div className="followers_item">
    <div className="followers_line"></div>
    <div className="d_flex height_fl">
      <div className="d_flex">
        <div className="followers_img_block">
          <img src={item.avatar_url} alt="img" />
        </div>
        <div className="d-flex followers_title-block">
        <Link to={item.html_url}><p className="followers_title">{item.login}</p></Link>
        </div>
      </div>
      <button className="unfollow btnhover" onClick={()=> setClick(!click)}>{click ? 'Follow' : 'Unfollow'}</button>
    </div>

  </div>
  )
}
