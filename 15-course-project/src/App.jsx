import Card from "./components/cards";

function App() {
  const coursesData = [
  {
    id: 1,
    title: "React Basics",
    category: "Frontend",
    price: 0,
    isFree: true,
    isSelected: false,
  },
  {
    id: 2,
    title: "JavaScript Advanced",
    category: "Programming",
    price: 499,
    isFree: false,
    isSelected: false,
  },
  {
    id: 3,
    title: "HTML & CSS Mastery",
    category: "Web Design",
    price: 299,
    isFree: false,
    isSelected: false,
  },
  {
    id: 4,
    title: "Git & GitHub",
    category: "Tools",
    price: 0,
    isFree: true,
    isSelected: false,
  },
  {
    id: 5,
    title: "HTML & CSS Mastery",
    category: "Web Design",
    price: 0,
    isFree: true,
    isSelected: false,
  },
  {
    id: 5,
    title: "Git & GitHub",
    category: "Tools",
    price: 0,
    isFree: true,
    isSelected: false,
  },
  {
    id: 6,
    title: "JavaScript Advanced",
    category: "Programming",
    price: 0,
    isFree: true,
    isSelected: false,
  },
];



  return (
    
    <>
      <div className="main">
        <h1>Courses</h1>
       <div className="parent">

       {coursesData.map(function(data,id){
        return <div key={id}>
        <Card title={data.title} category={data.category} price={data.price} isFree={data.isFree}   isSelected={data.isSelected}/>
       </div> 
      })}
        
       
      </div>
</div>

    </>
  );
}

export default App;
