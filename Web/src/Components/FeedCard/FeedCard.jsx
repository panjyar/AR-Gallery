import { TiBookmark } from "react-icons/ti";
import { LuSend } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
import "./FeedCard.scss";

const FeedCard = ({
  name,
  semester,
  image,
  imageUrl,
  profileUrl,
  profileImage,
}) => {
  console.log(name, semester, image, imageUrl, profileUrl, profileImage);
  return (
    <div className="app__feedcard">
      <div className="app__feedcard-container">
        <div className="app__feedcard-profile">
          <img src={profileImage} alt="" className="box-shadow" />
        </div>
        <div className="app__feedcard-Userinfo ">
          <div className="app__feedcard-icon">
            <div>
              <TiBookmark />
            </div>
            <div>
              <LuSend />
            </div>
          </div>
          <p>{name}</p>
          <p>{semester}</p>
        </div>
        <div className="app__feedcard-image">
          <img src={imageUrl} alt="" />
        </div>
        <div className="app__feedcard-imageInfo">
          <p>{image}</p>
        </div>
        <div className="app__feedcard-actions">
          <div className="app__feedcard-icon">
            <div style={{ backgroundColor: "#be173f" }}>
              <CiHeart style={{ color: "#ffff" }} />
            </div>
            <div style={{ backgroundColor: "#56b7bd" }}>
              <FaRegCommentDots style={{ color: "#ffff" }} />
            </div>
          </div>
          <div className="app__feedcard-btn">
            <button>View Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
