import { useState } from "react";
import { motion } from "motion/react";

const gifts = ["MacBook", "PlayStation 5", "iPhone", "Samsung Galaxy", "iPad", "Apple Watch"];
const comments = [
  { name: "John Doe", country: "🇺🇸", time: "2 hours ago", comment: "I won an iPhone! Best game ever!" },
  { name: "Emma Smith", country: "🇬🇧", time: "5 hours ago", comment: "OMG! Got a MacBook!" },
  { name: "Raj Patel", country: "🇮🇳", time: "1 day ago", comment: "This is real! I got my PlayStation 5!" },
];

export default function GiftBoxGame() {
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  const [flippedBoxes, setFlippedBoxes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [wonGift, setWonGift] = useState(null);

  const handleBoxClick = (gift, index) => {
    if (selectedBoxes.length < 3 && !flippedBoxes.includes(index)) {
      setFlippedBoxes([...flippedBoxes, index]);
      const newSelection = [...selectedBoxes, { gift, index }];
      setSelectedBoxes(newSelection);
      if (newSelection.length === 3) {
        const allSame = newSelection.every((box) => box.gift === newSelection[0].gift);
        if (allSame) {
          setWonGift(newSelection[0].gift);
        }
        setTimeout(() => setModalOpen(true), 1000);
      }
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4 font-sans">
      <h2 className="text-2xl font-bold text-blue-700">🎁 Choose 3 Boxes 🎁</h2>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {gifts.map((gift, index) => (
          <motion.div
            key={index}
            className="w-24 h-24 flex items-center justify-center bg-yellow-300 cursor-pointer border border-gray-400 rounded"
            onClick={() => handleBoxClick(gift, index)}
            animate={{ rotateY: flippedBoxes.includes(index) ? 180 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {flippedBoxes.includes(index) ? gift : "🎁"}
          </motion.div>
        ))}
      </div>
      <dialog open={modalOpen} className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl font-bold text-blue-700">{wonGift ? "🎉 You Won!" : "😞 Try Again!"}</h2>
        {wonGift && <p className="text-lg mt-2">You secured a {wonGift}!</p>}
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded" onClick={() => setModalOpen(false)}>Close</button>
      </dialog>
      
      <div className="w-full max-w-2xl mt-8 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800">Recent Winners 🎉</h3>
        <div className="mt-4 space-y-4">
          {comments.map((c, index) => (
            <div key={index} className="flex items-center space-x-3 border-b pb-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-lg">
                {c.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-800">{c.name} {c.country}</p>
                <p className="text-gray-600 text-sm">{c.time}</p>
                <p className="text-gray-700">{c.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
