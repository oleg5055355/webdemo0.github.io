document.getElementById('loadUsersBtn').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(users => {
            const userList = document.getElementById('userList');
            userList.innerHTML = ''; // Clear existing list items
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `${user.name} (${user.email})`;
                userList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching users:', error));
});
