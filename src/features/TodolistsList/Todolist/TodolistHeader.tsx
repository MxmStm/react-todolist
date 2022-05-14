import React from 'react';
import {EditableSpan} from "../../../components/EditableSpan/EditableSpan";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";
import {RequestStatusType} from "../../../app/app-reducer";

type TodolistHeaderPropsType = {
    title: string
    entityStatus: RequestStatusType
    removeTodolist: () => void
    changeTodolistTitle: (newTitle: string) => void
}

export const TodolistHeader: React.FC<TodolistHeaderPropsType> = (
    {
        title,
        removeTodolist,
        ...props
    }
) => {
    return (
        <div style={{textAlign: 'center'}}>
            <h3>
                <EditableSpan
                    title={title}
                    changeTitle={props.changeTodolistTitle}
                />
                <IconButton
                    onClick={removeTodolist}
                    disabled={props.entityStatus === 'loading'}
                >
                    <Delete/>
                </IconButton>
            </h3>
        </div>
    );
};
