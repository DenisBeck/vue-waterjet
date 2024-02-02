export const findByFilterLabel = (filter, label) => {
    return filter.find(filterItem => filterItem.label === label)
}