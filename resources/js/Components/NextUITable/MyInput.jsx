import React, { forwardRef, useState } from 'react'
import { useInput } from '@nextui-org/react'
import { SearchIcon } from './SearchIcon'
import { CloseFilledIcon } from './CloseFilledIcon'

const styles = {
  label: 'text-black/50 dark:text-white/90',
  input: [
    'bg-transparent',
    'text-black/90 dark:text-white/90',
    'placeholder:text-default-700/50 dark:placeholder:text-white/60',
  ],
  innerWrapper: 'bg-transparent',
  inputWrapper: [
    'shadow-xl',
    'bg-default-200/50',
    'dark:bg-default/60',
    'backdrop-blur-xl',
    'backdrop-saturate-200',
    'hover:bg-default-200/70',
    'focus-within:!bg-default-200/50',
    'dark:hover:bg-default/70',
    'dark:focus-within:!bg-default/60',
    '!cursor-text',
  ],
}

const MyInput = forwardRef((props, ref) => {
  const [search, setSearch] = useState('')
  const [timeoutId, setTimeoutId] = useState(null)

  const handleChange = (event) => {
    const newSearchValue = event.target.value
    setSearch(newSearchValue)

    // Clear any existing timeout before setting a new one
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    const newTimeoutId = setTimeout(() => {
      // Update state with the latest value after the delay
      setSearch(newSearchValue)
      console.log(newSearchValue)
    }, 500) // Adjust delay (in milliseconds) as needed

    setTimeoutId(newTimeoutId)
  }
  const {
    Component,
    label,
    domRef,
    description,
    isClearable,
    startContent,
    endContent,
    shouldLabelBeOutside,
    shouldLabelBeInside,
    errorMessage,
    getBaseProps,
    getLabelProps,
    getInputProps,
    getInnerWrapperProps,
    getInputWrapperProps,
    getDescriptionProps,
    getErrorMessageProps,
    getClearButtonProps,
  } = useInput({
    ...props,
    ref,
    // this is just for the example, the props bellow should be passed by the parent component
    type: 'search',
    placeholder: 'Type to search...',
    startContent: (
      <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
    ),
    value: search,
    onChange: handleChange,
    // custom styles
    classNames: {
      ...styles,
    },
  })

  const labelContent = <label {...getLabelProps()}>{label}</label>

  const end = React.useMemo(() => {
    if (isClearable) {
      return <span {...getClearButtonProps()}>{endContent || <CloseFilledIcon />}</span>
    }

    return endContent
  }, [isClearable, getClearButtonProps])

  const innerWrapper = React.useMemo(() => {
    if (startContent || end) {
      return (
        <div {...getInnerWrapperProps()}>
          {startContent}
          <input {...getInputProps()} />
          {end}
        </div>
      )
    }

    return <input {...getInputProps()} />
  }, [startContent, end, getInputProps, getInnerWrapperProps])

  return (
    <Component {...getBaseProps()}>
      {shouldLabelBeOutside ? labelContent : null}
      <div
        {...getInputWrapperProps()}
        role="button"
        onClick={() => {
          domRef.current?.focus()
        }}
      >
        {shouldLabelBeInside ? labelContent : null}
        {innerWrapper}
      </div>
      {description && <div {...getDescriptionProps()}>{description}</div>}
      {errorMessage && <div {...getErrorMessageProps()}>{errorMessage}</div>}
    </Component>
  )
})

MyInput.displayName = 'MyInput'

export default MyInput
