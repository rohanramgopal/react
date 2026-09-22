import UserCard from "./UserCard";
import "./App.css";

function App() {

    const user1 = {
        name: "Rohan",
        city: "Bengaluru",
        age: 23,
        email: "rohan@gmail.com",
        phone: "9876543210"
    };

    const user2 = {
        name: "Tushar",
        city: "Bengaluru",
        age: 24,
        email: "tushar@gmail.com",
        phone: "9876543211"
    };

    const user3 = {
        name: "Sujan",
        city: "Bengaluru",
        age: 22,
        email: "sujan@gmail.com",
        phone: "9876543212"
    };

    const user4 = {
        name: "Rahul",
        city: "Chennai",
        age: 25,
        email: "rahul@gmail.com",
        phone: "9876543213"
    };

    const user5 = {
        name: "Sudhakaran",
        city: "Mumbai",
        age: 23,
        email: "sudhakaran@gmail.com",
        phone: "9876543214"
    };

    return (
        <div className="app">

            <div className="heading">
                <h1>User Profiles</h1>
    
            </div>

            <div className="user-container">

                <UserCard
                    name={user1.name}
                    city={user1.city}
                    age={user1.age}
                    email={user1.email}
                    phone={user1.phone}
                />

                <UserCard
                    name={user2.name}
                    city={user2.city}
                    age={user2.age}
                    email={user2.email}
                    phone={user2.phone}
                />

                <UserCard
                    name={user3.name}
                    city={user3.city}
                    age={user3.age}
                    email={user3.email}
                    phone={user3.phone}
                />

                <UserCard
                    name={user4.name}
                    city={user4.city}
                    age={user4.age}
                    email={user4.email}
                    phone={user4.phone}
                />

                <UserCard
                    name={user5.name}
                    city={user5.city}
                    age={user5.age}
                    email={user5.email}
                    phone={user5.phone}
                />

            </div>

        </div>
    );
}

export default App;