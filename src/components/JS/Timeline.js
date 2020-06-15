import React, { Component } from "react";
import "../CSS/Timeline.css";
import { Avatar } from "antd";
import { Button } from "antd";
import { HeartTwoTone } from "@ant-design/icons";
import axios from 'axios';
export default class Timeline extends Component {
  constructor() {
    super();
    this.state = {
      like: false,
      unlike: true,
      likeColor: "rgba(0, 0, 0, 0.65)",
      posts: []
    };
  }
 
  async componentDidMount() {
    let posts = await axios.get('https://zbrfq.sse.codesandbox.io/posts');
    this.setState({posts: posts.data});
    console.log(this.state.posts);
  }
  render() {
    return (
      <div className="main">
        {this.state.posts.map((post, index) => {
          return (
            <div className="compo" key={index}>
              <div className="compo-head">
                <Avatar className="avt" src={post.image} />

                <a href="https://www.instagram.com/ngoctrinh89">
                  <div className="compo-name">{post.username}</div>
                </a>
                <div className="more">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-more-horizontal"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="12" r="1" />
                  </svg>
                </div>
              </div>
              <div
                className="compo-body"
                style={{
                  backgroundImage: `url(${post.image})`
                }}
              />
              <div className="compo-end">
                <div className="icon-body">
                  <span className="heart-body">
                    <Button
                      icon={
                        <HeartTwoTone twoToneColor={this.state.likeColor} />
                      }
                      onClick={() => {
                        if (this.state.like === true) {
                          this.setState({
                            unlike: true,
                            like: false,
                            likeColor: "rgba(0, 0, 0, 0.65)"
                          });
                        } else {
                          this.setState({
                            unlike: false,
                            like: true,
                            likeColor: "red"
                          });
                        }
                      }}
                    />
                  </span>
                  <span className="comment-body">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-message-circle"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </span>
                  <span className="share-body">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-send"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </span>
                  <span className="book-body">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-bookmark"
                    >
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                    </svg>
                  </span>
                </div>
                <div className="com-body">
                  <div className="count">
                    <a href="https://www.instagram.com/nhat_ha261">
                      <b>nhat_ha261</b>
                    </a>{" "}
                    {this.state.like && (
                      <span>
                        và<b> {post.like + 1} người khác </b> đã thích
                      </span>
                    )}
                    {this.state.unlike && (
                      <span>
                        và<b> {post.like} người khác </b> đã thích
                      </span>
                    )}
                  </div>
                  <div className="count">
                    <a href="https://www.instagram.com/ngoctrinh89">
                      <b>{post.username}</b>
                    </a>{" "}
                    {post.status}
                  </div>
                  <div className="see-com">
                    <a href="https://www.instagram.com/p/B-9xYpQnmhD/">
                      Xem tất cả 350 bình luận
                    </a>
                  </div>
                  <div className="count">
                    <a href="https://www.instagram.com/leha2512/">
                      <b>leha2512</b>
                    </a>{" "}
                    Hot qá c ơi .. 4trieu rồi
                  </div>
                  <div className="time">1 NGÀY TRƯỚC</div>
                </div>
                <div className="com-comment">
                  <textarea
                    type="text"
                    placeholder=" Thêm bình luận..."
                    className="input-comment"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
