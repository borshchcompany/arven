import axios from 'axios';

import {
  FETCH_EVENT_LIST_LOADING,
  FETCH_EVENT_LIST_SUCCESSFUL,
  FETCH_EVENT_LIST_FAIL
} from './types';

export const fetchEventListByUserId = (userId) => {
  return {
    type: FETCH_EVENT_LIST_SUCCESSFUL,
    payload: [
      {
        name: "Name",
        date: "05.10.2018",
        id: 1
      },
      {
        name: "Name",
        date: "10.10.2018",
        id: 2
      },
      {
        name: "Name",
        date: "15.10.2018",
        id: 3
      },
      {
        name: "Name",
        date: "20.10.2018",
        id: 4
      },
      {
        name: "Name",
        date: "25.10.2018",
        id: 5
      },
      {
        name: "Name",
        date: "28.10.2018",
        id: 6
      },
      {
        name: "Name",
        date: "31.10.2018",
        id: 7
      },
    ]
  }
}

export const selectEvent = (event) => {

}