import PropTypes from "prop-types";

function Header(props) {
  return (
    <header className="email-content--header">
      <div className="avatar"></div>
      <div className="email-info">
        <div className="sender-info">
          <h2>{props.email.sender}</h2>
        </div>
        <div className="user-info">
          <p>
            to me <em>&lt;gustav@svennas.com&gt;</em>
          </p>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  email: PropTypes.object,
};

export default Header;
