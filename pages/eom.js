export const EOM = ({ employee }) => {
    console.log(employee)
  return (
    <div className="">
      <div>
        <h1>Employee of the month</h1>
      </div>
      <div>
          {/* <h2>{ employee.name }</h2>
          <h2>{ employee.position }</h2>
          <h2>{ employee.description }</h2> */}
      </div>
    </div>
  );
};

// export const getServerSideProps =  async pageContext  =>
// {
//     const apiResponse = await fetch('https://my-json-server.typicode.com/Salma-Saaiou/news-data/db');
//     const employee = await apiResponse.json() 
    
//     return{
//         props: {
//              employee
//         }   
//     }
    

// }

export default EOM;
