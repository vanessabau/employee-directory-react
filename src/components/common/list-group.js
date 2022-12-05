import React from "react";

const ListGroup = (props) => {
  const { items, textProperty, valueProperty, selectedItem, onItemSelect } =
    props;

  return (
    <ul className="list-group">
      {/* Map each item to an li */}
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          id="list-group-item"
          //Dynamically assign the className to active when the element is clicked
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

//ASSIGN DEFAULT PROPERTIES SO THE COMPONENT CAN BE REUSED
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
