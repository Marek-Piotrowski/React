import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



function Header({text}) {
    return (
        <header>
            <div className="container">
                <h2>{text}</h2>
                {/* <Link to='/'> Go back</Link>
                <Link to='/about'> About page</Link> */}
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: "Feedback UI"
}

Header.propTypes = {
    text: PropTypes.string
}

export default Header