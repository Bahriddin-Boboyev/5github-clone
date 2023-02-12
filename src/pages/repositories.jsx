import React from "react";
import "./pageStyle.scss";
import { AllRepos } from "./repos/all-repos";
import select from "../img/select.svg";




export const Repositories = () => {

  const [dropdown, setDropdown] = React.useState(false);
  const [dropdown2, setDropdown2] = React.useState(false);
  const [dropdown3, setDropdown3] = React.useState(false);
  const [check, setCheck] = React.useState("All");
  const [langCheck, setLangCheck] = React.useState("All");
  const [sportCheck, setSportCheck] = React.useState("Last updated");
  const [value, setValue] = React.useState('')

  let menuRef = React.useRef(null);
  let menuRef2 = React.useRef(null);
  let menuRef3 = React.useRef(null);
  React.useEffect(() => {
    let handler = (e) => {
      if (menuRef.current) {
        if (!menuRef.current.contains(e.target)) {
          setDropdown(false);
        }
      }
    };
    document.addEventListener("mousedown", handler);
  });
  React.useEffect(() => {
    let handler = (e) => {
      if (menuRef2.current) {
        if (!menuRef2.current.contains(e.target)) {
          setDropdown2(false);
        }
      }
    };
    document.addEventListener("mousedown", handler);
  });
  React.useEffect(() => {
    let handler = (e) => {
      if (menuRef3.current) {
        if (!menuRef3.current.contains(e.target)) {
          setDropdown3(false);
        }
      }
    };
    document.addEventListener("mousedown", handler);
  });




  return (
    <div className="repos-page">
      <div className="repos-page_box d_flex">
        <form className="reposInput_box">
          <input onChange={(event) => setValue(event.target.value)} type="text" placeholder="Find a repository..." />
        </form>
        <div className="repos-sideBar d_flex">
          <div ref={menuRef} className="type_block" onClick={() => setDropdown(!dropdown)}>
            <button className="type btnhover">Type</button>
            <ul className={`type_plus none ${dropdown ? "block" : ""}`}>
              <li className="type_item no_select">
                <h4 className="title_type">Select Type</h4>
                <div></div>
              </li>
              <li className="type_item" onClick={() => setCheck("All")}>
                <p>
                  {" "}
                  <img
                    className={`select ${
                      check === "All" ? "opacity_noactive" : "opacity_active"
                    }`}
                    src={select}
                    alt="img"
                  />{" "}
                  All
                </p>
                <div></div>
              </li>
              <li className="type_item" onClick={() => setCheck("Public")}>
                <p>
                  <img
                    className={`select ${
                      check === "Public" ? "opacity_noactive" : "opacity_active"
                    }`}
                    src={select}
                    alt="img"
                  />{" "}
                  Public
                </p>
                <div></div>
              </li>
              <li className="type_item" onClick={() => setCheck("Private")}>
                <p>
                  <img
                    className={`select ${
                      check === "Private"
                        ? "opacity_noactive"
                        : "opacity_active"
                    }`}
                    src={select}
                    alt="img"
                  />{" "}
                  Private
                </p>
                <div></div>
              </li>
              <li className="type_item" onClick={() => setCheck("Sources")}>
                <p>
                  <img
                    className={`select ${
                      check === "Sources"
                        ? "opacity_noactive"
                        : "opacity_active"
                    }`}
                    src={select}
                    alt="img"
                  />{" "}
                  Sources
                </p>
                <div></div>
              </li>
              <li className="type_item" onClick={() => setCheck("Forks")}>
                <p>
                  <img
                    className={`select ${
                      check === "Forks" ? "opacity_noactive" : "opacity_active"
                    }`}
                    src={select}
                    alt="img"
                  />{" "}
                  Forks
                </p>
                <div></div>
              </li>
              <li className="type_item" onClick={() => setCheck("Archived")}>
                <p>
                  <img
                    className={`select ${
                      check === "Archived"
                        ? "opacity_noactive"
                        : "opacity_active"
                    }`}
                    src={select}
                    alt="img"
                  />{" "}
                  Archived
                </p>
                <div></div>
              </li>
              <li className="type_item" onClick={() => setCheck("Mirrors")}>
                <p>
                  <img
                    className={`select ${
                      check === "Mirrors"
                        ? "opacity_noactive"
                        : "opacity_active"
                    }`}
                    src={select}
                    alt="img"
                  />{" "}
                  Mirrors
                </p>
                <div></div>
              </li>
              <li className="type_item" onClick={() => setCheck("Templates")}>
                <p>
                  <img
                    className={`select ${
                      check === "Templates"
                        ? "opacity_noactive"
                        : "opacity_active"
                    }`}
                    src={select}
                    alt="img"
                  />{" "}
                  Templates
                </p>
                <div></div>
              </li>
            </ul>
          </div>
          <div
            ref={menuRef2}
            className="language_block"
            onClick={() => setDropdown2(!dropdown2)}
          >
            <button className="language btnhover">Language</button>
            <ul className={`language_plus none ${dropdown2 ? "block" : ""}`}>
              <li className="language_item no_select">
                <h4 className="title_type">Select language</h4>
                <div></div>
              </li>
              <li className="language_item" onClick={() => setLangCheck("All")}>
                <p>
                  {" "}
                  <img
                    className={`select ${
                      langCheck === "All"
                        ? "opacity_noactive"
                        : "opacity_active"
                    }`}
                    src={select}
                    alt="img"
                  />{" "}
                  All
                </p>
                <div></div>
              </li>
              <li
                className="language_item"
                onClick={() => setLangCheck("JavaScript")}
              >
                <p>
                  <img
                    className={`select ${
                      langCheck === "JavaScript"
                        ? "opacity_noactive"
                        : "opacity_active"
                    }`}
                    src={select}
                    alt="img"
                  />{" "}
                  JavaScript
                </p>
                <div></div>
              </li>
              <li
                className="language_item"
                onClick={() => setLangCheck("HTML")}
              >
                <p>
                  <img
                    className={`select ${
                      langCheck === "HTML"
                        ? "opacity_noactive"
                        : "opacity_active"
                    }`}
                    src={select}
                    alt="img"
                  />{" "}
                  HTML
                </p>
                <div></div>
              </li>
              <li className="language_item" onClick={() => setLangCheck("CSS")}>
                <p>
                  <img
                    className={`select ${
                      langCheck === "CSS"
                        ? "opacity_noactive"
                        : "opacity_active"
                    }`}
                    src={select}
                    alt="img"
                  />{" "}
                  CSS
                </p>
                <div></div>
              </li>
              <li
                className="language_item"
                onClick={() => setLangCheck("SCSS")}
              >
                <p>
                  <img
                    className={`select ${
                      langCheck === "SCSS"
                        ? "opacity_noactive"
                        : "opacity_active"
                    }`}
                    src={select}
                    alt="img"
                  />{" "}
                  SCSS
                </p>
                <div></div>
              </li>
            </ul>
          </div>
          <div
            className="sport_block"
            ref={menuRef3}
            onClick={() => setDropdown3(!dropdown3)}
          >
            <button className="sport btnhover">Sport</button>
            <ul className={`sport_plus none ${dropdown3 ? "block" : ""}`}>
              <li className="sport_item no_select">
                <h4 className="title_type">Select order</h4>
                <div></div>
              </li>
              <li
                className="sport_item"
                onClick={() => setSportCheck("Last updated")}
              >
                <p>
                  <img
                    className={`select ${
                      sportCheck === "Last updated"
                        ? "opacity_noactive"
                        : "opacity_active"
                    }`}
                    src={select}
                    alt="img"
                  />{" "}
                  Last updated
                </p>
                <div></div>
              </li>
              <li className="sport_item" onClick={() => setSportCheck("Name")}>
                <p>
                  <img
                    className={`select ${
                      sportCheck === "Name"
                        ? "opacity_noactive"
                        : "opacity_active"
                    }`}
                    src={select}
                    alt="img"
                  />
                  Name
                </p>
                <div></div>
              </li>
              <li className="sport_item" onClick={() => setSportCheck("Stars")}>
                <p>
                  <img
                    className={`select ${
                      sportCheck === "Stars"
                        ? "opacity_noactive"
                        : "opacity_active"
                    }`}
                    src={select}
                    alt="img"
                  />
                  Stars
                </p>
                <div></div>
              </li>
            </ul>
          </div>
          <div>
            <button className="new btnhover">New</button>
          </div>
        </div>
      </div>
      <div>
        <AllRepos value={value} />
      </div>
    </div>
  );
};
