import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Root from "../components/layout/Root";
import MainPage from "./Main";
import AuthPage from "./Auth";
import TaskPage from "./Task";
import TaskListPage from "./TaskList";



const Router = () => {
  return <BrowserRouter>
    <Routes >
      <Route path="/" element={<Root />}>
        <Route index element={<MainPage />} />
        <Route path="/tasks" element={<TaskListPage />} />
        <Route path="/tasks/:id" element={<TaskPage />} />
        <Route path="/auth/login" element={<AuthPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default Router;