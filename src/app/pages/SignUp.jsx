import { useHistory } from "react-router"
import { useState, useRef } from "react"
import useToast from "./../hooks/useToast"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import {
  Button,
  Image,
  Form,
  Grid,
  Segment,
  Container,
  Divider,
  Label,
  Icon,
} from "semantic-ui-react"
import { registerCustomer } from "../store/customer-actions"

const Login = () => {
  const history = useHistory()
  const [isShop, setIsShop] = useState(true)
  const { toastSuccess } = useToast()
  let shopId = localStorage.getItem("shopId")
  const imgRef = useRef()
  const fileRef = useRef()
  const nameRef = useRef()
  const phoneRef = useRef()
  const [enteredImg, setEnteredImg] = useState("../../img-default.png")
  const dispatch = useDispatch()

  const signIn = () => {
    history.push("/sign-in")
  }

  const toggleView = () => {
    setIsShop(!isShop)
  }

  const submit = async () => {
    toastSuccess("Create account successfully")

    if (isShop) {
      if (
        nameRef.current.value.length === 0 ||
        phoneRef.current.value.length === 0
      ) {
        return
      } else {
        console.log("admin")
        //call api
        let formData = new FormData()
        formData.append("Name", nameRef.current.value)
        formData.append("PhoneNumber", phoneRef.current.value)
        formData.append("Logo", fileRef.current.files[0])

        const response = await axios({
          method: "POST",
          url: "http://localhost:8080/api/Shop/register",
          data: formData,
        })

        if (response.status === 200) {
          //history.push("/admin/" + response.data.shopId);
          localStorage.setItem("shopId", response.data.shopId)
          history.push("/admin/" + response.data.shopId + "/view-orders")
        } else {
          //show errors
        }
      }
    } else {
      if (
        nameRef.current.value.length === 0 ||
        phoneRef.current.value.length === 0
      ) {
        return
      } else {
        dispatch(
          registerCustomer({
            name: nameRef.current.value,
            phoneNumber: phoneRef.current.value,
            shopId: shopId,
          })
        )
        history.push("/store");
      }
    }
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

  const chooseImage = () => {
    fileRef.current.click()
  }

  const label = isShop
    ? "Register as a customer?"
    : "Register as a store owner?"
  const labelName = isShop ? "Shop Number" : "Customer Name"

  return (
    <Container className="auth-form">
      <Image src="/logo/logo64.png" centered />
      <Grid columns="equal">
        <Grid.Column></Grid.Column>
        <Grid.Column width={6}>
          <Segment raised>
            <Label as="a" style={{ width: "100%" }} onClick={toggleView}>
              <Icon name="question circle" /> {label}
            </Label>
            <Divider />

            <Form>
              <input type="file" hidden ref={fileRef} onChange={changeImg} />
              <Form.Field>
                <label>{labelName}</label>
                <input
                  placeholder={labelName}
                  ref={nameRef}
                />
              </Form.Field>
              <Form.Field>
                <label>Phone Number</label>
                <input placeholder="Phone Number" ref={phoneRef} />
              </Form.Field>
              <Form.Field>
                <img
                  onClick={chooseImage}
                  width="150px"
                  ref={imgRef}
                  src={enteredImg}
                  alt=""
                />
              </Form.Field>
              <Button type="submit" color="green" fluid onClick={submit}>
                Register
              </Button>
            </Form>

            <Divider />
            <Label
              as="a"
              basic
              style={{ width: "100%" }}
              color="grey"
              onClick={signIn}
            >
              <Icon name="user" /> Already a member. Sign In
            </Label>
          </Segment>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid>
    </Container>
  )
}

export default Login
