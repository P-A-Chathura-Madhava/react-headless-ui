import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";

function InputField({ ...props }) {
  const { labelTitle } = props;

  return (
    <Field>
      <Label className="font-medium text-black text-sm/6">{labelTitle}</Label>
      <Input
        className={clsx(
          "block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
        )}
      />
    </Field>
  );
}

export default InputField;
