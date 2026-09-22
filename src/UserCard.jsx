function UserCard(props) {

    return (
        <div className="user-card">

            <div className="user-header">
                <div className="user-image">
                    {props.name.charAt(0)}
                </div>

                <h2>{props.name}</h2>
                <p>{props.city}</p>
            </div>

            <div className="user-details">

                <div className="detail">
                    <span>Age</span>
                    <p>{props.age} years</p>
                </div>

                <div className="detail">
                    <span>Email</span>
                    <p>{props.email}</p>
                </div>

                <div className="detail">
                    <span>Phone</span>
                    <p>{props.phone}</p>
                </div>

                <div className="detail">
                    <span>City</span>
                    <p>{props.city}</p>
                </div>

            </div>

        </div>
    );
}

export default UserCard;