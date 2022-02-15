import React from "react";
import "./SideNav.css";
import { Link, useLocation } from "react-router-dom";

function SideNav() {
  const slug = useLocation();

  return (
    <div className="SideNav">
      <Link
        to="/habits"
        className={`SideNav-list-items ${
          slug.pathname === "/habits" && "SideNav-list-items--active"
        }`}
      >
        Habit
      </Link>
      <Link
        to="/accomplishments"
        className={`SideNav-list-items ${
          slug.pathname === "/accomplishments" && "SideNav-list-items--active"
        }`}
      >
        Accomplishments
      </Link>
      <Link
        to="/rewards"
        className={`SideNav-list-items ${
          slug.pathname === "/rewards" && "SideNav-list-items--active"
        }`}
      >
        Rewards
      </Link>
      <Link
        to="/query"
        className={`SideNav-list-items ${
          slug.pathname === "/query" && "SideNav-list-items--active"
        }`}
      >
        Query
      </Link>
      <Link
        to="/query/hydration"
        className={`SideNav-list-items ${
          slug.pathname === "/query" && "SideNav-list-items--active"
        }`}
      >
        Hydration
      </Link>
    </div>
  );
}

export default SideNav;
