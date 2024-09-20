import { Field, Label, Select } from "@headlessui/react";
import clsx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function ComboBox() {
  return (
    <Field>
      <Label className="font-medium text-black text-sm/6">Occupation</Label>
      <div className="relative rounded-md bg-black/5">
        <Select
          className={clsx(
            "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-black",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
            "*:text-black"
          )}
        >
          <option value="">Select</option>
          <option value="software-engineer">Software Engineer</option>
          <option value="doctor">Doctor</option>
          <option value="teacher">Teacher</option>
          <option value="graphic-designer">Graphic Designer</option>
        </Select>
        <ChevronDownIcon
          className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
          aria-hidden="true"
        />
      </div>
    </Field>
  );
}

export default ComboBox;
