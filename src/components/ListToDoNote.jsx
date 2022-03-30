import React from 'react';
import  './ListToDoNote.css';
const TodoItems = (props) => {
  const { items, deleteItem, isCompleted, lineThrough } = props;
  const ListItems = items.length ? (
    items.map((item) => {
      return (
        <div key={item.id} className="note" >
          <span 
            id={item.id}
            onClick={() => {
              isCompleted(item.id);
            }}
            style={{
              textDecorationLine: lineThrough ? 'line-through' : 'none',
            }}
          >
            {/* {console.log(lineThrough)} */}
            {item.note}
          </span>

          <button className='delete' onClick={() => deleteItem(item.id)}><i class="fa fa-trash" aria-hidden="true"></i></button>
        </div>
      );
    })
  ) : (
    <p>there is no item to show</p>
  );
  return <div className="ListItems ">{ListItems}</div>;
};
export default TodoItems;
