import { useHistory } from "react-router"
import { useState } from "react"
import useToast from "./../hooks/useToast"
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

const Login = () => {
  const history = useHistory()
  const [isShop, setIsShop] = useState(true)
  const { toastSuccess } = useToast()

  const signUp = () => {
    history.push("/sign-up")
  }

  const toggleView = () => {
    setIsShop(!isShop)
  }

  const submit = () => {
    toastSuccess("Log in successfully")

    if (isShop) {
      history.push("/admin")
    } else {
      history.push("/")
    }
  }

  const label = isShop ? "Sign in as customer?" : "Sign in as store owner?"

  return (
    <Container className="auth-form">
      <Image src="/logo/logo64.png" centered />
      <Grid columns="equal">
        <Grid.Column></Grid.Column>
        <Grid.Column width={6}>
          <Label as="a" style={{ width: "100%" }} onClick={toggleView}>
            <Icon name="question circle" /> {label}
          </Label>
          <Divider />

          <Segment raised>
            <Form>
              <Form.Field>
                <label>Phone Number</label>
                <input placeholder="Phone Number" />
              </Form.Field>
              <Button type="submit" color="green" fluid onClick={submit}>
                Submit
              </Button>
            </Form>

            <Divider />
            <Label
              as="a"
              basic
              color="grey"
              style={{ width: "100%" }}
              onClick={signUp}
            >
              <Icon name="user plus" /> Don't have account? Register now
            </Label>
          </Segment>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid>
    </Container>
  )
}

export default Login
