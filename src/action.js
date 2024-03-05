import { action_types } from "./util"
// Action: pure objects with key as type

export const inc_action = () => {
    return {
        type : action_types.inc
    }
}