const [userData, setUserData] = useState(null);
-> setUserData(data);
const [userData, setUserData] = useState(null);
-> {userData !== null ? <User user={userData} /> : null}
=> User(user)
const {
avatar_url,
name,
login,
followers,
following,
public_repos,
url,
created_at,
} = user;

- fetch
  const res = await fetch(`https://api.github.com/users/${userName}`);
  const data = await res.json();
  console.log(data);
