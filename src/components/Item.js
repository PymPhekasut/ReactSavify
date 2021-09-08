import PropTypes from 'prop-types';
import './Item.css'

//Props in component
const Item = (props) => {

    // const name = "Developer"
    // const amount = 80000

    //create properties to store in data

    //const Item = ({title, amount}) => {
    const {title, amount} = props

    //if condition1 is true ? show up here : if it is false
    const status = amount<0 ? "expense" : "income" 
    const symbol = amount<0 ? "A$ -" : "A$ +" 
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
            <li className={status}> {title} <span> {symbol}{formatNumber(Math.abs(amount))} </span>
             {/* <DataContext.Consumer>
            {value=><p>{value}</p>}
            </DataContext.Consumer> */}
            
            </li>
 
    );
};

Item.propTypes={
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
};

export default Item;