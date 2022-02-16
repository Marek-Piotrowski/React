import PropTypes from 'prop-types'


function Button({children,version,type,isDisabled}) {
    return (
        <button type={type} disabled={isDisabled} className={`button is-${version}`}>
            {children}

        </button>
    )
}



Button.defaultProps = {
    version: 'info',
    type: 'button',
    isDisabled: false
}

Button.propTypes = {
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
    children: PropTypes.node
}

export default Button
