import React from 'react'
import './App.css'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import LinearProgress from "@material-ui/core/LinearProgress";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "@material-ui/icons/Menu";
import {useAppSelector} from "./store";
import {RequestStatusType} from "./app-reducer";
import {ErrorSnackbar} from "../components/ErrorSnackbar/ErrorSnackbar";
import {Login} from "../features/Login/Login";
import {Navigate, Route, Routes} from "react-router-dom";

function App() {

    // const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)

    //вариант с useAppSelector, типизация в store
    const status = useAppSelector<RequestStatusType>((state) => state.app.status)

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar style={{justifyContent: "space-between"}}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        To Do List
                    </Typography>
                    <Button color="inherit" variant={"outlined"}>Login</Button>
                </Toolbar>
                {status === 'loading' && <LinearProgress color="secondary"/>}
            </AppBar>
            <Container fixed>
                <Routes>
                    <Route path={'/'} element={<TodolistsList/>}/>
                    <Route path={'login'} element={<Login/>}/>
                    <Route path={'404'} element={<h1 style={{textAlign: "center"}}>404: PAGE NOT FOUND</h1>}/>
                    <Route path={'*'} element={<Navigate to={'404'}/>}/>
                </Routes>
            </Container>
            <ErrorSnackbar/>
        </div>
    )
}

export default App
