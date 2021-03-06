const initialState = {
  OngoingSeries: [],
  RecentlyAddedSeries: [],
  RecentReleaseEpisodes: [],
  Popular: [],
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  //action has the coming data init
  switch (type) {
    case "OngoingSeries":
      return {
        ...state,
        OngoingSeries: payload.anime,
      };
    case "RecentlyAddedSeries":
      return {
        ...state,
        RecentlyAddedSeries: payload.anime,
      };
    case "RecentReleaseEpisodes":
      return {
        ...state,
        RecentReleaseEpisodes: payload.anime,
      };
    case "Popular":
      return {
        ...state,
        Popular: payload.popular,
      };
    default:
      return state;
  }
}
