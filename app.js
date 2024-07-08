
async function obtainUserData() {
    try {
        const response = await
        fetch(' https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        console.log(users);

    }catch (error) {
        console.error('Error  obtaining users: '. error);
    }
}

obtainUserData();