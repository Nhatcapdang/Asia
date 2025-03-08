/** @format */

import { useState } from 'react'
import { AnimatePresence, Variants, motion } from 'framer-motion'

import styles from './App.module.css'
import { TABS } from '@/contants'

const tabContentVariants: Variants = {
  initial: {
    y: 10,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -10,
    opacity: 0,
  },
}

function Tabs() {
  const [activeTab, setActiveTab] = useState<any>(TABS[0])

  const handleClick = (e: any, tab: any) => {
    e.preventDefault()

    setActiveTab(tab)
  }

  const isSelected = (tab: any) => activeTab.name === tab.name

  return (
    <div className="overflow-hidden flex flex-col">
      <div className="flex gap-[17px] overflow-auto">
        {TABS.map((tab, idx) => (
          <div
            key={idx}
            className={
              [styles.tabItem, isSelected(tab) ? styles.selected : ''].join(
                ' '
              ) + 'rounded-[5px] flex-1 text-white  min-w-max w-full '
            }
            style={{
              background: '#8BD3FF',
              minHeight: '60px',
            }}
          >
            {isSelected(tab) && (
              <motion.div layoutId="indicator" className={styles.indicator} />
            )}
            <a
              href="#"
              onClick={(e: any) => handleClick(e, tab)}
              className="justify-center px-4 py-2 text-center h-full flex items-center text-2xl max-mobile:text-base  w-full min-w-min"
              style={{
                minWidth: 'max-content',
              }}
            >
              {tab.label}
            </a>
          </div>
        ))}
      </div>

      <div className={styles.tabContent}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.name || 'empty'}
            variants={tabContentVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{
              duration: 0.3,
            }}
          >
            {activeTab && activeTab?.render()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Tabs
