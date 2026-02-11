function Input() {
  const handleSubmit = (formdata: FormData) => {
    const value = formdata.get(`ingredient`);
    console.log(value);
  };

  return (
    <div className="mt-15 gap-2 flex items-center justify-center">
      <form action={handleSubmit}>
        <input
          type="text"
          aria-label="add ingredient"
          className="w-99.5 h-9.5 px-3 py-4 tracking-normal  border border-[#D1D5DB] rounded placeholder:text-sm placeholder:pl-2"
          placeholder="e.g beans"
          name="ingredient"
        />
        <button
          type="submit"
          className="bg-black px-3 text-sm text-white leading-5 font-sans h-9.5 rounded hover:scale-105 hover:cursor-pointer"
        >
          Add Ingredient
        </button>
      </form>
    </div>
  );
}

export default Input;
