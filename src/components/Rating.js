import React, { Component } from 'react';

class Rating extends Component {
  state = {
    users: [],
    serverIsDown: false,
    loading: true,
  };


  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch('https://rs-game.herokuapp.com/results')
      .then(res => res.json())
      .then(data => this.setState(
        {
          users: data,
          serverIsDown: false,
          loading: false,
        },
      ))
      .catch(() => this.setState({ serverIsDown: true }));
  }

  render() {
    const { backToOptions } = this.props;
    const { users, serverIsDown, loading } = this.state;

    if (loading) {
      return (
        <div>
          <h2>Rating</h2>
          <p>Loading...</p>
        </div>
      );
    }

    const usersTable = users.map(user => (
      <p key={user._id}>
        <span>{user.name}</span>
         :
        <span>{user.monstersCount}</span>
      </p>
    ));

    const retryButton = <button type="submit" onClick={this.fetchData}>Retry</button>

    return (
      <div>
        <div className="rating">
          <h2>Rating</h2>
          {serverIsDown ? retryButton : usersTable}
        </div>
        <button type="submit" onClick={backToOptions}>Back</button>
        <style jsx>
          {`.rating {
            width: 800px;
            height: 450px;
            margin: 120px auto 0px;
            padding: 10px 40px ;
            box-sizing: border-box;
            border-radius: 10px;
            background: linear-gradient(to top, rgba(255,255,255,0.1), rgba(255,255,255,0.1)), url(images/rat.jpg) no-repeat;
            background-size: cover;
            color: #9ad9ea;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            letter-spacing: 1pt;
            font-size: 20pt;
            }
          button {
            padding: 0;
            border: none;
            font: inherit;
            color: inherit;
            background-color: transparent;
            cursor: pointer;
          }
          button {
            position: absolute;
            top: 30px;
            left: 20px;
            display: inline-block;
            text-align: center;
            text-decoration: none;
            border: solid 2px #fff;
            border-radius: 4px;
            padding: 0.5em 1em;
            color: #9ad9ea;
            background: url(images/cover.jpg) no-repeat;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            letter-spacing: 1pt;
            font-size: 18pt;
          }
          button:active {
            transform: translateY(2px);
          }
          button:hover {
            color: #9ad9ea;
          }`}
        </style>
      </div>
    );
  }
}

export default Rating;
