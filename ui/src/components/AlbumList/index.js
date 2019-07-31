import React from "react";
import { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby";

import { Card, CardColumns } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

import styles from "./AlbumList.module.css";

const IndexPage = () => {
  const [albums, setAlbums] = useState(undefined);
  const data = useStaticQuery(graphql`
    query apiServer {
      site {
        siteMetadata {
          servicesUri
        }
      }
    }
  `);
  const servicesUri = data.site.siteMetadata.servicesUri;

  if(albums === undefined) {
    console.log('setting albums ' + albums);
    axios.get(servicesUri + '/api/v1/albums').then(({ data }) => {
      console.log('got albums');
      setAlbums(data);
    });
  }

  console.log('rendering...')
  console.dir(albums);

  return (
    <CardColumns>
      {(albums || []).map(album => {
        return (
          <Link to={`/albums?id=${album.id}`} className={styles.cardLink}>
            <Card>
              <Card.Body>
                <Card.Title>{album.name}</Card.Title>
                {album.description && <Card.Text>{album.description}</Card.Text>}
              </Card.Body>
            </Card>
          </Link>
        );
      })}
    </CardColumns>
  );
  }

export default IndexPage;
