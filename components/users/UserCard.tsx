import React from 'react';

interface UserCardProps {
  name: string;
  username: string;
  email: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, username, email }) => (
  <div className="p-4 border rounded-lg bg-gray-100">
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-sm">Username: {username}</p>
    <p className="text-sm">Email: {email}</p>
  </div>
);

export default UserCard;
