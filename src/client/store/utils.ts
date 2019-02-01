export const requestData = (url: string) => {
  return fetch(url).then((res) => {
    if (res.status !== 200) {
      throw new Error("Error of getting data" + res.status);
    }
    return res.json();
  })
  .catch((err: Error) => {
    throw new Error("Getting data from .. failed" + err);
  });
};
