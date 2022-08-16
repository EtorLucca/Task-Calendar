import axios from "axios";

//------ Caso queira rodar o servidor no localhost inverter as baseURL.
export const api = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://task-calendar.glitch.me"
});

export const createSession = async (email, password) => {
  return api.post("/sessions", { email, password });
};

export const getTasks = async (userId, query) => {
  let url = `/tasks/${userId}/`;

  if (query !== "") {
    url += `?q=${query}`;
  }
  return api.get(url);
};

export const createTask = async ( newTask, userId ) => {
  const url = `/tasks/${userId}/`;

  return api
    .post(url, newTask)
    .then((response) => {
      // console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateTask = async ( userId, id, updatedTask) => {
  const url = `/tasks/${userId}/${id}`;

  return api
    .put(url, updatedTask)
    .then((response) => {
      console.log(response);
      // return response;
    })
    .catch((error) => {
      console.log(error);
    });
}

export const destroyTask = async (userId, id) => {
  const url = `/tasks/${userId}/${id}`;

  return api.delete(url);
};
