import { IconContext } from 'react-icons';
import { AiOutlineMenu } from 'react-icons/ai';

export default function Menu() {
  return (
    <IconContext.Provider value={{ size: '20px', style: { color: '#247e5b' } }}>
      <AiOutlineMenu />
    </IconContext.Provider>
  );
}
