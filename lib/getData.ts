
const getData = async () =>{
 
    const fetchData = async () => {
        
        const res = await fetch(`http://localhost:3000/api/users`);
        
          const data = await res.json();
          console.log(data)
          return data
        
        
}
    }



export default getData;