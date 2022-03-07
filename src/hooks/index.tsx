import React, { createContext, useContext, useState } from "react";
const initialState = {
  first: "Jodi",
  last: "Alba",
};
const UserContext = createContext<typeof initialState>(initialState);
type UserState = typeof initialState;
const ConsumerComponent = () => {
  const { first, last } = useContext<UserState>(UserContext);
  return (
    <div>
      <div>First: {first}</div>
      <div>Last: {last}</div>
    </div>
  );
};
const useLocalHooks = () => {
  const useDebounce = () => {
    return "Hello";
  };
  const useContextComponent = () => {
    const [user, userSet] = useState<UserState>({
      first: "Peter",
      last: "Parker",
    });
    return (
      <UserContext.Provider value={user}>
        <ConsumerComponent />
        <button
          onClick={() => {
            userSet({ first: "Jos", last: "The Explore" });
          }}
        >
          Change Context
        </button>
      </UserContext.Provider>
    );
  };
  return { useDebounce, useContextComponent };
};

export default useLocalHooks;
