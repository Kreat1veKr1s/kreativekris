import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/AcZssZ1FqhARUyOuJU8fWs0Dcb5c2l5Xa3nMics-sMo=?gv=true";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingDialog = ({ open, onOpenChange }: BookingDialogProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-[600px] max-h-[85vh] p-0 overflow-hidden">
      <VisuallyHidden>
        <DialogTitle>Book an Appointment</DialogTitle>
      </VisuallyHidden>
      <iframe
        src={BOOKING_URL}
        className="w-full h-[75vh] border-0 rounded-lg"
        title="Book an appointment"
        allow="clipboard-write"
      />
    </DialogContent>
  </Dialog>
);

export const useBookingDialog = () => {
  const [open, setOpen] = useState(false);
  return { open, setOpen, openBooking: () => setOpen(true) };
};

export default BookingDialog;
