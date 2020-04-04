import React, { Component } from "react";

class GifList extends Component {
  render() {
    let gifs = this.props.gifs;

    return (
      <div>
        {gifs.map((gif) => (
          <img key={gif.url} src={gif.url} alt="gif" />
        ))}
      </div>
    );
  }
}

export default GifList;
