const name = "Rudra";
const skills = ["JavaScript" , "React" , "Business analyst"];
const items = ["Computer" , "Mouse"]

function greet(person)
{
    return `Hello ${name} Today you started your journey. Items in use: ${items.join(", ")}`;
}

console.log(greet(name));

skills.forEach((skill) => console.log("Learning:",skill));
items.forEach((item) => console.log("Learning:", item));