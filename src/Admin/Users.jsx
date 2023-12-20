import React from "react";

const Users = () => {
  const UserCard = () => (
    <div className="w-full h-fit outline flex flex-col gap-4 p-2 outline-slate-300 rounded-xl shadow-xl ">
      <div>
        <p>User Email: </p>
        <p>Name: </p>
      </div>
      <button className="p-1 bg-red-500 text-white font-semibold rounded-xl">
        Delete
      </button>
    </div>
  );
  return (
    <div className="pl-40 pr-40 pt-8 flex flex-col gap-6">
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
};

export default Users;