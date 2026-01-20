const Status = ({status}) => {

if(status == 'online'){
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