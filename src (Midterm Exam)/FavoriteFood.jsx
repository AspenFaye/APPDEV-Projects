import PropTypes from 'prop-types';

export default function FavoriteFood(props){
    const listItems = props.items.map(item => <li key = {item.id}>{item.name}: {item.color} {item.rating}</li>)

    return(
        <>
            <h4 className="list-category">{props.category}</h4>
            <ol className="list">{listItems}</ol>
        </>
    )
}

FavoriteFood.defaultProps = {
    category: "I have no favorite fruits",
    items: []
}