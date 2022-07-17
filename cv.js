console.log('welcome to Praj world')
let data = [
    {
        name: 'Ritik Sharma',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: "https://randomuser.me/api/portraits/thumb/men/76.jpg"
    },

    {
        name: 'Ravi Verma',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: "https://randomuser.me/api/portraits/thumb/men/77.jpg"
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        framework: 'Flask',
        image:"https://randomuser.me/api/portraits/thumb/men/78.jpg"
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: "https://randomuser.me/api/portraits/thumb/men/79.jpg"
    }
]

function cvIterators(values) {
    let nextIndex = 0 
    return{
        next : function(){
            if(nextIndex<values.length){
                return {value: values[nextIndex++] , done:false}
            }
            else{
                return{
                      done: true
                }
            }
        }
    }
} 



// function cvIterators(values) {
//     let nextIndex = 0
//     return {
//         next: function () {
//             return nextIndex < values.length ?
//             { value: values[nextIndex++], done: false } :
//             {done: true }
            
//         }
//     }
// }
const candidate = cvIterators(data)

CV();

let next = document.getElementById('next')
next.addEventListener('click', CV)


function CV() {
    let currenntCandidate = candidate.next().value ;
    let img = document.getElementById('image')
    let id = document.getElementById('id')
    
    if (currenntCandidate != undefined) {
        img.innerHTML = ` <img src=" Name : ${currenntCandidate.image}" >`
        id.innerHTML = `
                     <ul class="list-group list-group-flush">
                         <li class="list-group-item">Name:  ${currenntCandidate.name}</li>
                         <li class="list-group-item">Age: ${currenntCandidate.age}</li>
                         <li class="list-group-item">City: ${currenntCandidate.city}</li>
                         <li class="list-group-item">Language: ${currenntCandidate.language}</li>
                         <li class="list-group-item">Framework: ${currenntCandidate.framework}</li>
                     </ul>
                   `
        
    }
    else{
        alert("End of the Candidates")
        window.location.reload();
        
    }
}



