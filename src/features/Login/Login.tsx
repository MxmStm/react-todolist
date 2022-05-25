import React from 'react'
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {Navigate} from "react-router-dom";

import {loginTC} from "./auth-reducer";
import {useAppSelector} from "../../app/store";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";


type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {

    const isLoggedIn = useAppSelector<boolean>(state => state.auth.isLoggedIn)

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 3) {
                errors.password = 'Must be 3 characters or less';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(loginTC(values))
            formik.resetForm()
        },
    })

    if (isLoggedIn) {
        return <Navigate to={'/'}/>
    }

    return (
        <Grid container justifyContent={'center'}>
            <Grid item>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <FormLabel>
                            <p>To log in get registered
                                <a href={'https://social-network.samuraijs.com/'}
                                   target={'_blank'} rel={'noreferrer'}> here
                                </a>
                            </p>
                            <p>or use common test account credentials:</p>
                            <p>Email: free@samuraijs.com</p>
                            <p>Password: free</p>
                        </FormLabel>
                        <FormGroup>
                            <TextField
                                label="Email"
                                margin="normal"
                                {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email
                                && <div style={{color: "red"}}>
                                    {formik.errors.email}</div>}
                            <TextField
                                type="password"
                                label="Password"
                                margin="normal"
                                {...formik.getFieldProps('password')}
                            />
                            {formik.touched.password && formik.errors.password
                                && <div style={{color: "red"}}>
                                    {formik.errors.password}</div>}
                            <FormControlLabel
                                label={'Remember me'}
                                control={
                                    <Checkbox checked={formik.values.rememberMe}
                                              {...formik.getFieldProps('rememberMe')}/>}
                            />
                            <Button
                                type={'submit'}
                                variant={'contained'}
                                color={'primary'}>
                                Login
                            </Button>
                        </FormGroup>
                    </FormControl>
                </form>
            </Grid>
        </Grid>
    )
}
