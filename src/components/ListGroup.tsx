import { useState } from "react";

// { items: [], heading: string }
interface ListGroupProps {
  items: string[];
  heading: string;
  onItemSelect: (item: string) => void;
}

function ListGroup({ items, heading, onItemSelect }: ListGroupProps) {
  const [selectedInex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={`list-group-item ${
              index === selectedInex ? "active" : ""
            }`}
            onClick={() => {
              setSelectedIndex(index);
              onItemSelect(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
