/** @format */

'use client';

import { motion } from 'framer-motion';
import { cn } from './cn';
import clsx from 'clsx';
import PageAnimatePresence from '@/components/PageAnimatePresence';

const Modal = ({
  children,
  opened,
  handlers,
}: {
  children: React.ReactNode;
  opened: boolean;
  handlers: {
    open: () => void;
    close: () => void;
    toggle: () => void;
  };
}) => {
  return (
    <PageAnimatePresence>
      {opened && (
        <motion.div
          onClick={handlers.close}
          key="modal"
          initial={{ opacity: 0, y: -100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              bounce: 0.1,
            },
          }}
          exit={{
            opacity: 0,
            y: -100,
            transition: {
              type: 'spring',
              bounce: 0.1,
            },
          }}
          // onClick={(e) => e.stopPropagation()}
          // className={cn(
          //   'fixed inset-0 flex  items-center justify-center'
          // )}
          className={clsx(
            'fixed inset-0 z-50 flex cursor-pointer items-center justify-center overflow-y-scroll  p-8 backdrop-blur'
          )}
        >
          <div
            className="shadow-3xl rounded-[10px] max-w-[1160px] w-full bg-white"
            style={{ margin: '10px' }}
          >
            {children}
          </div>
        </motion.div>
      )}
    </PageAnimatePresence>
  );
};

export default Modal;
