import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="mlb-baseball/giants-at-braves-tickets/7-2-2024-atlanta-ga-truist-park/events/64c29b40af2957000170db09">
            Giants at Braves
          </Link>
        </li>
        <li>
          <Link to="mlb-baseball/giants-at-braves-tickets/7-2-2024-atlanta-ga-truist-park/events/64c29b40af2957000170db09/listings/65552b94ac89b681e64cafd7?zoom=10">
            Giants at Braves Listing Details
          </Link>
        </li>
        <li>
          <Link to="/mlb-tickets">Mlb Tickets</Link>
        </li>
        <li>
          <Link to="/blue-man-group-tickets">Blue Man Group Tickets</Link>
        </li>
      </ul>
    </header>
  );
}
