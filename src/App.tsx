import './App.css';
import Layout from './Component/Layout';
import ConnectButton from './Component/ConnectButton';
import AccountModal from './Component/AccountModal';
import { useDisclosure } from '@chakra-ui/react';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <div className="App">
      <Layout>
      <ConnectButton handleOpenModal={onOpen} />
        <AccountModal isOpen={isOpen} onClose={onClose} />
      </Layout>
    </div>
  );
}

export default App;
