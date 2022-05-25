import React from 'react';

import {EditableSpan} from "../../../components/EditableSpan/EditableSpan";

import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";


type TodolistHeaderPropsType = {
    title: string
    disabled: boolean
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
                    disabled={props.disabled}
                />
                <IconButton
                    onClick={removeTodolist}
                    disabled={props.disabled}
                >
                    <Delete/>
                </IconButton>
            </h3>
        </div>
    );
};
