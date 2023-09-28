    const form = document.getElementById('registrationForm');
    const table = document.getElementById('usertable');
        
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
            <td>${user.at ? 'Yes' : 'No'}</td>`;

        table.appendChild(newRow);
        });
    }
    function submitdata() {
        console.log("Test");
        const dob = new Date(document.getElementById('dob').value);
        const today = new Date();
        const min = 18, max=55;
        const age = today.getFullYear() - dob.getFullYear();
        if (age < min || age > max) {
            alert(`You must be between ${min} and ${max} years old to register.`);
            return false;
        }
        const userData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            dob: document.getElementById('dob').value,
            at: document.getElementById('at').checked
        };
        usersData.push(userData);
        localStorage.setItem('userData', JSON.stringify(usersData));

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${userData.name}</td>
            <td>${userData.email}</td>
            <td>${userData.password}</td>
            <td>${userData.dob}</td>
            <td>${userData.at ? 'Yes' : 'No'}</td> `;

        table.appendChild(newRow);
        form.reset();
        return true;
    }
