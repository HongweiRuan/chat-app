import {connect} from 'react-redux'
import Sidebarcomponent from "../components/SideBar"

export const Sidebar = connect(state => ({
  users: state.users
}), {}) (Sidebarcomponent)
