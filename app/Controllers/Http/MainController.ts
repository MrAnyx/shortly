import { HttpContext } from '@adonisjs/core/build/standalone'
import Database from '@ioc:Adonis/Lucid/Database'
import CreateShortUrlValidator from 'App/Validators/CreateShortUrlValidator'
import { nanoid } from 'nanoid'

export default class MainController {
  public async list() {
    const urls = await Database.query().from('urls').select('*')
    return urls
  }

  public async create(ctx: HttpContext) {
    await ctx.request.validate(CreateShortUrlValidator)

    let { slug, url } = ctx.request.body()

    if (!slug) {
      slug = nanoid(10)
    }

    try {
      await Database.insertQuery().table('urls').insert({
        slug,
        url,
      })
    } catch (error) {
      return {
        message: `Slug ${slug} already exists 😞`,
      }
    }

    return {
      message: 'Ok !',
    }
  }

  public async get(ctx: HttpContext) {
    const url = await Database.query()
      .from('urls')
      .select('url')
      .where('slug', ctx.params.slug)
      .first()

    if (!url) {
      return {
        message: `Undefined redirection for slug ${ctx.params.slug}`,
      }
    } else {
      ctx.response.redirect(url.url)
    }
  }
}
