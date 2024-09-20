import { Button } from "@headlessui/react";

function ButtonComponent({ ...props }) {
  const { title } = props;
  return (
    <Button className="inline-flex items-center gap-2 rounded-md bg-gray-200 py-1.5 px-3 text-sm/6 font-semibold text-black shadow-inner shadow-black/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-black w-44 justify-center">
      {title}
    </Button>
  );
}

export default ButtonComponent;
