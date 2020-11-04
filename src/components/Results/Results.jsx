import Found from "./Found";
import NotFound from "./NotFound";
import Empty from "./Empty";

function Results({ haveUser, user, haveRepository, repositories }) {

  if (haveUser)
    return (
      <Found
        user={user}
        haveRepository={haveRepository}
        repositories={repositories}
      />
    );
  if (haveUser === false) return <NotFound />;
  if (haveUser === "") return <Empty />;
}

export default Results;
