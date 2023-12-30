export default function Suggestions({ data, handleClick }) {
  return (
    <div>
      {data && data.length
        ? data.map((item, index) => (
            <li onClick={handleClick} key={index}>
              {item}
            </li>
          ))
        : null}
    </div>
  );
}
