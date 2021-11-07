import { useState, useEffect } from "react"
import { fetchShopAll } from "../store/shop-actions"
import { useDispatch, useSelector } from "react-redux";
import StoreList from "../components/StoreList"
import { generateStores } from "../helpers/fake-data-helper"

const DashboardGuest = () => {
  //const [stores] = useState(generateStores())
  const dispatch = useDispatch()
  const stores = useSelector(state=>state.shop.shops);

  useEffect(() => {
    dispatch(fetchShopAll())
  }, [dispatch])

  return (
    <>
      <div className="store-search"></div>
      <div className="store-list">
        {stores && <StoreList stores={stores}></StoreList>}
      </div>
    </>
  )
}

export default DashboardGuest
