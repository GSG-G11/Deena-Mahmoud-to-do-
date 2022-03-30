import React from "react";
import "./ListToDoNote.css";
const TodoItems = (props) => {
  const { items, deleteItem, isCompleted } = props;
  const ListItems = items.length ? (
    items.map((item,index) => {
     

      return (
        <div key={item.id} className="note">
          <span
            id={item.id}
            onClick={() => {
     
              isCompleted(index);
            }}
            style={{
              textDecoration: item.complete ? "line-through " : "none",
              color: item.complete ? "red " : "black",
            }}
          >
         
            {item.note}
          </span>

          <button className="delete" onClick={() => deleteItem(item.id)}>
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      );
    })
  ) : (
    <p className="empty-note">there is no item to show</p>
  );
  return <div className="ListItems ">{ListItems}</div>;
};
export default TodoItems;
