// redux
import { useSelector } from "react-redux";

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
  // Redux State
  const { isDaily, isWeekly, isMontly } = useSelector((state) => state.type);

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
        <p className="hours">
          {isDaily ? dailyCurrent : ""}
          {isWeekly ? weeklyCurrent : ""}
          {isMontly ? montlyCurrent : ""}
          hrs
        </p>
        <p className="last">
          {isDaily ? `Yesterday - ${dailyPrevious}hrs` : ""}
          {isWeekly ? `Last Week- ${weeklyPrevious}hrs` : ""}
          {isMontly ? `LastMonth - ${montlyPrevious}hrs` : ""}
        </p>
      </div>
    </div>
  );
};

export default Card;
