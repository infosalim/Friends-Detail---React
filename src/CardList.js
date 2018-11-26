import React from "react";
import Card from "./Card";


const CardList = ({ friends }) => {
  return (
    <div>
      {friends.map((user, index) => {
        return (
          <Card
            key={index}
            id={friends[index].id}
            name={friends[index].name}
            email={friends[index].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
