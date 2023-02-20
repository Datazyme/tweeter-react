import React from 'react';

function TweetList() {
  const tweet = {
    avatar: "https://i.imgur.com/73hZDYK.png",
    firstName: "Isaac",
    lastName: "Newton",
    handle: "@SirIsaac",
    body: "If I have seen further it is by standing on the shoulders of giants",
    age: "10 days ago"
  }
  
  return (
    <main className="container">
    <section className="tweets">
      <article className="tweet">
        <header className="tweet--header">
          <img className="tweet--avatar" src={tweet.avatar}></img>
          <h2 className="tweet--name">{tweet.lastName}</h2>
          <small className="tweet--handle">{tweet.handle}</small>
        </header>
        <div className="tweet--body">
          <p>{tweet.body}</p>
        </div>
        <footer className="tweet--footer">
          <small className="footer--age">{tweet.age}<small>
              <span className="footer--actions">
                <a href="#"><i className="fa fa-flag"></i></a>
                <a href="#"><i className="fa fa-retweet"></i></a>
                <a href="#"><i className="fa fa-heart"></i></a>'
              </span>
            </small></small></footer>
      </article>
      <article className="tweet">
        <header className="tweet--header">
          <img className="tweet--avatar" src="https://i.imgur.com/nlhLi3I.png"></img>
          <h2 className="tweet--name">Descartes</h2>
          <small className="tweet--handle">@rd</small>
        </header>
        <div className="tweet--body">
          <p>Je pense , donc je suis</p>
        </div>
        <footer className="tweet--footer">
          <small className="footer--age">10 days ago<small>
              <span className="footer--actions">
                <a href="#"><i className="fa fa-flag"></i></a>
                <a href="#"><i className="fa fa-retweet"></i></a>
                <a href="#"><i className="fa fa-heart"></i></a>'
              </span>
            </small></small></footer>
      </article>
    </section>
    <div className="round-btn">
      <i className="round-btn__icon fas fa-angle-double-up"></i>
    </div>
    </main>
  );
}

export default TweetList;