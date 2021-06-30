export function loadData() {
  return { type: "LOAD_DATA" };
}

export function changePageSize(size) {
  return {
    type: "CHANGE_PAGE_SIZE",
    size,
  };
}

export function addData() {
  return { type: "ADD_DATA" };
}

export function updateData(row, value) {
  const result = {
    type: "UPDATE_DATA",
    row,
    value,
  };
  console.log("action updateData:", result);
  return result;
}
