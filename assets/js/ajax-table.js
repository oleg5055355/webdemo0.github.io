document.getElementById('loadDataBtn').addEventListener('click', function() {
    console.log("Load Data button clicked.");
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("Data loaded:", data);
            updateTable(data.slice(0, 10)); // Let's take just the first 10 items for brevity
        })
        .catch(error => console.error('Error fetching data:', error));
});

function updateTable(data) {
    const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing rows
    data.forEach(item => {
        const row = tableBody.insertRow();
        const idCell = row.insertCell(0);
        const titleCell = row.insertCell(1);
        const bodyCell = row.insertCell(2);
        idCell.textContent = item.id;
        titleCell.textContent = item.title;
        bodyCell.textContent = item.body;
    });
}
