import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import AddBoxOutlined from "@material-ui/icons/AddBoxOutlined";


type AddItemFormPropsType = {
    addItem: (title: string) => void
    disabled?: boolean
}

export const AddItemForm = React.memo(function (props: AddItemFormPropsType) {

    const [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== '') {
            props.addItem(title);
            setTitle('');
        } else {
            setError('Title is required');
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) {
            setError(null);
        }
        if (e.key === 'Enter') {
            addItem();
        }
    }

    return (
        <div>
            <TextField
                variant={"outlined"}
                error={!!error}
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                label={"Title"}
                helperText={error}
                size={"small"}
                disabled={props.disabled}
            />
            <IconButton onClick={addItem}>
                <AddBoxOutlined/>
            </IconButton>
        </div>
    )
})
