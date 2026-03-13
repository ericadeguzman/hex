// import ContactForm from "../components/ContactForm";

function HomePage() {
  return (
    <div
     className="homeContainer"
    >
      <div className="homeIntro">
        <h1>hey.</h1>
        <p>
          This is Erica, a web designer from southern California. I design. I code. I take photos.
        </p>
        ---
        <p>Some things I know:</p>
        <ul className="horizontalList">
          <li>design</li>
          <li>html</li>
          <li>css/sass</li>
          <li>javascript</li>
          <li>react</li>
        </ul>
      </div>
      {/* <ContactForm /> */}
      <form>
        <div
          className="messageBox"
        >
          <label htmlFor="message">message: </label>
          <textarea
            id="message"
            name="message"
            placeholder="write something nice."
            style={{ height: "100px", margin: "10px 0px" }}
          ></textarea>
          <label htmlFor="fname">from: </label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="your email"
          />
          <button style={{
            marginTop: 5, color: '#000'}}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default HomePage;
