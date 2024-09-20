// React Icons
import { CgProfile } from "react-icons/cg";
import { MdManageAccounts } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiLogout } from "react-icons/ci";

// Headless UI Componentes
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

function UserProfileButton() {
  return (
    <div className="text-right top-24 w-52">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold text-black shadow-inner shadow-black/10 focus:outline-none data-[hover]:bg-slate-400 data-[open]:bg-slate-400 data-[focus]:outline-1 data-[focus]:outline-black">
          Profile
          <ChevronDownIcon className="size-4 fill-black/60" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-black/5 bg-black/5 p-1 text-sm/6 text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-black/10">
              <CgProfile className="size-4 fill-black/30" />
              View Profile
              <kbd className="ml-auto hidden font-sans text-xs text-black/50 group-data-[focus]:inline">
                ⌘E
              </kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-black/10">
              <MdManageAccounts className="size-4 fill-black/30" />
              Account Settings
              <kbd className="ml-auto hidden font-sans text-xs text-black/50 group-data-[focus]:inline">
                ⌘D
              </kbd>
            </button>
          </MenuItem>
          <div className="h-px my-1 bg-black/5" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-black/10">
              <IoIosNotificationsOutline className="size-4 fill-black/30" />
              Notifications
              <kbd className="ml-auto hidden font-sans text-xs text-black/50 group-data-[focus]:inline">
                ⌘A
              </kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-black/10">
              <CiLogout className="size-4 fill-black/30" />
              Logout
              <kbd className="ml-auto hidden font-sans text-xs text-black/50 group-data-[focus]:inline">
                ⌘D
              </kbd>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}

export default UserProfileButton;
