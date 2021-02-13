import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';

const NotFoundPage = ({
  data: {
    site: {
      siteMetadata: { title: siteTitle },
    },
  }, location,
}) => (
  <Layout location={location} title={siteTitle}>
    <SEO title="404: Not Found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
