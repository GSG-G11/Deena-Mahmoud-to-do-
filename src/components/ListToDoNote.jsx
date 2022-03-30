import React from 'react';
const TodoItems = (props) => {
  const { items, deleteItem, isCompleted,lineThrough } = props;
  const ListItems = items.length ? (
    items.map((item) => {
      return (
        <div key={item.id}>
          <span
            onClick={() => isCompleted()}
            style={{ textDecorationLines: lineThrough ? line - through : none }}
          >
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
