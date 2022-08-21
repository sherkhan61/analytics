import React, {useContext, Suspense} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Systems from "./pages/systems/Systems";
import NewUpdate from "./pages/new-update/NewUpdate";
import {AuthContext} from "./context/AuthContext";
import MOZ from "./pages/moz/MOZ";
import MOBF from "./pages/mobf/MOBF";
import VideoSeminars from "./pages/video-seminars/VideoSeminars";
import Archive from "./pages/archive/Archive";
import COD from "./pages/cod/COD";
import Team from "./pages/team/Team";
import {ProgressSystems} from "./pages/systems/progress-systems/ProgressSystems";
import {ConcludedSystems} from "./pages/systems/concluded-systems/ConcludedSystems";
import {PlannedSystems} from "./pages/systems/planned-systems/PlannedSystems";
import {CompletedSystems} from "./pages/systems/completed-systems/CompletedSystems";
import Profile from "./pages/profile/Profile";
import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";


export const PageRoutes = () => {
    const {currentUser} = useContext(AuthContext)

    const RequireAuth = ({children}) => {
        return currentUser ? children : <Navigate to="/login"/>;
    };
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    return (
        <Suspense fallback={<Spin indicator={antIcon} />}>
            <Routes>
                <Route path='/'>
                    <Route path="login" element={<Login/>}/>
                    <Route index element={
                        <RequireAuth>
                            <Home/>
                        </RequireAuth>
                    }/>
                    <Route path="systems">
                        <Route index element={
                            <RequireAuth>
                                <Systems />
                            </RequireAuth>
                        }/>
                        <Route path="progress" element={
                            <RequireAuth>
                                <ProgressSystems />
                            </RequireAuth>
                        } />
                        <Route path="concluded" element={
                            <RequireAuth>
                                <ConcludedSystems />
                            </RequireAuth>
                        } />
                        <Route path="planned" element={
                            <RequireAuth>
                                <PlannedSystems />
                            </RequireAuth>
                        } />
                        <Route path="completed" element={
                            <RequireAuth>
                                <CompletedSystems />
                            </RequireAuth>
                        } />
                    </Route>
                    <Route path="moz" element={
                        <RequireAuth>
                            <MOZ/>
                        </RequireAuth>
                    }/>
                    <Route path="mobf" element={
                        <RequireAuth>
                            <MOBF/>
                        </RequireAuth>
                    }/>
                    <Route path="video-seminars" element={
                        <RequireAuth>
                            <VideoSeminars/>
                        </RequireAuth>
                    }/>
                    <Route path="archive" element={
                        <RequireAuth>
                            <Archive/>
                        </RequireAuth>
                    }/>
                    <Route path="cod" element={
                        <RequireAuth>
                            <COD/>
                        </RequireAuth>
                    }/>
                    <Route path="team">
                        <Route index element={
                            <RequireAuth>
                                <Team/>
                            </RequireAuth>
                        }/>
                        <Route path="profile/:id" element={
                            <RequireAuth>
                                <Profile />
                            </RequireAuth>
                        }/>
                        <Route path="new" element={
                            <RequireAuth>
                                <NewUpdate/>
                            </RequireAuth>
                        }/>
                        <Route path="update/:id" element={
                            <RequireAuth>
                                <NewUpdate/>
                            </RequireAuth>
                        }/>
                    </Route>
                </Route>
            </Routes>
        </Suspense>
    )
}
