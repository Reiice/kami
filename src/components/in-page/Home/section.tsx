import Router from 'next/router'
import { useIndexViewContext } from 'pages'
import type { FC } from 'react'
import { useCallback, useMemo, useRef, useState } from 'react'
import { TransitionGroup } from 'react-transition-group'
import useSWR from 'swr'

import type { AggregateTop } from '@mx-space/api-client'
import {
  FaSolidKissWinkHeart,
  MdiDrawPen,
} from '@mx-space/kami-design/components/Icons/for-home'
import { IcTwotoneSignpost } from '@mx-space/kami-design/components/Icons/menu-icon'
import { BottomUpTransitionView } from '@mx-space/kami-design/components/Transition/bottom-up'

import { LikeButton } from '~/components/universal/LikeButton'
import { NoticePanel } from '~/components/universal/Notice'
import {
  usePresentSubscribeModal,
  useSubscribeStatus,
} from '~/components/widgets/Subscribe/hooks'
import { useRandomImage } from '~/hooks/use-kami'
import { apiClient } from '~/utils/client'
import { stopEventDefault } from '~/utils/dom'
import { NoSSRWrapper } from '~/utils/no-ssr'

import type { SectionNewsProps } from './SectionNews'
import SectionNews, { SectionCard } from './SectionNews'
import { FriendsSection } from './SectionNews/friend'
import { SectionWrap } from './SectionNews/section'
import styles from './section.module.css'

const SubscribeCard: FC<{
  bg: string
}> = ({ bg }) => {
  const { data } = useSubscribeStatus()
  const { present } = usePresentSubscribeModal('home')

  return (
    <SectionCard
      title="订阅"
      desc="关注订阅不迷路哦"
      src={bg}
      onClick={useCallback(() => {
        if (data?.enable) {
          present()
        } else {
          window.open('/feed')
        }
      }, [data?.enable])}
    />
  )
}

const _Sections: FC<AggregateTop> = ({ notes, posts }) => {
  const randomImages = useRandomImage('all')

  const currentImageIndex = useRef(0)

  const getRandomUnRepeatImage = () =>
    randomImages[currentImageIndex.current++ % randomImages.length]
  const sections = useRef({
    postSection: {
      title: '近期技术输出',
      icon: <IcTwotoneSignpost />,
      moreUrl: 'posts',
      content: posts.slice(0, 4).map((p) => {
        return {
          title: p.title,
          background: getRandomUnRepeatImage(),
          id: p.id,
          ...buildRoute('Post', p),
        }
      }),
    } as SectionNewsProps,
    noteSection: {
      title: '用文字记录生活',
      icon: <MdiDrawPen />,
      moreUrl: 'notes',
      content: notes.slice(0, 4).map((n) => {
        return {
          title: n.title,
          background: getRandomUnRepeatImage(),
          id: n.id,
          ...buildRoute('Note', n),
        }
      }),
    } as SectionNewsProps,
  })

  const { data: like, mutate } = useSWR('like', () =>
    apiClient.proxy('like_this').get<number>(),
  )

  const { doAnimation } = useIndexViewContext()

  const [showLikeThisNotice, setShowLikeThisNotice] = useState(false)

  const SectionCompList = [
    <SectionNews {...sections.current.postSection} key="1" />,
    <SectionNews {...sections.current.noteSection} key="2" />,

    <FriendsSection key="3" />,
    <SectionWrap
      title="了解更多"
      icon={<FaSolidKissWinkHeart />}
      showMoreIcon={false}
      key="4"
    >
      <SectionCard
        title="留言"
        desc="你的话对我很重要"
        src={useMemo(() => getRandomUnRepeatImage(), [])}
        href="/message"
        onClick={useCallback((e) => {
          stopEventDefault(e)
          Router.push('/[page]', '/message')
        }, [])}
      />
      <SectionCard
        title="关于"
        desc="这里有我的小秘密"
        src={useMemo(() => getRandomUnRepeatImage(), [])}
        href="/about"
        onClick={useCallback((e) => {
          stopEventDefault(e)
          Router.push('/[page]', '/about')
        }, [])}
      />
      <SectionCard
        title={`点赞 (${like ?? 0})`}
        desc={'如果你喜欢的话点个赞呗'}
        src={useMemo(() => getRandomUnRepeatImage(), [])}
        href={'/like_this'}
        onClick={useCallback((e) => {
          stopEventDefault(e)
          apiClient
            .proxy('like_this')
            .post({ params: { ts: Date.now() } })
            .then(() => {
              setShowLikeThisNotice(true)
              mutate()
            })
        }, [])}
      />
      <SubscribeCard bg={useMemo(() => getRandomUnRepeatImage(), [])} />

      <NoticePanel
        in={showLikeThisNotice}
        onExited={useCallback(() => {
          setShowLikeThisNotice(false)
        }, [])}
        text="感谢喜欢！"
        icon={
          <div className="flex items-center">
            <LikeButton checked width={'120px'} />
          </div>
        }
      />
    </SectionWrap>,
  ]

  return (
    <section className={styles['root']}>
      <TransitionGroup appear={doAnimation}>
        {SectionCompList.map((s, i) => {
          return (
            <BottomUpTransitionView timeout={{ enter: 1200 + 200 * i }} key={i}>
              {s}
            </BottomUpTransitionView>
          )
        })}
      </TransitionGroup>
    </section>
  )
}

export const HomeSections = NoSSRWrapper(_Sections)

function buildRoute<T extends { id: string } & { nid?: number }>(
  type: keyof typeof ContentType,
  obj: T,
): { as: string; href: string } {
  switch (type) {
    case 'Post': {
      const { slug, category } = obj as any
      return {
        as: `/posts/${category.slug}/${slug}`,
        href: `/posts/[category]/[slug]`,
      }
    }
    case 'Note': {
      const { nid } = obj
      return {
        as: `/notes/${nid}`,
        href: `/notes/[id]`,
      }
    }
    case 'Say': {
      return { as: `/says`, href: `/says` }
    }
    // case 'Project': {
    //   const { id } = obj
    //   return { as: `/projects/${id}`, href: `/projects/[id]` }
    // }
  }
}

enum ContentType {
  Note,
  Post,
  Say,
  // Project,
}
