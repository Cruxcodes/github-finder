import React, { useContext } from "react";
import GitHubContext from "../../context/github/GithubContext";
import UserItem from "./UserItem";
function UserResults() {
  const {users,loading} = useContext(GitHubContext)

  // useEffect(() => {
  //   fetchUsers()
  //   console.log('this is a test and i KNOW')
  // }, [])
  

  if(!loading){
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => {
          return (
            <UserItem  key={user.id} user={user}/>
          );
        })}
    </div>
  );}else{
    return <h3>This is loading</h3>
  }
}

export default UserResults;
