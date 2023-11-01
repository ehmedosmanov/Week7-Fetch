// const todos = [
//     {
//         title:'title1',
//         desc:'test1'
//     },
//     {
//         title:'title2',
//         desc:'test2'
//     },
//     {
//         title:'title3',
//         desc:'test3'
//     },

// ]


// const todoEl = document.getElementById('todoList')

// function todosList() {
//     setTimeout(() => {
//         todoItem = ''
//         todos.forEach((item) => {
//             todoItem += `
//             <li>
//             <h1>${item.title}</h1>
//             <p>${item.desc}</p>
//         </li>
//             `
//         })
//         todoEl.innerHTML = todoItem
//     }, 1000);
// }


// function newTodo(todo,callback) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             todos.push(todo)
//             const error = false
//             if(!error) {
//                 resolve('her sey isleyir')

//             }
//             else {
//                 reject('xeta')
                
//             }
//             callback()
//         }, 2000);
//     })
// }

// todosList()
// newTodo({                                                                                                                                                                                                                                                                                                        
//     title:'title4',
//     desc:'test4'
// },todosList).then(resolve => {
//     console.log(resolve);
// }).catch((rej) => {
//     console.log(rej);
// })



// const p1 = Promise.resolve('P1')
// const p2 = new Promise((res,rej) => {
//     setTimeout(() => {
//         res('P2')
//     }, 4000);
// })
// const p3 = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => console.log(data))

// Promise.all([p1,p2,p3]).then((promises) => {
//     console.log('promises', promises);
// })


