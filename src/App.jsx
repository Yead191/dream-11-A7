/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import AllPlayers from './components/AllPlayers'
import Banner from './components/banner'
import Navbar from './components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  const [isActive, setIsActive] = useState({
    available: true,
    status: 'available'
  })

  const [selectedPlayer, setSelectedPlayer] = useState([])

  const [wallet, setWallet] = useState([0])

  const claimCredit = (tk) => {
    toast.success('5000000 Taka added in you wallet Successfully!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });

    const newCredit = parseFloat(wallet + 5000000)

    setWallet(newCredit)

  }
  const handleBuyPlayer = (pr) => {
    const balance = parseFloat(wallet - pr)
    setWallet(balance)

  }
  const handleRemovePlayer = (id) => {
    const player = selectedPlayer.find((p) => p.playerId == id)
    const price = parseFloat(player.biddingPrice)
    const finalBalance2 = (wallet + price)

    setWallet(finalBalance2)


  }

  const handleDelete = (id) => {
    toast.success('Player removed successfully!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    handleRemovePlayer(id)

    const remainingPlayers = selectedPlayer.filter((p) => p.playerId != id)
    setSelectedPlayer(remainingPlayers)

  }



  const handleChoosePlayer = (player) => {
    const ifExist = selectedPlayer.find((p) => p.playerId == player.playerId)

    if (ifExist) {
      // toast('already exist')
      toast.error('You Have Already Selected This Player!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    }
    else if (player.biddingPrice > wallet) {
      // toast('tmr aukat er bahire eta')
      toast.error(`You don't have enough money in your wallet! Claim free credit first.`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

    }
    else if (selectedPlayer.length > 5) {
      // toast('6 jon er besi mal allow na')
      toast.warn('You can only select up to 6 players. Please remove a player to add another.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    }
    else {
      toast.success(`You have purchased ${player.name} successfully!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      handleBuyPlayer(player.biddingPrice)
      const newSelectedPlayer = [...selectedPlayer, player]
      setSelectedPlayer(newSelectedPlayer)

    }



  }








  const handleActiveState = (status) => {
    if (status == 'available') {
      setIsActive({
        available: true,
        status: 'available'
      })

    }
    else {
      setIsActive({
        available: false,
        status: 'selected'
      })

    }
  }
  // console.log(isActive);

  return (
    <>
      <body className='w-11/12 mx-auto my-12 mb-60 '>
        <Navbar wallet={wallet}></Navbar>
        <Banner claimCredit={claimCredit} ></Banner>
        <AllPlayers handleDelete={handleDelete} selectedPlayer={selectedPlayer} handleChoosePlayer={handleChoosePlayer} isActive={isActive} handleActiveState={handleActiveState}></AllPlayers>


      </body>
      {/* <Newsletter></Newsletter> */}
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce/>

    </>


  )
}

export default App
