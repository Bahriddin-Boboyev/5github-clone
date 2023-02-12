import React from "react";
import UniqueStar from "./uniqueStar";

export const Star = ({value}) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    fetch("https://api.github.com/users/Bahriddin-Boboyev/starred")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false)
      });
  }, []);

  const filterData = data.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <ul className="allRepos_list">

      {
        loading ? <div className="relative"><div className="lds-dual-ring"></div></div>
        : filterData.length ?  filterData?.map((item) => (
          <UniqueStar key={item.name} item={item} />
        )) 
        : 
        <h3 className="star-not_found">That’s it. You’ve reached the end of your stars.</h3>

      }
      
        
      
     
    </ul>
  );
};
