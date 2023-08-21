import { Modal } from 'components/Modal/Modal';
import React, { FC } from 'react';
import {
  Link,
  SubscriptionBtn,
  SubscriptionList,
  SubscriptionWrap,
} from './SubscriptionModal.styled';

type SubscriptionModalPorps = {
  onClose: () => void;
  showModal: boolean;
};

export const SubscriptionModal: FC<SubscriptionModalPorps> = ({
  onClose,
  showModal,
}) => {
  return (
    <Modal onClose={onClose} showModal={showModal}>
      <SubscriptionWrap>
        <h2>"Start" vs "Pro" Subscription for Your Bankfolio</h2>
        <p>
          Welcome to our innovative web service for creating and organizing your
          projects! We offer two subscription levels - "Start" and "Pro,"
          designed to cater to the diverse needs and ambitions of our users.
          Let's explore the unique features of each:
        </p>
        <h3>"Start" Subscription:</h3>
        <h4>
          With the "Start" subscription, you get a basic set of features that
          allow you to manage your projects easily and efficiently. You'll have
          possibility:
        </h4>
        <SubscriptionList>
          <li>Create your portfolio and share with the others.</li>
          <li>Save 5 your projects.</li>
          <li>Search for other users and their projects.</li>
          <li>Easy and fast searching of other users or their projects.</li>
        </SubscriptionList>
        <h3>"Pro" Subscription:</h3>
        <h4>
          By subscribing to the "Pro" level, you unlock the full potential of
          our service. With the "Pro" subscription, you'll have everything that
          "Start" offers, plus:
        </h4>
        <SubscriptionList>
          <li>
            Unlimited project creation and storage. Your ideas and plans will no
            longer be limited by the number of available slots.
          </li>
          <li>
            The ability to upload images without quality loss. This means you
            can confidently share screenshot of your projects without worrying
            about reducing their resolution.
          </li>
        </SubscriptionList>
        <p>
          If you wish to purchase the "Pro" subscription, you need to{' '}
          <b style={{ color: '#FE390C' }}>
            make a donation of at least 50 UAH to{' '}
            <Link
              href="https://send.monobank.ua/jar/5hm2RbSNYT"
              target="blank"
              rel="noreferrer noopener"
            >
              "Monobank"
            </Link>
            .
          </b>{' '}
          Take a screenshot of the payment and send it to us via{' '}
          <Link href="mailto:commitmakers@gmail.com" target="blank">
            commitmakers@gmail.com
          </Link>{' '}
          or{' '}
          <Link href="https://t.me/Siryi_Oleksandr" target="blank">
            Telegram
          </Link>
          . After verification, your subscription will be changed to "Pro." This
          process may take some time, thank you for your understanding.
        </p>
        <p>
          The donations we receive are used to maintain the functionality of our
          website and to cover server expenses. Thank you for your support!
        </p>
        <p>
          Please let us know if you need anything else or if you have any
          further questions.{' '}
          <Link href="mailto:commitmakers@gmail.com" target="blank">
            commitmakers@gmail.com
          </Link>
        </p>
        <SubscriptionBtn
          href="https://send.monobank.ua/jar/5hm2RbSNYT"
          target="blank"
          rel="noreferrer noopener"
        >
          Get "Pro" Subscription
        </SubscriptionBtn>
      </SubscriptionWrap>
    </Modal>
  );
};
