import { TOGGLE_APP } from "../../constants/action-type";


export function toggleApp(payload) {
    return { type: TOGGLE_APP, payload }
  };