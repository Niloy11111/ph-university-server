async function fetchData() {
  return 'Data loaded';
}

Promise.resolve(fetchData()).then((res) => console.log(res));
