import MenuAddModal from "./ViewMenu/MenuAddModal"
import MenuItemList from "../components/MenuItemList"
import { generateMenu } from "../helpers/fake-data-helper"
import SectionHeader from "../components/SectionHeader"
import { useRef, useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchShopData } from "../store/shop-actions"
import { useParams } from "react-router"

const ViewMenu = () => {
  const dispatch = useDispatch()
  //const {shopId} = useParams();

  const shopId = useSelector(state=>state.shop.shopId);
  console.log(shopId);
  const items = useSelector(state => state.shop.items)

  const modalRef = useRef(null)

  const [openModal, setOpenModal] = useState(false)

  const viewOrder = id => {
    modalRef.current.open(id)
  }


  const showModal =  () => {
    //await dispatch(findItemById(itemId));
    console.log("show")
    setOpenModal(true)
  }

  const hideModal = () => {
    setOpenModal(false)
  }

  useEffect(() => {
    dispatch(fetchShopData(shopId))
  }, [dispatch, shopId])

  return (
    <>
      <SectionHeader
        title="View Menu"
        addItem={showModal}
      ></SectionHeader>
      {items && (
        <MenuItemList items={items} viewOrder={viewOrder}></MenuItemList>
      )}
      <MenuAddModal shopId={shopId} open={openModal} hideModal={hideModal}></MenuAddModal>
    </>
  )
}

export default ViewMenu
