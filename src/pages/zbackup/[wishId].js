// pages/wishes/[wishId].js
import { useState } from 'react';
import { useRouter } from 'next/router';

const Wishes = () => {
  const [name, setName] = useState('');
  const festivalName = 'Holi'; // Replace with the actual festival name
  const festivalImage = '/festival.jpg'; // Replace with the path to your festival image

  const router = useRouter();
  const { wishId } = router.query;
  const wishesBy = `${wishId} is wishing you a happy ${festivalName}!`;
 

  const generateWhatsAppMessage = () => {
    const message = `${name} is wishing you a happy ${festivalName}!`;
    const imageUrl = `http://localhost:3000/${festivalImage}`;
    const wishUrl = `http://localhost:3000/wishes/${encodeURIComponent(
      name
    )}`;
    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      message + '\n\n' + wishUrl
    )}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <div>
<h1>{wishesBy}</h1>
      <h3>Share Your Festival Wishes</h3>
      <img src={festivalImage} alt={festivalName} />
      <form>
        <label>
          Your Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
      <button onClick={generateWhatsAppMessage}>Share on WhatsApp</button>
    </div>
  );
};

export default Wishes;
