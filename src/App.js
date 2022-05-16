import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "~/Routes";
import "./App.css";
import { DefaultLayout } from "./components/Layouts";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRoutes.map((item, index) => {
                        let Layout = DefaultLayout;
                        if (item.layout) {
                            Layout = item.layout;
                        } else if (item.layout === null) {
                            Layout = Fragment;
                        }

                        const Page = item.component;
                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
