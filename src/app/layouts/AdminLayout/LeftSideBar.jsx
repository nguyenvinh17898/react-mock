import { Icon, Menu } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { useParams } from "react-router"

const LeftSideBar = () => {
  const {shopId} = useParams();
  return (
    <div className="admin-layout_menu">
      <Menu vertical>
        <Menu.Item name="orders">
          <Link to="/admin/view-orders">
            <Icon name="list" /> Orders
          </Link>
        </Menu.Item>

        <Menu.Item name="menu">
          <Link to={`/admin/${shopId}/view-menu`}>
            <Icon name="list alternate outline" /> Menu
          </Link>
        </Menu.Item>

        {/* <Menu.Item name="menu">
          <Link to="/admin/view-menu">
            <Icon name="list alternate outline" /> Menu
          </Link>
        </Menu.Item> */}
      </Menu>
    </div>
  )
}

export default LeftSideBar
