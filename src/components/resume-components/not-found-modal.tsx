import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundModal = ({
  isError,
  errorStatus,
}: {
  isError: boolean;
  errorStatus: number | null | undefined;
}) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [countdown, setCountdown] = useState(5);

  const handleModalClose = useCallback(() => {
    onClose();
    navigate("/");
  }, [navigate, onClose]);

  useEffect(() => {
    let timeoutId: undefined | number;
    if (isError && errorStatus === 404) {
      timeoutId = setTimeout(onOpen, 1500);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isError, onOpen, errorStatus]);

  useEffect(() => {
    let countdownId: undefined | number;
    if (isOpen) {
      countdownId = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }
    return () => {
      clearInterval(countdownId);
    };
  }, [isOpen]);

  useEffect(() => {
    if (countdown === 0) {
      handleModalClose();
    }
  }, [countdown, handleModalClose]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={"red"}>User not found</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            The user with the specified username does not exist. You will be
            redirected back to the home page within {countdown} seconds.
          </ModalBody>

          <ModalFooter>
            <Button
              autoFocus
              onClick={handleModalClose}
              colorScheme="red">
              Redirect now
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NotFoundModal;
