'use client'

import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'

import ThemeButton from '@/components/theme-button'

import styles from './styles.module.scss'

export default function Component() {
  const segments = useSelectedLayoutSegments()

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <button
          className={[styles.button, segments[0] === 'simple' ? styles.active : undefined].join(' ')}
          disabled={segments[0] === 'simple'}
        >
          <Link href={'/simple'}>Simples</Link>
        </button>
        <ThemeButton />
        <button
          className={[styles.button, segments[0] === 'complex' ? styles.active : undefined].join(' ')}
          disabled={segments[0] === 'complex'}
        >
          <Link href={'/complex'}>Complexo</Link>
        </button>
      </nav>
      <nav className={styles.nav}>
        <button className={[styles.button, segments[1] ? undefined : styles.active].join(' ')} disabled={!segments[1]}>
          <Link href={`/${segments[0]}`}>Calculadora</Link>
        </button>
        <button
          className={[styles.button, segments[1] === 'reference' ? styles.active : undefined].join(' ')}
          disabled={segments[1] === 'reference'}
        >
          <Link href={`/${segments[0]}/reference`}>Referência</Link>
        </button>
      </nav>
    </header>
  )
}
