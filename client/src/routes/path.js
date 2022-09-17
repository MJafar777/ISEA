function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_ADMIN = "/admin";

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  verify: path(ROOTS_AUTH, "/verify"),
  login: path(ROOTS_AUTH, "/login"),
  signup: path(ROOTS_AUTH, "/signup"),
  register: path(ROOTS_AUTH, "/register"),
};

export const PATH_ADMIN = {
  root: ROOTS_ADMIN,
  news: path(ROOTS_ADMIN, "/news"),
  projects: path(ROOTS_ADMIN, "/projects"),
  users: path(ROOTS_ADMIN, "/users"),
  publications: path(ROOTS_ADMIN, "/publications"),
};
