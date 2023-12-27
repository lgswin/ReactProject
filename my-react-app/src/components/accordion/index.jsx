// single selection
// multi selection
import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enalbleMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handlMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId); // 현재 선택된 index를 기존 리스트에서 찾기
    if (findIndexOfCurrentId === -1)
      cpyMultiple.push(getCurrentId); // 못찾으면(-1) 추가
    else cpyMultiple.splice(findIndexOfCurrentId, 1); // 찾으면(이미 선택된) 제거

    setMultiple(cpyMultiple);
  }

  function handleEnabledMultiSelection() {
    setEnableMultiSelection(!enalbleMultiSelection);
    setSelected(null);
    setMultiple([]);
  }

  function showToggle(dataItemId, a, b) {
    const isSelected = enalbleMultiSelection
      ? multiple.indexOf(dataItemId) !== -1
      : selected === dataItemId;

    if (isSelected) return a;
    else return b;
    //    return <span>{isSelected ? "-" : "+"}</span>;
  }

  return (
    <div className="wrapper">
      <button onClick={() => handleEnabledMultiSelection()}>
        {enalbleMultiSelection
          ? "Disable Multi selection"
          : "Enable Multi selection"}
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              className={`item 
              ${showToggle(dataItem.id, "item-seleted", "item-unselected")}
              `}
            >
              <div
                onClick={
                  enalbleMultiSelection
                    ? () => handlMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className={`title 
              ${showToggle(dataItem.id, "item-seleted", "item-unselected")}
              `}
              >
                <h3>{dataItem.question}</h3>
                <span>{showToggle(dataItem.id, "-", "+")}</span>
              </div>

              {enalbleMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found! </div>
        )}
      </div>
    </div>
  );
}
