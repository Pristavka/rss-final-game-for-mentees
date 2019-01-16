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
        <div className="wrapper">
          <div className="rating">
            <h2>Rating</h2>
            <div id="wrapper"><div id="test">Loading...</div></div>
          </div>
          <style jsx>
            {`.wrapper {
              position: fixed;
              top: 0;
              bottom: 0;
              left:0;
              right:0;
              background: url(assets/images/right_bg.jpg) no-repeat;
              background-size: cover;
              box-sizing: border-box;
              padding-top: 110px;
            }
            .rating {
              width: 800px;
              height: 450px;
              margin: 0px auto;
              padding: 10px 50px ;
              box-sizing: border-box;
              border-radius: 10px;
              background: linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.5));
              color: #9ad9ea;
              font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
              letter-spacing: 1pt;
              font-size: 20pt;
            }

            @keyframes test{
              0%{width: 0%;}
              100%{width: 100%;}
            }
            #wrapper{
              margin: 70px auto;
              width: 50%;
              height: 40px;
              border: 2px solid #ba90a6;
              border-radius: 4px;
            }
            #test{
              background: #ba90a6;
              border-radius: 4px;
              width: 0%;
              height: 40px;
              line-height: 40px;
              padding-left: 10px;
              box-sizing: border-box;
              -webkit-animation:test 4s linear 1 forwards;
              animation:test 4s linear 1 forwards;
            }
            `}
          </style>
        </div>
      );
    }

    const usersTable = users.map(user => (
      <p key={user._id}>
        <span>{user.name}</span>

        <span style={{ float: 'right' }}>{user.monstersCount}</span>
      </p>
    ));

    const retryButton = <button type="submit" onClick={this.fetchData}>Retry</button>;

    return (
      <div className="wrapper">
        <div className="rating">
        <h2>Rating</h2>
          {serverIsDown ? retryButton : usersTable}
        </div>
        <button type="submit" onClick={backToOptions}>Back</button>
        <style jsx>
          {`.wrapper {
            position: fixed;
            top: 0;
            bottom: 0;
            left:0;
            right:0;
            background: url(assets/images/right_bg.jpg) no-repeat;
            background-size: cover;
            box-sizing: border-box;
            padding-top: 60px;
          }
           .rating {
            width: 1000px;
            height: 600px;
            margin: 0px auto;
            padding: 10px 50px ;
            box-sizing: border-box;
            border-radius: 10px;
            background: linear-gradient(to top, rgba(255,255,255,0.2), rgba(255,255,255,0.2)), url(assets/images/rat.jpg) no-repeat;
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
            top: 50px;
            left: 20px;
            display: inline-block;
            text-align: center;
            text-decoration: none;
            border: solid 2px #fff;
            border-radius: 4px;
            padding: 0.5em 1em;
            color: /*#9ad9ea*/ rgb(186,147,168);
            background: url(assets/images/cover.jpg) no-repeat;
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
