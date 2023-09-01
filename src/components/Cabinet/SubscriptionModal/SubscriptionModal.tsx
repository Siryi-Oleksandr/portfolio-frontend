import { Modal } from 'components/Modal/Modal';
import React, { FC } from 'react';
import { Subscription } from 'components';

type SubscriptionModalPorps = {
  onClose: () => void;
};

export const SubscriptionModal: FC<SubscriptionModalPorps> = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <Subscription />
    </Modal>
  );
};
