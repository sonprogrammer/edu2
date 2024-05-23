import React from 'react'
import { useRecoilState } from 'recoil'
import { todoListFilterState } from '../TodoAtoms'

const TodlListFilter = () => {
    const [filter, setFilter] = useRecoilState(todoListFilterState)


    const updateFilter = ({target : {value}}) => {
        setFilter(value)
    }
    
  return (
    <div>
      Filter: 
      <select onChange={updateFilter}>
        <option value="Show All" >All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show UnCompleted">Uncompleted</option>
      </select>
    </div>
  )
}

export default TodlListFilter
