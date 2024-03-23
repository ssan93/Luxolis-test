interface WrongCredentialModalProps {
  setOpen: (value: boolean) => void;
}
export const WrongCredentialModal = ({
  setOpen,
}: WrongCredentialModalProps) => {
  return (
    <>
      <div
        className="w-full h-full bg-black bg-opacity-50 fixed"
        onClick={() => setOpen(false)}
      />
      <div className="fixed z-50 bg-white rounded-lg p-2 pr-3">
        <button className="ml-auto block" onClick={() => setOpen(false)}>
          <span className="text-black h-6 w-6 text-2xl font-semibold">×</span>
        </button>
        <p className="px-5 pb-5">The provided password is wrong</p>
      </div>
    </>
  );
};
