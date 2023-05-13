export const editData = async (url, { ...data }) => {
  const response = await fetch(`${url}`, {
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
