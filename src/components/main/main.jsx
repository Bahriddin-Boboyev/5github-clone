import React from "react";
import { RepositoriesCard } from "./pages/repositories-card";

export const Main = () => {
  return (
      
    <div className="main container-main">
      <div className="main__box">
        <div className="readme">
          <p>Bahriddin-Boboyev/README.md</p>
          <div>
            <h3>
              <a href="https://git.io/typing-svg">
                <img
                  src="https://readme-typing-svg.herokuapp.com?font=Consolas&pause=800&width=435&lines=Hey+there!;I'm+a+Frontend+Developer;I'm+a+JavaScript+Developer;I'm+a+React+JS+Developer"
                  alt="Typing SVG"
                />
              </a>
            </h3>
          </div>
          <div className="main_info">
            <p>- 🌱 I’m currently learning everything about web development.</p>
            <p>- ⚡ Fun fact: I love to code and listen to music.</p>
            <p>
              - 🥅 2023 Goals: Learn more about <b>ReactJS</b>, <b>NextJs</b>{" "}
              and <b>JavaScript</b>.
            </p>
          </div>
        </div>
      </div>

      <RepositoriesCard />
    </div>
  );
};
