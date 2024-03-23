interface IconInputProps {
  state: string;
  setState: (value: string) => void;
  icon: string;
  type: string;
  label: string;
}
export const IconInput = ({
  state,
  setState,
  type,
  icon,
  label,
}: IconInputProps) => {
  return (
    <label className="relative ">
      <span className="sr-only">{label}</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <img src={icon} alt="Input Icon" className="w-5 text-white" />
      </span>
      <input
        type={type}
        placeholder={label.toUpperCase()}
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="w-full h-11 p-2 border border-white rounded bg-transparent indent-11
            placeholder-white placeholder-opacity-80 placeholder:text-sm placeholder:font-thin placeholder:tracking-wider"
      />
    </label>
  );
};
