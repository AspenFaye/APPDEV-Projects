import PropTypes from 'prop-types'

export default function Body(props) {
    return(
        <div className="person">
            <img src={props.photo} alt="person-logo" className="person-picture"></img>
            <p>Greetings! I am <strong>{props.name}</strong></p>
            <p>I was born in <strong>{props.birthdate}</strong> at <strong>{props.birthplace}</strong></p>
            <p>I am <strong>{props.age}</strong> years old!</p>
            <p>My hobbies include <strong>{props.hobbies}</strong>.</p>
        </div>
    )
}
Body.defaultProps = {
    name: "Gerald, but kid version!",
    birthdate: "12-12-2001",
    birthplace: "Baguio City, Benguet",
    age: 20,
    hobbies: "stalking my crushes, making them fear for their lives, and drinking their blood like a vampy teehee",
    photo: "Stickman.jpg",
}

Body.propTypes = {
    name: PropTypes.string,
    birthdate: PropTypes.string,
    birthplace: PropTypes.string,
    age: PropTypes.number,
    hobbies: PropTypes.string,
    photo: PropTypes.string,
}