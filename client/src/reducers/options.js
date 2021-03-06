const initialState = {
    selectedType:"All",
    page: "1",
    view: "Grid",
    loaded: false,
    check:false
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  //action has the coming data init
  switch (type) {
    case "Loading":
      return {
          ...state,
          loaded: true,
      };
    default:
      return state;
  }
}
