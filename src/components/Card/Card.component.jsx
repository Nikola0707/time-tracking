import { ReactComponent as Work } from "../../assets/icon-work.svg";
import { ReactComponent as Play } from "../../assets/icon-play.svg";
import { ReactComponent as Study } from "../../assets/icon-study.svg";
import { ReactComponent as Exercise } from "../../assets/icon-exercise.svg";
import { ReactComponent as Social } from "../../assets/icon-social.svg";
import { ReactComponent as Selfcare } from "../../assets/icon-self-care.svg";

const Card = ({
  title,
  dailyCurrent,
  dailyPrevious,
  weeklyCurrent,
  weeklyPrevious,
  montlyCurrent,
  montlyPrevious,
}) => {
  return (
    <div className="card-container">
      <div className="top">
        {title === "Work" ? <Work /> : ""}
        {title === "Play" ? <Play /> : ""}
        {title === "Study" ? <Study /> : ""}
        {title === "Exercise" ? <Exercise /> : ""}
        {title === "Social" ? <Social /> : ""}
        {title === "Selfcare" ? <Selfcare /> : ""}
      </div>
      <div className="details">
        <div className="details-title">
          <p>{title}</p>
          <p>---</p>
        </div>
        <p className="hours">{dailyCurrent}hrs</p>
        <p className="last">Last Week - {dailyPrevious}hrs</p>
      </div>
    </div>
  );
};

export default Card;
