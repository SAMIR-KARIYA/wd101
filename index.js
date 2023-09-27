window.onload = () => {
    const form = document.getElementById('regiForm');
    const table = document.getElementById('usertable');
    const tbody = table.querySelector('tbody');

    let usersData = [];
    let storageData=localStorage.getItem('userData');
    if(storageData){
        usersData= JSON.parse(storageData);
        usersData.forEach(user => {
            const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>${user.dob}</td>
            <td>${user.acceptTerms ? 'Yes' : 'No'}</td>
        `;
        tbody.appendChild(newRow);
        });
    }
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const dob = new Date(document.getElementById('dob').value);
        const today = new Date();
        const min = 18, max=55;
        const age = today.getFullYear() - dob.getFullYear();
        if (age < min || age > max) {
            alert(`You must be between ${minAge} and ${maxAge} years old to register.`);
            return;
        }
        const userData = {
            name: document.getElementById('nm').value,
            email: document.getElementById('email').value,
            password: document.getElementById('pwd').value,
            dob: document.getElementById('dob').value,
            acceptTerms: document.getElementById('at').checked
        };
        usersData.push(userData);
        localStorage.setItem('userData', JSON.stringify(usersData));
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${userData.name}</td>
            <td>${userData.email}</td>
            <td>${userData.password}</td>
            <td>${userData.dob}</td>
            <td>${userData.acceptTerms ? 'Yes' : 'No'}</td> `;
        tbody.appendChild(newRow);
        form.reset();
    });

    
}
