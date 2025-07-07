export default function EditionSelector({ editions, selectedId, onSelect }) {
  return (
    <div className="bg-[#eeeeee] p-2 rounded-lg flex gap-2 justify-center flex-wrap">
      {editions.map((ed) => (
        <button
          key={ed.id}
          onClick={() => onSelect(ed.id)}
          className={`w-10 h-10 rounded-full text-lg font-bold border transition ${
            selectedId === ed.id
              ? 'bg-black text-white'
              : 'bg-white text-gray-800 hover:bg-gray-200'
          }`}
        >
          {ed.number}
        </button>
      ))}
    </div>
  );
}
