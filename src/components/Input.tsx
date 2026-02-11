function Input() {
  return (
    <div className="mt-15 gap-2 flex items-center justify-center">
      <input
        type="text"
        className="w-99.5 h-9.5 px-3 py-4 tracking-normal  border border-[#D1D5DB] rounded placeholder:text-sm placeholder:pl-2"
        placeholder="e.g beans"
        name="ingredient"
      />
      <button className="bg-black text-white leading-5 font-sans h-9.5 rounded hover:scale-105 hover:cursor-pointer">
        <p className="px-3 text-sm"> + Add Ingredient</p>
      </button>
    </div>
  );
}

export default Input;
