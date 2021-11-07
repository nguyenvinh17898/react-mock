import QRCode from "qrcode.react";
import { Button, Modal } from "semantic-ui-react";

const ModalUrl = (props) => {
  const qrCode = (
    <div>
      <QRCode
        id="qrcode"
        value={props.url}
        size={290}
        level={"H"}
        includeMargin={true}
      />
    </div>
  );

  return (
    <Modal open={props.open} onClose={() => props.hideModal(false)} size="mini">
      <Modal.Header>Share Link</Modal.Header>
      <Modal.Content>
        <Modal.Description style={{ "text-align": "center" }}>
          <div>{props.url}</div>
          <div>{qrCode}</div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => props.hideModal(false)}>OK</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalUrl;
