// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// interface RectangleListProps {
//   items: string[];
// }

// const RectangleList: React.FC<RectangleListProps> = ({ items }) => {
//   return (
//     <div
//       className="container"
//       style={{
//         width: "300px",
//         display: "flex", // Tambahkan flexbox
//         justifyContent: "center", // Pusatkan secara horizontal
//         alignItems: "center",
//         backgroundColor: "black",
//       }}
//     >
//       <ul className="list-group">
//         {items.map((item, index) => (
//           <li
//             key={index}
//             className="list-group-item d-flex justify-content-between align-items-center"
//             style={{
//               borderRadius: "4px", // opsional untuk rounded rectangle
//               padding: "1rem", // padding yang membuat persegi panjang lebih besar
//               backgroundColor: "#f8f9fa", // warna background item
//               color: "black",
//             }}
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RectangleList;
