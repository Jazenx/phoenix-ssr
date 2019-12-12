import { createSelector } from 'reselect'

export const selectCounts = createSelector(
  (state: any) => state.count,
  count => {
    return count.filter((info: number) => info > 9).length
  }
)
