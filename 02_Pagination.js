const users = Array(12)
  .fill("")
  .map((_, i) => "user" + (i + 1));

const itemsPerPage = 4;

function usersOnPage(users, itemsPerPage, currentPage) {
  users.slice(0, 4);
}

// usersOnPage(users, itemsPerPage, 1);
usersOnPage(users, itemsPerPage, 2);
// usersOnPage(users, itemsPerPage, 3);
// usersOnPage(users, itemsPerPage, 4);
