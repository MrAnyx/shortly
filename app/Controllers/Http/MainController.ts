import { HttpContext } from '@adonisjs/core/build/standalone'
import Database from '@ioc:Adonis/Lucid/Database'
// import CreateShortUrlValidator from 'App/Validators/CreateShortUrlValidator'
// import { nanoid } from 'nanoid'

export default class MainController {
  public async list() {
    const urls = await Database.query().from('urls').select('*')
    return urls
  }

  public async create(ctx: HttpContext) {
    // await ctx.request.validate(CreateShortUrlValidator)

    // let { slug, urlParam } = ctx.params

    // if (!slug) {
    //   slug = nanoid(10)
    // }

    return {
      slug: ctx.params.slug,
    }
  }
}
