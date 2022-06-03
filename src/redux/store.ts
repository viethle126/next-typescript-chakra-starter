import { init, RematchDispatch, RematchRootState } from "@rematch/core"
import { models, RootModel } from "./models"
import selectPlugin from "@rematch/select"

const store = init<RootModel>({
  models,
  plugins: [selectPlugin()],
})

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>

export default store
