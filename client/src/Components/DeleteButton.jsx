import React from "react";

const DeleteButton = (props) => {
  const removeRider = async (e) => {
    let id = props.riderProfiles[props.view].id;
    await fetch(`http://localhost:3000/api/rider_in_react/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.text())
      .catch((err) => {
        res.status(500).send(err.message);
        console.log(err);
      });
    console.log(`Deleted rider at ${id}`);
    props.setView(props.view + 1);
  };

  return (
    <button type="button" onClick={removeRider}>
      No
    </button>
  );
};

export default DeleteButton;

{
  /* <button type="button" onClick={()=> props.setView(props.view + 1)}>
No
</button> */
}
