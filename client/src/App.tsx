import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import { Layout, Row, Col, Button, Spin } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { Network, Provider } from "aptos";


export const provider = new Provider(Network.TESTNET);
// change this to be your module account address
export const moduleAddress = "0xeb82587faa0e7ba632c4c0ffd640c6821c42a4fa632b7a1061a6d7357bc27e53";

function App() {
  const { account, signAndSubmitTransaction } = useWallet();
  const [counter, setCounter] = useState<number>(0);
  const [transactionInProgress, setTransactionInProgress] = useState<boolean>(false);
  const [reload, setReload] = useState<number>(0);

  const fetch = async () => {
    if (!account) return;
    try {
      const todoListResource = await provider.getAccountResource(
        account?.address,
        `${moduleAddress}::increase::Count`,
      );
      let data = JSON.parse((todoListResource?.data as any).count);
      setCounter(data);
      if(reload){
        window.location.reload();
      }
    }
    catch (e: any) {
      create_c();
    }
  }

  const create_c = async () => {
    if (!account) return [];
    setTransactionInProgress(true);
    // build a transaction payload to be submited
    const payload = {
      type: "entry_function_payload",
      function: `${moduleAddress}::increase::createcounter`,
      type_arguments: [],
      arguments: [],
    };
    try {
      // sign and submit transaction to chain
      const response = await signAndSubmitTransaction(payload);
      // wait for transaction
      await provider.waitForTransaction(response.hash);
    } catch (error: any) {
      console.log(error);
    } finally {
      setTransactionInProgress(false);
    }
  };

  const raise_cCounter = async () => {
    setTransactionInProgress(true);
    // build a transaction payload to be submited
    const payload = {
      type: "entry_function_payload",
      function: `${moduleAddress}::increase::raise_c`,
      type_arguments: [],
      arguments: [],
    };
    try {
      // sign and submit transaction to chain
      const response = await signAndSubmitTransaction(payload);
      // wait for transaction
      await provider.waitForTransaction(response.hash);
      window.location.reload();
    } catch (error: any) {
      console.log(error);
      // setAccountHasList(false);
    } finally {
      setTransactionInProgress(false);
    }
  };

  //Runs one Time
  useEffect(() => {
    fetch();
  }, [account?.address]);

  const timer = () => { setInterval(() => { setReload(1); fetch() }, 5000); }

  //Runs every 5 second
  useEffect(() => {
    timer();
  }, [account?.address]);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div style={{ margin: 0, padding: 0 }}>
    <div style={{
      height: '100vh',     
      background: 'linear-gradient(to right, #3498db, #2ecc71)',
      fontFamily: 'Arial, sans-serif',
      color: '#fff'
    }}>
      <Layout style={{ backgroundColor: "black" }}>
        <Row align="middle" justify="space-between">
          <Col>
            <h1 style={{color: "#ffff" , margin:"10px"}}>Fun click - play to increment the count</h1>
          </Col>
          <Col style={{ textAlign: "right" , margin:"10px"  }}>
            <WalletSelector />
          </Col>
        </Row>
      </Layout>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", backgroundColor: "#ecf0f1" , borderRadius:"10px"}}>
        <Spin spinning={transactionInProgress}>
          <Row style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
            <Col>
            <div
                style={{
                  position: "relative",
                  width: "200px",
                  height: "200px",
                  overflow: "hidden",
                }}
              >
              <Button
                disabled={!account}
                block
                onClick={raise_cCounter}
                type="primary"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  borderRadius: "50%",  // Circular shape
                  width: "200px",
                  height: "200px",
                  backgroundColor: isHovered ? "#34495e" : "#2c3e50",  // Change color on hover
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "background-color 0.3s ease-in-out"
                }}
                
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
              >
                <p style={{ fontSize: "20px", color: "#ffff" }}>Increase your count!</p>
              </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <p style={{ fontSize: "40px", fontFamily:"roboto", textAlign: "center" , margin :"20px",color : "black"}}>Clicks you made: {counter}</p>
            </Col>
          </Row>
        </Spin>
      </div>
      <div style={{ position: "absolute", top: "70%", left: "40%"}}>
        <p>
          <br />
          <br />
          <b>Steps to Play the game</b>
          
          <li>1. Install petra wallet.</li>
          <li>2. Connect your wallet.</li>
          <li>3. Make sure to swtich your network to Testnet.</li>
          <li>4. You are ready to go !</li>
          <li>5. Click the above Button and aprrove the transaction.</li>
          
        </p>
      </div>
      </div>
      </div>
  );
  
}

export default App;
