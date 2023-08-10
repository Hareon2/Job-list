export const selectAllPositions = (state) => state.positions;

export const selectVisiblePosition = (state, filter = []) => {
  if (filter.length === 0) return state.positions;

  return state.positions.filter((pos) => {
    const posFilter = [].concat(
      pos.role,
      pos.level,
      ...pos.languages,
      ...pos.tools
    );

    return filter.every((filterItem) => posFilter.includes(filterItem));
  });
};
