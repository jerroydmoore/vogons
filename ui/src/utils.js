import { useStaticQuery, graphql } from "gatsby";

const servicesUriQuery = useStaticQuery(graphql`
  query apiServer {
    site {
      siteMetadata {
        servicesUri
      }
    }
}
`);
export const servicesUri = servicesUriQuery.site.siteMetadata.servicesUri;
