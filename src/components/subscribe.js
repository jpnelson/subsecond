import * as React from "react";

import { rhythm } from "../utils/typography";
import newsletter from "./newsletter.svg";

export default function Subscribe() {
  return (
    <>
      <p>
        Get emails from me about once a month when I post new content, focusing
        on performance, front end technology, and engineering.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <iframe
          src="https://subsecond.substack.com/embed"
          frameborder="0"
          scrolling="no"
        ></iframe>
        <div style={{ width: "40%" }}>
          <img
            style={{ padding: rhythm(0.5), margin: 0 }}
            src={newsletter}
            alt="Person standing next to a giant email"
          />
        </div>
      </div>
    </>
  );
  // return <Mailchimp />;
}
