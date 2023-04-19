var climbStairs = function (n) {
  f(1) = 1
  f(2) = 2
  f(3) = f(2) + f(1)
  f(4) = f(3) + f(2)
  f(n) = f(n-1) + f(n-2)
};

climbStairs(2); // 2; [1, 1] [2]
climbStairs(3); // 3; [1, 1, 1] [1, 2] [2, 1]
// climbStairs(4); // 5; 
