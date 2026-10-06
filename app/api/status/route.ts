import packageJson from '../../../package.json'
import developmentProgress from '../../../data/development-progress.json'

export const dynamic = 'force-static'

export function GET() {
  return Response.json({
    service: 'programinglive.com',
    status: 'ok',
    version: packageJson.version,
    roadmapUpdatedAt: developmentProgress.updatedAt,
  })
}
