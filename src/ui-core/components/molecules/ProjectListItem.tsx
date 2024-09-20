import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

function ProjectListItem({ ...props }) {
  const { projectName, description } = props;
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <li className="font-bold">
      {projectName}
      <div>
        <Button
          onClick={open}
          className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-black focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-black"
        >
          View More
        </Button>

        <Dialog
          open={isOpen}
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4">
              <DialogPanel
                transition
                className="w-full max-w-md rounded-xl bg-black p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
              >
                <DialogTitle
                  as="h3"
                  className="font-medium text-white text-base/7"
                >
                  What is this project?
                </DialogTitle>
                <p className="mt-2 text-white text-sm/6">{description}</p>
                <div className="mt-4">
                  <Button
                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-black/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-black data-[open]:bg-gray-700"
                    onClick={close}
                  >
                    Got it, thanks!
                  </Button>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </div>
    </li>
  );
}

export default ProjectListItem;
