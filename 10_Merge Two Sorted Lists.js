var mergeTwoLists = function (list1, list2) {

};

const list1 = {
   val: 1,
   next: {
      val: 2,
      next: {
         val: 4,
         next: null,
      },
   },
}, 
list2 = {
	val: 1,
	next: {
		val: 3,
		next: {
			val: 4,
			next: null,
		},
	},
};
mergeTwoLists(list1, list2) //[1,1,2,3,4,4]