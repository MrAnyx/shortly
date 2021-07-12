import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateShortUrlValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    slug: schema.string.optional(),
    urlParam: schema.string({ trim: true }),
  })

  public messages = {}
}
