const Contact = () => {
    return (
        <div>
        <h1 className="text-2xl font-bold">This is a Contact Page</h1>
        <form>
            <input type="text" className="border border-black p-2 m-2" placeholder="Name"/>
            <input type="text" className="border border-black p-2 m-2"placeholder="Message"/>
            <button className="bg-gray-400 text-black rounded-lg p-2">Submit</button>
        </form>
        
        </div>
    )
};

export default Contact;