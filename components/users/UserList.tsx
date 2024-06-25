"use client";
import React from "react";
import UserCard from "./UserCard";

const UserList: React.FC<UserListProps> = ({ users }) => {
  console.log(users); 
  return (
    //user card
    <div className="grid gap-4 w-full grid-cols-1 duration-300 sm:grid-cols-2 lg:grid-cols-3">
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
