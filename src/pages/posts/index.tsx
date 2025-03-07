import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { Fragment, useEffect, useState } from 'react'
import { TransitionGroup } from 'react-transition-group'

import type { Pager, PaginateResult, PostModel } from '@mx-space/api-client'
import { EmptyIcon } from '@mx-space/kami-design/components/Icons/for-comment'
import { Loading } from '@mx-space/kami-design/components/Loading'
import { BottomUpTransitionView } from '@mx-space/kami-design/components/Transition/bottom-up'

import { PostBlock } from '~/components/in-page/PostBlock'
import { TagFAB } from '~/components/in-page/SpecialButton/float-post-tag'
import { ArticleLayout } from '~/components/layouts/ArticleLayout'
import { SearchFAB } from '~/components/widgets/Search'
import { apiClient } from '~/utils/client'
import { springScrollToTop } from '~/utils/spring'

import { SEO } from '../../components/biz/Seo'

const PostListPage: NextPage<PaginateResult<PostModel>> = () => {
  const [pagination, setPagination] = useState<Pager | null>(null)
  const [posts, setPosts] = useState<PostModel[]>([])

  const router = useRouter()

  const {
    query: { page: currentPage },
  } = router

  useEffect(() => {
    springScrollToTop()
  }, [currentPage])
  useEffect(() => {
    fetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.page, router.query.year])

  const fetch = async () => {
    const { page, year, size = 10 } = router.query as any,
      payload = await apiClient.post.getList(page, size, {
        year: +year || undefined,
      })
    setPagination(payload.pagination)
    setPosts(payload.data)
  }

  return (
    <ArticleLayout>
      <SEO title={'博文'} />

      <TransitionGroup>
        <article key={'note'}>
          {posts.length > 0 ? (
            <Fragment>
              {posts.map((post, i) => {
                return (
                  <BottomUpTransitionView
                    key={post.id}
                    timeout={{ enter: 66 * i }}
                  >
                    <PostBlock
                      post={post}
                      onPinChange={() => {
                        fetch()
                      }}
                    />
                  </BottomUpTransitionView>
                )
              })}
            </Fragment>
          ) : pagination ? (
            <div className="flex flex-col">
              <EmptyIcon />
              <p>站长没有写过一篇文章啦</p>
              <p>稍后来看看吧！</p>
            </div>
          ) : (
            <Loading loadingText="正在加载.." />
          )}
        </article>
      </TransitionGroup>

      {pagination && (
        <section className="mt-4 text-center">
          {pagination.hasPrevPage && (
            <button
              className="btn brown"
              onClick={() => {
                router.push(
                  `/posts?page=${pagination.currentPage - 1}`,
                  undefined,
                  { shallow: true },
                )
              }}
            >
              上一页
            </button>
          )}
          {pagination.hasNextPage && (
            <button
              className="btn brown"
              style={
                pagination.hasNextPage && pagination.hasPrevPage
                  ? { marginLeft: '6px' }
                  : undefined
              }
              onClick={() => {
                router.push(
                  `/posts?page=${pagination.currentPage + 1}`,
                  undefined,
                  { shallow: true },
                )
              }}
            >
              下一页
            </button>
          )}
        </section>
      )}
      <TagFAB />
      <SearchFAB />
    </ArticleLayout>
  )
}

export default PostListPage
