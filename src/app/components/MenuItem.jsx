import { Button, Grid, Icon, Image, List } from "semantic-ui-react"
import { formatCurrency } from "./../helpers/number-helper"
import { useDispatch } from "react-redux"
import { deleteItem } from "../store/shop-actions"
import MenuDetailModal from "../pages/ViewMenu/MenuDetailModal"
import { useState } from "react"
import { updateItem } from "../store/shop-actions"

const MenuItem = ({ item, viewOrder, addToCart }) => {
  const dispatch = useDispatch();
  const { image, name, price, shopId, itemId } = item

  const [openModal, setOpenModal] = useState(false)

  const deleteHandler = ()=>{
    dispatch(deleteItem(shopId, itemId))
  }

  const showModal =  () => {
    //await dispatch(findItemById(itemId));
    console.log(itemId)
    setOpenModal(true)
  }

  const hideModal = () => {
    setOpenModal(false)
  }

  const updateHandler = (name, price, image)=>{
    dispatch(updateItem({
      shopId: shopId,
      itemId: itemId,
      name: name,
      price: price,
      image:image
    }))
  }

  return (
    <>
       <MenuDetailModal update={updateHandler} itemId={itemId} name={name} price={price} image={image} shopId={shopId} open={openModal} hideModal={hideModal}></MenuDetailModal>
       <List.Item className="menu-item">
      <List.Content>
        <Grid>
          <Grid.Column width={4}>
            <Image rounded src={`data:image/png;base64, ${image}`} />
          </Grid.Column>
          <Grid.Column width={10}>
            <List.Header as="a">{name}</List.Header>
            <List.Header>{formatCurrency(price)}</List.Header>
          </Grid.Column>
          <Grid.Column width={2}>
            <div className="menu-item_actions">
             {viewOrder && (
               <>
               <Button
                 icon
                 color="blue"
                 onClick={showModal}
                 title="Modify Item"
               >
                 <Icon name="pencil" />
               </Button>
               <Button icon color="red" title="Delete Item">
                 <Icon name="delete" onClick={deleteHandler} />
               </Button>
             </>
             )}
                
              

              {addToCart && (
                <Button
                  icon
                  color="green"
                  onClick={() => addToCart(shopId)}
                  title="Add to Cart"
                >
                  <Icon name="cart plus" />
                </Button>
              )}
            </div>
          </Grid.Column>
        </Grid>
      </List.Content>
    </List.Item>
    </>
  )
}

export default MenuItem
