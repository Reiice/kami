import { useCallback } from 'react'
import useSWR from 'swr'

import { CodiconGithubInverted } from '@mx-space/kami-design/components/Icons/menu-icon'
import { Loading } from '@mx-space/kami-design/components/Loading'
import { BottomUpTransitionView } from '@mx-space/kami-design/components/Transition/bottom-up'

import { ProjectList } from '~/components/in-page/Project/list'
import { TrackerAction } from '~/constants/tracker'
import { useAnalyze } from '~/hooks/use-analyze'
import { useStore } from '~/store'
import { apiClient } from '~/utils/client'

import { SEO } from '../../components/biz/Seo'

const ProjectView = () => {
  const { data: projects, isLoading: loading } = useSWR(`project`, () =>
    apiClient.project.getAll().then((res) => {
      return res.data
    }),
  )

  const { userStore } = useStore()
  const { event } = useAnalyze()
  const githubUsername = userStore.master?.socialIds?.github
  const trackerClick = useCallback(() => {
    event({
      action: TrackerAction.Click,
      label: '项目页 GitHub 图标点击',
    })
  }, [])
  return (
    <main>
      <SEO title={'项目'} />

      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="font-medium text-3xl my-12 inline-flex items-center">
            项目{' '}
            {githubUsername && (
              <a
                href={`https://github.com/${githubUsername}`}
                className="!text-inherit inline-flex ml-2"
                target="_blank"
                aria-label="view on GitHub"
                onClick={trackerClick}
              >
                <CodiconGithubInverted />
              </a>
            )}
          </div>
          <BottomUpTransitionView>
            <ProjectList projects={projects || []} />
          </BottomUpTransitionView>
        </>
      )}
    </main>
  )
}

export default ProjectView
