 async function loadData(page, limit) {
  const API_URL = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`An error occurred: ${response.status}`);
  }

  return await response.json();
}
