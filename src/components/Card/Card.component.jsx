
import { ReactComponent as Work } from '../../assets/icon-work.svg'

const Card = () => {
    return(
        <div className="card-container">
            <div className="top">
                <Work />
            </div>
            <div className="details">
                <div className="details-title">
                    <p>Work</p>
                    <p>---</p>
                </div>
                <p className="hours">32hrs</p>
                <p className="last">Last Week - 36hrs</p>
            </div>
        </div>
    )
}

export default Card;