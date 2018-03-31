import {
	FETCH_EVENT_LIST_LOADING,
	FETCH_EVENT_LIST_SUCCESSFUL,
	FETCH_EVENT_LIST_FAIL
} from "../actions/types";

const INITIAL_STATE = {
	eventList: [],
	eventListError: "",
	eventListLoading: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_EVENT_LIST_LOADING:
			return { 
        ...state, 
        eventListLoading: true, 
        eventListError: "" 
      };
		case FETCH_EVENT_LIST_FAIL:
			return {
				...state,
				eventListLoading: false,
				eventListError: "Error"
			};
		case FETCH_EVENT_LIST_SUCCESSFUL:
			return {
				...state,
				eventListLoading: false,
				eventListError: "",
				eventList: action.payload
			};
		default:
			return state;
	}
};
