// pages/wishes/[wishId].js
"use-client";
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Wishes.module.css';

const Wishes = () => {
  console.log("envv",process.env.NEXT_PUBLIC_APP_URL,styles)
  const [name, setName] = useState('');
  const festivalName = 'Diwali'; // Replace with the actual festival name
  const festivalImageUrl = '/festival.jpg'; // Replace with the URL of your festival image
  const festivalImageUrl2 = `${process.env.NEXT_PUBLIC_APP_URL}/festival.jpg`; 
  const router = useRouter();
  const { wishId } = router.query;

  const generateShareLink = () => {
    const wishUrl = `${process.env.NEXT_PUBLIC_APP_URL}/wishes/${encodeURIComponent(
      name
    )}`;
    return wishUrl;
  };

  const openWhatsApp = () => {
    const message = `${name} is wishing you a happy ${festivalName}!`;
    const wishUrl = generateShareLink();

    // Include the image URL in the WhatsApp message
    const whatsappMessage = `${encodeURIComponent(
      message
    )}%0A${encodeURIComponent(wishUrl)}%0A${encodeURIComponent(festivalImageUrl2)}`;

    // Construct the WhatsApp share link
    const whatsappLink = `https://wa.me/?text=${whatsappMessage}`;

    // Open WhatsApp with the share link
    window.open(whatsappLink, '_blank');
  };

  return (
    <div>
      <h1>Share Your Festival Wishes</h1>
      <div className={styles['image-container']}>
      <img src={festivalImageUrl} alt={festivalName} />
      </div>
      <form>
      <div className={styles['input-container']}>
          <label>Your Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          </div>
      </form>
      <p>Share your wishes:</p>
      {/* <input type="text" value={generateShareLink()} readOnly /> */}
      <div className={styles['button-container']}>
        <button onClick={openWhatsApp}>Share on WhatsApp</button>
      </div>
    </div>
  );
};

export default Wishes;
