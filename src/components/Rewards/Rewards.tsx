import React, { useEffect, useState } from "react";
import "./Rewards.css";
import axios from "axios";
import {
  QueryCache,
  QueryClient,
  useQueries,
  useQuery,
  useIsFetching,
} from "react-query";
import { useErrorHandler } from "react-error-boundary";

function Rewards() {
  const queryCache = new QueryCache({
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
  const handleError = useErrorHandler();
  const [rewards, setReward] = useState<
    {
      id: number;
      reward: string;
      month: string;
    }[]
  >([]);

  const [filteredRewards, setFilteredRewards] = useState(rewards);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    let updatedFilterRewards = rewards.filter((reward) => {
      if (filter === "All") return true;
      return reward.month === filter;
    });
    setFilteredRewards(updatedFilterRewards);
  }, [filter, rewards]);

  useEffect(() => {
    fetchRewards();
  }, []);

  const fetchRewards = async () => {
    try {
      const response = await axios.get("http://localhost:4000/rewards");
      setReward(response.data);
    } catch (error) {
      handleError(error);
    }
  };
  const query = queryCache.find("rewards");
  const isF = useIsFetching(["cars"]);
  console.log(isF);
  return (
    <div className="Rewards">
      <div className="Rewards__heading-container">
        <h2 className="Rewards-header">Rewards</h2>
      </div>
      <div className="Rewards-cards-container">
        <select
          className="Rewards-dropdown"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>January</option>
          <option>Feburary</option>
          <option>March</option>
        </select>
      </div>
      <ul className="Rewards-cards-container">
        {filteredRewards.map((reward) => {
          return (
            <li key={Math.random()} className="Rewards-cards-list">
              {reward.reward}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Rewards;
