export function sort(key, order) {
  return function (a, b) {

    const varA = (typeof a[key] === "string") ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === "string") ? b[key].toUpperCase() : b[key];

    let compare = 0;
    if (varA > varB) {
      compare = 1; 
    } else if (varA < varB) {
      compare = -1;
    }
    return (
      (order === "desc") ? (compare * -1) : compare
    );
  };
}
