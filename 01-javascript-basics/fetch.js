async function getUSer()
{   
    try
    {
    const response = await fetch("https://jsonplaceholder.typicode.com/userz");
    if(!response.ok)
    {
        throw new Error("Request failed with status:" + response.status);
    }
    const users = await response.json();
    console.log(users.map((user) => user.name));
    }
    catch(error)
    {
        console.log("Something went wrong:" , error.message)
    }
}

getUSer();