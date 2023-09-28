window.onload = () => {
    const form = document.getElementById('registrationForm');
    const table = document.getElementById('userTable');
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
    function submitForm() {
        // event.preventDefault();
        const dob = new Date(document.getElementById('dob').value);
        const today = new Date();
        const min = 18, max=55;
        const age = today.getFullYear() - dob.getFullYear();
        if (age < min || age > max) {
            alert(`You must be between ${min} and ${max} years old to register.`);
            return;
        }
        const userData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            dob: document.getElementById('dob').value,
            acceptTerms: document.getElementById('acceptTerms').checked
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
    return true;
}
