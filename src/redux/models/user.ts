import { createModel } from "@rematch/core"
import { RootModel } from "./index"
import { User } from "../types"

export interface UserState {
  userData: User
}

const user = createModel<RootModel>()({
  name: "user",
  state: {
    userData: {},
  } as UserState,
  selectors: (slice) => ({
    firstName() {
      return slice((user) => {
        return user.userData.name?.firstName
      })
    },

    lastName() {
      return slice((user) => {
        return user.userData.name?.lastName
      })
    },
  }),
  reducers: {
    setUserData(state: UserState, userData) {
      return {
        ...state,
        userData,
      }
    },
  },
  effects: (dispatch: any) => ({
    // doSomethingAsync() {
    //   const { data, errors } = await callSomeApi()
    //   dispatch.user.setName(data.name)
    // }
  }),
})

export default user
