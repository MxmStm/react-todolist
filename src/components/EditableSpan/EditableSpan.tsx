import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {TextField} from "@material-ui/core";

type EditableSpanPropsType = {
    title: string
    changeTitle: (newTitle: string) => void
}

export const EditableSpan = React.memo(function (props: EditableSpanPropsType) {

    console.log('EditableSpan called');

    const [userNewTitle, setUserNewTitle] = useState<string>(props.title)
    const [editMode, setEditMode] = useState<boolean>(false)

    const onChangeSetUserText = (e: ChangeEvent<HTMLInputElement>) => {
        setUserNewTitle(e.currentTarget.value)
    }
    const onEditMode = () => {
        setEditMode(true)
    }
    const offEditMode = () => {
        setEditMode(false)
        props.changeTitle(userNewTitle)
    }
    const onKeyPressOffEditMode = (e: KeyboardEvent<HTMLInputElement>) =>
        e.key === "Enter" && offEditMode()

    return (
        editMode
            ? <TextField
                autoFocus={true}
                value={userNewTitle}
                onChange={onChangeSetUserText}
                onBlur={offEditMode}
                onKeyPress={onKeyPressOffEditMode}
            />
            : <span onDoubleClick={onEditMode}>{props.title}</span>
    );
});
