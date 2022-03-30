import React from "react";
const TodoItems = (props) => {
  const { items, deleteItem, isCompleted, lineThrough } = props;
  const ListItems = items.length ? (
    items.map((item) => {
      return (
        <div key={item.id}>
          <span
            onClick={() => {
              isCompleted(item.id);
            }}
            style={{
              textDecorationLines: lineThrough ? "line-through " : "none",
            }}
          >
            {/* {console.log(item.complete)} */}
            {item.note}
          </span>

          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      );
    })
  ) : (
    <p>there is no item to show</p>
  );
  return <div className="ListItems ">{ListItems}</div>;
};
export default TodoItems;
