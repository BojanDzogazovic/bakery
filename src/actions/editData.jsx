export const editData = async ({ url, id, ...data }) => {
  const response = await fetch(`${url + id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};
