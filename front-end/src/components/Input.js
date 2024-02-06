import React from "react"

function Input({element}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showFailureAlert, setShowFailureAlert] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        if (email.length <= 8) {
            // add className error on Input elements
        }
    };
    return (
        <div>
            <label htmlFor={element} 
            className="block text-sm font-medium leading-6 text-gray-900">
                Username
            </label>
            <div className="mt-2">
                <input id={element} 
                name={element} 
                type={element} 
                value={email}
                onChange={() => {func}}
                // autoComplete={element} 
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    )
}