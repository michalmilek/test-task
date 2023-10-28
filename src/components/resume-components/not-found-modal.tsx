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
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { routesOb } from "src/router/routes";

const NotFoundModal = ({
  isError,
  errorStatus,
}: {
  isError: boolean;
  errorStatus: number | null | undefined;
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [countdown, setCountdown] = useState(5);

  const handleModalClose = useCallback(() => {
    onClose();
    navigate(routesOb.home.path);
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
          <ModalHeader color={"red"}>{t("modal.notFound")}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{t("modal.description", { countdown })}</ModalBody>

          <ModalFooter>
            <Button
              autoFocus
              onClick={handleModalClose}
              colorScheme="red">
              {t("modal.redirect")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NotFoundModal;
