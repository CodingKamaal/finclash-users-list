// components/users/UserList.tsx

import React from "react";
import UserCard from "./UserCard";

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    //user card
    <div className="grid gap-4 w-full sm:grid-cols-1 duration-300 md:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          username={user.username}
          email={user.email}
        />
      ))}
    </div>
  );
};

export default UserList;
