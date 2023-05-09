import DeleteButton from "./DeleteButton";
const FindRiders = (props) => {
  return (
    <div>
      {props.riderProfiles[props.view] ? (
        <div>
          <div key={props.riderProfiles.id}>
          <h1>{props.riderProfiles[props.view].name}</h1>
          <h2>{props.riderProfiles[props.view].age}</h2>
          <h2>{props.riderProfiles[props.view].motorcycle}</h2>
          <h2>{props.riderProfiles[props.view].riding_style}</h2>
          <p>{props.riderProfiles[props.view].biography}</p>
          <img
            src={`../../public${props.riderProfiles[props.view].images}`}
            style={{ width: "250px" }}
          ></img>
          </div>
          <div>
            <DeleteButton
             riderProfiles={props.riderProfiles}
             view={props.view}
             setView={props.setView}/>
            <button type="button" onClick={() => props.setView(props.view + 1)}>
              Yes
            </button>
          </div>
        </div>
      ) : (
        <h1>No riders here!</h1>
      )}
    </div>
  );
};

export default FindRiders;

