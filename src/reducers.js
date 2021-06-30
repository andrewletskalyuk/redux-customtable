import React, { Component } from "react";
import { combineReducers } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";

const data = (state = [], action) => {
  switch (action.type) {
    case "ADD_DATA":
      return [...state, { id: state.length + 1, name: new Date().toString() }];
    case "UPDATE_DATA":
      console.log("UPDATE_DATA:", action);
      const result = [...state];
      result[action.row].name = `${action.value} ${new Date().toString()}`;
      return result;
      break;
    case "LOAD_DATA":
      return [
        {
          id: 1,
          name: "Item 1",
          CRUD: [
            <button className="btn btn-outline-success btn-sm m-1" key='23'>
              Update
            </button>,
            <button className="btn btn-outline-danger btn-sm m-1" key='32'>
              Delete
            </button>,
          ],
        },
        {
          id: 2,
          name: "Item 2",
          CRUD: [
            <button className="btn btn-outline-success btn-sm m-1" key='123'>
              Update
            </button>,
            <button className="btn btn-outline-danger btn-sm m-1" key='124'>
              Delete
            </button>,
          ],
        },
      ];
    default:
      return state;
  }
};

const pageSize = (state = 10, action) => {
  switch (action.type) {
    case "CHANGE_PAGE_SIZE":
      return action.size;
    default:
      return state;
  }
};

export default combineReducers({
  data,
  pageSize,
});
