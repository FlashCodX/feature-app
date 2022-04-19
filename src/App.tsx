import styles from "./styles/App.module.css";

const karma = require("./assets/icon-karma.svg").default;
const supervisor = require("./assets/icon-supervisor.svg").default;
const team = require("./assets/icon-team-builder.svg").default;
const calculator = require("./assets/icon-calculator.svg").default;

export const App = () => {
  const { container, cardContainer, article, middleCards, attribution } =
    styles;
  return (
    <>
      <main className={container}>
        <p>Reliable, efficient delivery</p>
        <h1>Powered by Technology</h1>
        <p>
          {" "}
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
        <div className={cardContainer}>
          <article className={article}>
            <h1> Supervisor</h1>
            <p> Monitors activity to identify project roadblocks</p>
            <img src={supervisor} alt="karma" />
          </article>
          <div className={middleCards}>
            <article className={article}>
              <h1> Team Builder</h1>
              <p>
                {" "}
                Scans our talent network to create the optimal team for your
                project
              </p>
              <img src={team} alt="karma" />
            </article>
            <article className={article}>
              <h1> Karma</h1>
              <p> Regularly evaluates our talent to ensure quality</p>
              <img src={karma} alt="karma" />
            </article>
          </div>
          <article className={article}>
            <h1>Calculator</h1>
            <p>
              Uses data from past projects to provide better delivery estimates
            </p>
            <img src={calculator} alt="karma" />
          </article>
        </div>
      </main>
      <footer>
        <p className={attribution}>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.linkedin.com/in/luispintodev"
            target="_blank"
            rel="noreferrer"
          >
            Luís Pinto
          </a>
          .
        </p>
      </footer>
    </>
  );
};
