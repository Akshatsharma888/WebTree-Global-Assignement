import  { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        const data = await response.json();
        setUser(data.results[0]);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      {user ? <Card user={user} /> : <p>Loading...</p>}
    </div>
  );
};

export default App;
