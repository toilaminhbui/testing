import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"
import Login from "./components/Auth/Login"
import Home from "./components/Home/Home"
import NotFound from "./components/NotFound/NotFound"
import AddPost from "./components/Post/AddPost"
import EditPost from "./components/Post/EditPost"
import ListPost from "./components/Post/ListPost"
import Layout from "./components/route/Layout"
import LayoutRoute from "./components/route/LayoutRoute"

function App() {
  console.log("app render")
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <LayoutRoute exact path="/home" component={Home} layout={Layout} />
        <LayoutRoute exact path="/post" component={ListPost} layout={Layout} />
        <LayoutRoute
          exact
          path="/post/add"
          component={AddPost}
          layout={Layout}
        />
        <LayoutRoute
          path="/post/edit/:id"
          component={EditPost}
          layout={Layout}
        />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
