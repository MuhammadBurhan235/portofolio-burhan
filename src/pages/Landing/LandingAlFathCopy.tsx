// import { images } from "../../images";
// import triDiVideoMp4 from "../../assets/tridialfath.mp4";
// import triDiVideoWebM from "../../assets/tridialfath.webm";
// import intPicVideoMp4 from "../../assets/intpicalfath.mp4";
// import intPicVideoWebM from "../../assets/intpicalfath.webm";
// import {
//   faCheck,
//   faClose,
//   faGreaterThan,
//   faLessThan,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "../../App.css";
// import { useEffect, useState } from "react";
// import { supabase } from "../../supabaseClient";
// import "bootstrap/dist/css/bootstrap.min.css";

// interface Slide {
//   src: string; // Image source
// }

// interface DaysToEvent {
//   id: number;
//   nama: string;
//   list_gambar: string; // Assuming this is a comma-separated string
// }

// export function LandingAlFathCopy() {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const [daysToEvents, setDaysToEvents] = useState<DaysToEvent[]>([]);
//   const [slides, setSlides] = useState<Slide[]>([]); // Initialize slides state

//   const handleNodeClick = (index: number) => {
//     const newIndex = index * 3; // Multiply the index by 3 to shift by three slides
//     // Ensure the new index does not exceed the slides length
//     setCurrentIndex(Math.min(newIndex, slides.length - 3));
//   };

//   useEffect(() => {
//     const fetchDaysToEvents = async () => {
//       const { data, error } = await supabase.from("days_to_event").select("*");
//       if (error) {
//         console.error(error);
//       } else {
//         setDaysToEvents(data);

//         // Create slides from list_gambar after data is fetched
//         const allSlides: Slide[] = [];
//         data.forEach((event: DaysToEvent) => {
//           const imagesArray = event.list_gambar.split(";"); // Split the string into an array
//           imagesArray.forEach((src) => {
//             allSlides.push({ src: src.trim() }); // Trim any whitespace
//           });
//         });
//         setSlides(allSlides); // Update slides state
//       }
//     };

//     fetchDaysToEvents();
//   }, []);

//   // Automatically move to the next slide every 5 seconds
//   // Automatically move to the next slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => {
//         const nextIndex = prevIndex + 3;
//         if (nextIndex >= slides.length) {
//           return 0; // Reset to the first slide
//         }
//         return nextIndex; // Move to the next slide
//       });
//     }, 5000);

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [slides]);

//   // Calculate the visible slides based on the current index
//   const visibleSlides = slides.slice(currentIndex, currentIndex + 3);

//   return (
//     <div className="App">
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
//         <a className="navbar-brand" href="#home">
//           Helpdesk Dashboard
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <a className="nav-link" href="#home">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#tickets">
//                 Tickets
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#settings">
//                 Settings
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="d-flex flex-wrap">
//         {/* Sidebar */}
//         <div
//           className="sidebar bg-light p-3"
//           style={{
//             minWidth: "250px",
//             maxWidth: "250px",
//             backgroundColor: "#f8f9fa",
//             height: "100vh",
//           }}
//         >
//           <nav className="nav flex-column">
//             <a className="nav-link" href="#dashboard">
//               Dashboard
//             </a>
//             <a className="nav-link" href="#tickets">
//               Tickets
//             </a>
//             <a className="nav-link" href="#users">
//               Users
//             </a>
//             <a className="nav-link" href="#reports">
//               Reports
//             </a>
//           </nav>
//         </div>

//         {/* Mainbar */}
//         <div className="mainbar p-4" style={{ flexGrow: 1 }}>
//           <h1>Welcome to Helpdesk Dashboard</h1>
//           <p>Here you can manage tickets, users, and view reports.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// const blinkStyle = document.createElement("style");
// blinkStyle.innerHTML = `
//   @keyframes blink {
//     0% { opacity: 1; }
//     50% { opacity: 0.5; }
//     100% { opacity: 1; }
//   }
// `;
// document.head.appendChild(blinkStyle);
