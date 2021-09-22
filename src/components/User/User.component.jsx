import userImg from "../../assets/image-jeremy.png";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { setDaily, setWeekly, setMontly } from "../../redux/type/typeSlice";

const User = () => {
  // Redux
  const { isDaily, isWeekly, isMontly } = useSelector((state) => state.type);
  const dispatch = useDispatch();

  return (
    <div className="user-container">
      <div className="about">
        <div>
          <img src={userImg} alt="user-img" />
        </div>
        <div>
          <p className="report-for">Report for</p>
          <p className="user-name">Jeremy Robson</p>
        </div>
      </div>
      <div className="choose">
        <ul>
          <li
            id="daily"
            onClick={() => dispatch(setDaily())}
            className={isDaily ? "active" : ""}
          >
            Daily
          </li>
          <li
            id="weekly"
            onClick={() => dispatch(setWeekly())}
            className={isWeekly ? "active" : ""}
          >
            Weekly
          </li>
          <li
            id="monthly"
            onClick={() => dispatch(setMontly())}
            className={isMontly ? "active" : ""}
          >
            Monthly
          </li>
        </ul>
      </div>
    </div>
  );
};

export default User;
