import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

function Project({ title, link, description }) {
  return (
    <div>
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
        }}
      >
        <a
          target="_blank"
          href={link}
          style={{ boxShadow: `none` }}
          target="_blank"
        >
          {title}
        </a>
      </h3>
      <p>{description}</p>
    </div>
  );
}

class Projects extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Projects"
          keywords={[`josh nelson`, `projects`, `bigtyper`]}
        />
        <Bio />
        <div>
          <h2>
            <Link to="/">See my blog posts</Link>
          </h2>
          <p>I write as well, check out my posts.</p>
        </div>
        <hr />
        <Project
          title="⌨️ bigtyper.com"
          link="http://bigtyper.com"
          description="It lets you type big. It's useful, trust me."
        />
        <Project
          title="⚛️ React ES6 explainer"
          link="https://react-or-es2015.glitch.me/"
          description="ES5, ES2015, JSX, React, What? I made a tool where you can explore a snippet of code, and click through to the documentation for various bits of syntax."
        />
        <Project
          title="😂 Random emoji bot"
          link="https://twitter.com/random_emoji"
          description="I created a twitter account that posts random emojis in random combinations. I forgot how I deployed it, but it's still going, somehow. #devops"
        />
        <Project
          title="🔘 Atlaskit"
          link="https://atlaskit.atlassian.com/"
          description="Worked on the team that created Atlaskit, an accessible and beautiful component library written in React."
        />
        <hr />
        <h2>Speaking engagements</h2>
        <p>
          I love teaching and mentoring people, and speaking is one of the ways
          that I&#39;ve done that in the past.
        </p>

        <h3 id="service-worker-framework">
          [2020] A React service worker framework
        </h3>
        <p>
          Some people think React is easy to understand, and some people thing
          it's super difficult. How can both be true? I go over different
          approaches for explaining React, techniques for explaining more
          effectively, and some gotchas and pitfalls that people often
          experience (some of which might surprise you!)
        </p>
        <p>
          Given at{" "}
          <a target="_blank" href="http://reactsummit.com">
            React Summit 2020
          </a>
          .
        </p>
        <p>
          <a target="_blank" href="https://youtu.be/imlFbYCsIzI?t=6117">
            Watch the video here!
          </a>
        </p>
        <h3 id="react-explained-explained">
          [2018] React explained, explained
        </h3>
        <p>
          Some people think React is easy to understand, and some people thing
          it&#39;s super difficult. How can both be true? I&#39;ll go over
          different approaches for explaining React, techniques for explaining
          more effectively, and some gotchas and pitfalls that people often
          experience (some of which might surprise you!)
        </p>
        <p>
          Given at{" "}
          <a target="_blank" href="http://nationjs.com">
            NationJS 2018
          </a>
          .
        </p>
        <p>
          <a target="_blank" href="https://www.youtube.com/watch?v=9GesiCMCYvI">
            Watch the video here!
          </a>
        </p>
        <p>
          <a
            target="_blank"
            href="https://speakerdeck.com/jpnelson/react-explained-explained"
          >
            See the talk slides and notes
          </a>
        </p>
        <h3 id="meaningful-performance-metrics">
          [2018] Meaningful performance metrics
        </h3>
        <p>
          If you can&#39;t measure it, you can&#39;t improve it. But measuring
          load time is easy, right? &quot;Load time&quot; is an outdated
          concept, as single page app experiences take over the web. We need
          better metrics to measure what our users are really feeling.
        </p>
        <p>
          Given at{" "}
          <a target="_blank" href="https://rvajavascript.com">
            RVAJS 2018
          </a>
          .
        </p>
        <p>
          <a target="_blank" href="https://www.youtube.com/watch?v=9GesiCMCYvI">
            Watch the video here
          </a>
        </p>
        <p>
          <a
            target="_blank"
            href="https://speakerdeck.com/jpnelson/meaningful-performance-metrics"
          >
            See the talk slides and notes
          </a>
        </p>
        <h3 id="other-past-engagements">Other past engagements</h3>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=LtlhrC_nwNA"
            >
              SydJS: React + Web components
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.meetup.com/en-AU/Real-World-React/events/236557079/"
            >
              Real word React: Component libraries, and React as a platform
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.meetup.com/en-AU/Real-World-React/events/249212020/"
            >
              Real world React: React explained, explained
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/jpnelson">
              My github
            </a>
          </li>
          <li>
            <a target="_blank" href="https://dev.to/jpnelson">
              My front end blogs
            </a>
          </li>
        </ul>
      </Layout>
    );
  }
}

export default Projects;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
