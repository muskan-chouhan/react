
import Profile from "./components/profile";
const App = () => {
  const profilesData = [
    {
      id: 1,
      name: "Sophie Bennett",
      role: "Product Designer",
      description: "Designs simple and usable interfaces",
      image:

        "https://plus.unsplash.com/premium_photo-1690086519096-0594592709d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
      followers: 312,
      projects: 48,
      verified: true,
    },
    {
      id: 2,
      name: "Aarav Mehta",
      role: "Frontend Developer",
      description: "Builds modern and responsive web apps",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
      followers: 540,
      projects: 62,
      verified: true,
    },
    {
      id: 3,
      name: "Riya Sharma",
      role: "UI/UX Designer",
      description: "Creates user-friendly digital experiences",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60",
      followers: 220,
      projects: 35,
      verified: false,
    },
    {
      id: 4,
      name: "Riya Verma",
      role: "Backend Developer",
      description: "Works with APIs and databases",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      followers: 410,
      projects: 51,
      verified: true,
    },
    {
      id: 5,
      name: "Neha Gupta",
      role: "Digital Marketer",
      description: "Focuses on SEO and growth strategies",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",
      followers: 190,
      projects: 28,
      verified: false,
    },
    {
      id: 6,
      name: "Rahul Singh",
      role: "Full Stack Developer",
      description: "Handles frontend and backend both",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60",
      followers: 670,
      projects: 74,
      verified: true,
    },
    {
      id: 7,
      name: "Ananya Patel",
      role: "Content Writer",
      description: "Writes clear and engaging content",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60",
      followers: 260,
      projects: 41,
      verified: false,
    },
    {
      id: 8,
      name: "Vikram Joshi",
      role: "Mobile App Developer",
      description: "Builds Android and iOS applications",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&auto=format&fit=crop&q=60",
      followers: 480,
      projects: 59,
      verified: true,
    },
    {
      id: 9,
      name: "Pooja Malhotra",
      role: "HR Manager",
      description: "Manages talent and company culture",
      image:
        "https://images.unsplash.com/photo-1548142813-c348350df52b?w=500&auto=format&fit=crop&q=60",
      followers: 145,
      projects: 19,
      verified: false,
    },
    {
      id: 10,
      name: "Arjun Rao",
      role: "Data Analyst",
      description: "Analyzes data to drive decisions",
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&auto=format&fit=crop&q=60",
      followers: 390,
      projects: 46,
      verified: true,
    },
  ];

  return (

    <div className="parent">
      {profilesData.map(function (data) {
        return (
          <div key={data.id}>
            <Profile
              img={data.image}
              name={data.name}
              para={data.description}
              followers={data.followers}
              project={data.projects}
              verified={data.verified}
            />
          </div>
        );
      })}

    </div>

  );
};

export default App;
