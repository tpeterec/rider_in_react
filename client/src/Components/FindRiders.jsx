const FindRiders = ({ riderProfiles, view }) => {
  return (
    <div>
      {riderProfiles.length > 0 ? (
        <div>
          <h1>{riderProfiles[view].name}</h1>
          <h2>{riderProfiles[view].age}</h2>
          <h2>{riderProfiles[view].motorcycle}</h2>
          <h2>{riderProfiles[view].riding_style}</h2>
          <p>{riderProfiles[view].biography}</p>
          <img src={`../../public${riderProfiles[view].images}`} style={{width:"250px"}}></img>
        </div>
      ) : (
        <h1>No riders here!</h1>
      )}
    </div>
  );
};

export default FindRiders;
