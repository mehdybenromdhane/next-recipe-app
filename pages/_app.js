import Link from "next/link";
import Script from "next/script";
import "../styles/bootstrap.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className="navbar navbar-toggleable-md navbar-light bg-white fixed-top mediumnavigation">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container">
          <Link className="navbar-brand" href="/">
            <img src="logo.png" alt="logo" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto"></ul>

            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              />
              <span className="search-icon">
                <svg
                  className="svgIcon-use"
                  width="25"
                  height="25"
                  viewbox="0 0 25 25"
                >
                  <path d="M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z"></path>
                </svg>
              </span>
            </form>
          </div>
        </div>
      </nav>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
