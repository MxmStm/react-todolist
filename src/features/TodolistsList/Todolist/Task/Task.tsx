import React, {ChangeEvent, useCallback} from 'react'
import {EditableSpan} from '../../../../components/EditableSpan/EditableSpan'
import {TaskStatuses, TaskType} from '../../../../api/todolists-api'
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import DeleteOutline from "@material-ui/icons/DeleteOutline";

type TaskPropsType = {
    task: TaskType
    todolistId: string
    changeTaskStatus: (id: string, status: TaskStatuses, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
}

export const Task = React.memo((props: TaskPropsType) => {

    const onClickHandler = useCallback(() => props.removeTask(props.task.id, props.todolistId), [props]);

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked
        props.changeTaskStatus(props.task.id, newIsDoneValue ? TaskStatuses.Completed : TaskStatuses.New, props.todolistId)
    }, [props]);

    const onTitleChangeHandler = useCallback((newValue: string) => {
        props.changeTaskTitle(props.task.id, newValue, props.todolistId)
    }, [props]);

    return (
        <ListItem divider>
             <span className={props.task.status === TaskStatuses.Completed ? 'is-done' : ''}>
        <Checkbox
            size={'small'}
            color={'primary'}
            checked={props.task.status === TaskStatuses.Completed}
            onChange={onChangeHandler}
        />
        <EditableSpan
            title={props.task.title}
            changeTitle={onTitleChangeHandler}/>
            </span>
            <IconButton onClick={onClickHandler}>
                <DeleteOutline/>
            </IconButton>
        </ListItem>
    )
})
