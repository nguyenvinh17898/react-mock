import { Breadcrumb, Button, Icon } from "semantic-ui-react"
import ModalUrl from "./ModalUrl"
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const SectionHeader = ({props, title, addItem }) => {
  const [openModalUrl, setOpenModalUrl] = useState(false);
  const [url, setUrl] = useState('');

  const {shopId} = useParams();
  const shop = useSelector((state) => state.shop);

  const switchResMode = () => {
    props.switchResMode();
  };

  const showModal = (admin = true) => {
    setOpenModalUrl(true);  
    if(admin){
      setUrl(window.location.href);
    }else{
      setUrl(window.location.host + "/store/" + shopId);
    }
  };

  const hideModal = () => {
    setOpenModalUrl(false);
    
  };
  return (
    <div className="section-header">
      <Breadcrumb>
        <Breadcrumb.Section>Admin</Breadcrumb.Section>
        <Breadcrumb.Divider icon="angle right" />
        <Breadcrumb.Section active>{title}</Breadcrumb.Section>
      </Breadcrumb>
      <Button
          icon
          
          className="fl-right"
          onClick={()=>showModal(false)}
          color="green"
        >
          <Icon name="plus" />
          Copy
        </Button>
      <Button
          icon
          
          className="fl-right"
          onClick={()=>showModal(true)}
          color="green"
        >
          <Icon name="plus" />
          Share
        </Button>
      {addItem && (
        <Button
          icon
          className="fl-right"
          onClick={addItem}
          color="green"
        >
          <Icon name="plus" />
          Add Item
        </Button>
      )}
      <ModalUrl open={openModalUrl} hideModal={hideModal} url={url} />
    </div>
  )
}

export default SectionHeader
