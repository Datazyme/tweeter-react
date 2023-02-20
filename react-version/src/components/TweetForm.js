import React from 'react';

function TweetForm() {
  const placeHolder = "What are you humming about?"
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    
    <main className="container">
    <section className="error-container">
      <i className="fas fa-exclamation-triangle"></i>
      <i className="fas fa-exclamation-triangle"></i>
    </section>
    <section className="newtweet">
      <form onClick={handleSubmit} method="post" action="/tweets" className="newtweet__form" >
        <textarea className="form__textarea" name="text" placeholder={placeHolder}></textarea>
        <input type="submit" value="Tweet" className="form__input"></input>
        <span className="form__counter">140</span>
      </form>
    </section>
  </main>
  );
}

export default TweetForm;