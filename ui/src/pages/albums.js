import React from "react";
import { Link } from "gatsby";

// import axios from "axios";
import qs from "querystring";

import Layout from "../components/layout";

import { servicesUri } from "../utils";

const AlbumNotFound = () => <Layout><p>Album not found. <Link to="/">Go back to the Index</Link></p></Layout>;

const IndexPage = (props) => {

  const {id: albumId} = qs.parse(props.location.search.substr(1));
  if(! /^[0-9]+$/.test(albumId)) {
    return <AlbumNotFound />;
  }

  // axios.get();
  
  return (
    <Layout>
      <h1>Hi people</h1>
      <div>You are looking at album {albumId}</div>
      <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }} />
    </Layout>
  );
}

export default IndexPage;
