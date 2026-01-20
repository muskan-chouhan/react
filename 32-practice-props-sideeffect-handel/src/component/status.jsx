const Status = ({status}) => {

if(status){
    console.log('user online');
}else{
    console.log('user offline');
    
}

return(
    
    <>

         <h1>{status}</h1>
    </>
)

}
export default Status;