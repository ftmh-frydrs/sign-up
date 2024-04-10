const Input = ({type, placeholder, name, required}) => {
    return <>
    <label htmlFor={name}>{name}</label>
    <input type={type} placeholder={placeholder} id={name} required={required} className="bg-transparent text-sm mb-7 py-2 mx-1 outline-none" />
    </>
};

export default Input;