import React, { useMemo } from "react";
const data = [
  { _id: 1, name: "User 1", role: "user" },
  { _id: 2, name: "Admin 1", role: "admin" },
  { _id: 3, name: "User 3", role: "user" },
];

const User = () => {
  const useroptions = useMemo(() => {
    let result = [];
    data.forEach((user) => {
      if (user.role === "admin") {
        result.push({
          id: user._id,
          label: user.name,
        });
      }
    });
    return result;
  }, [data]);

  return (
    <div>
      {useroptions.map((user) => {
        return (
          <div>
            <p>{user.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default User;
