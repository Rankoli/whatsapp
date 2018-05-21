

// Expenses Reducer
const userListReducerDefaultState = [{
    userId: 1,
    name: "Ana",
    lastMessage: "Mashina:)", //should change //edit
    time: "15:55", //should change edit
    imgPath: "/images/favicon.png",
    myMessages: ["me1", "me2","WHATSAPP"], //should change -- push
    contactMessages: ["cont1", "cont2","sunt aut facere repellat provident occaecati excepturi optio reprehenderit"] //should auto change
  },
  {
    userId: 2,
    name: "Crawling",
    lastMessage: "Linkin Park:(",
    time: "07:13",
    imgPath: "/images/favicon.png",
    myMessages: ["me1"],
    contactMessages: ["cont1"]
  },
  {
    userId: 3,
    name: "Charlie Brown",
    lastMessage: "coldplay!",
    time: "10:10",
    imgPath: "/images/favicon.png",
    myMessages: [],
    contactMessages: []
  }];

const userListReducer = (state = userListReducerDefaultState, action) => {
  switch (action.type) {
    // case 'ADD_EXPENSE': return [...state,action.expense];

    // case 'REMOVE_EXPENSE': return state.filter(({id}) => id !== action.id );

    case 'EDIT_USER_LIST': return state.map((user) => {
      if(user.userId === action.id){
        return {
          ...user,...action.updates
        };
      } return user;
    });

    // case 'SET_EXPENSES': return action.expenses;

    default:
      return state;
  }
};

export default userListReducer;