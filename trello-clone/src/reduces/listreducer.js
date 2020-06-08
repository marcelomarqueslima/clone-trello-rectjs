const initialState = [
    {
        title: "Last Episode",
        id: 0,
        cards: [
            {
                id: 0,
                text: "we created a static list and static card"
            },
            {
                id: 1,
                text: "We used a mix between material UI React and styled component"
            }
        ]
    }
]

const listReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default listReducer;