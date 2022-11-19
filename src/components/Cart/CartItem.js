export const CartItem = ({item}) => {
    return(
        <li>
            <img src={item.image} alt={item.title}/>
            <h2>{item.title}</h2>
            <b>{item.price}</b>
            <span>{item.quantity}</span>
        </li>
    )
};