import { Modal } from 'components/Modal/Modal';
import React, { FC } from 'react';

type SubscriptionModalPorps = {
  onClose: () => void;
};

export const SubscriptionModal: FC<SubscriptionModalPorps> = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <p>Тут буде текст! Колись...</p>
    </Modal>
  );
};
