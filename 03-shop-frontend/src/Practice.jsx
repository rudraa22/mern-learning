    import { useState } from "react";

    function Practice()
    {
        const [text,setText] = useState("");
        const [names,setNames] = useState(["Rudra" , "Amit"]);

        function handleAdd()
        {
            const newNames = text.trim()
            if(newNames === "")
                return;

            const exist = names.some((name => name.toLowerCase() === newNames.toLowerCase()));
            if(exist) return;
            setNames([...names , text]);
            setText("");
        }


        return(
            <div>
                <input
                type="text"
                placeholder="Add a name"
                value={text}
                onChange={(e) => setText(e.target.value)}/>
                <button onClick={handleAdd}>Add</button>
                <ul>
                    {names.map((name,index) => (
                        <li key = {index}>{name}
                        <button onClick={() => setNames(names.filter((n , i) => i !== index))}>
                            Delete
                        </button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    export default Practice;