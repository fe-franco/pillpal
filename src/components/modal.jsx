"use client";

import { Close } from "@radix-ui/react-dialog";
import { Dialog, DialogContent } from "./ui/dialog";
import Link from "next/link";

export const Modal = ({ closeHref, children }) => {
  return (
    <Dialog defaultOpen>
      <DialogContent className="sm:max-w-[425px]">
        <Close>
          <Link href={closeHref}>x</Link>
        </Close>
        {children}
      </DialogContent>
    </Dialog>
  );
};
