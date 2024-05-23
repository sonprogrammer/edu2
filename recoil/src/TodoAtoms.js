import { atom, selector } from "recoil";

export const todoListState = atom({
    key: 'todoListState',
    default: [],
})

export const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'Show All'
})

export const filterdTodoListState = selector({
    key: 'filterdTodoListState',
    get: ({ get }) => { 
        const filter = get(todoListFilterState) //* todoListFilterState이 변할 때 다시 실행됨
        const list = get(todoListState)

        switch(filter){
            case 'Show Completed':
                return list.filter((item) => item.isComplete)
            case 'Show UnCompleted':
                return list.filter((item) => !item.isComplete)
            default:
                return list
        }
    }
})


export const todoListStatesState = selector({
    key: 'todoListStatesState',
    get: ({ get }) => {
        const todoList = get(todoListState)
        const totalNum = todoList.length
        const totalCompletedNum = todoList.filter((item) => item.isComplete).length
        const totalUncompletedNum = totalNum - totalCompletedNum
        const avgNum = totalNum === 0 ? 0 : totalCompletedNum / totalNum
        return{
            totalNum,
            totalCompletedNum,
            totalUncompletedNum,
            avgNum

        }
    }
})