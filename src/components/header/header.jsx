import React from "react";
import "./header.scss";
import notice from "../../img/notice.svg";
import plus_down from "../../img/plus-down.svg";
import down from "../../img/down.svg";
import { Link } from "react-router-dom";


export const Header = () => {
  const [fixed, setFixed] = React.useState(false);
  const [fixed2, setFixed2] = React.useState(false);
  const [value, setValue] = React.useState(1);
  const [dropdown, setDropdown] = React.useState(false);
  const [dropdown2, setDropdown2] = React.useState(false);
  let menuRef = React.useRef(null);
  let menuRef2 = React.useRef(null);
  const [data, setData] = React.useState([]);
  const [reposdata, setReposData] = React.useState([]);
  const [stardata, setStarData] = React.useState([]);
  const [search, setSearch] = React.useState('')
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    });
  });
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setFixed2(true);
      } else {
        setFixed2(false);
      }
    });
  });

  React.useEffect(() => {
    let handler = (e) => {
      if(menuRef.current){
        if (!menuRef.current.contains(e.target)){
          setDropdown(false);
        } 
      }
    };
    document.addEventListener("mousedown", handler);
  });
  React.useEffect(() => {
    let handler = (e) => {
      if(menuRef2.current){
        if (!menuRef2.current.contains(e.target)){
          setDropdown2(false);
        }
      }
    };
    document.addEventListener("mousedown", handler);
  });

  React.useEffect(() => {
    fetch("https://api.github.com/users/bahriddin-boboyev")
      .then((res) => res.json())
      .then((data) => {
        setData([data]);
      });
  }, []);

  React.useEffect(() => {
    fetch("https://api.github.com/users/Bahriddin-Boboyev/repos")
      .then((res) => res.json())
      .then((data) => {
        setReposData(data);
      });
  }, []);
  React.useEffect(() => {
    fetch("https://api.github.com/users/Bahriddin-Boboyev/starred")
      .then((res) => res.json())
      .then((data) => {
        setStarData(data);
      });
  }, []);

  const submit = (item)=>{
    item.preventDefault()
    window.open(`https://github.com/${search}`)
  }

  return (

    <div className="header">
      {data.map((item) => (
        <nav key={item.login} className="nav1">
          <div className="header_bg">
            <div className="header_block d_flex container">
              <div className="d_flex">
                <div className="header_img-block">
                  <Link to={"/"}>
                    <svg
                      height="32"
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="32"
                      data-view-component="true"
                    >
                      <path
                        fill="#fff"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                      ></path>
                    </svg>
                  </Link>
                </div>

                <form onSubmit={(e)=> submit(e)} >
                  <input onChange={(e)=> setSearch(e.target.value)} type="search" placeholder="Search or jump to..." />
                </form>
                <ul className="header_list d_flex">
                  <li className="header_item">
                    <Link to={"https://github.com/pulls"}>
                      <p>Pull requests</p>
                    </Link>
                  </li>
                  <li className="header_item">
                    <Link to={"https://github.com/issues"}>
                      <p>Issues</p>
                    </Link>
                  </li>
                  <li className="header_item">
                    <Link to={"https://github.com/codespaces"}>
                      <p>Codespaces</p>
                    </Link>
                  </li>
                  <li className="header_item">
                    <Link to={"https://github.com/marketplace"}>
                      <p>Marketplace</p>
                    </Link>
                  </li>
                  <li className="header_item">
                    <Link to={"https://github.com/explore"}>
                      <p>Explore</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="d-flex">
                <div
                  ref={menuRef2}
                  className="plus_item d-flex"
                  onClick={() => setDropdown2(!dropdown2)}
                >
                  <button className="header_notice_block">
                    <img src={notice} alt="img" />
                  </button>
                  <button className="plus_down_img-block">
                    <img src={plus_down} alt="img" />
                  </button>
                  <ul
                    className={`header_dropdown_plus none ${
                      dropdown2 ? "block" : ""
                    }`}
                  >
                    <li className="header_dropdown_item_plus">
                      <Link to={"https://github.com/new"}>
                        {" "}
                        <p>New repository</p>
                      </Link>
                    </li>
                    <li className="header_dropdown_item_plus">
                      <Link to={"https://github.com/new/import"}>
                        {" "}
                        <p>Import repository</p>
                      </Link>
                    </li>
                    <li className="header_dropdown_item_plus">
                      <Link to={"https://github.com/codespaces/new"}>
                        {" "}
                        <p>New codespace</p>
                      </Link>
                    </li>
                    <li className="header_dropdown_item_plus">
                      <Link to={"https://gist.github.com/"}>
                        <p>New gits</p>
                      </Link>
                    </li>
                    <li className="header_dropdown_item_plus">
                      <Link to={"https://github.com/organizations/plan"}>
                        <p>New organization</p>
                      </Link>
                    </li>
                    <li className="header_dropdown_item_plus">
                      <Link
                        to={
                          "https://github.com/users/Bahriddin-Boboyev/projects/2/views/1"
                        }
                      >
                        {" "}
                        <p>New project</p>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div
                  ref={menuRef}
                  className="header-img-block2 d_flex"
                  onClick={() => setDropdown(!dropdown)}
                >
                  <img src={item.avatar_url} alt="img" />
                  <div>
                    <img className="down_img" src={down} alt="img" />
                  </div>
                  <ul
                    className={`header_dropdown_list none ${
                      dropdown ? "block" : ""
                    }`}
                  >
                    <li className="header_dropdown_item">
                      <Link to={'https://github.com/Bahriddin-Boboyev'}><p>Your profile</p></Link>
                      <div></div>
                    </li>
                    <li className="header_dropdown_item">
                      <Link to={'https://github.com/Bahriddin-Boboyev?tab=projects'}>
                      <p>Your projects</p>
                      </Link>
                      <div></div>
                    </li>
                    <li className="header_dropdown_item">
                      <Link to={'https://github.com/Bahriddin-Boboyev?tab=stars'}>
                      <p>Your Stars</p>
                      </Link>
                      <div></div>
                    </li>
                    <li className="header_dropdown_item">
                      <Link to={'https://docs.github.com/en'}>
                      <p>Help</p>
                      </Link>
                      <div></div>
                    </li>
                    <li className="header_dropdown_item">
                      <Link to={'https://github.com/settings/profile'}>
                      <p>Settings</p>
                      </Link>
                      <div></div>
                    </li>
                    <li className="header_dropdown_item">
                      <Link to={'https://github.com/users/113900960'}>
                      <p>Sign out</p>
                      </Link>
                      <div></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={`header_bg-down ${fixed ? "fixed" : ""}`}>
            <ul className="header_list-down d_flex">
              <li>
                <div className="fixed_img_block">
                  <img
                    className={`none ${fixed2 ? "block" : ""}`}
                    src={item.avatar_url}
                    alt="img"
                  />
                  <h3 className={`none ${fixed2 ? "block" : ""}`}>
                    {item.login}
                  </h3>
                </div>
              </li>
              <li className="header_item-down">
                <Link className="item1" to={"/"} onClick={() => setValue(1)}>
                  Overview
                </Link>
                {value === 1 ? <div className="box1"></div> : ""}
              </li>
              <li className="header_item-down">
                <Link
                  className="item2"
                  to={"/repositories"}
                  onClick={() => setValue(2)}
                >
                  Repositories{" "}
                  <span className="reposCount">{reposdata.length}</span>
                </Link>
                {value === 2 ? <div className="box2"></div> : ""}
              </li>
              <li className="header_item-down">
                <Link className="item3">Projects</Link>
                <div></div>
              </li>

              <li className="header_item-down">
                <Link className="item4">Packages</Link>
                <div></div>
              </li>
              <li className="header_item-down">
                <Link
                  to={"/stars"}
                  className="item5"
                  onClick={() => setValue(5)}
                >
                  Stars <span className="starCount">{stardata.length}</span>
                </Link>
                {value === 5 ? <div className="box3"></div> : ""}
              </li>
            </ul>
          </div>
          <div className="line"></div>
        </nav>
      ))}
    </div>
  );
};
