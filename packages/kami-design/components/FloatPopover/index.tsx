import { clsx } from 'clsx'
import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import type { FC } from 'react'

import type { UseFloatingProps } from '@floating-ui/react-dom'
import { flip, offset, shift, useFloating } from '@floating-ui/react-dom'
import useClickAway from '@mx-space/kami-design/hooks/use-click-away'

import { NoSSRWrapper } from '~/utils/no-ssr'

import { RootPortal } from '../Portal'
import styles from './index.module.css'

export const FloatPopover: FC<
  {
    triggerComponent: FC
    headless?: boolean
    wrapperClassNames?: string
    trigger?: 'click' | 'hover' | 'both'
    padding?: number
    offset?: number
    popoverWrapperClassNames?: string

    /**
     * 不消失
     */
    debug?: boolean
  } & UseFloatingProps
> = NoSSRWrapper(
  memo((props) => {
    const {
      headless = false,
      wrapperClassNames,
      triggerComponent: TriggerComponent,
      trigger = 'hover',
      padding,
      offset: offsetValue,
      popoverWrapperClassNames,
      debug,
      ...floatingProps
    } = props

    const [mounted, setMounted] = useState(false)

    const [currentStatus, setCurrentStatus] = useState(false)
    const [open, setOpen] = useState(false)
    const { x, y, reference, floating, strategy, update, isPositioned } =
      useFloating({
        middleware: floatingProps.middleware ?? [
          flip({ padding: padding ?? 20 }),
          offset(offsetValue ?? 10),
          shift(),
        ],
        strategy: floatingProps.strategy,
        placement: floatingProps.placement ?? 'bottom-start',
        whileElementsMounted: floatingProps.whileElementsMounted,
      })
    const updateOnce = useRef(false)
    const doPopoverShow = useCallback(() => {
      setCurrentStatus(true)
      setMounted(true)

      if (!updateOnce.current) {
        requestAnimationFrame(() => {
          update()
          updateOnce.current = true
        })
      }
    }, [])

    const [containerAnchorRef, setContainerAnchorRef] =
      useState<HTMLDivElement | null>()
    const containerRef = useRef<HTMLDivElement>(null)

    const handleTransition = useCallback(
      (status: 'in' | 'out') => {
        const nextElementSibling =
          containerAnchorRef?.nextElementSibling as HTMLDivElement

        if (!nextElementSibling) {
          return
        }

        if (status === 'in') {
          nextElementSibling.ontransitionend = null
          nextElementSibling?.classList.add(styles.show)
        } else {
          nextElementSibling?.classList.remove(styles.show)
          nextElementSibling!.ontransitionend = () => {
            setOpen(false)
            setMounted(false)
          }
        }
      },
      [containerAnchorRef?.nextElementSibling],
    )

    useEffect(() => {
      if (!containerAnchorRef) {
        return
      }

      if (currentStatus) {
        setOpen(true)
        requestAnimationFrame(() => {
          handleTransition('in')
        })
      } else {
        requestAnimationFrame(() => {
          handleTransition('out')
        })
      }
    }, [currentStatus, containerAnchorRef, handleTransition])

    useClickAway(containerRef, () => {
      if (trigger == 'click' || trigger == 'both') {
        doPopoverDisappear()
        clickTriggerFlag.current = false
      }
    })

    const doPopoverDisappear = useCallback(() => {
      if (debug) {
        return
      }
      setCurrentStatus(false)
    }, [debug])

    const clickTriggerFlag = useRef(false)
    const handleMouseOut = useCallback(() => {
      if (clickTriggerFlag.current === true) {
        return
      }
      doPopoverDisappear()
    }, [])
    const handleClickTrigger = useCallback(() => {
      clickTriggerFlag.current = true
      doPopoverShow()
    }, [])

    const listener = useMemo(() => {
      const baseListener = {
        onFocus: doPopoverShow,
        onBlur: doPopoverDisappear,
      }
      switch (trigger) {
        case 'click':
          return {
            ...baseListener,
            onClick: doPopoverShow,
          }
        case 'hover':
          return {
            ...baseListener,
            onMouseOver: doPopoverShow,
            onMouseOut: doPopoverDisappear,
          }
        case 'both':
          return {
            ...baseListener,
            onClick: handleClickTrigger,
            onMouseOver: doPopoverShow,
            onMouseOut: handleMouseOut,
          }
      }
    }, [
      doPopoverDisappear,
      doPopoverShow,
      handleClickTrigger,
      handleMouseOut,
      trigger,
    ])

    const TriggerWrapper = (
      <div
        role={trigger === 'both' || trigger === 'click' ? 'button' : 'note'}
        tabIndex={0}
        className={clsx('inline-block', wrapperClassNames)}
        ref={reference}
        {...listener}
      >
        <TriggerComponent />
      </div>
    )

    if (!props.children) {
      return TriggerWrapper
    }

    return (
      <>
        {TriggerWrapper}

        {mounted && (
          <RootPortal>
            <div
              className={clsx('float-popover', popoverWrapperClassNames)}
              {...(trigger === 'hover' || trigger === 'both' ? listener : {})}
              ref={containerRef}
            >
              <div ref={setContainerAnchorRef} />
              {open && (
                <div
                  className={
                    headless ? styles['headless'] : styles['popover-root']
                  }
                  ref={floating}
                  style={{
                    position: strategy,
                    top: y ?? '',
                    left: x ?? '',
                    visibility:
                      isPositioned && x !== null ? 'visible' : 'hidden',
                  }}
                  role="dialog"
                >
                  {props.children}
                </div>
              )}
            </div>
          </RootPortal>
        )}
      </>
    )
  }),
)
