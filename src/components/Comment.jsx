
const comments = [
  {
    id: 1,
    name: "Kapil Thapa",
    country: "",
    time: "2h ago",
    dp: "https://images.unsplash.com/photo-1584257942206-4fab65fa7cfd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TmVwYWxpfGVufDB8fDB8fHww",
    comment:
      "I still can't believe I won an iPhone 15 Pro Max in the giveaway! Thank you so much! It's an amazing device! 📱❤️",
  },
  {
    id: 2,
    name: "Sophia Lee",
    country: "🇬🇧",
    time: "5h ago",
    dp: "https://plus.unsplash.com/premium_photo-1689551671548-79ff30459d2a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D",
    comment:
      "Just received my MacBook Air! This giveaway was 100% real. So grateful! 😍💻",
  },
  {
    id: 3,
    name: "Apsan Rai",
    country: "np",
    time: "1d ago",
    dp: "https://images.unsplash.com/photo-1639563854554-fe1c7f791fb6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fE5lcGFsaXxlbnwwfHwwfHx8MA%3D%3D",
    comment:
      "Best surprise ever! Got my iPhone today, and it's perfect. Thank you for this amazing opportunity! 🎉🙌",
  },
  {
    id: 4,
    name: "Emma Wilson",
    country: "🇨🇦",
    time: "3h ago",
    dp: "https://plus.unsplash.com/premium_photo-1682095643806-79da986ccf8d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D",
    comment:
      "Received my MacBook Pro today! So thankful for this giveaway. It's truly life-changing! 💖💻",
  },
  {
    id: 5,
    name: "Liam Brown",
    country: "🇦🇺",
    time: "6h ago",
    dp: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D",
    comment:
      "The iPhone 15 Pro is stunning! Huge thanks for making this possible. Feeling so lucky! 🍀📱",
  },
  {
    id: 6,
    name: "Olivia Martin",
    country: "🇫🇷",
    time: "8h ago",
    dp: "https://plus.unsplash.com/premium_photo-1689629941068-d63f36e8bb8d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D",
    comment:
      "I was skeptical at first, but I actually received my giveaway prize! Thank you so much! 🥳🎁",
  },
  {
    id: 7,
    name: "Noah Schmidt",
    country: "🇩🇪",
    time: "12h ago",
    dp: "https://plus.unsplash.com/premium_photo-1690579805323-ce7193c0755d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D",
    comment:
      "My brand new MacBook arrived today! Thank you for the opportunity. Truly appreciate it! 🙏💻",
  },
  {
    id: 8,
    name: "Ava Rossi",
    country: "🇮🇹",
    time: "1d ago",
    dp: "https://images.unsplash.com/photo-1493106819501-66d381c466f1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG90cmFpdHN8ZW58MHx8MHx8fDA%3D",
    comment:
      "Absolutely loving my iPhone 15 Pro Max! The giveaway was legit, and I'm so happy! ❤️📱",
  },
  {
    id: 9,
    name: "Ethan Wang",
    country: "🇨🇳",
    time: "2d ago",
    dp: "https://images.unsplash.com/photo-1611682060613-597ef6d1464b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvdHJhaXRzfGVufDB8fDB8fHww",
    comment:
      "Huge shoutout to the team for this giveaway! Got my MacBook and it's incredible! 🔥💻",
  },
  {
    id: 10,
    name: "Isabella Kim",
    country: "🇰🇷",
    time: "3d ago",
    dp: "https://images.unsplash.com/photo-1493106819501-66d381c466f1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG90cmFpdHN8ZW58MHx8MHx8fDA%3D",
    comment:
      "This giveaway was real! Thank you so much for my new iPhone. It's a dream come true! 🎊📱",
  },
];

const Comment = () => {
  return (
    <div className="max-w-lg mx-auto bg-blue-50 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Comments</h2>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-3 items-start">
            <img
              src={comment.dp}
              alt={comment.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1 bg-gray-200 p-3 rounded-lg">
              <div className="flex justify-between items-center">
                <p className="font-semibold">
                  {comment.name} <span className="text-sm">{comment.country}</span>
                </p>
                <span className="text-xs text-gray-500">{comment.time}</span>
              </div>
              <p className="text-gray-700 mt-1">{comment.comment}</p>
              <div className="flex space-x-2 text-sm text-gray-500 mt-2">
                <button className="hover:underline text-red-500 cursor-pointer">👍Like</button>
                <button className="hover:underline text-blue-500 cursor-pointer">💭Reply</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="cursor-pointer hover:underline text-blue-500">Load More...</p>
    </div>
  );
};

export default Comment;
