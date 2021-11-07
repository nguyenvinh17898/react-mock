import { Modal, Button, Form } from "semantic-ui-react"
import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { addItem } from "../../store/shop-actions"

const MenuDetailModal = props => {
  console.log(props.open);
  const dispatch = useDispatch()
  const nameRef = useRef()
  const priceRef = useRef()
  const imgRef = useRef()
  const fileRef = useRef()
  const [enteredImg, setEnteredImg] = useState("../../img-default.png")

  const submitHandler = async () => {
    await dispatch(
      addItem({
        shopId: props.shopId,
        name: nameRef.current.value,
        price: priceRef.current.value,
        image: fileRef.current.files[0],
      })
    )
    setEnteredImg('../../img-default.png');
    props.hideModal(false);
  }

  const chooseImage = () => {
    fileRef.current.click()
  }

  const convertBase64 = () => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(fileRef.current.files[0])
    fileReader.onload = () => {
      var base64 = fileReader.result
      setEnteredImg(base64)
    }
  }

  const changeImg = () => {
    convertBase64()
    // imgRef.current.src = URL.createObjectURL(fileRef.current.files[0]);
  }

  return (
    <Modal
      //onClose={() => props.hideModal(false)}
      open={props.open}
      className="menu-modify-modal"
    >
      <Modal.Header>Modify Menu</Modal.Header>
      <Modal.Content image>
        <>
          <img
            onClick={chooseImage}
            width="150px"
            ref={imgRef}
            src={enteredImg}
            alt=""
          />
          <Modal.Description>
            <input type="file" hidden ref={fileRef} onChange={changeImg} />
            <Form size={"small"}>
              <Form.Field>
                <label>Name</label>
                <input placeholder="Name" ref={nameRef} />
              </Form.Field>
              <Form.Field>
                <label>Price</label>
                <input placeholder="Price" ref={priceRef} />
              </Form.Field>
            </Form>
          </Modal.Description>
        </>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={()=>props.hideModal(false)}>
          Close
        </Button>
        <Button
          content="Submit"
          labelPosition="right"
          icon="checkmark"
          onClick={submitHandler}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default MenuDetailModal
