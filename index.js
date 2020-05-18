module.export = function Counter(array) {
  let map = {};
  array.forEach((d) => (map[d] = (map[d] || 0) + 1));
  let sorted_map = Object.keys(map)
    .sort()
    .reduce(
      (acc, key) => ({
        ...acc,
        [key]: map[key],
      }),
      {}
    );

  return sorted_map;
}

module.export =  function ObjectCompare(a) {
  return JSON.stringify(a);
}


