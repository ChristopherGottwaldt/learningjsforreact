function f(){

}

const f = () => {

}

// arrow function is better for callback functions

// to use in a different file
export default function f(){

}

// way easier to export(?)
export const f = () => {

}



// react example where you can just make the function in the jsx file.
<button onClick={() => {
    console.log("hello world");
}}>
</button>