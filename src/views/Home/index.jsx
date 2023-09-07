import React from "react";
import Welcome from "./Welcome";
import LatestCollections from "./LatestCollections";
import NewCollections from "./NewCollections";

const Home = () => {
  return (
    <>
      <Welcome />
      <LatestCollections />
      <NewCollections />
    </>
  );
};

export default Home;
