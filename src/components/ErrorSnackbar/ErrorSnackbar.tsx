import React from 'react';
import {Snackbar} from "@material-ui/core";
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';
import {useAppSelector} from "../../app/store";
import {useDispatch} from "react-redux";
import {setAppErrorAC} from "../../app/app-reducer";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props, ref) {

    return (
        <MuiAlert elevation={6} ref={ref} variant={'filled'} {...props} />
    );
});

export const ErrorSnackbar = () => {

    const error = useAppSelector<string | null>((state) => state.app.error)

    const dispatch = useDispatch()

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setAppErrorAC(null))
    };

    return (
        <Snackbar open={error !== null} autoHideDuration={7000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={'error'}>
                😠 {error}
            </Alert>
        </Snackbar>
    );
}
