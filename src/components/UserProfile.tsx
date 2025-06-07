import React from "react";

interface UserProfileProps {
  name: string;
  age: number;
  location: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, age, location }) => {
  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "4px solid #cccccc",
    borderRadius: "12px",
    padding: "16px",
  },
};

export default UserProfile;
