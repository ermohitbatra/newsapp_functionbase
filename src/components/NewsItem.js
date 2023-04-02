import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {
      title,
      description,
      publishedAt,
      author,
      imgUrl,
      newsUrl,
      source,
    } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              position: "absolute",
              right: "0",
              justifyContent: "flex-end",
            }}
          >
            <span
              className="badge rounded-pill bg-danger"
              style={{ left: "90%", zIndex: "1" }}
            >
              {source}
            </span>
          </div>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author} On {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <a
              rel="noopener noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
