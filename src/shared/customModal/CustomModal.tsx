import * as Styled from "./style"

interface Iprops{
  show:any;
  toggleModal?:any;
  borderRadius?:any;
  heading?:any;
  styles?:any;
  children:React.ReactNode
}

export const CustomModal = (props: Iprops) => {
  const { show, toggleModal, borderRadius, heading, styles } =
    props;
  const handleClickOutside = (e: any) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return (
    <Styled.ModalBody
      show={show}
      onMouseDown={handleClickOutside}
      style={{ ...styles }}
    >
      <Styled.ModalContent borderRadius={borderRadius}>
        <Styled.ModelHead>
          <h2>
            {heading}
          </h2>
          {/* <Close
            onClick={() => toggleModal(!show)}
            src={require("../../assets/icons/cross.svg").default}
          /> */}
          {/* <span  onClick={() => toggleModal(!show)}>close</span> */}
        </Styled.ModelHead>
        {props.children}
      </Styled.ModalContent>
    </Styled.ModalBody>
  );
};

