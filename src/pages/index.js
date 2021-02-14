import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";
import colors from "../utils/colors";
import Mailchimp from "../components/mailchimp";

function Post({ title, slug, description, date, isNew }) {
  return (
    <div>
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
        }}
      >
        <Link style={{ boxShadow: `none` }} to={slug}>
          {title}
        </Link>
      </h3>
      <small>{date}</small>
      {isNew ? (
        <React.Fragment>
          {""}
          <small
            style={{
              padding: rhythm(0.1),
              border: `1px solid ${colors.main}`,
              textTransform: "uppercase",
              marginLeft: rhythm(0.25),
              color: colors.main,
              borderRadius: "5px",
            }}
          >
            <span role="img" aria-label="Sparkle emoji">
              ✨
            </span>
            New post
            <span role="img" aria-label="Sparkle emoji">
              ✨
            </span>
          </small>
        </React.Fragment>
      ) : null}
      <p
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </div>
  );
}

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        <Mailchimp />

        <div>
          <h2>
            <Link to="/projects">See my projects</Link>
          </h2>
          <p>I create projects for learning and fun. Check them out.</p>
        </div>
        <hr />

        {posts.map(({ node }, index) => {
          return (
            <Post
              key={node.fields.slug}
              slug={node.fields.slug}
              date={node.frontmatter.date}
              description={node.frontmatter.description || node.excerpt}
              title={node.frontmatter.title || node.fields.slug}
              isNew={index === 0}
            />
          );
        })}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
