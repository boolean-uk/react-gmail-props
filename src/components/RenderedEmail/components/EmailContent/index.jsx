import PropTypes from "prop-types"

import './styles.css'

function EmailContent({openedEmail}) {
    return (
        <main className="email-body">
        <p> {openedEmail.sender} har dette å si til deg: </p>
        <p><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum mauris vitae magna faucibus maximus. Mauris a mi in metus gravida dignissim quis a nunc. Donec libero leo, mattis quis sagittis sed, viverra vel odio. Nullam eleifend massa felis, sit amet tempus mauris sollicitudin eu. Nulla purus erat, efficitur a nisi ut, consequat mattis mauris. Donec pharetra justo ac nulla sagittis, eget bibendum diam varius. Mauris eu tempus nunc, eu pulvinar eros. Praesent laoreet nec elit non mattis. Morbi id justo convallis, faucibus mauris nec, aliquet turpis. Curabitur sodales dui eu dui cursus, nec tincidunt felis tempor. Morbi volutpat urna ut nisl tincidunt mollis at ac ante. Nunc vitae quam rutrum, accumsan tortor rutrum, vestibulum velit. Pellentesque tortor mi, consectetur a magna laoreet, congue viverra mauris. Fusce dignissim urna sit amet justo ultrices ullamcorper. Donec commodo non eros ut tincidunt.</p>
      </main>
    )
}

EmailContent.propTypes = {
    openedEmail: PropTypes.object,
}

export default EmailContent