import React from "react";

import Layout from "../components/layout";

const IndexPage = (props) => {
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to {props}</p>
      <p>{console.dir(props)}</p>
      <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }} />
    </Layout>
  );
}

export default IndexPage;


// const data = useStaticQuery(graphql`
// query SiteTitleQuery {
//   site {
//     siteMetadata {
//       title
//     }
//   }
// }
// `);