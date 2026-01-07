import React from "react";
import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";

export default function Header({ toggleTheme }) {
  return (
    <header className="header">
      <h1>Business Website</h1>
      <Navigation />
      <ThemeToggle toggleTheme={toggleTheme} />
    </header>
  );
}
