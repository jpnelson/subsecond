import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

import { rhythm } from "../utils/typography"
import colors from "../utils/colors"

import newsletter from "./newsletter.svg"

class Mailchimp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      message: "",
    }
  }

  render() {
    return (
      <div
        style={{
          marginBottom: rhythm(2),
          boxShadow: "0 2px 15px 0 rgba(210,214,220,.5)",
          padding: rhythm(1),
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <style>{`
            #subscribe-button {
                background: ${colors.main};
                color: white;
                border: 1px solid ${colors.main};
                border-radius: 5px;
            }

            #subscribe-button:active {
                background: white;
                color: ${colors.main};
            }
        `}</style>
        <div style={{width: '60%'}}>
            <form onSubmit={this.onSubmit} style={{margin: 0}}>
                <p>
                    Get emails from me about once a month when I post new content,
                    focusing on performance, front end technology, and engineering.
                    It's well worth it!
                </p>
                <div
                style={{
                    display: "flex",
                }}
                >
                    <input
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}
                        placeholder="Enter your email"
                        style={{
                        fontFamily: "sans-serif",
                        marginRight: rhythm(0.25),
                        padding: rhythm(0.125),
                        }}
                        required
                        type="email"
                    />
                    <button id="subscribe-button" onClick={this.addToMailChimp}>
                        {this.state.loading ? "Subscribing..." : "Subscribe"}
                    </button>
                </div>
                <small>{this.state.message}</small>
            </form>
        </div>
        <div style={{width: '40%'}}>
            <img style={{padding: rhythm(0.5), margin: 0}} src={newsletter} alt="Person standing next to a giant email"></img>
        </div>
    </div>
    )
  }

  onSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    const result = await addToMailchimp(this.state.email);
    this.setState({
      loading: false,
      message:
        result.result === "success"
          ? `You're set! You'll start getting the newsletter ✨`
          : `Something went wrong. Are you subscribed already? Email josh at subsecond.dev and I can help sort this out, or try a new email.`,
    });
  }
}

export default Mailchimp
