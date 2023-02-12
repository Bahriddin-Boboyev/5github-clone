import React from 'react'
import './follow.scss'
import { FollowingCom } from './following-com';

export const Following = () => {
  

  const [data,setData] = React.useState([])

  React.useEffect(() => {
    fetch("https://api.github.com/users/Bahriddin-Boboyev/following")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (

    <div className="followers_block">
    <div className="followers_list">
      {
        data?.map((item)=> (
          <FollowingCom item={item} key={item.login}/>
     
        ))
      }
    </div>
  </div>
  )
}
