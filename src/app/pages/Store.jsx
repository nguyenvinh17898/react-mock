import { useParams, Redirect } from "react-router"
import { useState, useEffect } from "react"
import MenuItemList from "./../components/MenuItemList"
import { Grid, Header } from "semantic-ui-react"
import Cart from "../components/Cart"
import { generateCart, generateMenu } from "../helpers/fake-data-helper"
import { useDispatch, useSelector } from "react-redux";
import { fetchShopData } from "../store/shop-actions"
import { useHistory } from "react-router"

const Store = () => {
  const dispatch = useDispatch()
  const { shopId } = useParams();
  const menuFake = generateMenu()
  const cartFake = generateCart(menuFake)
  const history = useHistory();
  const items = useSelector(state => state.shop.items)
  const customer = useSelector(state => state.customer);

  // if(customer.customerId === ''){
  //   return 
  // }

  //const [items] = useState(menuFake)
  const [cart] = useState(cartFake)

  const addToCart = id => { }

  useEffect(() => {
    dispatch(fetchShopData(shopId))
  }, [dispatch, shopId])

  return (
    <>
      {customer.customerId === '' && <Redirect to="/sign-up" exact />}
      <Header size="medium">Shop {customer.customerId}</Header>
      <Grid>
        <Grid.Column width={12}>
          {items && (
            <MenuItemList items={items} addToCart={addToCart}></MenuItemList>
          )}
        </Grid.Column>
        <Grid.Column width={4}>
          <Cart cart={cart}></Cart>
        </Grid.Column>
      </Grid>
    </>
  )
}

export default Store
