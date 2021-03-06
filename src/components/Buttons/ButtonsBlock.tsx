import React from 'react';

import {FilterValuesType} from "../../features/TodolistsList/todolists-reducer";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";


type ButtonsBlockType = {
    filter: FilterValuesType
    setFilterValue: (filter: FilterValuesType) => () => void
}

export const ButtonsBlock = ({
                                 filter,
                                 setFilterValue,
                                 ...props
                             }: ButtonsBlockType) => {
    return (
        <ButtonGroup
            variant={'contained'}
            size={'small'}
            fullWidth>
            <Button
                color={filter === "all" ? 'primary' : 'secondary'}
                onClick={setFilterValue('all')}>
                All
            </Button>
            <Button
                color={filter === "active" ? 'primary' : 'secondary'}
                onClick={setFilterValue('active')}>
                Active
            </Button>
            <Button
                color={filter === "completed" ? 'primary' : 'secondary'}
                onClick={setFilterValue('completed')}>
                Completed
            </Button>
        </ButtonGroup>
    );
};
