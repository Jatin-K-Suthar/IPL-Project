import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/header/header";
import Navbar from "./Components/navbar/navbar";
import Home from "./Container/Home";
import TeamTable from "./Components/table/table";
import CreateTeamForm from "./Components/Forms/CreateTeamForm";
import CreatePlayerForm from "./Components/Forms/CreatePlayerForm";
import TeamDetails from "./Components/TeamDetails/TeamDetails";
import PlayerDetails from "./Components/PlayerDetails/PlayerDetails";
import PlayerListing from "./Components/PlayerListing/PlayerListing";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Navbar />

                <Routes>
                    <Route path={""} exact element={<Home />}></Route>
                    <>
                        <Route path="/teams" element={<TeamTable />}> </Route>
                        <Route path="/create-team" element={<CreateTeamForm />}></Route>
                        <Route path="/create-player" element={<CreatePlayerForm />}></Route>
                        <Route path={"/teampage/:id"} element={<TeamDetails />}></Route>
                        <Route path={"/player/:id"} element={<PlayerDetails />}></Route>
                        <Route path={"/players"} element={<PlayerListing />}></Route>
                    </>
                </Routes>

            </BrowserRouter>
        </>
    );
}