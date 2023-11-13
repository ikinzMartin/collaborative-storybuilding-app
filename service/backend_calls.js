
const getGroupsForUser = (user) => {
    return [
        {
            'name': 'Donny',
            'number_of_members': 4,
            'leader': true,
            'latest_question': 'Is Donny the best?'
        },
        {
            'name': 'Flat earth',
            'number_of_members': 2,
            'leader': false,
            'latest_question': 'so, i wanted to ask but i am i crazy for thinking the world is flat?'
        } 
    ]
};

export {getGroupsForUser}