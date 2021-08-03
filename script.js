
// GET https://icanhazdadjoke.com/

const jokes = document.getElementById('joke');
const jokeBtn = document.getElementById('jokebtn');

// jokes.innerHTML="helloccc";
// // promises### step 1
// const generatejokes = () => {

//     const setHeader = {
//         headers: {
//             Accept :"application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com', setHeader)
//     .then((res)=> res.json())
//     .then((data) => {
//         jokes.innerHTML =data.joke;
//     })
//     .catch((error)=>{
//         console.log(error);
//     })

// }

// async await ########## step 2
const generatejokes = async() => {
    try{
            const setHeader = {
            headers: {
                Accept :"application/json"
            }
        }

        const  res = await fetch('https://icanhazdadjoke.com', setHeader)
        const data = await res.json();
            jokes.innerHTML = data.joke;
        }catch(error){
        console.log(`the error is ${error}`);
        }
}

jokeBtn.addEventListener('click',generatejokes);
generatejokes();