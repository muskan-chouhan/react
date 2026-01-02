import { Plus, BadgeCheck, User, CircleCheck } from "lucide-react";
const Profile = (props) => {
    return(
            <div>

      <div className="card">

        {/* TOP */}
        <div className="top">
          <img src={props.img} alt="profile" />
        </div>

        {/* MIDDLE */}
        <div className="middle">
          <h2>
          {props.name}
          {props.verified && (
            <span className="verified">
              <BadgeCheck />
            </span>
            )}
          </h2>
          <p>{props.para}</p>
        </div>

        {/* BOTTOM */}
        <div className="bottom">

          <div className="stat">
            <User />
            <span>{props.followers}</span>
          </div>

          <div className="stat">
            <CircleCheck />
            <span>{props.project}</span>
          </div>

          <button className="follow-btn">
            Follow
            <Plus />
          </button>

        </div>

      </div>
</div>

    )
}

export default Profile