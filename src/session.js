
//window.

export const removeUserFromsession = () => {
  sessionStorage.removeItem("user");
};


export const addUserInsession = (user) => {
    sessionStorage.setItem("user", JSON.stringify(user));
}
export const getUserFromsession = (user) => {
  if (sessionStorage.getItem("user")) {
      return JSON.parse(sessionStorage.getItem("user"));
    }
}

setTimeout(() => {
  removeUserFromsession();
  sessionStorage.removeItem("staffs")
}, 1000000);


