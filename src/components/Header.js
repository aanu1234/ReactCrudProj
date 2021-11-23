import PropTypes from 'prop-types';

const Header = ({title}) => {
    return (
        <header className='header text-center'>
            <h4>{title}</h4>
        </header>
    )
}

Header.defaultProps = {
    title: 'Crud React App',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'blue',
// }

export default Header