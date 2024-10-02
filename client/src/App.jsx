import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import routes
import { PagenotFound } from "../components/PagenotFound";
import { Password } from "../components/Password.jsx";
import { Profile } from "../components/Profile";
import { Recovery } from "../components/Recovery";
import { Reset } from "../components/Reset";
import { Username } from "../components/Username";
import { Register } from "../components/Register";

// Root routes
const allPaths = createBrowserRouter([
  { path: "*", element: <PagenotFound /> }, // Catch-all route for 404
  { path: "/password", element: <Password /> },
  { path: "/profile", element: <Profile /> },
  { path: "/recovery", element: <Recovery /> },
  { path: "/reset", element: <Reset /> },
  { path: "/", element: <Username /> },
  { path: "/register", element: <Register /> },
]);

function App() {
  return (
    <main>
      <RouterProvider router={allPaths}></RouterProvider>
    </main>
  );
}

export default App;

//Normal method
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Import routes
// import PagenotFound from "../components/PagenotFound";
// import Password from "../components/Password";
// import Profile from "../components/Profile";
// import Recovery from "../components/Recovery";
// import Reset from "../components/Reset";
// import Username from "../components/Username";
// import Register from "../components/Register";

// function App() {
//   return (
//     <main>
//       <Router>
//         <Routes>
//           <Route path="/password" element={<Password />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/recovery" element={<Recovery />} />
//           <Route path="/reset" element={<Reset />} />
//           <Route path="/username" element={<Username />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="*" element={<PagenotFound />} /> {/* Catch-all route */}
//         </Routes>
//       </Router>
//     </main>
//   );
// }

// export default App;
