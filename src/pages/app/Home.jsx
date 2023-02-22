import React from "react";
import { Link } from "react-router-dom";
import MyProjects from "../../components/app/MyProjects";
import styles from "../../styles/pages/home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__sidebar}>
        <Link to="new-project">Create Project</Link>
      </div>

      <div className={styles.home__myprojects}>
        <MyProjects />
      </div>
    </div>
  );
};

export default Home;
