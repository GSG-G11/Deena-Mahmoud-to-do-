import React from 'react';
const TodoItems = (props) => {
  const { items, deleteItem, isCompleted, lineThrough } = props;
  const ListItems = items.length ? (
    items.map((item) => {
      // console.log(item.complete);

      return (
        <div key={item.id}>
          <span
            id={item.id}
            onClick={() => {
              // console.log(isCompleted(1));
              isCompleted(item.id);
            }}
            style={{
              textDecoration: item.complete ? "line-through " : "none",
              color: item.complete ? "red " : "black",
            }}
          >
            {/* {console.log(lineThrough)} */}
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
