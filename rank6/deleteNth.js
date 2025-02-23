function deleteNth(arr, n) {
  const counts = new Map();
  return arr.filter((item) => {
    const count = counts.get(item) || 0;
    if (count < n) {
      counts.set(item, count + 1);
      return true;
    }
    return false;
  });
}
