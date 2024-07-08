

const uri = "https://jsonplaceholder.typicode.com/users";


async function obtainUserData() {
  
        const response = await fetch(uri);
        const users = await response.json();

        const resultsBody = document.getElementById('resultsBody');
        users.forEach(user => {
            const row = `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.address.city}</td></tr>`;
            resultsBody.insertAdjacentHTML('beforeend', row);
        });

        console.log(users);

}

obtainUserData();

async function requestUserDataById(id) {
    const response = await fetch(`${uri}/${id}`);
    const user = await response.json();
    document.getElementById('resultData').innerHTML = 'Name: ' + user.name + '<br>Phone: ' + user.phone;
}

document.querySelector('button').addEventListener('click', () => {
    const userId = document.getElementById('userId').value;
    requestUserDataById(userId);
})

obtainUserData();