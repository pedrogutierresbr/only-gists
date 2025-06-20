export default {
  root: {
    class: [
      'min-w-[12rem]',
      'rounded-md',
      'py-2',
      'px-2',
      'bg-surface-0 dark:bg-surface-700',
      'text-surface-700 dark:text-white/80',
      'border border-surface-200 dark:border-surface-700'
    ]
  },
  list: {
    class: ['list-none', 'm-0', 'p-0', 'outline-none']
  },
  item: {
    class: 'hover:bg-surface-100 dark:hover:bg-surface-600 cursor-pointer rounded transition-colors'
  },
  itemcontent: {
    class: 'px-5 py-3 flex items-center'
  },
  itemlink: {
    class: 'flex items-center w-full no-underline text-surface-700 dark:text-white/80'
  },
  itemicon: {
    class: 'mr-2 text-surface-600 dark:text-white/70'
  },
  itemlabel: {
    class: 'leading-none'
  },
  separator: {
    class: 'border-t border-surface-200 dark:border-surface-600 my-1 mx-2'
  }
}
