import User from "../cards/User";
import Repos from "../cards/Repos";

function Found(props) {
  return (
    <>
      <User user={props.user} />
      <Repos
        repositories={props.repositories}
        haveRepository={props.haveRepository}
      />
    </>
  );
}

export default Found;
