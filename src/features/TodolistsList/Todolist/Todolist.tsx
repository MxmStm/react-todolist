import React, {useCallback, useEffect} from 'react'
import {AddItemForm} from '../../../components/AddItemForm/AddItemForm'
import {Task} from './Task/Task'
import {TaskStatuses, TaskType} from '../../../api/todolists-api'
import {FilterValuesType} from '../todolists-reducer'
import {useDispatch} from 'react-redux'
import {fetchTasksTC} from '../tasks-reducer'
import {TodolistHeader} from "./TodolistHeader";
import List from '@material-ui/core/List'
import {ButtonsBlock} from "../../../components/Buttons/ButtonsBlock";

type TodolistPropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, status: TaskStatuses, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
    removeTodolist: (id: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
    filter: FilterValuesType
}

export const Todolist = React.memo(function (props: TodolistPropsType) {

    console.log('Todolist called')

    const dispatch = useDispatch()

    useEffect(() => {
        const thunk = fetchTasksTC(props.id)
        dispatch(thunk)
    }, [dispatch, props.id])

    const addTask = useCallback((title: string) => {
        props.addTask(title, props.id)
    }, [props])
    const removeTodolist = () => {
        props.removeTodolist(props.id)
    }
    const changeTodolistTitle = useCallback((title: string) => {
        props.changeTodolistTitle(props.id, title)
    }, [props])

    const setFilterValue = useCallback((filter: FilterValuesType) =>
        () => {
            props.changeFilter(filter, props.id)
        }, [props]
    )

    let tasksForTodolist = props.tasks

    if (props.filter === 'active') {
        tasksForTodolist = props.tasks.filter(t => t.status === TaskStatuses.New)
    }
    if (props.filter === 'completed') {
        tasksForTodolist = props.tasks.filter(t => t.status === TaskStatuses.Completed)
    }

    return (
        <div className={'todolist'}>
            <TodolistHeader
                title={props.title}
                removeTodolist={removeTodolist}
                changeTodolistTitle={changeTodolistTitle}
            />
            <AddItemForm addItem={addTask}/>
            <List>
                {tasksForTodolist.map(t =>
                    <Task key={t.id}
                          task={t}
                          todolistId={props.id}
                          removeTask={props.removeTask}
                          changeTaskTitle={props.changeTaskTitle}
                          changeTaskStatus={props.changeTaskStatus}
                    />)}
            </List>
            <ButtonsBlock filter={props.filter} setFilterValue={setFilterValue}/>
        </div>
    )
})
