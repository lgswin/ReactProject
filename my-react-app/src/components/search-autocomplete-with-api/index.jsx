import { useEffect, useState } from "react";
import Suggestions from "./suggestions";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    console.log(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      console.log("filteredData " + filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length > 0) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setErrorMessage(null);
      }
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message);
      setLoading(false);
    }
  }

  function handleClick(event) {
    console.log(event.target.innerText);

    setShowDropdown(false);
    setSearchParam(event.target.innerText);
    setFilteredUsers([]);
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  console.log(filteredUsers);
  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading Data ! Please wait </h1>
      ) : (
        <input
          value={searchParam}
          name="search-users"
          onChange={handleChange}
          placeholder="Search users here"
        />
      )}
      {showDropdown && (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  );
}
