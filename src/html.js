import React from "react"
import PropTypes from "prop-types"


export default class HTML extends React.Component {
  render() {
    const props = this.props;
    
    return (
      <html {...props.htmlAttributes}>
        <head>
          <script dangerouslySetInnerHTML={{__html: `
            !function(){if('PerformanceLongTaskTiming' in window){var g=window.__tti={e:[]};
            g.o=new PerformanceObserver(function(l){g.e=g.e.concat(l.getEntries())});
            g.o.observe({entryTypes:['longtask']})}}();          
          `}}>
          </script>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {props.headComponents}
        </head>
        <body {...props.bodyAttributes}>
          {props.preBodyComponents}
          <noscript key="noscript" id="gatsby-noscript">
            This app works best with JavaScript enabled.
          </noscript>
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: props.body }}
          />
          {props.postBodyComponents}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-135893058-1"></script>
          <script dangerouslySetInnerHTML={{__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-135893058-1');
          `}}>
          </script>
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
