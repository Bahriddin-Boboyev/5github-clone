import React from "react";
import './follow.scss'
import { FollowersCom } from "./followers-com";

export const Followers = () => {
  const [data,setData] = React.useState([])
  

  React.useEffect(() => {
    fetch("https://api.github.com/users/Bahriddin-Boboyev/followers")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
  
    <div className="followers_block">
      <div className="followers_list">
        {
          data?.map((item)=>(
              <FollowersCom item={item} key={item.login}/>
           ))
          }
      </div>
    </div>
  );
};
