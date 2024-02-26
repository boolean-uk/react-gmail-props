import "./styles/OpenEmail.css";
import PropTypes from "prop-types";
import backArrow from "./assets/icons/back-arrow.png";
import downloadButton from "./assets/icons/download-button.png";
import rateStarButton from "./assets/icons/rate-star-button.png";
import rubbishButton from "./assets/icons/rubbish-bin-delete-button.png";

function OpenEmail(props) {
  return (
    <>
      <main className="email-view">
        <nav className="email-toolbar">
          <ul>
            <li>
              <p onClick={() => props.SetClosed()}>Back</p>
            </li>
            <li>
              <img className="icon" src={backArrow} alt="reply button" />
            </li>
            <li>
              <img className="icon" src={downloadButton} alt="archive button" />
            </li>
            <li>
              <img className="icon" src={rubbishButton} alt="delete button" />
            </li>
          </ul>
          <div className="space"></div>
          <div>
            <p>1 of 25</p>
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
        </nav>
        <article className="email-content">
          <div className="title">
            <h1>Test Email</h1>
          </div>
          <header className="email-content--header">
            <div className="avatar"></div>
            <div className="email-info">
              <div className="sender-info">
                <h2>This is a topic</h2>
                <em>&lt;nicolas@boolean.co.uk&gt;</em>
              </div>
              <div className="user-info">
                <p>
                  to me <em>&lt;victor@adamson.com&gt;</em>
                </p>
              </div>
            </div>
            <div className="date-info">
              <p>22 February 2024, 13:25</p>
            </div>
            <div className="email-action-icons">
              <ul>
                <li>
                  <img className="icon" src={backArrow} alt="reply button" />
                </li>
                <li>
                  <img
                    className="icon"
                    src={rateStarButton}
                    alt="star button"
                  />
                </li>
                <li>
                  <img
                    className="icon"
                    src={rubbishButton}
                    alt="delete button"
                  />
                </li>
              </ul>
            </div>
          </header>
          <section className="email-body">
            <div className="content">
              <p>This is an email</p>
            </div>
          </section>
          <section className="email-actions">
            <button>Reply</button>
            <button>Forward</button>
          </section>
        </article>
      </main>
    </>
  );
}
OpenEmail.propTypes = {
  SetClosed: PropTypes.func,
};
export default OpenEmail;
