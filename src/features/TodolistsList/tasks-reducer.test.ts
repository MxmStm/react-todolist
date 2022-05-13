import {addTaskAC, removeTaskAC, tasksReducer, TasksStateType, updateTaskAC} from "./tasks-reducer";
import {addTodolistAC, removeTodolistAC} from "./todolists-reducer";

let startState: TasksStateType

beforeEach(() => {
    startState = {
        "todolistId1": [
            {
                description: '',
                title: 'CSS',
                status: 0,
                priority: 2,
                startDate: '',
                deadline: '',
                id: '1',
                todoListId: 'todolistId1',
                order: 0,
                addedDate: ''
            },
            {
                description: '',
                title: 'JS',
                status: 2,
                priority: 2,
                startDate: '',
                deadline: '',
                id: '2',
                todoListId: 'todolistId1',
                order: 0,
                addedDate: ''
            },
            {
                description: '',
                title: 'React',
                status: 0,
                priority: 2,
                startDate: '',
                deadline: '',
                id: '3',
                todoListId: 'todolistId1',
                order: 0,
                addedDate: ''
            },
        ],
        "todolistId2": [
            {
                description: '',
                title: 'bread',
                status: 0,
                priority: 2,
                startDate: '',
                deadline: '',
                id: '1',
                todoListId: 'todolistId2',
                order: 0,
                addedDate: ''
            },
            {
                description: '',
                title: 'milk',
                status: 2,
                priority: 2,
                startDate: '',
                deadline: '',
                id: '2',
                todoListId: 'todolistId2',
                order: 0,
                addedDate: ''
            },
            {
                description: '',
                title: 'tea',
                status: 0,
                priority: 2,
                startDate: '',
                deadline: '',
                id: '3',
                todoListId: 'todolistId2',
                order: 0,
                addedDate: ''
            },
        ]
    };
})

test('correct task should be deleted from correct array', () => {

    const action = removeTaskAC("2", "todolistId2");
    const endState = tasksReducer(startState, action)

    expect(endState).toEqual({
        "todolistId1": [
            {
                description: '',
                title: 'CSS',
                status: 0,
                priority: 2,
                startDate: '',
                deadline: '',
                id: '1',
                todoListId: 'todolistId1',
                order: 0,
                addedDate: ''
            },
            {
                description: '',
                title: 'JS',
                status: 2,
                priority: 2,
                startDate: '',
                deadline: '',
                id: '2',
                todoListId: 'todolistId1',
                order: 0,
                addedDate: ''
            },
            {
                description: '',
                title: 'React',
                status: 0,
                priority: 2,
                startDate: '',
                deadline: '',
                id: '3',
                todoListId: 'todolistId1',
                order: 0,
                addedDate: ''
            },
        ],
        "todolistId2": [
            {
                description: '',
                title: 'bread',
                status: 0,
                priority: 2,
                startDate: '',
                deadline: '',
                id: '1',
                todoListId: 'todolistId2',
                order: 0,
                addedDate: ''
            },
            {
                description: '',
                title: 'tea',
                status: 0,
                priority: 2,
                startDate: '',
                deadline: '',
                id: '3',
                todoListId: 'todolistId2',
                order: 0,
                addedDate: ''
            },
        ]
    });
});

test('correct task should be added to correct array', () => {

    const action = addTaskAC({
        description: '',
        title: 'juice',
        status: 0,
        priority: 2,
        startDate: '',
        deadline: '',
        id: '4',
        todoListId: 'todolistId2',
        order: 0,
        addedDate: ''
    });
    const endState = tasksReducer(startState, action)

    expect(endState["todolistId1"].length).toBe(3);
    expect(endState["todolistId2"].length).toBe(4);
    expect(endState["todolistId2"][0].id).toBeDefined();
    expect(endState["todolistId2"][0].title).toBe("juice");
    expect(endState["todolistId2"][0].status).toBe(0);
});

test('status of specified task should be changed', () => {

    const action = updateTaskAC('2',
        {
            title: 'coffee',
            description: '',
            status: 0,
            priority: 2,
            startDate: '0',
            deadline: ''
        }
        , 'todolistId2')
    const endState = tasksReducer(startState, action)

    expect(endState['todolistId2'][1].status).toBe(0);
    expect(endState["todolistId2"][1].title).toBe('coffee');
});

test('new array should be added when new todolist is added', () => {

    const action = addTodolistAC({
        title: 'new todolist',
        id: 'any id',
        addedDate: '',
        order: 0
    });
    const endState = tasksReducer(startState, action)
    const keys = Object.keys(endState);
    const newKey = keys.find(k => k !== "todolistId1" && k !== "todolistId2");

    if (!newKey) {
        throw Error("new key should be added")
    }

    expect(keys.length).toBe(3);
    expect(endState[newKey]).toEqual([]);
});

test('property with todolistId should be deleted', () => {

    const action = removeTodolistAC("todolistId2");

    const endState = tasksReducer(startState, action)

    const keys = Object.keys(endState);

    expect(keys.length).toBe(1);
    expect(endState["todolistId2"]).not.toBeDefined();
});
