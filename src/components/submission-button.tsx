import { Button } from "@radix-ui/themes";
import { AnimatePresence, motion } from "motion/react";
import { AppleSpinner } from "./ui/apple-spinner";

interface SubmissionButtonProps {
  submissionState: "idle" | "pending" | "success" | string;
  handleSubmit: () => void;
}

const SubmissionButton = ({
  submissionState,
  handleSubmit,
}: SubmissionButtonProps) => {
  return (
    <Button
      className="border-b-1 border-l-1 border-r-1 relative inline-flex h-6 w-[104px] overflow-hidden rounded-lg border-blue-500 bg-gradient-to-b from-[#157cff] to-[#1994ff] px-2 py-1 text-xs text-white"
      onClick={handleSubmit}
      size="2"
      style={{
        boxShadow:
          "0px 0px 1px 1px rgba(255, 255, 255, 0.08) inset, 0px 1px 1.5px 0px rgba(0, 0, 0, 0.32), 0px 0px 0px 0.5px #1a94ff",
      }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          transition={{
            type: "spring",
            duration: 0.3,
            bounce: 0,
          }}
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 25 }}
          key={submissionState}
        >
          {submissionState === "pending" ? (
            <AppleSpinner size={14} color="rgba(255, 255, 255, 0.65)" />
          ) : (
            <span className="drop-shadow-sm">Send Feedback</span>
          )}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
};

export default SubmissionButton;
