// const bodyBox = document.getElementById('tbody');
// const publicApiKey = 'bb4d045b8c461c12eb4e7de44c8f5cce';
// const privateApiKey = '491bf9f0af2216542b78425c55a295583233c0a4';
// const ts = new Date().getTime();
// console.log(ts);
// const hash = '58fc780615c7054341e9618bed5c5a2c';
// const apiUrl = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicApiKey}&hash=${hash}
// `;

// async function getUsers() {
//     try {
//         const response = await fetch(apiUrl);

//         if (response.ok) {
//             const data = await response.json();
//             console.log(data);

//             // Uncomment and adapt this section to display the data in your HTML table
//             // let temp = '';
//             // data.forEach(element => {
//             //     temp += `
//             //         <tr>
//             //             <td>${element.id}</td>
//             //             <td>${element.name}</td>
//             //             <td>${element.username}</td>
//             //             <td>${element.email}</td>
//             //         </tr>`;
//             // });
//             // bodyBox.innerHTML = temp;
//         } else {
//             console.log('Request failed with status:', response.status);
//         }
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// getUsers();
