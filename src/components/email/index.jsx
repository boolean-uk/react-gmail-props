import PropTypes from 'prop-types';
import './styles/index.css';

import Toolbar from './components/toolbar';
import Header from './components/header';
import Body from './components/body';
import Actions from './components/actions';


const Email = ({setShowContent, email}) => {
    return (
        <main className="email-email">
          <Toolbar setShowContent={setShowContent} />
        <article className="email-content">
          <div className="title">
            <h1>{email.title}</h1>
          </div>
          <Header email={email} />
          <Body />
          <Actions />
        </article>
      </main>   
    )
}

Email.propTypes = {
    setShowContent: PropTypes.func,
    email: PropTypes.object,
}

export default Email;