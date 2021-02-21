import { NEXT_STEP, TOGGLE_APP, PREV_STEP } from "../../constants/action-type";



export function toggleApp(payload) {
    return { type: TOGGLE_APP, payload }
  }

export function nextStep(payload) {
  return {type: NEXT_STEP, payload}
}

export function prevStep(payload) {
  return {type: PREV_STEP, payload}
}