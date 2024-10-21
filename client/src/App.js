import { Route, Routes, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import UserAccount from "./components/UserAccount";

import Profile from "./components/Profile";

import MyDetails from "./components/MyDetails";
import BookRec from "./components/BookRec";
// import Main from "./components/Main";
function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Home />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />

			
			<Route path="/useraccount" exact element={<UserAccount />} />
			
			<Route path="/profile" exact element={<Profile />} />
			<Route path="/mydetails" exact element={<MyDetails />} />
			<Route path="/bookrec" exact element={<BookRec/>} />
			
			
		
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
};

export default App;

