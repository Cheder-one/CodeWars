const users = Array(14)
  .fill("")
  .map((_, i) => "user" + (i + 1));

const itemsPerPage = 4;

function usersOnPage(users, itemsPerPage, pageNum) {
  const firstIndex = itemsPerPage * (pageNum - 1);
  return [...users].splice(firstIndex, itemsPerPage);
}

usersOnPage(users, itemsPerPage, 1);
usersOnPage(users, itemsPerPage, 2);
usersOnPage(users, itemsPerPage, 3);
usersOnPage(users, itemsPerPage, 4);
