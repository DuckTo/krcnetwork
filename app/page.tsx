import Image from "next/image";
import styles from "./page.module.css";
import AppBar from "./components/Appbar";
import Content from "./components/content";
import SeasonMission from "./components/season-mission";

export default function Home() {
  return (
    <div className="home">
      <img
        className="main-image"
        src={"/main.jpg"}
        alt="krc-network main imgae"
      />
      <Content/>
      <SeasonMission/>
    </div>
  );
}
