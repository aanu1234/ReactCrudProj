import PropTypes from 'prop-types';

const Button = ({color, text, onClick}) => {
    return (
        <button 
        onClick={onClick}
        style={{ 
            color:'white', 
            backgroundColor: 'blue'
        }}
        className='btn btn-primary btn-sm'>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button