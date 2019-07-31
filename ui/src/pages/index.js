import React from "react";

import AlbumList from "../components/AlbumList";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <h1>Albums</h1>
      <AlbumList />

      <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }} />
    </Layout>
  );
  }

export default IndexPage;
