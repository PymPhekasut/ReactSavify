import Item from "./Item";
import './transaction.css'


const Transaction = (props) =>{
  const { items } = props //items send from unitdata in App.js (parent)
    return (
      <div>
          <ul className="item-list">   
            {items.map((element)=>{
              return  <Item {...element} key= {element.id} />
              // use map to loop elements in array 
              // <Item title={e.title} amount={e.amount}/>
              // OR use spread operator ...
              // key = {e.id} >> setting up unique key
              //<Item title="Gas" amount="200"/>   */}
              //<Item title={data[0].title} amount= {data[0].amount}/>  
              // <Item title={data[1].title} amount= {data[1].amount}/>  
              // <Item title={data[2].title} amount= {data[2].amount}/>  
              // <Item title={data[3].title} amount= {data[3].amount}/>  
              // <Item title={data[4].title} amount= {data[4].amount}/>   */}
            })}
            </ul>
          
            {/* <DataContext.Consumer>
              {value=><p>{value}</p>}
            </DataContext.Consumer> */}
            
      </div>
    );
  };

  export default Transaction;