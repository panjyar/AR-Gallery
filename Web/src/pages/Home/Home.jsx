import "./Home.scss";
import { FeedCard } from "../../Components";
import Acitivity from "./../../assets/Activity.svg";
import logo from "./../../assets/logo.svg";

const datas = [
  {
    id: 1,
    name: "Rouf Ahmed",
    semester: "8th semester, 4th year",

    image: "3d model",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1683887064255-1c428d0b3934?q=80&w=1486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileUrl: "#",
    profileImage:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Rouf Ahmed",
    semester: "8th semester, 4th year",

    image: "3d model",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1683887064255-1c428d0b3934?q=80&w=1486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileUrl: "#",
    profileImage:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Rouf Ahmed",
    semester: "8th semester, 4th year",

    image: "3d model",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1683887064255-1c428d0b3934?q=80&w=1486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileUrl: "#",
    profileImage:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Rouf Ahmed",
    semester: "8th semester, 4th year",

    image: "3d model",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1683887064255-1c428d0b3934?q=80&w=1486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileUrl: "#",
    profileImage:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Home = () => {
  return (
    <div className="app__home">
      <div className="app__home-container">
        <div className="app__home-header">
          <div className="app__home-logo">
            <img src={logo} alt="" />
          </div>
          <div className="app__home-activity">
            <img src={Acitivity} alt="" />
          </div>
        </div>
        {datas.map((user) => (
          <FeedCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export default Home;
