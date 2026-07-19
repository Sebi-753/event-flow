function EventChategory({ children }) {
  return (
    <li className="flex h-[10rem] grow items-center justify-center rounded-xl bg-white transition-shadow duration-300 hover:shadow-lg">
      {children}
    </li>
  );
}

export default EventChategory;
